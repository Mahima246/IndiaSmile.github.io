(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,r){var content=r(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r(70);var d=r(87);function n(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(d.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,r){"use strict";var o=r(212);r.n(o).a},217:function(t,e,r){(e=r(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,r){"use strict";var o=r(213);r.n(o).a},219:function(t,e,r){(e=r(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,r){"use strict";var o=r(86),d=(r(69),r(215)),n=(r(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(d.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),c=(r(216),r(6)),l=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-container"},[r("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,o){return e.length>1?r("li",{key:o,staticClass:"crumb",class:{"is-active":t.items.length===o+1}},[r("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(o)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,h={components:{Header:o.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},m=(r(218),Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},221:function(t,e,r){var content=r(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63c71cb6",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";r(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},226:function(t,e,r){"use strict";var o=r(221);r.n(o).a},227:function(t,e,r){(e=r(15)(!1)).push([t.i,".card[data-v-0da6db60]{border-radius:.4em;position:relative;box-shadow:none;overflow:hidden;padding-bottom:56.25%}.card__gradient[data-v-0da6db60]{position:absolute;width:100%;height:100%;left:0;bottom:0;z-index:2;border-radius:.4em}.card--large[data-v-0da6db60]{padding-bottom:100%}.card--large .card__gradient[data-v-0da6db60]{height:125%}.card--list--1[data-v-0da6db60]{padding-bottom:56%}.card--list--1 .card__gradient[data-v-0da6db60]{height:100%}.card--list--2[data-v-0da6db60]{padding-bottom:70%}.card--list--2 .card__gradient[data-v-0da6db60]{height:90%}.card--list--3[data-v-0da6db60]{padding-bottom:96%}.card--list--3 .card__gradient[data-v-0da6db60]{height:170%}.card--list--4[data-v-0da6db60]{padding-bottom:140%}.card--list--4 .card__gradient[data-v-0da6db60]{height:180%}.card--list--5[data-v-0da6db60]{padding-bottom:140%}.card--list--5 .card__gradient[data-v-0da6db60]{height:210%}.card__image[data-v-0da6db60]{display:block;width:100%}.card__text[data-v-0da6db60]{position:absolute;left:1em;right:1em;bottom:.75em;z-index:3}.card__text__title[data-v-0da6db60]{font-weight:700;font-size:1em;color:#fff}.card__text__title.text--dark[data-v-0da6db60]{color:#000}.card__text__subtitle[data-v-0da6db60]{font-size:.875em;color:hsla(0,0%,100%,.75)}.card__text__subtitle.text--dark[data-v-0da6db60]{color:rgba(25,23,91,.75)}.card__action[data-v-0da6db60]{margin-top:.75rem}.card__action__button[data-v-0da6db60]{border:0;color:#fff;background:hsla(0,0%,100%,.2)}.card__action__button.text--dark[data-v-0da6db60]{color:#000;background:rgba(0,0,0,.1)}.card__list__item[data-v-0da6db60]{display:flex;justify-content:flex-start;align-items:center;border-bottom:1px solid rgba(0,0,0,.12);padding:8px 0;min-height:3.375rem}.card__list__item[data-v-0da6db60]:last-child{border-bottom:0}.card__list__item__icon[data-v-0da6db60]{width:2.25rem;height:2.25rem;border-radius:.375rem;margin-right:.75rem}.card__list__item__body[data-v-0da6db60]{width:100%;display:inline-flex;justify-content:space-between}.card__list__item__body__text__name[data-v-0da6db60]{font-weight:500;color:#19175b;font-size:.875em}.card__list__item__body__text__name.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.9)}.card__list__item__body__text__subtext[data-v-0da6db60]{font-size:.75em;color:rgba(25,23,91,.6)}.card__list__item__body__text__subtext.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.85)}.card__list__item__body__button[data-v-0da6db60]{border:0;color:hsla(0,0%,100%,.85);background:hsla(0,0%,100%,.2)}.link[data-v-0da6db60]{display:block;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0}",""]),t.exports=e},228:function(t,e,r){"use strict";var o=r(222),d={props:{image:{type:Object,required:!0},color:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},to:{type:String,required:!1,default:"#"},isDarkText:{type:Boolean,required:!1,default:!1},button:{type:String,required:!1,default:""},list:{type:Array,required:!1,default:function(){return[]}}},computed:{parentClassNames:function(){return this.list.length?["card--list","card--list--"+(this.list.length<=5?this.list.length:5)]:this.button?"card--large":""},textClassName:function(){return this.isDarkText?"text--dark":"text--light"},parentElement:function(){return this.button||this.list.length?"div":"nuxt-link"}},methods:{childElement:function(t){return Object(o.a)(t)?"a":"nuxt-link"},target:function(t){return Object(o.a)(t)?"_blank":"_self"}}},n=(r(226),r(6)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",class:t.parentClassNames},[r(t.parentElement,{tag:"component",staticClass:"link",attrs:{to:t.to}},[r("img",{staticClass:"card__image",attrs:{srcSet:t.image.srcSet,src:t.image.src}}),r("div",{staticClass:"card__gradient",style:{backgroundImage:"linear-gradient(180deg, rgba(196, 196, 196, 0) 30.73%, "+t.color+" 70.31%)"}}),r("div",{staticClass:"card__text"},[r("div",{staticClass:"card__text__title",class:t.textClassName},[t._v(t._s(t.title))]),r("div",{staticClass:"card__text__subtitle",class:t.textClassName},[t._v(t._s(t.subtitle))]),t.list.length?r("div",{staticClass:"card__list"},t._l(t.list,(function(e,o){return r(t.childElement(e.link),{key:o,tag:"component",staticClass:"card__list__item",attrs:{to:e.link,href:e.link,target:t.target(e.link),rel:"nofollow"}},[e.image?r("img",{staticClass:"card__list__item__icon",attrs:{src:e.image}}):t._e(),r("div",{staticClass:"card__list__item__body"},[r("div",{staticClass:"card__list__item__body__text"},[r("div",{staticClass:"card__list__item__body__text__name",class:t.textClassName},[t._v(t._s(e.name))]),e.text?r("div",{staticClass:"card__list__item__body__text__subtext",class:t.textClassName},[t._v(t._s(e.text))]):t._e()]),r("b-button",{staticClass:"card__list__item__body__button",class:t.textClassName,attrs:{"icon-right":"chevron-right",size:"is-small"}},[t._v("Join Now")])],1)])})),1):t._e(),t.button?r("div",{staticClass:"card__action"},[r("a",{attrs:{href:t.to}},[r("b-button",{staticClass:"card__action__button",class:t.textClassName,attrs:{"icon-right":"chevron-right"}},[t._v(t._s(t.button))])],1)]):t._e()])])],1)}),[],!1,null,"0da6db60",null);e.a=component.exports},238:function(t,e,r){t.exports={srcSet:r.p+"img/aeaa217-400.jpg 400w,"+r.p+"img/8956284-800.jpg 800w,"+r.p+"img/02ace0c-1280.jpg 1280w",images:[{path:r.p+"img/aeaa217-400.jpg",width:400,height:225},{path:r.p+"img/8956284-800.jpg",width:800,height:450},{path:r.p+"img/02ace0c-1280.jpg",width:1280,height:720}],src:r.p+"img/aeaa217-400.jpg",toString:function(){return r.p+"img/aeaa217-400.jpg"},placeholder:void 0,width:400,height:225}},247:function(t,e,r){t.exports={srcSet:r.p+"img/cf24163-400.jpg 400w,"+r.p+"img/d189de4-800.jpg 800w,"+r.p+"img/d690b82-1280.jpg 1280w",images:[{path:r.p+"img/cf24163-400.jpg",width:400,height:225},{path:r.p+"img/d189de4-800.jpg",width:800,height:450},{path:r.p+"img/d690b82-1280.jpg",width:1280,height:720}],src:r.p+"img/cf24163-400.jpg",toString:function(){return r.p+"img/cf24163-400.jpg"},placeholder:void 0,width:400,height:225}},248:function(t,e,r){t.exports={srcSet:r.p+"img/6a4a591-400.jpg 400w,"+r.p+"img/ffe6659-800.jpg 800w,"+r.p+"img/2808f76-1280.jpg 1280w",images:[{path:r.p+"img/6a4a591-400.jpg",width:400,height:225},{path:r.p+"img/ffe6659-800.jpg",width:800,height:450},{path:r.p+"img/2808f76-1280.jpg",width:1280,height:720}],src:r.p+"img/6a4a591-400.jpg",toString:function(){return r.p+"img/6a4a591-400.jpg"},placeholder:void 0,width:400,height:225}},433:function(t,e,r){t.exports={srcSet:r.p+"img/4849c21-400.jpg 400w,"+r.p+"img/66c1590-800.jpg 800w,"+r.p+"img/09375db-1280.jpg 1280w",images:[{path:r.p+"img/4849c21-400.jpg",width:400,height:225},{path:r.p+"img/66c1590-800.jpg",width:800,height:450},{path:r.p+"img/09375db-1280.jpg",width:1280,height:720}],src:r.p+"img/4849c21-400.jpg",toString:function(){return r.p+"img/4849c21-400.jpg"},placeholder:void 0,width:400,height:225}},434:function(t,e,r){t.exports={srcSet:r.p+"img/c0159b4-400.jpg 400w,"+r.p+"img/6b7c55c-800.jpg 800w,"+r.p+"img/a46e49d-1280.jpg 1280w",images:[{path:r.p+"img/c0159b4-400.jpg",width:400,height:225},{path:r.p+"img/6b7c55c-800.jpg",width:800,height:450},{path:r.p+"img/a46e49d-1280.jpg",width:1280,height:720}],src:r.p+"img/c0159b4-400.jpg",toString:function(){return r.p+"img/c0159b4-400.jpg"},placeholder:void 0,width:400,height:225}},435:function(t,e,r){t.exports={srcSet:r.p+"img/cb9489e-400.jpg 400w,"+r.p+"img/d96b82e-800.jpg 800w,"+r.p+"img/3801699-1280.jpg 1280w",images:[{path:r.p+"img/cb9489e-400.jpg",width:400,height:225},{path:r.p+"img/d96b82e-800.jpg",width:800,height:450},{path:r.p+"img/3801699-1280.jpg",width:1280,height:720}],src:r.p+"img/cb9489e-400.jpg",toString:function(){return r.p+"img/cb9489e-400.jpg"},placeholder:void 0,width:400,height:225}},436:function(t,e,r){t.exports={srcSet:r.p+"img/f3954e3-400.jpg 400w,"+r.p+"img/cb1ed5f-800.jpg 800w,"+r.p+"img/39af46b-1600.jpg 1600w",images:[{path:r.p+"img/f3954e3-400.jpg",width:400,height:267},{path:r.p+"img/cb1ed5f-800.jpg",width:800,height:533},{path:r.p+"img/39af46b-1600.jpg",width:1600,height:1067}],src:r.p+"img/f3954e3-400.jpg",toString:function(){return r.p+"img/f3954e3-400.jpg"},placeholder:void 0,width:400,height:267}},631:function(t,e,r){"use strict";r.r(e);var o=r(228),d=r(220),n={components:{Card:o.a,ArticleHero:d.a},data:function(){return{title:"Whatsapp communities",image:r(247),list:[{title:"Movies and TV",subtitle:"Discuss (and defend 😉) your favourite movies and TV shows. Also discover fresh recommendations from our users on this group 😋",image:r(433),color:"#ce4040",href:"https://t.me/entertainment_isc",isDarkText:!1,button:"Join on Telegram"},{title:"Updates",subtitle:"Important information regarding Covid 19 from official sources. Stay updated 🤙",image:r(434),color:"rgb(255, 255, 242)",href:"https://t.me/isc_updates",isDarkText:!0,button:"Join on Telegram"},{title:"Mood Support",subtitle:"We’ll get through this together 👨‍👩‍👧‍👦💖! Share what’s troubling you and get help from our other users.",image:r(435),color:"rgb(161, 131, 175)",href:"https://t.me/isc_mood",isDarkText:!1,button:"Join on Telegram"},{title:"Jokes",subtitle:" You laugh we win! The funniest memes and jokes to lighten you up. 😂 P.S - The best way to fight coronavirus? Stay home and make fun of it 😜",image:r(248),color:"rgb(140, 119, 140)",href:"http://t.me/jokes_isc",isDarkText:!1,button:"Join on Telegram"},{title:"Books",subtitle:"Perfect opportunity to hole up and demolish your reading list 😎📚 Discuss your favorite books here and get recommendations",image:r(238),color:"rgba(247, 235, 205, 0.85)",href:"https://t.me/books_isc",isDarkText:!0,button:"Join on Telegram"},{title:"Gaming",subtitle:"Join for all the intense discussions on PS5 or Xbox, or profess your loyalty to PC on the gaming group",image:r(436),color:"rgba(0, 0, 0, 0.85)",href:"https://t.me/isc_gaming",isDarkText:!1,button:"Join on Telegram"},{custom:"Sharer"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},c=r(6),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("ArticleHero",{attrs:{image:t.image}}),r("section",{staticClass:"section content"},[r("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-multiline"},t._l(t.list,(function(e,o){return r("div",{key:o,staticClass:"column is-one-third"},[e.custom?"Sharer"===e.custom?r("Sharer",{attrs:{title:t.title,textType:"list"}}):t._e():r("card",{attrs:{title:e.title,subtitle:e.subtitle,image:e.image,color:e.color,to:e.href,isDarkText:e.isDarkText,button:e.button,list:e.links?e.links:void 0}})],1)})),0)])])],1)}),[],!1,null,"4d9ff0e2",null);e.default=component.exports}}]);