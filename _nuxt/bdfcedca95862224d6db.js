(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{212:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(70);var o=n(87);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,n){"use strict";var r=n(212);n.n(r).a},217:function(t,e,n){(e=n(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,n){"use strict";var r=n(213);n.n(r).a},219:function(t,e,n){(e=n(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,n){"use strict";var r=n(86),o=(n(69),n(215)),c=(n(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(o.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),l=(n(216),n(6)),h=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-container"},[n("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,r){return e.length>1?n("li",{key:r,staticClass:"crumb",class:{"is-active":t.items.length===r+1}},[n("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(r)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,d={components:{Header:r.a,Breadcrumb:h},props:{image:{type:Object,required:!0}}},m=(n(218),Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},222:function(t,e,n){"use strict";n(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},223:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("f78dfddc",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r=n(223);n.n(r).a},230:function(t,e,n){(e=n(15)(!1)).push([t.i,".button--extra[data-v-311ef926]{padding-top:calc(.75em - 1px);height:2.625em;border:0}[data-v-311ef926] .sm{display:block;font-size:.5em;line-height:1em;text-transform:uppercase;position:absolute;top:.75em;color:hsla(0,0%,100%,.75)}.button--android[data-v-311ef926]{background:#a4c639;color:#fff;border:0}.button--netflix[data-v-311ef926]{background:#e50914;color:#fff}.button--google[data-v-311ef926]{background:#3bccff;color:#fff}.button--hotstar[data-v-311ef926]{background:#048f70;color:#fff}.button--prime[data-v-311ef926]{background:#00a8e1;color:#fff}",""]),t.exports=e},231:function(t,e,n){"use strict";var r=n(222),o={props:{text:{type:String,required:!0},href:{type:String,required:!1,default:"#"},type:{type:String,required:!1,default:""}},computed:{element:function(){return"#"===this.href?"span":Object(r.a)(this.href)?"a":"nuxt-link"},parentAttributes:function(){return"a"===this.element?{href:this.href,target:"_blank",rel:"nofollow"}:"nuxt-link"===this.element?{to:this.href}:{}},buttonAttributes:function(){var t={ios:{type:"is-black","icon-left":"apple"},android:{class:"button--android","icon-left":"google-play"},netflix:{"icon-left":"netflix",class:"button--extra"},prime:{"icon-left":"amazon",class:"button--extra"},hotstar:{"icon-left":"star-outline",class:"button--extra"},google:{"icon-left":"google",class:"button--extra"},default:{type:"is-primary",outlined:!0,"icon-left":"web"}},e=t[this.type];return e&&e.class&&(e.class+=" button--"+this.type),t[this.type]||t.default},content:function(){var t={android:"Android",ios:"iOS",netflix:'<span class="sm">Watch on</span><span class="text">Netflix</span>',google:'<span class="sm">Watch on</span><span class="text">Google</span>',hotstar:'<span class="sm">Watch on</span><span class="text">Hotstar</span>',prime:'<span class="sm">Watch on</span><span class="text">Prime</span>',default:""};return this.text||t[this.type]||this.type||t.default}}},c=(n(229),n(6)),l={name:"ContentButtons",components:{Button:Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e(this.element,this._b({tag:"component",staticClass:"wrapper"},"component",this.parentAttributes,!1),[e("b-button",this._b({},"b-button",this.buttonAttributes,!1),[e("span",{domProps:{innerHTML:this._s(this.content)}})])],1)}),[],!1,null,"311ef926",null).exports},props:{buttons:{type:Array,required:!0}}},h=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return this.buttons?e("div",{staticClass:"content__buttons"},this._l(this.buttons,(function(button,t){return e("Button",{key:t,staticClass:"content__buttons__item",attrs:{text:button.text||"",type:button.type?button.type.toLowerCase():"",href:button.link}})})),1):this._e()}),[],!1,null,null,null);e.a=h.exports},244:function(t,e,n){t.exports={srcSet:n.p+"img/6258482-400.jpg 400w,"+n.p+"img/6f594ae-800.jpg 800w,"+n.p+"img/49190cb-1280.jpg 1280w",images:[{path:n.p+"img/6258482-400.jpg",width:400,height:225},{path:n.p+"img/6f594ae-800.jpg",width:800,height:450},{path:n.p+"img/49190cb-1280.jpg",width:1280,height:720}],src:n.p+"img/6258482-400.jpg",toString:function(){return n.p+"img/6258482-400.jpg"},placeholder:void 0,width:400,height:225}},481:function(t,e,n){t.exports={srcSet:n.p+"img/c283846-400.jpg 400w,"+n.p+"img/655ba93-800.jpg 800w,"+n.p+"img/df3c902-1300.jpg 1300w",images:[{path:n.p+"img/c283846-400.jpg",width:400,height:300},{path:n.p+"img/655ba93-800.jpg",width:800,height:600},{path:n.p+"img/df3c902-1300.jpg",width:1300,height:975}],src:n.p+"img/c283846-400.jpg",toString:function(){return n.p+"img/c283846-400.jpg"},placeholder:void 0,width:400,height:300}},482:function(t,e,n){t.exports={srcSet:n.p+"img/adc865d-400.jpg 400w,"+n.p+"img/d057cf6-800.jpg 800w,"+n.p+"img/60446b8-1280.jpg 1280w",images:[{path:n.p+"img/adc865d-400.jpg",width:400,height:219},{path:n.p+"img/d057cf6-800.jpg",width:800,height:438},{path:n.p+"img/60446b8-1280.jpg",width:1280,height:700}],src:n.p+"img/adc865d-400.jpg",toString:function(){return n.p+"img/adc865d-400.jpg"},placeholder:void 0,width:400,height:219}},483:function(t,e,n){t.exports={srcSet:n.p+"img/84c3b9b-400.jpg 400w,"+n.p+"img/7de3b63-800.jpg 800w,"+n.p+"img/ba33593-1600.jpg 1600w",images:[{path:n.p+"img/84c3b9b-400.jpg",width:400,height:300},{path:n.p+"img/7de3b63-800.jpg",width:800,height:600},{path:n.p+"img/ba33593-1600.jpg",width:1600,height:1200}],src:n.p+"img/84c3b9b-400.jpg",toString:function(){return n.p+"img/84c3b9b-400.jpg"},placeholder:void 0,width:400,height:300}},484:function(t,e,n){t.exports={srcSet:n.p+"img/a19d3be-400.jpg 400w,"+n.p+"img/2c45e42-800.jpg 800w,"+n.p+"img/e43b6c7-1344.jpg 1344w",images:[{path:n.p+"img/a19d3be-400.jpg",width:400,height:228},{path:n.p+"img/2c45e42-800.jpg",width:800,height:455},{path:n.p+"img/e43b6c7-1344.jpg",width:1344,height:765}],src:n.p+"img/a19d3be-400.jpg",toString:function(){return n.p+"img/a19d3be-400.jpg"},placeholder:void 0,width:400,height:228}},594:function(t,e,n){"use strict";n.r(e);var r=n(220),o=n(231),c={name:"HomePage",components:{ArticleHero:r.a,ContentButtons:o.a},data:function(){return{title:"Learn new languages",image:n(244),article:[{text:"Only three percent of people around the world can speak over four languages. On top of that, our minds have the capacity to learn indefinitely. The isolation days present you an opportunity! A chance, a strong desire to learn can substantially boost your social skills and personality."},{custom:"Sharer",image:n(481)},{text:'We wish to encourage our readers to work on themselves and try out a new language. <span class="js--h">Speaking fluently in multiple dialects is a truly impressive skill! Prepare for all the holidays you are going to take once this ends with these apps 😍 </span>'},{heading:"DuoLingo",text:"DuoLingo boasts over 100 million users, and is the most well-known free language learning app available today. The success of this app comes from a gamified user experience of seamless learning. Most of the courses offered by DuoLingo are created by native speakers, which helps to ensure accuracy of dialect. A free platform you can use to learn your favourite language.",buttons:[{text:"DuoLingo",link:"https://www.duolingo.com/"}],image:n(482)},{heading:"MemRise",text:"With over 200 languages available, there’s a good  if you want to learn it, MemRise has it. The free version of the app gives you access to the same number of languages as the Pro version, just with fewer functionalities. Where it truly excels is in its ability to make learning fun and engaging.",buttons:[{text:"MemRise",link:"https://www.memrise.com/"}],image:n(483)},{heading:"HelloTalk",text:"HelloTalk takes a very interesting and different approach to learning. Instead of choosing from preset lessons, learners are connected with native speakers of their target language. Users then communicate conversationally using text and voice messages. Thanks to an in-app correction tool, users can make corrections to each other’s messages in real time. Learn by doing it approach, works effectively too.",buttons:[{text:"HelloTalk",link:"https://www.hellotalk.com/"}],image:n(484)}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},l=n(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("ArticleHero",{attrs:{image:t.image}}),n("div",{staticClass:"content"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),t._l(t.article,(function(data,e){return n("div",{key:e,staticClass:"content__section"},[data.heading?n("h5",{staticClass:"content__heading"},[t._v(t._s(data.heading))]):t._e(),data.image?n("img",{staticClass:"content__image",attrs:{src:data.image}}):t._e(),"Sharer"===data.custom?n("Sharer",{attrs:{title:t.title}}):t._e(),data.text?n("p",{staticClass:"content__text",domProps:{innerHTML:t._s(data.text)}}):t._e(),data.buttons?n("ContentButtons",{attrs:{buttons:data.buttons}}):t._e()],1)})),n("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"f812f4a6",null);e.default=component.exports}}]);