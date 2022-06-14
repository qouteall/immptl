<template>
  <div class="outer-div">
    <div v-for="versionInfoGroup in versionInfoGroupsSorted" :key="versionInfoGroup.mcVersion" class="outer-card">
      <SimpleAccordion>
        <template v-slot:title>
          <div style="font-size: 1.3rem">MC {{ versionInfoGroup.mcVersion }}</div>
        </template>
        <template v-slot:content>
          <div v-for="versionInfo in versionInfoGroup.content" :key="versionInfo.modVersion" class="inner-card">
            <div style="font-size: 1.1rem">
              {{
                versionInfo.isPreRelease ? props.locale_text.preRelease + '  ' : ''
              }}{{ versionInfo.modVersion }}
            </div>
            <p>{{ versionInfo.changeLog }}</p>
            <a :href="versionInfo.downloadUrl" style="font-size: 1.2rem">{{ props.locale_text.download }}</a>
            <p style="font-size: 0.6rem">{{ props.locale_text.publishTime }}: {{ versionInfo.publishTime }}</p>
          </div>
        </template>
      </SimpleAccordion>
    </div>
  </div>

</template>

<script setup lang="ts">

import {computed, onMounted, reactive, ref} from "vue";
import SimpleAccordion from "../components/SimpleAccordion.vue";

interface ModDownloadLocaleText {
  download: string,
  preRelease: string,
  publishTime: string
}

const props = defineProps<{
  github_repo: string,
  locale_text: ModDownloadLocaleText
}>()

interface GAsset {
  browser_download_url: string;
  name: string;//filename
  download_count: number;
}

interface GReleaseInfo {
  assets: GAsset[];
  tag_name: string;
  body: string;
  prerelease: boolean;
  published_at: string;
}

// group mod versions by mc versions
interface GroupedVersionInfo {
  mcVersion: string;
  content: ModVersionInfo[];
}

interface ModVersionInfo {
  mcVersion: string;
  modVersion: string;
  downloadUrl: string;
  changeLog: string;
  isPreRelease: boolean;
  publishTime: string;
  downloadCount: number;
}

function getModVersionFromModJarName(modJarName: string): string {
  var numberIndex = -1;

  for (let i = 0; i < modJarName.length; i++) {
    let c = modJarName.charAt(i);
    if (c >= '0' && c <= '9') {
      numberIndex = i;
      break;
    }
  }

  if (numberIndex === -1) {
    return "unknown";
  }

  var endIndex = -1;
  for (let i = numberIndex; i < modJarName.length; i++) {
    if (modJarName.charAt(i) === '-') {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    return "unknown";
  }

  return modJarName.substring(numberIndex, endIndex);

}

function getStringBetween(str: string, before: string, after: string) {
  let i = str.indexOf(before);

  if (i === -1) {
    return ''
  }

  let j = str.indexOf(after, i + before.length);

  if (j === -1) {
    return '';
  }

  return str.substring(i + before.length, j);
}

function getMcVersionFromModJarName(modJarName: string) {
  return getStringBetween(modJarName, '-mc', '-');
}

function compareMCVersion(mcVersion1: string, mcVersion2: string): number {
  var s1 = mcVersion1.split(".");
  var s2 = mcVersion2.split(".");

  var i: number = 0;

  while (true) {
    var s1Has = i < s1.length;
    var s2Has = i < s2.length;

    if (s1Has && !s2Has) {
      return 1;
    }

    if (!s1Has && s2Has) {
      return -1;
    }

    if (!s1Has && !s2Has) {
      return 0;
    }

    var num1 = parseInt(s1[i])
    var num2 = parseInt(s2[i])

    if (num1 > num2) {
      return 1;
    }
    if (num1 < num2) {
      return -1;
    }

    i++;
  }
}

function releaseInfoToModVersionInfo(releaseInfo: GReleaseInfo): ModVersionInfo | null {
  var modJarAssets = releaseInfo.assets.filter(asset => asset.name.indexOf('fabric') >= 0);
  if (modJarAssets.length === 0) {
    return null;
  }
  var asset = modJarAssets[0];

  const publishDate = releaseInfo.published_at.substr(
      0, releaseInfo.published_at.indexOf('T')
  );

  return {
    mcVersion: getMcVersionFromModJarName(asset.name),
    modVersion: getModVersionFromModJarName(asset.name),
    downloadUrl: asset.browser_download_url,
    changeLog: releaseInfo.body,
    isPreRelease: releaseInfo.prerelease,
    publishTime: publishDate,
    downloadCount: asset.download_count
  };
}

let isLoading = ref(true);
let releaseInfos = reactive([] as GReleaseInfo[]);
let versionInfoGroupMap = reactive(new Map() as Map<string, GroupedVersionInfo>)
let versionInfoGroupsSorted = computed(() => {
  var result: GroupedVersionInfo[] = Array.from(versionInfoGroupMap.values());

  result.sort((a, b) => -compareMCVersion(a.mcVersion, b.mcVersion));

  return result;
})

async function doDownloadTotalReleaseInfo(githubRepo: string) {
  var pageIndex = 1
  while (true) {
    let url: string = `https://api.github.com/repos/${githubRepo}/releases?page=` + pageIndex;

    let promise: Promise<Response> = fetch(url);

    const res: Response = await promise;

    const resJson = await res.json();

    const infos = resJson as unknown as GReleaseInfo[]

    // console.log(pageIndex)
    // console.log(infos)

    if (infos.length === 0) {
      isLoading.value = false
      break
    }

    for (let releaseInfo of infos) {
      var toDisplay = releaseInfoToModVersionInfo(releaseInfo);

      // console.log(toDisplay)

      if (toDisplay !== null) {
        if (!versionInfoGroupMap.has(toDisplay.mcVersion)) {
          versionInfoGroupMap.set(toDisplay.mcVersion, {mcVersion: toDisplay.mcVersion, content: []})
        }

        versionInfoGroupMap.get(toDisplay.mcVersion)!.content.push(toDisplay)
      }
    }

    releaseInfos.push(...infos);

    pageIndex++

    // wait for 1 seconds
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}


onMounted(() => {
  doDownloadTotalReleaseInfo(props.github_repo)
})
</script>

<style scoped>

.outer-div {
  display: flex;
  flex-direction: column;
}

.outer-card {
  display: flex;
  flex-direction: column;
}

.inner-card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  margin: 10px;
  padding: 10px;
}

/* On mouse-over, add a deeper shadow */
.inner-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

</style>