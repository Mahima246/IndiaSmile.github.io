(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{212:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,r){var content=r(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var d=r(70);var n=r(87);function o(t){return function(t){if(Array.isArray(t))return Object(d.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,r){"use strict";var d=r(212);r.n(d).a},217:function(t,e,r){(e=r(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,r){"use strict";var d=r(213);r.n(d).a},219:function(t,e,r){(e=r(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,r){"use strict";var d=r(86),n=(r(69),r(215)),o=(r(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(n.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),c=(r(216),r(6)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-container"},[r("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,d){return e.length>1?r("li",{key:d,staticClass:"crumb",class:{"is-active":t.items.length===d+1}},[r("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(d)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,_={components:{Header:d.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},m=(r(218),Object(c.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},221:function(t,e,r){var content=r(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63c71cb6",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";r(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},226:function(t,e,r){"use strict";var d=r(221);r.n(d).a},227:function(t,e,r){(e=r(15)(!1)).push([t.i,".card[data-v-0da6db60]{border-radius:.4em;position:relative;box-shadow:none;overflow:hidden;padding-bottom:56.25%}.card__gradient[data-v-0da6db60]{position:absolute;width:100%;height:100%;left:0;bottom:0;z-index:2;border-radius:.4em}.card--large[data-v-0da6db60]{padding-bottom:100%}.card--large .card__gradient[data-v-0da6db60]{height:125%}.card--list--1[data-v-0da6db60]{padding-bottom:56%}.card--list--1 .card__gradient[data-v-0da6db60]{height:100%}.card--list--2[data-v-0da6db60]{padding-bottom:70%}.card--list--2 .card__gradient[data-v-0da6db60]{height:90%}.card--list--3[data-v-0da6db60]{padding-bottom:96%}.card--list--3 .card__gradient[data-v-0da6db60]{height:170%}.card--list--4[data-v-0da6db60]{padding-bottom:140%}.card--list--4 .card__gradient[data-v-0da6db60]{height:180%}.card--list--5[data-v-0da6db60]{padding-bottom:140%}.card--list--5 .card__gradient[data-v-0da6db60]{height:210%}.card__image[data-v-0da6db60]{display:block;width:100%}.card__text[data-v-0da6db60]{position:absolute;left:1em;right:1em;bottom:.75em;z-index:3}.card__text__title[data-v-0da6db60]{font-weight:700;font-size:1em;color:#fff}.card__text__title.text--dark[data-v-0da6db60]{color:#000}.card__text__subtitle[data-v-0da6db60]{font-size:.875em;color:hsla(0,0%,100%,.75)}.card__text__subtitle.text--dark[data-v-0da6db60]{color:rgba(25,23,91,.75)}.card__action[data-v-0da6db60]{margin-top:.75rem}.card__action__button[data-v-0da6db60]{border:0;color:#fff;background:hsla(0,0%,100%,.2)}.card__action__button.text--dark[data-v-0da6db60]{color:#000;background:rgba(0,0,0,.1)}.card__list__item[data-v-0da6db60]{display:flex;justify-content:flex-start;align-items:center;border-bottom:1px solid rgba(0,0,0,.12);padding:8px 0;min-height:3.375rem}.card__list__item[data-v-0da6db60]:last-child{border-bottom:0}.card__list__item__icon[data-v-0da6db60]{width:2.25rem;height:2.25rem;border-radius:.375rem;margin-right:.75rem}.card__list__item__body[data-v-0da6db60]{width:100%;display:inline-flex;justify-content:space-between}.card__list__item__body__text__name[data-v-0da6db60]{font-weight:500;color:#19175b;font-size:.875em}.card__list__item__body__text__name.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.9)}.card__list__item__body__text__subtext[data-v-0da6db60]{font-size:.75em;color:rgba(25,23,91,.6)}.card__list__item__body__text__subtext.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.85)}.card__list__item__body__button[data-v-0da6db60]{border:0;color:hsla(0,0%,100%,.85);background:hsla(0,0%,100%,.2)}.link[data-v-0da6db60]{display:block;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0}",""]),t.exports=e},228:function(t,e,r){"use strict";var d=r(222),n={props:{image:{type:Object,required:!0},color:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},to:{type:String,required:!1,default:"#"},isDarkText:{type:Boolean,required:!1,default:!1},button:{type:String,required:!1,default:""},list:{type:Array,required:!1,default:function(){return[]}}},computed:{parentClassNames:function(){return this.list.length?["card--list","card--list--"+(this.list.length<=5?this.list.length:5)]:this.button?"card--large":""},textClassName:function(){return this.isDarkText?"text--dark":"text--light"},parentElement:function(){return this.button||this.list.length?"div":"nuxt-link"}},methods:{childElement:function(t){return Object(d.a)(t)?"a":"nuxt-link"},target:function(t){return Object(d.a)(t)?"_blank":"_self"}}},o=(r(226),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",class:t.parentClassNames},[r(t.parentElement,{tag:"component",staticClass:"link",attrs:{to:t.to}},[r("img",{staticClass:"card__image",attrs:{srcSet:t.image.srcSet,src:t.image.src}}),r("div",{staticClass:"card__gradient",style:{backgroundImage:"linear-gradient(180deg, rgba(196, 196, 196, 0) 30.73%, "+t.color+" 70.31%)"}}),r("div",{staticClass:"card__text"},[r("div",{staticClass:"card__text__title",class:t.textClassName},[t._v(t._s(t.title))]),r("div",{staticClass:"card__text__subtitle",class:t.textClassName},[t._v(t._s(t.subtitle))]),t.list.length?r("div",{staticClass:"card__list"},t._l(t.list,(function(e,d){return r(t.childElement(e.link),{key:d,tag:"component",staticClass:"card__list__item",attrs:{to:e.link,href:e.link,target:t.target(e.link),rel:"nofollow"}},[e.image?r("img",{staticClass:"card__list__item__icon",attrs:{src:e.image}}):t._e(),r("div",{staticClass:"card__list__item__body"},[r("div",{staticClass:"card__list__item__body__text"},[r("div",{staticClass:"card__list__item__body__text__name",class:t.textClassName},[t._v(t._s(e.name))]),e.text?r("div",{staticClass:"card__list__item__body__text__subtext",class:t.textClassName},[t._v(t._s(e.text))]):t._e()]),r("b-button",{staticClass:"card__list__item__body__button",class:t.textClassName,attrs:{"icon-right":"chevron-right",size:"is-small"}},[t._v("Join Now")])],1)])})),1):t._e(),t.button?r("div",{staticClass:"card__action"},[r("a",{attrs:{href:t.to}},[r("b-button",{staticClass:"card__action__button",class:t.textClassName,attrs:{"icon-right":"chevron-right"}},[t._v(t._s(t.button))])],1)]):t._e()])])],1)}),[],!1,null,"0da6db60",null);e.a=component.exports},246:function(t,e,r){t.exports={srcSet:r.p+"img/a71fcc4-400.jpg 400w,"+r.p+"img/540ee08-800.jpg 800w,"+r.p+"img/094e323-1280.jpg 1280w",images:[{path:r.p+"img/a71fcc4-400.jpg",width:400,height:225},{path:r.p+"img/540ee08-800.jpg",width:800,height:450},{path:r.p+"img/094e323-1280.jpg",width:1280,height:720}],src:r.p+"img/a71fcc4-400.jpg",toString:function(){return r.p+"img/a71fcc4-400.jpg"},placeholder:void 0,width:400,height:225}},419:function(t,e,r){t.exports={srcSet:r.p+"img/1ecfb2d-400.jpg 400w,"+r.p+"img/b324a71-800.jpg 800w,"+r.p+"img/f8b4b12-1280.jpg 1280w",images:[{path:r.p+"img/1ecfb2d-400.jpg",width:400,height:225},{path:r.p+"img/b324a71-800.jpg",width:800,height:450},{path:r.p+"img/f8b4b12-1280.jpg",width:1280,height:720}],src:r.p+"img/1ecfb2d-400.jpg",toString:function(){return r.p+"img/1ecfb2d-400.jpg"},placeholder:void 0,width:400,height:225}},420:function(t,e,r){t.exports={srcSet:r.p+"img/7f2b058-400.jpg 400w,"+r.p+"img/4b04476-800.jpg 800w,"+r.p+"img/d347837-1280.jpg 1280w",images:[{path:r.p+"img/7f2b058-400.jpg",width:400,height:225},{path:r.p+"img/4b04476-800.jpg",width:800,height:450},{path:r.p+"img/d347837-1280.jpg",width:1280,height:720}],src:r.p+"img/7f2b058-400.jpg",toString:function(){return r.p+"img/7f2b058-400.jpg"},placeholder:void 0,width:400,height:225}},421:function(t,e,r){t.exports={srcSet:r.p+"img/7090e96-400.jpg 400w,"+r.p+"img/22916eb-800.jpg 800w,"+r.p+"img/67a9e5e-1280.jpg 1280w",images:[{path:r.p+"img/7090e96-400.jpg",width:400,height:225},{path:r.p+"img/22916eb-800.jpg",width:800,height:450},{path:r.p+"img/67a9e5e-1280.jpg",width:1280,height:720}],src:r.p+"img/7090e96-400.jpg",toString:function(){return r.p+"img/7090e96-400.jpg"},placeholder:void 0,width:400,height:225}},422:function(t,e,r){t.exports={srcSet:r.p+"img/d55bdfc-400.jpg 400w,"+r.p+"img/55c0a3c-800.jpg 800w,"+r.p+"img/c15e079-1280.jpg 1280w",images:[{path:r.p+"img/d55bdfc-400.jpg",width:400,height:225},{path:r.p+"img/55c0a3c-800.jpg",width:800,height:450},{path:r.p+"img/c15e079-1280.jpg",width:1280,height:720}],src:r.p+"img/d55bdfc-400.jpg",toString:function(){return r.p+"img/d55bdfc-400.jpg"},placeholder:void 0,width:400,height:225}},603:function(t,e,r){"use strict";r.r(e);var d=r(228),n=r(220),o={components:{Card:d.a,ArticleHero:n.a},data:function(){return{title:"Bollywood",image:r(246),list:[{title:"Thriller",subtitle:"Best thrillers",image:r(419),color:"rgba(71, 81, 56, 0.85)",href:"/entertainment/movies/hindi/thriller",isDarkText:!1},{title:"Crime",subtitle:"Best crimes",image:r(420),color:"rgba(247, 235, 205, 0.85)",href:"/entertainment/movies/hindi/crime",isDarkText:!0},{title:"Comedy",subtitle:"Best comedies",image:r(421),color:"rgba(234, 169, 83, 0.85)",href:"/entertainment/movies/hindi/comedy",isDarkText:!1},{title:"Horror",subtitle:"Best horrors",image:r(422),color:"rgba(26, 9, 2, 0.85)",href:"/entertainment/movies/hindi/horror",isDarkText:!1},{title:"Romantic Comedies",subtitle:"Best rom-coms",image:r(246),color:"rgba(247, 235, 205, 0.85)",href:"/entertainment/movies/hindi/romantic-comedy",isDarkText:!0},{custom:"Sharer"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},c=r(6),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("ArticleHero",{attrs:{image:t.image}}),r("section",{staticClass:"section content"},[r("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-multiline"},t._l(t.list,(function(e,d){return r("div",{key:d,staticClass:"column is-one-third"},[e.custom?"Sharer"===e.custom?r("Sharer",{attrs:{title:t.title,textType:"list"}}):t._e():r("card",{attrs:{title:e.title,subtitle:e.subtitle,image:e.image,color:e.color,to:e.href,isDarkText:e.isDarkText}})],1)})),0)])])],1)}),[],!1,null,"352a3684",null);e.default=component.exports}}]);