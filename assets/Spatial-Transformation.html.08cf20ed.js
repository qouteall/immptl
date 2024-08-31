import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as h,b as t,d as e,a,w as d,e as o,r as n}from"./app.0c870a62.js";const c={},m=o('<h1 id="spatial-transformation" tabindex="-1"><a class="header-anchor" href="#spatial-transformation" aria-hidden="true">#</a> Spatial Transformation</h1><p>A portal is a window linking to a transformed space. The spacial transformation can be translation, rotation, scale and mirroring.</p><p>This mod&#39;s teleportation is eye-based. If an entity goes through a portal, it will calculate the entity&#39;s eye position transformed by the portal and then place the entity by the transformed eye position.</p><h2 id="rotation-transformation" tabindex="-1"><a class="header-anchor" href="#rotation-transformation" aria-hidden="true">#</a> Rotation Transformation</h2><p><img src="https://s2.loli.net/2022/04/06/oLOAb38Qe1CNXiS.png" alt="rotation.png"></p><p><a href="./Commands-Reference#rotation">Commands related to rotation</a></p><h3 id="teleportation" tabindex="-1"><a class="header-anchor" href="#teleportation" aria-hidden="true">#</a> Teleportation</h3><p>After crossing a portal with rotation transformation, the player&#39;s camera may be tilted. Then the camera rotation will smoothly turn into a valid state.</p><p>This mod has special compatibility with Gravity Changer mod. With Gravity Changer mod, if you enable <code>teleportChangesGravity</code> to a portal, then your gravity direction will be automatically changed when crossing the portal. (<code>teleportChangesGravity</code> is disabled by default.)</p><h3 id="about-gravity-changer-mod" tabindex="-1"><a class="header-anchor" href="#about-gravity-changer-mod" aria-hidden="true">#</a> About Gravity Changer Mod</h3>',10),p={href:"https://www.curseforge.com/minecraft/mc-mods/gravitychanger",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/qouteall/GravityChanger/releases/tag/v0.3.1",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.curseforge.com/minecraft/mc-mods/gravityapi/files/4089787",target:"_blank",rel:"noopener noreferrer"},u={href:"https://modrinth.com/mod/gravity-api-fork",target:"_blank",rel:"noopener noreferrer"},y=o('<h2 id="scale-transformation" tabindex="-1"><a class="header-anchor" href="#scale-transformation" aria-hidden="true">#</a> Scale Transformation</h2><p><img src="https://i.loli.net/2021/11/20/6Y9dimqOSn8NUxA.png" alt="image.png"></p><p><a href="./Commands-Reference#scale">Commands related to scaling</a></p><h3 id="teleportation-1" tabindex="-1"><a class="header-anchor" href="#teleportation-1" aria-hidden="true">#</a> Teleportation</h3><p>Start from MC 1.21.1, this mod will use a modifier <code>iportal:scaling</code> to the entity attribute <code>minecraft:generic.scale</code> to do entity scaling. You can remove the scaling caused by portal using command <code>/attribute @s minecraft:generic.scale modifier remove iportal:scaling</code>. Going through portal won&#39;t change the base scale.</p><p>Whether to scale the entity going through portal is controlled by portal data <code>teleportationChangesScale</code>. (it is enabled by default)</p>',6),b={href:"https://www.curseforge.com/minecraft/mc-mods/pehkui",target:"_blank",rel:"noopener noreferrer"},_=o('<h2 id="mirror-transformation" tabindex="-1"><a class="header-anchor" href="#mirror-transformation" aria-hidden="true">#</a> Mirror Transformation</h2><p><a href="./Portals#mirrors">Mirrors</a>.</p><h3 id="teleportation-2" tabindex="-1"><a class="header-anchor" href="#teleportation-2" aria-hidden="true">#</a> Teleportation</h3><p>Mirrors do not allow teleportation. Because when the player goes into a mirror, the player itself should get mirrored. Currently there is no mod that provides the functionality of mirroring the player (imagine that the right hand appear on the left and turning right actually turns left).</p>',4),w=t("code",null,"/portal turn_into_fake_enterable_mirror",-1);function v(k,C){const r=n("ExternalLinkIcon"),i=n("RouterLink");return s(),h("div",null,[m,t("p",null,[t("a",p,[e("The original Gravity Changer mod by Gaider10 (Andrew)"),a(r)]),e(". Gaider10 (Andrew) stopped maintaining it.")]),t("p",null,[e("In 1.18.2 you can use "),t("a",f,[e("my fork of Gravity Changer"),a(r)]),e(" .")]),t("p",null,[e("In 1.19.2, iPortal is compatible with "),t("a",g,[e("Gravity API"),a(r)]),e(" .")]),t("p",null,[e("In 1.19.4 and 1.20.1, use "),t("a",u,[e("my fork of Gravity API"),a(r)]),e(" . (Note: in 1.20.1 ImmPtl is no longer compatible with Gravity API. A Fabric mod cannot depend on a Quilt mod.)")]),y,t("p",null,[e("Before MC 1.21.1, this mod has special compatibility with "),t("a",b,[e("Pehkui mod"),a(r)]),e(". With Pehkui mod, if a player or an entity goes through a portal with scale transformation, it will be scaled.")]),_,t("p",null,[e("However, you can create a fake-enterable mirror, by using command "),w,e(" on a normal portal. "),a(i,{to:"/wiki/Commands-Reference.html#portal-turn-info-fake-enterable-mirror"},{default:d(()=>[e("Details about that command")]),_:1}),e(".")])])}var G=l(c,[["render",v],["__file","Spatial-Transformation.html.vue"]]);export{G as default};
