import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as d,b as e,d as o,a as t,w as h,e as r,r as a}from"./app.0c870a62.js";var u="/immptl/assets/portal_gun1.315ac998.png",p="/immptl/assets/portal_gun_recipe.dd79cc51.png",g="/immptl/assets/portal_gun_recharge.b207bb23.png";const m={},_=e("h1",{id:"portal-gun",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#portal-gun","aria-hidden":"true"},"#"),o(" Portal Gun")],-1),f={href:"https://github.com/iPortalTeam/PortalGun",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("img",{src:u,alt:"img"})],-1),y={href:"https://github.com/MeowMC/PortalGun",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,[e("a",{href:"#download"},"Download below")],-1),k={href:"https://www.curseforge.com/minecraft/mc-mods/immersive-portal-gun",target:"_blank",rel:"noopener noreferrer"},v=r('<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h3><p>In creative mode, you can get the portal gun from the inventory.</p><p>In survival mode, the crafting recipe is:</p><p><img src="'+p+'" alt="img"></p><p>Use left click to put blue portal, use right click to put orange portal. <strong>The portal can link to any place in any dimension</strong>. The portal gun can shoot through portals.</p><p>Each player&#39;s portal does not interfere with other players&#39;.</p><h3 id="energy" tabindex="-1"><a class="header-anchor" href="#energy" aria-hidden="true">#</a> Energy</h3><p>In the latest version, the portal gun item initially has 100 units of energy. Using portal gun to create the portal costs 1 energy unit. When the portal gun runs out of energy, you can recharge it using a nether star via crafting:</p><p><img src="'+g+'" alt=""></p><p>You can obtain a portal gun without energy limitation in creative mode inventory or command <code>/give @p portalgun:portal_gun{maxEnergy:0}</code></p><h3 id="make-the-portal-gun-to-only-work-on-some-blocks" tabindex="-1"><a class="header-anchor" href="#make-the-portal-gun-to-only-work-on-some-blocks" aria-hidden="true">#</a> Make the portal gun to only work on some blocks</h3><p>By using commands, you can obtain a portal gun that only works on some blocks. For example, <code>/give @p portalgun:portal_gun{allowedBlocks:[&quot;#minecraft:ice&quot;,&quot;minecraft:stone&quot;]} 1</code> gives a portal gun that only works on stone block and ice blocks (including ice, packed ice, blue ice and frosted ice). The <code>minecraft:stone</code> is the block id of stone. The <code>#minecraft:ice</code> refers to the <code>minecraft:ice</code> block tag.</p><h3 id="custom-color" tabindex="-1"><a class="header-anchor" href="#custom-color" aria-hidden="true">#</a> Custom Color</h3><p>In the latest version, you can customize the portal color.</p><p>Obtain a portal gun with custom color: <code>/give @p portalgun:portal_gun{side1Color:&quot;#32a852&quot;,side2Color:&quot;purple&quot;}</code></p>',15),x=e("code",null,"#32a852",-1),C=e("code",null,"white",-1),G=e("code",null,"orange",-1),P=e("code",null,"magenta",-1),q=e("code",null,"light_blue",-1),T=e("code",null,"yellow",-1),I=e("code",null,"lime",-1),E=e("code",null,"pink",-1),M=e("code",null,"gray",-1),D=e("code",null,"light_gray",-1),B=e("code",null,"cyan",-1),O=e("code",null,"purple",-1),N=e("code",null,"blue",-1),V=e("code",null,"brown",-1),F=e("code",null,"green",-1),H=e("code",null,"red",-1),S=e("code",null,"black",-1),L={href:"https://color.adobe.com/",target:"_blank",rel:"noopener noreferrer"},R=r('<p>The custom color only changes appearance of newly-created portals. One player still can have at most one pair of portals.</p><h3 id="gravity-transform" tabindex="-1"><a class="header-anchor" href="#gravity-transform" aria-hidden="true">#</a> Gravity Transform</h3><p>Obtain a portal gun that generates gravity-transforming portals: <code>/give @p portalgun:portal_gun{transformGravity:true}</code>.</p><h3 id="item-tags-summary" tabindex="-1"><a class="header-anchor" href="#item-tags-summary" aria-hidden="true">#</a> Item Tags Summary</h3><ul><li><code>allowedBlocks</code> a list of block ids or block tag ids, that the portal gun can only be used on</li><li><code>maxEnergy</code> maximum energy value. 0 for infinite energy.</li><li><code>remainingEnergy</code> remaining energy value.</li><li><code>side1Color</code> <code>side2Color</code> the color of two sides. Side 1 corresponds to the originally &quot;blue&quot; side.</li><li><code>transformGravity</code> controls whether the portal transforms gravity</li></ul><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h2><p>Download from GitHub releases:</p>',7);function U(Y,z){const n=a("ExternalLinkIcon"),l=a("ModDownload"),i=a("ClientOnly");return c(),d("div",null,[_,e("p",null,[o("A Fabric mod that brings Portal Gun into Minecraft. "),e("a",f,[o("GitHub"),t(n)])]),b,e("blockquote",null,[e("p",null,[o("It's based on the discontinued "),e("a",y,[o("MeowMC's portal gun mod"),t(n)])])]),w,e("p",null,[e("a",k,[o("Download from CurseForge"),t(n)])]),v,e("p",null,[o("It supports color in hex number "),x,o(", and vanilla color ("),C,o(", "),G,o(", "),P,o(", "),q,o(", "),T,o(", "),I,o(", "),E,o(", "),M,o(", "),D,o(", "),B,o(", "),O,o(", "),N,o(", "),V,o(", "),F,o(", "),H,o(", "),S,o("). You can use "),e("a",L,[o("Color Picker"),t(n)]),o(" to get the hex number of color.")]),R,t(i,null,{default:h(()=>[t(l,{github_repo:"iPortalTeam/PortalGun",locale_text:{download:"Download",preRelease:"Pre-Release",publishTime:"Publish time"}})]),_:1})])}var j=s(m,[["render",U],["__file","Portal-Gun.html.vue"]]);export{j as default};