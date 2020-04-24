(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(4),c=a.n(i),o=(a(15),a(2)),s=a.n(o),m=a(5),l=a(6),u=a(7),d=a(9),h=a(8),p=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"title-container__title"},"What's the weather today?"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",{className:"title-container__subtitle"},"Know the weather in your area, forecast and much more...."))},v=function(e){return n.a.createElement("form",{onSubmit:e.getWeather},n.a.createElement("input",{type:"text",name:"zip",placeholder:"Zipcode..."}),n.a.createElement("button",null,"Get Weather"))},y=function(e){return n.a.createElement("div",{className:"weather__info"},e.city&&e.country&&n.a.createElement("p",{className:"weather__key"}," ","Location:",n.a.createElement("span",{className:"weather__value"}," ",e.city,", ",e.country)),e.temperature&&n.a.createElement("p",{className:"weather__key"}," ","Temperature:",n.a.createElement("span",{className:"weather__value"}," ",e.temperature," ")),e.humidity&&n.a.createElement("p",{className:"weather__key"}," ","Humidity:",n.a.createElement("span",{className:"weather__value"}," ",e.humidity," ")),e.description&&n.a.createElement("p",{className:"weather__key"}," ","Conditions:",n.a.createElement("span",{className:"weather__value"}," ",e.description," ")),e.description&&n.a.createElement("p",{className:"weather__key"}," ","Current Time:",n.a.createElement("span",{className:"weather__value"}," ",e.time," ")),e.error&&n.a.createElement("p",{className:"weather__error"},e.error))},w=a(1),E=a.n(w),f=(a(18),a(21),"f5c71672d1aae94b50968e5701eb9f9f"),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,time:void 0,error:void 0},e.getWeather=function(){var t=Object(m.a)(s.a.mark((function t(a){var r,n,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=a.target.elements.zip.value,n="US",t.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&appid=").concat(f,"&units=Imperial"));case 5:return i=t.sent,t.next=8,i.json();case 8:c=t.sent,console.log(c.cod),r&&n?200!==c.cod?e.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,time:void 0,error:"Please enter the correct zipcode!"}):e.setState({temperature:c.main.temp+" F",city:c.name,country:c.sys.country,humidity:c.main.humidity+"%",description:c.weather[0].description,time:E()().utcOffset(c.timezone/60).format("YYYY-MM-DD h:mm A"),error:""}):e.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,time:void 0,error:"Please enter the values."});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-5 title-container"},n.a.createElement(p,null)),n.a.createElement("div",{className:"col-xs-7 form-container"},n.a.createElement(v,{getWeather:this.getWeather}),n.a.createElement(y,{temperature:this.state.temperature,humidity:this.state.humidity,city:this.state.city,country:this.state.country,description:this.state.description,time:this.state.time,error:this.state.error})))))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a71fbb77.chunk.js.map