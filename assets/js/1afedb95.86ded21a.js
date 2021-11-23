(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[574],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=i,h=s["".concat(p,".").concat(u)]||s[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3774:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),l=["components"],o={id:"imagemodule.image",title:"Interface: Image",sidebar_label:"Image",custom_edit_url:null},p={unversionedId:"api/core/interfaces/imagemodule.image",id:"api/core/interfaces/imagemodule.image",isDocsHomePage:!1,title:"Interface: Image",description:"ImageModule.Image",source:"@site/docs/api/core/interfaces/imagemodule.image.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/imagemodule.image",permalink:"/docs/api/core/interfaces/imagemodule.image",editUrl:null,version:"current",sidebar_label:"Image",frontMatter:{id:"imagemodule.image",title:"Interface: Image",sidebar_label:"Image",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: ImageData",permalink:"/docs/api/core/interfaces/canvasview.imagedata"},next:{title:"Interface: MobileModel",permalink:"/docs/api/core/interfaces/mobilemodelmodule.mobilemodel"}},d=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"ID",id:"id",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getHeight",id:"getheight",children:[]},{value:"getNaturalHeight",id:"getnaturalheight",children:[]},{value:"getNaturalWidth",id:"getnaturalwidth",children:[]},{value:"getPixelDensity",id:"getpixeldensity",children:[]},{value:"getWidth",id:"getwidth",children:[]},{value:"release",id:"release",children:[]},{value:"scale",id:"scale",children:[]}]}],c={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/modules/imagemodule"},"ImageModule"),".Image"),(0,r.kt)("p",null,"An image is a high-level data type, which can be used for model inference\nwith ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/mobilemodelmodule.mobilemodel#execute"},"MobileModel.execute")," or it can be drawn on a [","[Canvas.drawImage]","]."),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")," object in JavaScript is a reference to a native image object\nwrapped in ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/modules/nativejsref"},"NativeJSRef"),". The image data is not transferred over the React\nNative Bridge, but it offers functions to manipulate the image. All\nfunctions are executed ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," in native."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Eventually, this will change with the introduction of the new React Native\narchitecture including JSI, Fabric, and TurboModules."))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},"Image")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"id"},"ID"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The internal ID for the object instance in native. Instead of serializing\nthe object in native and sending it via the React Native Bridge, each\nnative object will be assigned an ID which is sent to JavaScript instead.\nThe ID will be used to reference the native object instance when calling\nfunctions on the JavaScript object."),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/nativejsref.nativejsref-1#id"},"ID")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/NativeJSRef.ts#L64"},"NativeJSRef.ts:64")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getheight"},"getHeight"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getHeight"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Get the height of an image (in pixel)."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/ImageModule.ts#L44"},"ImageModule.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getnaturalheight"},"getNaturalHeight"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getNaturalHeight"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Get the natural height of an image (in pixel)."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/ImageModule.ts#L54"},"ImageModule.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getnaturalwidth"},"getNaturalWidth"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getNaturalWidth"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Get the natural width of an image (in pixel)."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/ImageModule.ts#L59"},"ImageModule.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpixeldensity"},"getPixelDensity"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPixelDensity"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Get the pixel density for this image. The ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," multiplied\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},"pixelDensity")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"naturalWidth")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"naturalHeight"),"."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/ImageModule.ts#L65"},"ImageModule.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getwidth"},"getWidth"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getWidth"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Get the width of an image (in pixel)."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/ImageModule.ts#L49"},"ImageModule.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"release"},"release"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"release"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,r.kt)("p",null,"Until explicitly released, an ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")," will have a reference in memory.\nNot calling ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image#release"},"Image.release")," can eventually result in an\n",(0,r.kt)("inlineCode",{parentName:"p"},"OutOfMemoryException"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While this is an ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function, it does not need to be ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),"ed. For\nexample, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GC")," on Android will eventually free the allocated memory."))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/ImageModule.ts#L79"},"ImageModule.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scale"},"scale"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"scale"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sy"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),">"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image#scale"},"Image.scale")," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")," API adds a scaling\ntransformation horizontally and/or vertically. For instance, a scaling\nfactor of ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," results in a unit size of ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," pixels; the image is thus\nat half the normal size. Similarly, a scaling factor of ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0")," increases\nthe unit size so that one unit becomes two pixels; images are thus at\ntwice the normal size."),(0,r.kt)("p",null,"The method will apply the scaling on a copy of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")," and return\nthe scaled ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")," asynchronously."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis. A value of ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," results in no horizontal scaling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sy")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Scaling factor in the vertical direction. A negative value flips pixels across the horizontal axis. A value of ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," results in no vertical scaling.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6c7e672/react-native-pytorch-core/src/ImageModule.ts#L95"},"ImageModule.ts:95")))}m.isMDXComponent=!0}}]);