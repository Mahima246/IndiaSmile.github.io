(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{221:function(t,e,r){var content=r(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63c71cb6",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";r(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},226:function(t,e,r){"use strict";var d=r(221);r.n(d).a},227:function(t,e,r){(e=r(15)(!1)).push([t.i,".card[data-v-0da6db60]{border-radius:.4em;position:relative;box-shadow:none;overflow:hidden;padding-bottom:56.25%}.card__gradient[data-v-0da6db60]{position:absolute;width:100%;height:100%;left:0;bottom:0;z-index:2;border-radius:.4em}.card--large[data-v-0da6db60]{padding-bottom:100%}.card--large .card__gradient[data-v-0da6db60]{height:125%}.card--list--1[data-v-0da6db60]{padding-bottom:56%}.card--list--1 .card__gradient[data-v-0da6db60]{height:100%}.card--list--2[data-v-0da6db60]{padding-bottom:70%}.card--list--2 .card__gradient[data-v-0da6db60]{height:90%}.card--list--3[data-v-0da6db60]{padding-bottom:96%}.card--list--3 .card__gradient[data-v-0da6db60]{height:170%}.card--list--4[data-v-0da6db60]{padding-bottom:140%}.card--list--4 .card__gradient[data-v-0da6db60]{height:180%}.card--list--5[data-v-0da6db60]{padding-bottom:140%}.card--list--5 .card__gradient[data-v-0da6db60]{height:210%}.card__image[data-v-0da6db60]{display:block;width:100%}.card__text[data-v-0da6db60]{position:absolute;left:1em;right:1em;bottom:.75em;z-index:3}.card__text__title[data-v-0da6db60]{font-weight:700;font-size:1em;color:#fff}.card__text__title.text--dark[data-v-0da6db60]{color:#000}.card__text__subtitle[data-v-0da6db60]{font-size:.875em;color:hsla(0,0%,100%,.75)}.card__text__subtitle.text--dark[data-v-0da6db60]{color:rgba(25,23,91,.75)}.card__action[data-v-0da6db60]{margin-top:.75rem}.card__action__button[data-v-0da6db60]{border:0;color:#fff;background:hsla(0,0%,100%,.2)}.card__action__button.text--dark[data-v-0da6db60]{color:#000;background:rgba(0,0,0,.1)}.card__list__item[data-v-0da6db60]{display:flex;justify-content:flex-start;align-items:center;border-bottom:1px solid rgba(0,0,0,.12);padding:8px 0;min-height:3.375rem}.card__list__item[data-v-0da6db60]:last-child{border-bottom:0}.card__list__item__icon[data-v-0da6db60]{width:2.25rem;height:2.25rem;border-radius:.375rem;margin-right:.75rem}.card__list__item__body[data-v-0da6db60]{width:100%;display:inline-flex;justify-content:space-between}.card__list__item__body__text__name[data-v-0da6db60]{font-weight:500;color:#19175b;font-size:.875em}.card__list__item__body__text__name.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.9)}.card__list__item__body__text__subtext[data-v-0da6db60]{font-size:.75em;color:rgba(25,23,91,.6)}.card__list__item__body__text__subtext.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.85)}.card__list__item__body__button[data-v-0da6db60]{border:0;color:hsla(0,0%,100%,.85);background:hsla(0,0%,100%,.2)}.link[data-v-0da6db60]{display:block;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0}",""]),t.exports=e},228:function(t,e,r){"use strict";var d=r(222),n={props:{image:{type:Object,required:!0},color:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},to:{type:String,required:!1,default:"#"},isDarkText:{type:Boolean,required:!1,default:!1},button:{type:String,required:!1,default:""},list:{type:Array,required:!1,default:function(){return[]}}},computed:{parentClassNames:function(){return this.list.length?["card--list","card--list--"+(this.list.length<=5?this.list.length:5)]:this.button?"card--large":""},textClassName:function(){return this.isDarkText?"text--dark":"text--light"},parentElement:function(){return this.button||this.list.length?"div":"nuxt-link"}},methods:{childElement:function(t){return Object(d.a)(t)?"a":"nuxt-link"},target:function(t){return Object(d.a)(t)?"_blank":"_self"}}},o=(r(226),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",class:t.parentClassNames},[r(t.parentElement,{tag:"component",staticClass:"link",attrs:{to:t.to}},[r("img",{staticClass:"card__image",attrs:{srcSet:t.image.srcSet,src:t.image.src}}),r("div",{staticClass:"card__gradient",style:{backgroundImage:"linear-gradient(180deg, rgba(196, 196, 196, 0) 30.73%, "+t.color+" 70.31%)"}}),r("div",{staticClass:"card__text"},[r("div",{staticClass:"card__text__title",class:t.textClassName},[t._v(t._s(t.title))]),r("div",{staticClass:"card__text__subtitle",class:t.textClassName},[t._v(t._s(t.subtitle))]),t.list.length?r("div",{staticClass:"card__list"},t._l(t.list,(function(e,d){return r(t.childElement(e.link),{key:d,tag:"component",staticClass:"card__list__item",attrs:{to:e.link,href:e.link,target:t.target(e.link),rel:"nofollow"}},[e.image?r("img",{staticClass:"card__list__item__icon",attrs:{src:e.image}}):t._e(),r("div",{staticClass:"card__list__item__body"},[r("div",{staticClass:"card__list__item__body__text"},[r("div",{staticClass:"card__list__item__body__text__name",class:t.textClassName},[t._v(t._s(e.name))]),e.text?r("div",{staticClass:"card__list__item__body__text__subtext",class:t.textClassName},[t._v(t._s(e.text))]):t._e()]),r("b-button",{staticClass:"card__list__item__body__button",class:t.textClassName,attrs:{"icon-right":"chevron-right",size:"is-small"}},[t._v("Join Now")])],1)])})),1):t._e(),t.button?r("div",{staticClass:"card__action"},[r("a",{attrs:{href:t.to}},[r("b-button",{staticClass:"card__action__button",class:t.textClassName,attrs:{"icon-right":"chevron-right"}},[t._v(t._s(t.button))])],1)]):t._e()])])],1)}),[],!1,null,"0da6db60",null);e.a=component.exports},239:function(t,e,r){var content=r(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("99a8828c",content,!0,{sourceMap:!1})},240:function(t,e,r){var content=r(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("25cf3822",content,!0,{sourceMap:!1})},247:function(t,e,r){t.exports={srcSet:r.p+"img/cf24163-400.jpg 400w,"+r.p+"img/d189de4-800.jpg 800w,"+r.p+"img/d690b82-1280.jpg 1280w",images:[{path:r.p+"img/cf24163-400.jpg",width:400,height:225},{path:r.p+"img/d189de4-800.jpg",width:800,height:450},{path:r.p+"img/d690b82-1280.jpg",width:1280,height:720}],src:r.p+"img/cf24163-400.jpg",toString:function(){return r.p+"img/cf24163-400.jpg"},placeholder:void 0,width:400,height:225}},377:function(t,e,r){"use strict";var d=r(239);r.n(d).a},378:function(t,e,r){(e=r(15)(!1)).push([t.i,".hero .hero-body[data-v-60f02823]{padding:1.5rem}.hero .title[data-v-60f02823]{font-size:1.6em}.hero .subtitle[data-v-60f02823]{font-size:1em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:left;margin:-.5em auto 0}.hero .subtitle li[data-v-60f02823]{padding:.5em 0;list-style:normal}",""]),t.exports=e},386:function(t,e,r){"use strict";var d=r(240);r.n(d).a},387:function(t,e,r){(e=r(15)(!1)).push([t.i,".lockdown-countdown[data-v-20341f20]{font-size:.75em;margin:.5rem 0}",""]),t.exports=e},389:function(t,e,r){t.exports={srcSet:r.p+"img/865f43f-400.jpg 400w,"+r.p+"img/0aa41df-800.jpg 800w,"+r.p+"img/49847c8-1280.jpg 1280w",images:[{path:r.p+"img/865f43f-400.jpg",width:400,height:225},{path:r.p+"img/0aa41df-800.jpg",width:800,height:450},{path:r.p+"img/49847c8-1280.jpg",width:1280,height:720}],src:r.p+"img/865f43f-400.jpg",toString:function(){return r.p+"img/865f43f-400.jpg"},placeholder:void 0,width:400,height:225}},390:function(t,e,r){t.exports={srcSet:r.p+"img/279038e-400.jpg 400w,"+r.p+"img/4fe9144-800.jpg 800w,"+r.p+"img/f6ad075-1280.jpg 1280w",images:[{path:r.p+"img/279038e-400.jpg",width:400,height:225},{path:r.p+"img/4fe9144-800.jpg",width:800,height:450},{path:r.p+"img/f6ad075-1280.jpg",width:1280,height:720}],src:r.p+"img/279038e-400.jpg",toString:function(){return r.p+"img/279038e-400.jpg"},placeholder:void 0,width:400,height:225}},391:function(t,e,r){t.exports={srcSet:r.p+"img/f6f5f22-400.jpg 400w,"+r.p+"img/2607dd2-800.jpg 800w,"+r.p+"img/8a3040d-1280.jpg 1280w",images:[{path:r.p+"img/f6f5f22-400.jpg",width:400,height:225},{path:r.p+"img/2607dd2-800.jpg",width:800,height:450},{path:r.p+"img/8a3040d-1280.jpg",width:1280,height:720}],src:r.p+"img/f6f5f22-400.jpg",toString:function(){return r.p+"img/f6f5f22-400.jpg"},placeholder:void 0,width:400,height:225}},396:function(t,e,r){t.exports={srcSet:r.p+"img/f322c08-400.jpg 400w,"+r.p+"img/bb9494d-800.jpg 800w,"+r.p+"img/1a34673-1280.jpg 1280w",images:[{path:r.p+"img/f322c08-400.jpg",width:400,height:225},{path:r.p+"img/bb9494d-800.jpg",width:800,height:450},{path:r.p+"img/1a34673-1280.jpg",width:1280,height:720}],src:r.p+"img/f322c08-400.jpg",toString:function(){return r.p+"img/f322c08-400.jpg"},placeholder:void 0,width:400,height:225}},399:function(t,e,r){t.exports={srcSet:r.p+"img/b740426-400.jpg 400w,"+r.p+"img/6bf2419-800.jpg 800w,"+r.p+"img/291047b-1280.jpg 1280w",images:[{path:r.p+"img/b740426-400.jpg",width:400,height:225},{path:r.p+"img/6bf2419-800.jpg",width:800,height:450},{path:r.p+"img/291047b-1280.jpg",width:1280,height:720}],src:r.p+"img/b740426-400.jpg",toString:function(){return r.p+"img/b740426-400.jpg"},placeholder:void 0,width:400,height:225}},403:function(t,e,r){t.exports={srcSet:r.p+"img/c87b972-400.jpg 400w,"+r.p+"img/603dfd9-800.jpg 800w,"+r.p+"img/7a79fc9-1280.jpg 1280w",images:[{path:r.p+"img/c87b972-400.jpg",width:400,height:225},{path:r.p+"img/603dfd9-800.jpg",width:800,height:450},{path:r.p+"img/7a79fc9-1280.jpg",width:1280,height:720}],src:r.p+"img/c87b972-400.jpg",toString:function(){return r.p+"img/c87b972-400.jpg"},placeholder:void 0,width:400,height:225}},423:function(t,e,r){var content=r(582);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3414697a",content,!0,{sourceMap:!1})},424:function(t,e,r){"use strict";var d={name:"TextHero",props:{title:{type:String,required:!0}}},n=(r(377),r(6)),component=Object(n.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary"},[e("Header"),e("div",{staticClass:"hero-body has-text-centered"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title"},[this._v(this._s(this.title))]),e("div",{staticClass:"subtitle"},[this._t("default")],2)])])],1)}),[],!1,null,"60f02823",null);e.a=component.exports},425:function(t,e,r){"use strict";var d=r(214),n=r.n(d),o={name:"LockdownCountdown",data:function(){return{startDate:n()("2020-03-24"),completionDate:n()("2020-05-17")}},computed:{completed:function(){return n()().diff(this.startDate,"d")},remaining:function(){return this.completionDate.diff(n()(),"d")}}},l=(r(386),r(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("b-message",{staticClass:"lockdown-countdown",attrs:{type:"is-info"}},[t._v("You’ve survived "),r("strong",[t._v(t._s(t.completed)+" days so far")]),t._v(" 😷 only "),r("strong",[t._v(t._s(t.remaining)+" more days")]),t._v(" before the lockdown is lifted. Congrats! 🥳")])],1)}),[],!1,null,"20341f20",null);e.a=component.exports},428:function(t,e,r){var map={"./af":250,"./af.js":250,"./ar":251,"./ar-dz":252,"./ar-dz.js":252,"./ar-kw":253,"./ar-kw.js":253,"./ar-ly":254,"./ar-ly.js":254,"./ar-ma":255,"./ar-ma.js":255,"./ar-sa":256,"./ar-sa.js":256,"./ar-tn":257,"./ar-tn.js":257,"./ar.js":251,"./az":258,"./az.js":258,"./be":259,"./be.js":259,"./bg":260,"./bg.js":260,"./bm":261,"./bm.js":261,"./bn":262,"./bn.js":262,"./bo":263,"./bo.js":263,"./br":264,"./br.js":264,"./bs":265,"./bs.js":265,"./ca":266,"./ca.js":266,"./cs":267,"./cs.js":267,"./cv":268,"./cv.js":268,"./cy":269,"./cy.js":269,"./da":270,"./da.js":270,"./de":271,"./de-at":272,"./de-at.js":272,"./de-ch":273,"./de-ch.js":273,"./de.js":271,"./dv":274,"./dv.js":274,"./el":275,"./el.js":275,"./en-SG":276,"./en-SG.js":276,"./en-au":277,"./en-au.js":277,"./en-ca":278,"./en-ca.js":278,"./en-gb":279,"./en-gb.js":279,"./en-ie":280,"./en-ie.js":280,"./en-il":281,"./en-il.js":281,"./en-nz":282,"./en-nz.js":282,"./eo":283,"./eo.js":283,"./es":284,"./es-do":285,"./es-do.js":285,"./es-us":286,"./es-us.js":286,"./es.js":284,"./et":287,"./et.js":287,"./eu":288,"./eu.js":288,"./fa":289,"./fa.js":289,"./fi":290,"./fi.js":290,"./fo":291,"./fo.js":291,"./fr":292,"./fr-ca":293,"./fr-ca.js":293,"./fr-ch":294,"./fr-ch.js":294,"./fr.js":292,"./fy":295,"./fy.js":295,"./ga":296,"./ga.js":296,"./gd":297,"./gd.js":297,"./gl":298,"./gl.js":298,"./gom-latn":299,"./gom-latn.js":299,"./gu":300,"./gu.js":300,"./he":301,"./he.js":301,"./hi":302,"./hi.js":302,"./hr":303,"./hr.js":303,"./hu":304,"./hu.js":304,"./hy-am":305,"./hy-am.js":305,"./id":306,"./id.js":306,"./is":307,"./is.js":307,"./it":308,"./it-ch":309,"./it-ch.js":309,"./it.js":308,"./ja":310,"./ja.js":310,"./jv":311,"./jv.js":311,"./ka":312,"./ka.js":312,"./kk":313,"./kk.js":313,"./km":314,"./km.js":314,"./kn":315,"./kn.js":315,"./ko":316,"./ko.js":316,"./ku":317,"./ku.js":317,"./ky":318,"./ky.js":318,"./lb":319,"./lb.js":319,"./lo":320,"./lo.js":320,"./lt":321,"./lt.js":321,"./lv":322,"./lv.js":322,"./me":323,"./me.js":323,"./mi":324,"./mi.js":324,"./mk":325,"./mk.js":325,"./ml":326,"./ml.js":326,"./mn":327,"./mn.js":327,"./mr":328,"./mr.js":328,"./ms":329,"./ms-my":330,"./ms-my.js":330,"./ms.js":329,"./mt":331,"./mt.js":331,"./my":332,"./my.js":332,"./nb":333,"./nb.js":333,"./ne":334,"./ne.js":334,"./nl":335,"./nl-be":336,"./nl-be.js":336,"./nl.js":335,"./nn":337,"./nn.js":337,"./pa-in":338,"./pa-in.js":338,"./pl":339,"./pl.js":339,"./pt":340,"./pt-br":341,"./pt-br.js":341,"./pt.js":340,"./ro":342,"./ro.js":342,"./ru":343,"./ru.js":343,"./sd":344,"./sd.js":344,"./se":345,"./se.js":345,"./si":346,"./si.js":346,"./sk":347,"./sk.js":347,"./sl":348,"./sl.js":348,"./sq":349,"./sq.js":349,"./sr":350,"./sr-cyrl":351,"./sr-cyrl.js":351,"./sr.js":350,"./ss":352,"./ss.js":352,"./sv":353,"./sv.js":353,"./sw":354,"./sw.js":354,"./ta":355,"./ta.js":355,"./te":356,"./te.js":356,"./tet":357,"./tet.js":357,"./tg":358,"./tg.js":358,"./th":359,"./th.js":359,"./tl-ph":360,"./tl-ph.js":360,"./tlh":361,"./tlh.js":361,"./tr":362,"./tr.js":362,"./tzl":363,"./tzl.js":363,"./tzm":364,"./tzm-latn":365,"./tzm-latn.js":365,"./tzm.js":364,"./ug-cn":366,"./ug-cn.js":366,"./uk":367,"./uk.js":367,"./ur":368,"./ur.js":368,"./uz":369,"./uz-latn":370,"./uz-latn.js":370,"./uz.js":369,"./vi":371,"./vi.js":371,"./x-pseudo":372,"./x-pseudo.js":372,"./yo":373,"./yo.js":373,"./zh-cn":374,"./zh-cn.js":374,"./zh-hk":375,"./zh-hk.js":375,"./zh-tw":376,"./zh-tw.js":376};function d(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}d.keys=function(){return Object.keys(map)},d.resolve=n,t.exports=d,d.id=428},579:function(t,e,r){t.exports={srcSet:r.p+"img/dc7e673-400.jpg 400w,"+r.p+"img/4b9c350-800.jpg 800w,"+r.p+"img/4d47b26-1280.jpg 1280w",images:[{path:r.p+"img/dc7e673-400.jpg",width:400,height:225},{path:r.p+"img/4b9c350-800.jpg",width:800,height:450},{path:r.p+"img/4d47b26-1280.jpg",width:1280,height:720}],src:r.p+"img/dc7e673-400.jpg",toString:function(){return r.p+"img/dc7e673-400.jpg"},placeholder:void 0,width:400,height:225}},580:function(t,e,r){t.exports={srcSet:r.p+"img/f21ff1b-400.jpg 400w,"+r.p+"img/b5bd179-800.jpg 800w,"+r.p+"img/7eb50e0-1600.jpg 1600w",images:[{path:r.p+"img/f21ff1b-400.jpg",width:400,height:210},{path:r.p+"img/b5bd179-800.jpg",width:800,height:420},{path:r.p+"img/7eb50e0-1600.jpg",width:1600,height:840}],src:r.p+"img/f21ff1b-400.jpg",toString:function(){return r.p+"img/f21ff1b-400.jpg"},placeholder:void 0,width:400,height:210}},581:function(t,e,r){"use strict";var d=r(423);r.n(d).a},582:function(t,e,r){(e=r(15)(!1)).push([t.i,".content[data-v-7c927e74]{padding:2em 1em 0}",""]),t.exports=e},629:function(t,e,r){"use strict";r.r(e);var d=r(86),n=r(228),o=r(424),l=r(425),c={name:"HomePage",components:{Header:d.a,Card:n.a,TextHero:o.a,LockdownCountdown:l.a},data:function(){return{title:"IndiaSmile.org | Best things to do while stuck in quarantine",list:[{title:"Like Minded WhatsApp Communities 👨‍👧‍👧",subtitle:"Topic based community chats",image:r(247),color:"#1ebfa5",href:"/communities",isDarkText:!1},{title:"Best Modern TV & Movies 📺",subtitle:"Things to enjoy when bored",image:r(389),color:"rgba(128, 150, 140, 0.85)",href:"/entertainment",isDarkText:!1},{title:"Get Fit and Flexible at Home 💪",subtitle:"Yoga & Fitness",image:r(391),color:"rgba(78, 111, 140, 0.85)",href:"/fitness",isDarkText:!1},{title:"Learn Something New Quickly 🧠",subtitle:"Use the off-time to gain new skills ✍",image:r(396),color:"rgba(42, 94, 92, 0.85)",href:"/learn",isDarkText:!1},{title:"Beat Anxiety & Gain a Peaceful Calm 🕊",subtitle:"No to Negativity",image:r(399),color:"rgba(75, 82, 60, 0.85)",href:"/peace",isDarkText:!1},{title:"Survival Starter Pack 🧼",subtitle:"Supplies and essentials to keep at home",image:r(390),color:"rgba(247, 235, 205, 0.85)",href:"/essentials",isDarkText:!0},{title:"Safety Guidelines 👩‍⚕️",subtitle:"Stay healthy physically and mentally",image:r(403),color:"rgba(210, 223, 234, 0.85)",href:"/safety-guidelines",isDarkText:!0},{title:"COVID tracker",subtitle:"Use this tool to find out how far is COVID-19 from you!",image:r(579),color:"rgba(0, 0, 0, 0.85)",href:"/covid",isDarkText:!1},{custom:"Sharer"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:r(580)}]}}},h=(r(581),r(6)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TextHero",{attrs:{title:"Getting bored at home?"}},[r("ul",[r("li",{staticClass:"has-text-centered"},[r("nuxt-link",{attrs:{to:"/covid"}},[r("b-button",{attrs:{type:"is-primary",size:"is-medium",inverted:""}},[t._v("🦠 COVID-19 Tracker and Stats")])],1)],1),r("li",[t._v("👇 "),r("strong",[t._v("Scroll down")]),t._v(" to see all content")]),r("li",[t._v("🎊 Choose Entertainment, Fitness, News, or anything you like!")]),r("li",[t._v("😍 Scroll and click on all photos to find best content")]),r("li",[t._v("🧠 Visit every day and add to homescreen to "),r("strong",[t._v("beat boredom")])]),r("li",[t._v("👬 "),r("strong",[t._v("Share")]),t._v(" in friends & family groups to spread the love!")])])]),r("LockdownCountdown"),r("section",{staticClass:"section content"},[r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-multiline"},t._l(t.list,(function(e,d){return"boolean"==typeof e.isHidden&&e.isHidden?t._e():r("div",{key:d,staticClass:"column is-one-third"},[e.custom?"Sharer"===e.custom?r("Sharer",{attrs:{title:t.title,textType:"list"}}):t._e():r("card",{attrs:{title:e.title,subtitle:e.subtitle,image:e.image,color:e.color,to:e.href,isDarkText:e.isDarkText}})],1)})),0)])])],1)}),[],!1,null,"7c927e74",null);e.default=component.exports}}]);