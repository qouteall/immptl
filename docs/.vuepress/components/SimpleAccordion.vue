<template>

  <div class="accordion-title" @click="isOpen=!isOpen">
    <slot name="title"></slot>
    <svg :class="{icon_opened:isOpen, icon_closed:!isOpen, icon:true}" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
    </svg>
  </div>

  <CollapseTransition dimension="height">
    <div v-show="isOpen" class="accordion-content">
      <slot name="content"></slot>
    </div>

  </CollapseTransition>

</template>

<script setup lang="ts">

import {ref} from "vue";
import CollapseTransition from '../components/CollapseTransition.vue'

const props = defineProps<{}>()

const isOpen = ref(false)

</script>

<style scoped>

.accordion-title {
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 200ms;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.accordion-title:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.accordion-content {
  padding: 0px;
}

.icon {
  transition: transform 200ms;
  width: 1em;
  height: 1em;
  margin-left: 10px;
}

.icon_closed {
  transform: rotate(-0.25turn);
}

.icon_opened {
  transform: rotate(0turn);
}

</style>