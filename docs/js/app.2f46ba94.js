(function(e){function a(a){for(var i,d,r=a[0],o=a[1],s=a[2],u=0,p=[];u<r.length;u++)d=r[u],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&p.push(n[d][0]),n[d]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);l&&l(a);while(p.length)p.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,a=0;a<c.length;a++){for(var t=c[a],i=!0,r=1;r<t.length;r++){var o=t[r];0!==n[o]&&(i=!1)}i&&(c.splice(a--,1),e=d(d.s=t[0]))}return e}var i={},n={app:0},c=[];function d(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=e,d.c=i,d.d=function(e,a,t){d.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,a){if(1&a&&(e=d(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)d.d(t,i,function(a){return e[a]}.bind(null,i));return t},d.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(a,"a",a),a},d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var s=0;s<r.length;s++)a(r[s]);var l=o;c.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"015a":function(e,a,t){"use strict";t("6b80")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("7a23"),n=Object(i["g"])("i",{class:"fa fa-shopping-cart"},null,-1),c=Object(i["f"])(),d=Object(i["g"])("span",{class:"w3-hide-small"},"Shopping Cart",-1);function r(e,a,t,r,o,s){var l=Object(i["w"])("Header"),u=Object(i["w"])("router-view"),p=Object(i["w"])("Footer");return Object(i["p"])(),Object(i["d"])(i["a"],null,[Object(i["g"])(l,null,{default:Object(i["C"])((function(){return[Object(i["g"])("a",{class:"w3-bar-item w3-button w3-hover-black w3-right",onClick:a[1]||(a[1]=function(e){return o.displayC()}),title:"Shppping Cart"},[Object(i["f"])(" ("+Object(i["y"])(o.nbProduct)+") ",1),n,c,d])]})),_:1}),Object(i["g"])(u),Object(i["g"])(p)],64)}var o=Object(i["E"])("data-v-0aa09ec6");Object(i["s"])("data-v-0aa09ec6");var s={class:"w3-top w3-card"},l={class:"w3-bar w3-white"},u=Object(i["g"])("i",{class:"fa fa-bars"},null,-1),p=Object(i["f"])("HOME"),b=Object(i["g"])("i",{class:"fa fa-th"},null,-1),w=Object(i["f"])(" SHOP"),v=Object(i["g"])("i",{class:"fa fa-envelope"},null,-1),g=Object(i["f"])(" CONTACT");Object(i["q"])();var f=o((function(e,a,t,n,c,d){var r=Object(i["w"])("router-link");return Object(i["p"])(),Object(i["d"])("div",s,[Object(i["g"])("div",l,[Object(i["g"])("a",{class:"w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-left",onClick:a[1]||(a[1]=function(e){return d.displayM()}),title:"Toggle Navigation Menu"},[u]),Object(i["v"])(e.$slots,"default"),Object(i["g"])(r,{to:{name:"Home"},class:"w3-bar-item w3-button w3-hide-small"},{default:o((function(){return[p]})),_:1}),Object(i["g"])(r,{to:{name:"Shop"},class:"w3-bar-item w3-button w3-hide-small"},{default:o((function(){return[b,w]})),_:1}),Object(i["g"])(r,{to:{name:"Contact"},class:"w3-bar-item w3-button w3-hide-small"},{default:o((function(){return[v,g]})),_:1})]),Object(i["D"])(Object(i["g"])("div",{onMouseleave:a[5]||(a[5]=function(e){return c.displayMenu=!1}),class:"w3-bar-block w3-white w3-hide-large w3-hide-medium"},[Object(i["g"])(r,{to:{name:"Home"},class:"w3-bar-item w3-button"},{default:o((function(){return[Object(i["g"])("span",{onClick:a[2]||(a[2]=function(e){return c.displayMenu=!1})},"HOME")]})),_:1}),Object(i["g"])(r,{to:{name:"Shop"},class:"w3-bar-item w3-button"},{default:o((function(){return[Object(i["g"])("span",{onClick:a[3]||(a[3]=function(e){return c.displayMenu=!1})},"SHOP")]})),_:1}),Object(i["g"])(r,{to:{name:"Contact"},class:"w3-bar-item w3-button"},{default:o((function(){return[Object(i["g"])("span",{onClick:a[4]||(a[4]=function(e){return c.displayMenu=!1})},"CONTACT")]})),_:1})],544),[[i["A"],1==c.displayMenu]])])})),m={name:"Header",data:function(){return{displayMenu:!1}},methods:{displayM:function(){this.displayMenu=!this.displayMenu}}};m.render=f,m.__scopeId="data-v-0aa09ec6";var O=m,j=Object(i["E"])("data-v-5270dfe9");Object(i["s"])("data-v-5270dfe9");var h={class:"w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off"},y=Object(i["e"])('<a href="#top" class="w3-button w3-light-grey" data-v-5270dfe9><i class="fa fa-arrow-up w3-margin-right" data-v-5270dfe9></i>To the top</a><div class="w3-xlarge w3-section" data-v-5270dfe9><i class="fa fa-facebook-official w3-hover-opacity" data-v-5270dfe9></i><i class="fa fa-instagram w3-hover-opacity" data-v-5270dfe9></i><i class="fa fa-snapchat w3-hover-opacity" data-v-5270dfe9></i><i class="fa fa-pinterest-p w3-hover-opacity" data-v-5270dfe9></i><i class="fa fa-twitter w3-hover-opacity" data-v-5270dfe9></i><i class="fa fa-linkedin w3-hover-opacity" data-v-5270dfe9></i></div>',2);Object(i["q"])();var q=j((function(e,a,t,n,c,d){return Object(i["p"])(),Object(i["d"])("footer",h,[y])})),C={name:"Footer",data:function(){return{}}};t("6b0b");C.render=q,C.__scopeId="data-v-5270dfe9";var k=C,_={name:"App",components:{Header:O,Footer:k},data:function(){return{nbProduct:1,displayCart:!1,displayC:function(){this.displayCart=!this.displayCart}}}};t("015a");_.render=r;var x=_,E=t("6c02"),M=Object(i["E"])("data-v-a7be510e");Object(i["s"])("data-v-a7be510e");var S=Object(i["g"])("div",{class:"bgimg-1 w3-display-container w3-opacity-min w3-animate-opacity",id:"top"},[Object(i["g"])("div",{class:"w3-display-middle",style:{"white-space":"nowrap"}},[Object(i["g"])("span",{class:"w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-animate-left"},[Object(i["f"])("MY "),Object(i["g"])("span",{class:"w3-hide-small"},"MINI"),Object(i["f"])(" VUE SITE")])])],-1),I={class:"w3-content w3-container w3-padding-32"},P=Object(i["g"])("h3",{class:"w3-center"},"We love Vue coding...",-1),H=Object(i["g"])("p",null,'We have created a fictional "shop" website/blog with Vue.js CLI v3... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',-1),T=Object(i["g"])("h3",{class:"w3-center w3-padding-32 w3-border-top"},"SPECIAL OFFERS !",-1),W={class:"w3-row"},D={class:"w3-col m6 w3-padding-large"},L={class:"w3-col m6 w3-padding-large"},F=Object(i["e"])('<p class="w3-large w3-center w3-padding-16" data-v-a7be510e>We are really good at:</p><p class="w3-wide" data-v-a7be510e><i class="fa fa-coffee" data-v-a7be510e></i>Drinking Coffee</p><div class="w3-light-grey" data-v-a7be510e><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%;" data-v-a7be510e>90%</div></div><p class="w3-wide" data-v-a7be510e><i class="fa fa-laptop" data-v-a7be510e></i>Web Developement</p><div class="w3-light-grey" data-v-a7be510e><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:85%;" data-v-a7be510e>85%</div></div><p class="w3-wide" data-v-a7be510e><i class="fa fa-gamepad" data-v-a7be510e></i>Gaming</p><div class="w3-light-grey" data-v-a7be510e><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%;" data-v-a7be510e>75%</div></div>',7);Object(i["q"])();var U=M((function(e,a,t,n,c,d){var r=Object(i["w"])("Product");return Object(i["p"])(),Object(i["d"])(i["a"],null,[S,Object(i["g"])("div",I,[P,H,T,Object(i["g"])("div",W,[Object(i["g"])("div",D,[Object(i["g"])(r)]),Object(i["g"])("div",L,[Object(i["g"])(r)])]),Object(i["g"])("img",{src:c.img,class:"w3-image"},null,8,["src"]),F])],64)})),A={name:"Home",data:function(){return{slides:["../assets/action-falling.jpg","../assets/building.jpg"],img:""}},methods:{},computed:{},created:function(){this.img=this.slides[0]}};t("fb2c");A.render=U,A.__scopeId="data-v-a7be510e";var V=A,N=Object(i["E"])("data-v-375d7add");Object(i["s"])("data-v-375d7add");var G={class:"w3-content w3-container w3-padding-64",id:"about"},R=Object(i["g"])("h3",{class:"w3-center"},"WELCOME TO THE SHOP",-1),J=Object(i["g"])("p",{class:"w3-center"},[Object(i["g"])("em",null,"I love coding...")],-1),Y=Object(i["g"])("p",null,'We have created a fictional "shop" website/blog with Vue.js CLI v3... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',-1),B=Object(i["g"])("h3",{class:"w3-center w3-border-top"},"SPECIAL OFFERS !",-1),$={class:"w3-row"},z={class:"w3-col m6 w3-padding-large"},K={class:"w3-col m6 w3-padding-large"},Q=Object(i["e"])('<p class="w3-large w3-center w3-padding-16" data-v-375d7add>We are really good at:</p><p class="w3-wide" data-v-375d7add><i class="fa fa-coffee" data-v-375d7add></i>Drinking Coffee</p><div class="w3-light-grey" data-v-375d7add><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%;" data-v-375d7add>90%</div></div><p class="w3-wide" data-v-375d7add><i class="fa fa-laptop" data-v-375d7add></i>Web Developement</p><div class="w3-light-grey" data-v-375d7add><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:85%;" data-v-375d7add>85%</div></div><p class="w3-wide" data-v-375d7add><i class="fa fa-gamepad" data-v-375d7add></i>Gaming</p><div class="w3-light-grey" data-v-375d7add><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%;" data-v-375d7add>75%</div></div>',7);Object(i["q"])();var X=N((function(e,a,t,n,c,d){var r=Object(i["w"])("Product");return Object(i["p"])(),Object(i["d"])("div",G,[R,J,Y,B,Object(i["g"])("div",$,[Object(i["g"])("div",z,[Object(i["g"])(r)]),Object(i["g"])("div",K,[Object(i["g"])(r)])]),Q])})),Z={name:"Shop",data:function(){return{}},methods:{},computed:{}};t("f377");Z.render=X,Z.__scopeId="data-v-375d7add";var ee=Z,ae=Object(i["E"])("data-v-3296710e");Object(i["s"])("data-v-3296710e");var te=Object(i["g"])("div",{class:"bgimg-1 w3-display-container w3-opacity-min",id:"home"},[Object(i["g"])("div",{class:"w3-display-middle",style:{"white-space":"nowrap"}},[Object(i["g"])("span",{class:"w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity"},[Object(i["f"])("MY "),Object(i["g"])("span",{class:"w3-hide-small"},"MINI"),Object(i["f"])(" VUE SITE")])])],-1),ie={class:"w3-content w3-container w3-padding-64",id:"about"},ne=Object(i["g"])("h3",{class:"w3-center"},"ABOUT THIS",-1),ce=Object(i["g"])("p",{class:"w3-center"},[Object(i["g"])("em",null,"I love coding...")],-1),de=Object(i["g"])("p",null,'We have created a fictional "shop" website/blog with Vue.js CLI v3... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',-1),re=Object(i["g"])("h3",{class:"w3-center w3-border-top"},"SPECIAL OFFERS !",-1),oe={class:"w3-row"},se={class:"w3-col m6 w3-padding-large"},le={class:"w3-col m6 w3-padding-large"},ue=Object(i["e"])('<p class="w3-large w3-center w3-padding-16" data-v-3296710e>We are really good at:</p><p class="w3-wide" data-v-3296710e><i class="fa fa-coffee" data-v-3296710e></i>Drinking Coffee</p><div class="w3-light-grey" data-v-3296710e><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%;" data-v-3296710e>90%</div></div><p class="w3-wide" data-v-3296710e><i class="fa fa-laptop" data-v-3296710e></i>Web Developement</p><div class="w3-light-grey" data-v-3296710e><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:85%;" data-v-3296710e>85%</div></div><p class="w3-wide" data-v-3296710e><i class="fa fa-gamepad" data-v-3296710e></i>Gaming</p><div class="w3-light-grey" data-v-3296710e><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%;" data-v-3296710e>75%</div></div>',7);Object(i["q"])();var pe=ae((function(e,a,t,n,c,d){var r=Object(i["w"])("Product");return Object(i["p"])(),Object(i["d"])(i["a"],null,[te,Object(i["g"])("div",ie,[ne,ce,de,re,Object(i["g"])("div",oe,[Object(i["g"])("div",se,[Object(i["g"])(r)]),Object(i["g"])("div",le,[Object(i["g"])(r)])]),ue])],64)})),be={name:"Contact",data:function(){return{}},methods:{},computed:{}};be.render=pe,be.__scopeId="data-v-3296710e";var we=be,ve=Object(E["a"])({history:Object(E["b"])(),routes:[{path:"",name:"Home",component:V},{path:"shop",name:"Shop",component:ee},{path:"contact",name:"Contact",component:we}]}),ge=ve,fe=Object(i["E"])("data-v-471b7af2"),me=fe((function(e,a,t,n,c,d){return Object(i["p"])(),Object(i["d"])("p",null,"Product")})),Oe={name:"Product",data:function(){return{}}};Oe.render=me,Oe.__scopeId="data-v-471b7af2";var je=Oe,he=Object(i["c"])(x);he.component("Product",je),he.use(ge),he.mount("#app")},"6b0b":function(e,a,t){"use strict";t("8618")},"6b80":function(e,a,t){},8618:function(e,a,t){},"9b73":function(e,a,t){},abdd:function(e,a,t){},f377:function(e,a,t){"use strict";t("9b73")},fb2c:function(e,a,t){"use strict";t("abdd")}});
//# sourceMappingURL=app.2f46ba94.js.map