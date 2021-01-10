(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c(15),l=c.n(n),r=c(3),i=function(){return Object(a.jsx)("div",{className:"bg-black h-screen flex justify-center items-center",children:Object(a.jsx)("i",{className:"fas fa-cloud text-white text-8xl animate-bounce"})})},o=c(1),d=o.useEffect,u=o.useState,j=c(16),b=c.n(j),x=c(4),h=c(6),f=function(e){var t=e.seturl,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(s.useState)(e),c=Object(r.a)(t,2),a=c[0],n=c[1];return[a,function(e){var t=e.target;n(Object(h.a)(Object(h.a)({},a),{},Object(x.a)({},t.name,t.value)))},function(){n(e)}]}({search:""}),n=Object(r.a)(c,3),l=n[0].search,i=n[1],o=n[2];return Object(a.jsx)("div",{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),t("https://api.openweathermap.org/data/2.5/weather?q=".concat(l,"&units=metric&appid=40417ac8bbdde73fc8fe4dc13d601662")),o()},className:"w-50 h-7 md:w-72 md:h-8 outline-none",children:Object(a.jsx)("input",{className:"shadow-lg text-green rounded-3xl w-full h-full outline-none text-center",type:"search",name:"search",onChange:i,value:l,autoComplete:"off",placeholder:"Enter your city"})})})},m=function(){var e=function(){var e=u({latitude:46,longitude:78}),t=Object(r.a)(e,2),c=t[0],a=t[1];return d((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,c=e.coords.longitude;a({latitude:t,longitude:c})}),(function(){console.log("you can activate tracking")}),{enableHighAccuracy:!0})}),[c.latitude,c.longitude]),{latitude:c.latitude,longitude:c.longitude}}(),t=e.latitude,c=e.longitude,n=Object(s.useState)(null),l=Object(r.a)(n,2),o=l[0],j=l[1];Object(s.useEffect)((function(){j("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(c,"&units=metric&appid=40417ac8bbdde73fc8fe4dc13d601662"))}),[t,c]);var x=function(e){var t=Object(s.useState)({data:null,loading:!0,error:null}),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){e&&b.a.get(e).then((function(e){"OK"===e.statusText?n({error:null,data:e.data,loading:!1}):console.log("object")}))}),[e]),a}(o),h=x.data,m=x.loading,p=h||"",O=p.weather,g=p.main,y=p.name,w=p.sys,v=p.wind,N=p.visibility;return m?Object(a.jsx)(i,{}):Object(a.jsxs)("div",{className:"flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-700 via-blue-400 to-grey-400",children:[Object(a.jsx)(f,{seturl:j}),Object(a.jsxs)("div",{className:"w-10/12 mt-10 h-3/5 h-200 shadow-xl bg-white sm:w-5/12 rounded-2xl p-2 bg-opacity-20 blur-50 relative text-gray-700 bg-clip-padding",children:[Object(a.jsx)("header",{className:"w-12/12 border-b border-gray-700 border-opacity-30 mt-0 text-center",children:Object(a.jsxs)("h2",{children:[y,"-",w.country]})}),Object(a.jsxs)("main",{className:"flex mt-5 text-center flex-col md:items-center md:flex-row md:justify-evenly md:w-full sm:",children:[Object(a.jsxs)("span",{className:"text-8xl md:text-9xl",children:[Math.round(g.temp),"\xb0"]}),Object(a.jsxs)("div",{className:"flex flex-col justify-center text-2xl md:text-3xl",children:[Object(a.jsxs)("p",{className:"flex flex-row justify-center items-center",children:[O[0].description,Object(a.jsx)("img",{width:"50px",src:"https://openweathermap.org/img/wn/".concat(O[0].icon,"@2x.png"),alt:"icon"})]}),Object(a.jsxs)("p",{children:["feels like ",Math.round(g.feels_like),"\xb0"]})]})]}),Object(a.jsxs)("ul",{className:"text-center text-sm sm:text-xl h-28 absolute w-full left-0 bottom-0 rounded-2xl flex flex-row justify-between sm:h-32",children:[Object(a.jsxs)("li",{className:"flex flex-col border-opacity-30  border-r-2 border-gray-400 w-3/12",children:[Object(a.jsx)("span",{className:"h-2/5",children:"Pressure"}),Object(a.jsx)("span",{className:"h-3/5",children:g.pressure})]}),Object(a.jsxs)("li",{className:"flex flex-col border-opacity-30  justify-evenly border-gray-400 border-r-2 w-3/12",children:[Object(a.jsx)("span",{className:"h-2/5",children:"Humidity"}),Object(a.jsxs)("span",{className:"h-3/5",children:[g.humidity,"%"]})]}),Object(a.jsxs)("li",{className:"flex flex-col border-opacity-30  justify-evenly border-gray-400 border-r-2 w-3/12",children:[Object(a.jsx)("span",{className:"h-2/5 font-xs",children:"Wind"}),Object(a.jsxs)("span",{className:"h-3/5",children:[v.speed,"km/h"]})]}),Object(a.jsxs)("li",{className:"flex border-opacity-30  flex-col justify-evenly w-3/12",children:[Object(a.jsx)("span",{className:"h-2/5",children:"Visibility"}),Object(a.jsxs)("span",{className:"h-3/5",children:[N.toString().slice(0,-2),"%"]})]})]})]})]})};c(40);l.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bcb6e53b.chunk.js.map