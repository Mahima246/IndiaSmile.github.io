(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{212:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(70);var o=n(87);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,n){"use strict";var r=n(212);n.n(r).a},217:function(t,e,n){(e=n(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,n){"use strict";var r=n(213);n.n(r).a},219:function(t,e,n){(e=n(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,n){"use strict";var r=n(86),o=(n(69),n(215)),c=(n(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(o.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),h=(n(216),n(6)),l=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-container"},[n("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,r){return e.length>1?n("li",{key:r,staticClass:"crumb",class:{"is-active":t.items.length===r+1}},[n("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(r)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,d={components:{Header:r.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},m=(n(218),Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},222:function(t,e,n){"use strict";n(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},223:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("f78dfddc",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4b1ff140",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r=n(223);n.n(r).a},230:function(t,e,n){(e=n(15)(!1)).push([t.i,".button--extra[data-v-311ef926]{padding-top:calc(.75em - 1px);height:2.625em;border:0}[data-v-311ef926] .sm{display:block;font-size:.5em;line-height:1em;text-transform:uppercase;position:absolute;top:.75em;color:hsla(0,0%,100%,.75)}.button--android[data-v-311ef926]{background:#a4c639;color:#fff;border:0}.button--netflix[data-v-311ef926]{background:#e50914;color:#fff}.button--google[data-v-311ef926]{background:#3bccff;color:#fff}.button--hotstar[data-v-311ef926]{background:#048f70;color:#fff}.button--prime[data-v-311ef926]{background:#00a8e1;color:#fff}",""]),t.exports=e},231:function(t,e,n){"use strict";var r=n(222),o={props:{text:{type:String,required:!0},href:{type:String,required:!1,default:"#"},type:{type:String,required:!1,default:""}},computed:{element:function(){return"#"===this.href?"span":Object(r.a)(this.href)?"a":"nuxt-link"},parentAttributes:function(){return"a"===this.element?{href:this.href,target:"_blank",rel:"nofollow"}:"nuxt-link"===this.element?{to:this.href}:{}},buttonAttributes:function(){var t={ios:{type:"is-black","icon-left":"apple"},android:{class:"button--android","icon-left":"google-play"},netflix:{"icon-left":"netflix",class:"button--extra"},prime:{"icon-left":"amazon",class:"button--extra"},hotstar:{"icon-left":"star-outline",class:"button--extra"},google:{"icon-left":"google",class:"button--extra"},default:{type:"is-primary",outlined:!0,"icon-left":"web"}},e=t[this.type];return e&&e.class&&(e.class+=" button--"+this.type),t[this.type]||t.default},content:function(){var t={android:"Android",ios:"iOS",netflix:'<span class="sm">Watch on</span><span class="text">Netflix</span>',google:'<span class="sm">Watch on</span><span class="text">Google</span>',hotstar:'<span class="sm">Watch on</span><span class="text">Hotstar</span>',prime:'<span class="sm">Watch on</span><span class="text">Prime</span>',default:""};return this.text||t[this.type]||this.type||t.default}}},c=(n(229),n(6)),h={name:"ContentButtons",components:{Button:Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e(this.element,this._b({tag:"component",staticClass:"wrapper"},"component",this.parentAttributes,!1),[e("b-button",this._b({},"b-button",this.buttonAttributes,!1),[e("span",{domProps:{innerHTML:this._s(this.content)}})])],1)}),[],!1,null,"311ef926",null).exports},props:{buttons:{type:Array,required:!0}}},l=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return this.buttons?e("div",{staticClass:"content__buttons"},this._l(this.buttons,(function(button,t){return e("Button",{key:t,staticClass:"content__buttons__item",attrs:{text:button.text||"",type:button.type?button.type.toLowerCase():"",href:button.link}})})),1):this._e()}),[],!1,null,null,null);e.a=l.exports},234:function(t,e,n){"use strict";var r=n(225);n.n(r).a},235:function(t,e,n){(e=n(15)(!1)).push([t.i,".stream-guide[data-v-3c3b0664]{font-size:.875em;padding:1em;display:block;margin:0 0 -1.5em;background:#fad550;color:inherit;opacity:.75}",""]),t.exports=e},237:function(t,e,n){"use strict";n(234);var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"stream-guide",attrs:{href:"https://bit.ly/IndiaSmile-WatchForFree",target:"_blank",rel:"nofollow"}},[e("strong",[e("u",[this._v("Watch For Free Guide")]),this._v(" 🎉")]),this._v(" Learn how to watch any movie or tv show for free at any time. Just ask "),e("strong",[e("u",[this._v("any tech savvy")]),this._v(" family member")]),this._v(" to follow this 2 minute guide 🥳")])}],!1,null,"3c3b0664",null);e.a=component.exports},419:function(t,e,n){t.exports={srcSet:n.p+"img/1ecfb2d-400.jpg 400w,"+n.p+"img/b324a71-800.jpg 800w,"+n.p+"img/f8b4b12-1280.jpg 1280w",images:[{path:n.p+"img/1ecfb2d-400.jpg",width:400,height:225},{path:n.p+"img/b324a71-800.jpg",width:800,height:450},{path:n.p+"img/f8b4b12-1280.jpg",width:1280,height:720}],src:n.p+"img/1ecfb2d-400.jpg",toString:function(){return n.p+"img/1ecfb2d-400.jpg"},placeholder:void 0,width:400,height:225}},569:function(t,e,n){t.exports={srcSet:n.p+"img/1b3c5d0-400.jpg 400w,"+n.p+"img/8b06831-660.jpg 660w",images:[{path:n.p+"img/1b3c5d0-400.jpg",width:400,height:242},{path:n.p+"img/8b06831-660.jpg",width:660,height:400}],src:n.p+"img/1b3c5d0-400.jpg",toString:function(){return n.p+"img/1b3c5d0-400.jpg"},placeholder:void 0,width:400,height:242}},570:function(t,e,n){t.exports={srcSet:n.p+"img/50d8b7b-400.jpg 400w,"+n.p+"img/60885f8-800.jpg 800w,"+n.p+"img/f75e6dd-1600.jpg 1600w",images:[{path:n.p+"img/50d8b7b-400.jpg",width:400,height:225},{path:n.p+"img/60885f8-800.jpg",width:800,height:450},{path:n.p+"img/f75e6dd-1600.jpg",width:1600,height:900}],src:n.p+"img/50d8b7b-400.jpg",toString:function(){return n.p+"img/50d8b7b-400.jpg"},placeholder:void 0,width:400,height:225}},571:function(t,e,n){t.exports={srcSet:n.p+"img/2f04c1b-400.jpg 400w,"+n.p+"img/a568e6e-800.jpg 800w,"+n.p+"img/8dd086e-1200.jpg 1200w",images:[{path:n.p+"img/2f04c1b-400.jpg",width:400,height:222},{path:n.p+"img/a568e6e-800.jpg",width:800,height:445},{path:n.p+"img/8dd086e-1200.jpg",width:1200,height:667}],src:n.p+"img/2f04c1b-400.jpg",toString:function(){return n.p+"img/2f04c1b-400.jpg"},placeholder:void 0,width:400,height:222}},572:function(t,e,n){t.exports={srcSet:n.p+"img/91dd47f-400.jpg 400w,"+n.p+"img/0fb52d5-800.jpg 800w,"+n.p+"img/7fcd969-1280.jpg 1280w",images:[{path:n.p+"img/91dd47f-400.jpg",width:400,height:225},{path:n.p+"img/0fb52d5-800.jpg",width:800,height:450},{path:n.p+"img/7fcd969-1280.jpg",width:1280,height:720}],src:n.p+"img/91dd47f-400.jpg",toString:function(){return n.p+"img/91dd47f-400.jpg"},placeholder:void 0,width:400,height:225}},573:function(t,e,n){t.exports={srcSet:n.p+"img/05d4f5f-400.jpg 400w,"+n.p+"img/7b9adc7-650.jpg 650w",images:[{path:n.p+"img/05d4f5f-400.jpg",width:400,height:222},{path:n.p+"img/7b9adc7-650.jpg",width:650,height:361}],src:n.p+"img/05d4f5f-400.jpg",toString:function(){return n.p+"img/05d4f5f-400.jpg"},placeholder:void 0,width:400,height:222}},574:function(t,e,n){t.exports={srcSet:n.p+"img/c150aea-400.jpg 400w,"+n.p+"img/a9ce632-770.jpg 770w",images:[{path:n.p+"img/c150aea-400.jpg",width:400,height:225},{path:n.p+"img/a9ce632-770.jpg",width:770,height:433}],src:n.p+"img/c150aea-400.jpg",toString:function(){return n.p+"img/c150aea-400.jpg"},placeholder:void 0,width:400,height:225}},575:function(t,e,n){t.exports={srcSet:n.p+"img/479e9aa-265.jpg 265w",images:[{path:n.p+"img/479e9aa-265.jpg",width:265,height:190}],src:n.p+"img/479e9aa-265.jpg",toString:function(){return n.p+"img/479e9aa-265.jpg"},placeholder:void 0,width:265,height:190}},576:function(t,e,n){t.exports={srcSet:n.p+"img/2cb828c-400.jpg 400w,"+n.p+"img/454381f-800.jpg 800w",images:[{path:n.p+"img/2cb828c-400.jpg",width:400,height:250},{path:n.p+"img/454381f-800.jpg",width:800,height:500}],src:n.p+"img/2cb828c-400.jpg",toString:function(){return n.p+"img/2cb828c-400.jpg"},placeholder:void 0,width:400,height:250}},577:function(t,e,n){t.exports={srcSet:n.p+"img/8ea1015-400.jpg 400w,"+n.p+"img/66b97ba-480.jpg 480w",images:[{path:n.p+"img/8ea1015-400.jpg",width:400,height:300},{path:n.p+"img/66b97ba-480.jpg",width:480,height:360}],src:n.p+"img/8ea1015-400.jpg",toString:function(){return n.p+"img/8ea1015-400.jpg"},placeholder:void 0,width:400,height:300}},578:function(t,e,n){t.exports={srcSet:n.p+"img/2018858-400.jpg 400w,"+n.p+"img/5422b8b-647.jpg 647w",images:[{path:n.p+"img/2018858-400.jpg",width:400,height:250},{path:n.p+"img/5422b8b-647.jpg",width:647,height:404}],src:n.p+"img/2018858-400.jpg",toString:function(){return n.p+"img/2018858-400.jpg"},placeholder:void 0,width:400,height:250}},632:function(t,e,n){"use strict";n.r(e);var r=n(220),o=n(231),c={name:"HomePage",components:{StreamGuide:n(237).a,ContentButtons:o.a,ArticleHero:r.a},data:function(){return{image:n(419),title:"Best Bollywood Thrillers",article:[{text:'<span class="js--h">Here are Bollywood’s best suspense thrillers that you can watch! Filled with power packed performances ensuring that the viewers stay glued to the screen anticipating the next move!</span>'},{heading:"Madras Cafe",text:"An Indian intelligence agent who visits Sri Lanka on a secret mission, finds himself in the middle of a civil war and amidst a conspiracy to kill the former prime minister of India. A beautiful and brilliantly executed movie! It might simply be John Abraham's best work. Excellent direction and screenplay.",image:n(569),rating:7.7,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70293703"}]},{custom:"Sharer"},{heading:"Baby",text:"An elite team of the Indian intelligence system perpetually strives to detect and eliminate terrorists and their plots. Officer Ajay leads a team to destroy one such potentially lethal operation. It is an action packed movie made very skilfully. The acting department is very astute in essence and ability. The direction is superb with good music.",image:n(570),rating:8,buttons:[{type:"Hotstar",link:"https://www.hotstar.com/in/movies/baby/1000053838/watch?utm_source=gwa"}]},{heading:"Andhadhun",text:"Akash, a piano player pretending to be blind, unwittingly becomes involved in a number of problems as he witnesses the murder of a former film actor. For the better part of the film, you'll be glued to the screen, reluctant to so much as peek at your phone for fear of missing a crucial moment. A fresh edge to Bollywood’s list of thrillers.",image:n(571),rating:8.3,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/81039381"}]},{heading:"Race",text:"Two stepbrothers own a huge farm and horse racing business. When they learn that they have a common love interest, one of them tries to kill the other and inherit the insurance. The movie digs deep into the darker side of the human psyche and come up with another thrilling study of wickedness and thrill.",image:n(572),rating:6.7,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70096752"}]},{heading:"Badlapur",text:"Raghu loses his wife and son after they become victims of a bank robbery conducted. He decides to take revenge for the murder of his family. It's a different kind of concept, not the kind you would expect from a regular Bollywood film. It does keep you on the edge, as to what would happen next! It also teaches us that revenge can be a very powerful force that can consume an individual wholly!",image:n(573),rating:7.4,buttons:[{type:"Prime",link:"https://www.amazon.com/Badlapur-Divya-Dutta/dp/B0789VCQTL"}]},{heading:"Gangs of Wasseypur",text:"A gangster clashes with the ruthless, coal-mining kingpin who killed his father. The famous gliding camera moves, brutal action and dizzying revenge plotting, is just thrilling and makes you want it to never end!",image:n(574),rating:8.2,buttons:[{type:"Prime",link:"https://www.primevideo.com/detail/amzn1.dv.gti.a6b58658-eeb3-e776-a625-eaf019d6cf70/?ref_=dvm_pds_gen_in_as_s_gt_dtites193E4|c_413280970983_m_hmLr9fOC-dc_s_"}]},{heading:"No Smoking",text:"A chain-smoker visits a rehabilitation centre to quit smoking. He is released after he signs a cheque for 21 lakh rupees and is warned that his family will be killed if he dares to smoke again. No Smoking is not your traditional movie. In the truest of sense, there could not have been any better addiction movie than No Smoking.",image:n(575),rating:7.2,buttons:[{type:"Prime",link:"https://www.amazon.com/No-Smoking-Ayesha-Takia/dp/B0789WP9ZZ"}]},{heading:"Wazir",text:"When his daughter is killed by the terrorist he is chasing, Daanish, a cop, swears to seek revenge. He finds a confidante in Pandit, an unassuming grand master, also mourning the loss of his daughter. Wazir is more enjoyable because of the chemistry between the two male leads than anything else.",image:n(576),rating:7.1,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/80094096"}]},{heading:"Ghajini",text:"A successful industrialist suffering from acute short-term memory loss, is unable to remember anything after fifteen minutes. With a bunch of polaroids and tattoos on his body, he sets out to find his lover's killer. You are purely heartless if you don't cry watching this movie.",image:n(577),rating:6.4,message:"Available on Indian streaming platforms"},{heading:"Te3n",text:"A 70-year-old man, seeks help from a priest and a police officer in his quest to find the people who kidnapped and killed his granddaughter. This medium paced suspense film which starts off with a strong plot, balances itself to deliver strong performances and are able to get their message across well.",image:n(578),rating:7.3,message:"Available on Indian streaming platforms"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},h=n(6),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("ArticleHero",{attrs:{image:t.image}}),n("div",{staticClass:"content"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),n("StreamGuide"),t._l(t.article,(function(data,e){return n("div",{key:e,staticClass:"content__section"},["Sharer"===data.custom?n("Sharer",{attrs:{title:t.title}}):t._e(),data.custom?t._e():[n("div",{staticClass:"content__header"},[data.heading?n("h5",{staticClass:"content__heading"},[t._v(t._s(data.heading))]):t._e(),data.rating?n("div",{staticClass:"content__rating"},[n("b-icon",{attrs:{icon:"star",size:"is-small"}}),t._v(t._s(data.rating))],1):t._e()]),data.image?n("img",{staticClass:"content__image",attrs:{src:data.image}}):t._e(),"string"==typeof data.text?n("p",{staticClass:"content__text",domProps:{innerHTML:t._s(data.text)}}):t._e(),data.buttons?n("ContentButtons",{attrs:{buttons:data.buttons}}):t._e()]],2)})),n("StreamGuide"),n("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"12256f6f",null);e.default=component.exports}}]);