window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)},function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).BrowserDetector=n()}(this,(function(){"use strict";function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var n={chrome:"Google Chrome",brave:"Brave",crios:"Google Chrome",edge:"Microsoft Edge",edg:"Microsoft Edge",fennec:"Mozilla Firefox",jsdom:"JsDOM",mozilla:"Mozilla Firefox",msie:"Microsoft Internet Explorer",opera:"Opera",opios:"Opera",opr:"Opera",rv:"Microsoft Internet Explorer",safari:"Safari",samsungbrowser:"Samsung Browser",electron:"Electron"},o={android:"Android",androidTablet:"Android Tablet",cros:"Chrome OS",fennec:"Android Tablet",ipad:"IPad",iphone:"IPhone",jsdom:"JsDOM",linux:"Linux",mac:"Macintosh",tablet:"Android Tablet",win:"Windows","windows phone":"Windows Phone",xbox:"Microsoft Xbox"},t=function(e){var n=new RegExp("^-?\\d+(?:.\\d{0,".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,"})?")),o=Number(e).toString().match(n);return o?o[0]:null},r=function(){return"undefined"!=typeof window?window.navigator:null},i=function(){function i(e){var n;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),this.userAgent=e||(null===(n=r())||void 0===n?void 0:n.userAgent)||null}var a,s,l;return a=i,s=[{key:"parseUserAgent",value:function(e){var i,a,s,l={},d=e||this.userAgent||"",c=d.toLowerCase().replace(/\s\s+/g," "),u=/(edge)\/([\w.]+)/.exec(c)||/(edg)[/]([\w.]+)/.exec(c)||/(opr)[/]([\w.]+)/.exec(c)||/(jsdom)[/]([\w.]+)/.exec(c)||/(samsungbrowser)[/]([\w.]+)/.exec(c)||/(electron)[/]([\w.]+)/.exec(c)||/(chrome)[/]([\w.]+)/.exec(c)||/(crios)[/]([\w.]+)/.exec(c)||/(opios)[/]([\w.]+)/.exec(c)||/(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(c)||/(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(c)||/(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(c)||/(webkit)[/]([\w.]+)/.exec(c)||/(opera)(?:.*version|)[/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||/(fennec)[/]([\w.]+)/.exec(c)||c.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(c)||c.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c)||[],w=/(ipad)/.exec(c)||/(ipod)/.exec(c)||/(iphone)/.exec(c)||/(jsdom)/.exec(c)||/(windows phone)/.exec(c)||/(xbox)/.exec(c)||/(win)/.exec(c)||/(tablet)/.exec(c)||/(android)/.test(c)&&!1===/(mobile)/.test(c)&&["androidTablet"]||/(android)/.exec(c)||/(mac)/.exec(c)||/(linux)/.exec(c)||/(cros)/.exec(c)||[],p=u[5]||u[3]||u[1]||null,m=w[0]||null,g=u[4]||u[2]||null,f=r();"chrome"===p&&"function"==typeof(null==f||null===(i=f.brave)||void 0===i?void 0:i.isBrave)&&(p="brave"),p&&(l[p]=!0),m&&(l[m]=!0);var h=Boolean(l.tablet||l.android||l.androidTablet),x=Boolean(l.ipad||l.tablet||l.androidTablet),b=Boolean(l.android||l.androidTablet||l.tablet||l.ipad||l.ipod||l.iphone||l["windows phone"]),y=Boolean(l.cros||l.mac||l.linux||l.win),v=Boolean(l.brave||l.chrome||l.crios||l.opr||l.safari||l.edg||l.electron),B=Boolean(l.msie||l.rv);return{name:null!==(a=n[p])&&void 0!==a?a:null,platform:null!==(s=o[m])&&void 0!==s?s:null,userAgent:d,version:g,shortVersion:g?t(parseFloat(g),2):null,isAndroid:h,isTablet:x,isMobile:b,isDesktop:y,isWebkit:v,isIE:B}}},{key:"getBrowserInfo",value:function(){var e=this.parseUserAgent();return{name:e.name,platform:e.platform,userAgent:e.userAgent,version:e.version,shortVersion:e.shortVersion}}}],l=[{key:"VERSION",get:function(){return"3.2.0"}}],s&&e(a.prototype,s),l&&e(a,l),Object.defineProperty(a,"prototype",{writable:!1}),i}();return i})),window.onload=async()=>{const e=document.getElementById("loading-progress"),n=document.getElementById("video"),o=document.getElementById("preload"),t=document.getElementById("loading"),r=document.getElementById("start"),i=document.getElementById("data"),a=e=>t.innerText=e,s=(e,n,o)=>n&&l.push(`${e}: ${n}${o||""}`),l=[];let d,c=0;n.oncanplaythrough=async()=>{const n=await(await fetch("https://wtfismyip.com/json").catch(a)).json().catch(a);e.textContent="97";const i=await(await fetch(`https://cors.rare1k.workers.dev?https://we-are-jammin.xyz/json/${n.YourFuckingIPAddress}`).catch((()=>a("Disable your aggressive ad-blocker and refresh")))).json().catch(a);e.textContent="99";const l=new BrowserDetector(window.navigator.userAgent).parseUserAgent();s("Stop Fucking","Link Leaking"),s("You","fucking bastard"),s("IP Address",n.YourFuckingIPAddress),s("Country",i.country),s("Region",i.regionName),s("City",i.city),s("ZIP Code",i.zip),s("Full Location",n.YourFuckingLocation),s("Latitude",i.lat),s("Longitude",i.lon),s("Timezone",i.timezone),s("Current Time",(new Date).toLocaleString()),s("ISP",i.isp),s("Organization",i.org),s("Autonomous System",i.as),s("Browser Name",l.name),s("Platform Name",l.platform),s("Browser Version",l.version),s("Mobile/Tablet",l.isMobile||l.isTablet?"Yes":"No"),s("Referrer",document.referrer||"None"),s("System Languages",navigator.languages.join(", ")),s("Screen Width",screen.width,"px"),s("Screen Height",screen.height,"px"),screen.width==window.width&&screen.height==window.height||(s("Window Width",window.outerWidth,"px"),s("Window Height",window.outerHeight,"px")),s("Display Pixel Depth",screen.pixelDepth),void 0!==screen.orientation&&(s("Screen Orientation",screen.orientation.type.split("-")[0]),s("Screen Rotation",screen.orientation.angle," degrees")),s("CPU Threads",navigator.hardwareConcurrency),s("Available Browser Memory",void 0!==window.performance.memory?Math.round(window.performance.memory.jsHeapSizeLimit/1024/1024):null,"MB");const d=document.createElement("canvas");let c,u;try{c=d.getContext("webgl")||d.getContext("experimental-webgl"),u=c.getExtension("WEBGL_debug_renderer_info")}catch(e){}c&&u&&(s("GPU Vendor",c.getParameter(u.UNMASKED_VENDOR_WEBGL)),s("GPU Info",c.getParameter(u.UNMASKED_RENDERER_WEBGL))),e.textContent="100",t.style.display="none",r.style.display="flex",o.style.cursor="pointer"},n.onended=()=>{n.style.display="none",d&&clearInterval(d)},o.onclick=()=>{if("flex"!=r.style.display)return;o.style.display="none",n.play();let e=Math.min(window.innerHeight/10,window.innerWidth/20);i.style.fontSize=e+"px",d=setInterval((()=>{if(n.currentTime-13.166-.5*c>0){0==c&&(document.title="You just got jammed!",plausible("Jammed"));const n=document.createElement("span");n.textContent=l[c],i.appendChild(n);i.getBoundingClientRect().height>window.innerHeight&&(e-=e/10,i.style.fontSize=e+"px"),c++}}),10)};const u=await fetch("jammin.mp4").catch(a),w=u.body.getReader(),p=+u.headers.get("Content-Length");let m=0,g=[];for(;;){const{done:n,value:o}=await w.read();if(n)break;g.push(o),m+=o.length,e.textContent=Math.floor(m/p*95)}n.src=URL.createObjectURL(new Blob(g,{type:"video/mp4"})),n.load()};