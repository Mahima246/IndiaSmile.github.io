(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{212:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(70);var o=n(87);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,n){"use strict";var r=n(212);n.n(r).a},217:function(t,e,n){(e=n(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,n){"use strict";var r=n(213);n.n(r).a},219:function(t,e,n){(e=n(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,n){"use strict";var r=n(86),o=(n(69),n(215)),c=(n(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(o.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),h=(n(216),n(6)),l=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-container"},[n("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,r){return e.length>1?n("li",{key:r,staticClass:"crumb",class:{"is-active":t.items.length===r+1}},[n("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(r)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,d={components:{Header:r.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},m=(n(218),Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},222:function(t,e,n){"use strict";n(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},223:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("f78dfddc",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4b1ff140",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r=n(223);n.n(r).a},230:function(t,e,n){(e=n(15)(!1)).push([t.i,".button--extra[data-v-311ef926]{padding-top:calc(.75em - 1px);height:2.625em;border:0}[data-v-311ef926] .sm{display:block;font-size:.5em;line-height:1em;text-transform:uppercase;position:absolute;top:.75em;color:hsla(0,0%,100%,.75)}.button--android[data-v-311ef926]{background:#a4c639;color:#fff;border:0}.button--netflix[data-v-311ef926]{background:#e50914;color:#fff}.button--google[data-v-311ef926]{background:#3bccff;color:#fff}.button--hotstar[data-v-311ef926]{background:#048f70;color:#fff}.button--prime[data-v-311ef926]{background:#00a8e1;color:#fff}",""]),t.exports=e},231:function(t,e,n){"use strict";var r=n(222),o={props:{text:{type:String,required:!0},href:{type:String,required:!1,default:"#"},type:{type:String,required:!1,default:""}},computed:{element:function(){return"#"===this.href?"span":Object(r.a)(this.href)?"a":"nuxt-link"},parentAttributes:function(){return"a"===this.element?{href:this.href,target:"_blank",rel:"nofollow"}:"nuxt-link"===this.element?{to:this.href}:{}},buttonAttributes:function(){var t={ios:{type:"is-black","icon-left":"apple"},android:{class:"button--android","icon-left":"google-play"},netflix:{"icon-left":"netflix",class:"button--extra"},prime:{"icon-left":"amazon",class:"button--extra"},hotstar:{"icon-left":"star-outline",class:"button--extra"},google:{"icon-left":"google",class:"button--extra"},default:{type:"is-primary",outlined:!0,"icon-left":"web"}},e=t[this.type];return e&&e.class&&(e.class+=" button--"+this.type),t[this.type]||t.default},content:function(){var t={android:"Android",ios:"iOS",netflix:'<span class="sm">Watch on</span><span class="text">Netflix</span>',google:'<span class="sm">Watch on</span><span class="text">Google</span>',hotstar:'<span class="sm">Watch on</span><span class="text">Hotstar</span>',prime:'<span class="sm">Watch on</span><span class="text">Prime</span>',default:""};return this.text||t[this.type]||this.type||t.default}}},c=(n(229),n(6)),h={name:"ContentButtons",components:{Button:Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e(this.element,this._b({tag:"component",staticClass:"wrapper"},"component",this.parentAttributes,!1),[e("b-button",this._b({},"b-button",this.buttonAttributes,!1),[e("span",{domProps:{innerHTML:this._s(this.content)}})])],1)}),[],!1,null,"311ef926",null).exports},props:{buttons:{type:Array,required:!0}}},l=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return this.buttons?e("div",{staticClass:"content__buttons"},this._l(this.buttons,(function(button,t){return e("Button",{key:t,staticClass:"content__buttons__item",attrs:{text:button.text||"",type:button.type?button.type.toLowerCase():"",href:button.link}})})),1):this._e()}),[],!1,null,null,null);e.a=l.exports},234:function(t,e,n){"use strict";var r=n(225);n.n(r).a},235:function(t,e,n){(e=n(15)(!1)).push([t.i,".stream-guide[data-v-3c3b0664]{font-size:.875em;padding:1em;display:block;margin:0 0 -1.5em;background:#fad550;color:inherit;opacity:.75}",""]),t.exports=e},237:function(t,e,n){"use strict";n(234);var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"stream-guide",attrs:{href:"https://bit.ly/IndiaSmile-WatchForFree",target:"_blank",rel:"nofollow"}},[e("strong",[e("u",[this._v("Watch For Free Guide")]),this._v(" 🎉")]),this._v(" Learn how to watch any movie or tv show for free at any time. Just ask "),e("strong",[e("u",[this._v("any tech savvy")]),this._v(" family member")]),this._v(" to follow this 2 minute guide 🥳")])}],!1,null,"3c3b0664",null);e.a=component.exports},246:function(t,e,n){t.exports={srcSet:n.p+"img/a71fcc4-400.jpg 400w,"+n.p+"img/540ee08-800.jpg 800w,"+n.p+"img/094e323-1280.jpg 1280w",images:[{path:n.p+"img/a71fcc4-400.jpg",width:400,height:225},{path:n.p+"img/540ee08-800.jpg",width:800,height:450},{path:n.p+"img/094e323-1280.jpg",width:1280,height:720}],src:n.p+"img/a71fcc4-400.jpg",toString:function(){return n.p+"img/a71fcc4-400.jpg"},placeholder:void 0,width:400,height:225}},561:function(t,e,n){t.exports={srcSet:n.p+"img/3f0dab1-400.jpg 400w,"+n.p+"img/d254877-800.jpg 800w,"+n.p+"img/656565a-1000.jpg 1000w",images:[{path:n.p+"img/3f0dab1-400.jpg",width:400,height:225},{path:n.p+"img/d254877-800.jpg",width:800,height:450},{path:n.p+"img/656565a-1000.jpg",width:1e3,height:563}],src:n.p+"img/3f0dab1-400.jpg",toString:function(){return n.p+"img/3f0dab1-400.jpg"},placeholder:void 0,width:400,height:225}},562:function(t,e,n){t.exports={srcSet:n.p+"img/4b769e8-400.jpg 400w,"+n.p+"img/abdc542-800.jpg 800w,"+n.p+"img/1236c6e-1280.jpg 1280w",images:[{path:n.p+"img/4b769e8-400.jpg",width:400,height:168},{path:n.p+"img/abdc542-800.jpg",width:800,height:335},{path:n.p+"img/1236c6e-1280.jpg",width:1280,height:536}],src:n.p+"img/4b769e8-400.jpg",toString:function(){return n.p+"img/4b769e8-400.jpg"},placeholder:void 0,width:400,height:168}},563:function(t,e,n){t.exports={srcSet:n.p+"img/639fb80-246.jpg 246w",images:[{path:n.p+"img/639fb80-246.jpg",width:246,height:138}],src:n.p+"img/639fb80-246.jpg",toString:function(){return n.p+"img/639fb80-246.jpg"},placeholder:void 0,width:246,height:138}},564:function(t,e,n){t.exports={srcSet:n.p+"img/7d3dbd2-400.jpg 400w,"+n.p+"img/b6248b1-800.jpg 800w,"+n.p+"img/00fdb7f-1080.jpg 1080w",images:[{path:n.p+"img/7d3dbd2-400.jpg",width:400,height:225},{path:n.p+"img/b6248b1-800.jpg",width:800,height:450},{path:n.p+"img/00fdb7f-1080.jpg",width:1080,height:608}],src:n.p+"img/7d3dbd2-400.jpg",toString:function(){return n.p+"img/7d3dbd2-400.jpg"},placeholder:void 0,width:400,height:225}},565:function(t,e,n){t.exports={srcSet:n.p+"img/a51c917-400.jpg 400w,"+n.p+"img/64958c1-800.jpg 800w,"+n.p+"img/905d795-1024.jpg 1024w",images:[{path:n.p+"img/a51c917-400.jpg",width:400,height:300},{path:n.p+"img/64958c1-800.jpg",width:800,height:600},{path:n.p+"img/905d795-1024.jpg",width:1024,height:768}],src:n.p+"img/a51c917-400.jpg",toString:function(){return n.p+"img/a51c917-400.jpg"},placeholder:void 0,width:400,height:300}},566:function(t,e,n){t.exports={srcSet:n.p+"img/3120eaf-400.jpg 400w,"+n.p+"img/a235183-780.jpg 780w",images:[{path:n.p+"img/3120eaf-400.jpg",width:400,height:179},{path:n.p+"img/a235183-780.jpg",width:780,height:350}],src:n.p+"img/3120eaf-400.jpg",toString:function(){return n.p+"img/3120eaf-400.jpg"},placeholder:void 0,width:400,height:179}},567:function(t,e,n){t.exports={srcSet:n.p+"img/700dec2-400.jpg 400w,"+n.p+"img/a2b5a70-800.jpg 800w,"+n.p+"img/fefc3ac-1280.jpg 1280w",images:[{path:n.p+"img/700dec2-400.jpg",width:400,height:225},{path:n.p+"img/a2b5a70-800.jpg",width:800,height:450},{path:n.p+"img/fefc3ac-1280.jpg",width:1280,height:720}],src:n.p+"img/700dec2-400.jpg",toString:function(){return n.p+"img/700dec2-400.jpg"},placeholder:void 0,width:400,height:225}},568:function(t,e,n){t.exports={srcSet:n.p+"img/d3221fe-400.jpg 400w,"+n.p+"img/176bf1c-665.jpg 665w",images:[{path:n.p+"img/d3221fe-400.jpg",width:400,height:209},{path:n.p+"img/176bf1c-665.jpg",width:665,height:348}],src:n.p+"img/d3221fe-400.jpg",toString:function(){return n.p+"img/d3221fe-400.jpg"},placeholder:void 0,width:400,height:209}},633:function(t,e,n){"use strict";n.r(e);var r=n(220),o=n(231),c=n(237),h={name:"HomePage",components:{ArticleHero:r.a,ContentButtons:o.a,StreamGuide:c.a},data:function(){return{image:n(246),title:"Best Bollywood Romantic Comedies",article:[{text:"Hindi romantic comedies have given us some evergreen movies that will last a long time! The latest movies focus on breaking stereotypes and challenging society norms have gained popularity. We are seeing a culture where love literally knows no boundaries. 💖So, grab a snack and start watching from one of our top picks for Hindi Romantic comedies."},{custom:"Sharer"},{heading:"Hum Tum",text:"Karan and Rhea meet on a flight and end up hating each other. Things change between them when they continue to bump into each other.Hum Tum is an extremely modern and lighthearted romantic comedy. It is very well directed, beautifully shot, and is entertaining!",image:n(561),rating:7,buttons:[{type:"Prime",link:"https://www.primevideo.com/detail/Hum-Tum/0N4MSOGAXQY3K2AO7O0K85PBS3?ext_vrnc=hi&ref_=dvm_pds_gen_in_as_s_gt_dsastandardadgroups"}]},{heading:"2 States",text:"Coming from two very different cultures, Krish and Ananya try to convince their parents to bless their relationship before marriage. 2 States is a riveting tale of journey from love to marriage. Of laughter and tears, love and longing.",image:n(562),rating:6.9,buttons:[{type:"Hotstar",link:"https://www.hotstar.com/in/movies/2-states/1000034502/watch?utm_source=gwa"}]},{heading:"Pyaar ke Side Effects",text:"Sid, a commitment fearer, agrees to marry his girlfriend, Trisha. However, while negotiating other problems, they face a major hurdle when Trisha's father dislikes Sid. Rahul Bose can even pull off stupidity in an intelligent manner. Mallika Sherawat is good. An interesting watch!",image:n(563),rating:6.7,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70056686"}]},{heading:"Jab We Met",text:"Aditya, a heartbroken business tycoon, aimlessly boards a train to escape his depressing life. He meets Geet, a bubbly Punjabi girl, and gets pulled into her crazy life. Fresher than any romantic comedy you've seen , Jab We Met works because it delivers what it promises – a snug, heart-warming and relatable love story.",image:n(564),rating:7.9,buttons:[{type:"Prime",link:"https://www.primevideo.com/detail/amzn1.dv.gti.40b44d0c-4760-3773-5e98-b63d0c79b7e2/?ref_=dvm_pds_gen_in_as_s_gt_dtites354B5|c_413991889364_m_Tsfge8he-dc_s_"}]},{heading:"Wake Up Sid",text:"Siddharth Mehra, a spoilt and selfish college student, learns the meaning of life and the importance of responsibility from an aspiring writer from Kolkata. Refreshing and heart-warming, Wake Up Sid will put you in the mood for love.",image:n(565),rating:7.6,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70123119"}]},{heading:"Tanu Weds Manu",text:"Manu, an NRI doctor, comes to India in search of a bride and falls in love with Tanu. But Tanu, a fun-loving girl, has absolutely no plans of marrying him. A feel-good, light-hearted entertainer with the right dose of humour, drama and romance! Some really nice music just an additional topping.",image:n(566),rating:6.7,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70176968"}]},{heading:"Socha Na Tha",text:"Viren and Aditi reject each other when their families propose marriage. However, later they develop a bond of friendship, only to realise that they are in love. Literally, who ever thought that the first outing of love specialist Imtiaz Ali is an underrated and lesser known fantastic piece of cinema.",image:n(567),rating:7.5,buttons:[{type:"Prime",link:"https://www.primevideo.com/detail/0OBBOGV8P5V52OPEXPE43BYFDH/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07L7BMY63&qid=1585482359"}]},{heading:"Masaan",text:"In Varanasi, Devi struggles to shake off the social stigma of pre-marital sexual relations. Masaan is arguably one of the finest Bollywood films. Belonging to the elite cadre, the film bestows upon its viewers the varied satisfaction that meaningful cinema has to offer.",image:n(568),rating:8.1,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/80059331"}]}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},l=n(6),component=Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("ArticleHero",{attrs:{image:t.image}}),n("div",{staticClass:"content"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),n("StreamGuide"),t._l(t.article,(function(data,e){return n("div",{key:e,staticClass:"content__section"},["Sharer"===data.custom?n("Sharer",{attrs:{title:t.title}}):t._e(),data.custom?t._e():[n("div",{staticClass:"content__header"},[data.heading?n("h5",{staticClass:"content__heading"},[t._v(t._s(data.heading))]):t._e(),data.rating?n("div",{staticClass:"content__rating"},[n("b-icon",{attrs:{icon:"star",size:"is-small"}}),t._v(t._s(data.rating))],1):t._e()]),data.image?n("img",{staticClass:"content__image",attrs:{src:data.image}}):t._e(),"string"==typeof data.text?n("p",{staticClass:"content__text",domProps:{innerHTML:t._s(data.text)}}):t._e(),data.buttons?n("ContentButtons",{attrs:{buttons:data.buttons}}):t._e()]],2)})),n("StreamGuide"),n("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"0738edcc",null);e.default=component.exports}}]);