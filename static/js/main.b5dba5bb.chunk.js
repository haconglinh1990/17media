(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),c=a.n(i),s=a(1),o=a(2),u=a(17),d=a(3),p=a(4),l=a(6),f=a(5),m=a(7),b=function(e,t){var a=Math.random()*(t-e)+e;return Math.floor(a)},h=function(e,t){return e.score<t.score?1:e.score>t.score?-1:0};function v(e){var t=e.duration,a=e.timings,n=e.draw,r=performance.now();return new Promise(function(e){requestAnimationFrame(function i(c){var s=(c-r)/t;s>1&&(s=1);var o=a(s);n(o),s<1?requestAnimationFrame(i):e(!0)})})}var g=function(){return[{userID:"4f4d5462-4a9f-483e-b620-9df9c13ec840",displayName:"Jone",picture:"https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",score:157e3},{userID:"2c0c5c67-1cfc-4b99-992e-2918b8a0dcc1",displayName:"Victoria",picture:"https://assets-17app.akamaized.net/THUMBNAIL_8390066D-46E4-4741-968D-9FF84B276B52.jpg",score:46200},{userID:"5100dedb-c2e5-48da-aeaf-83fa49a3482d",displayName:"Joy",picture:"https://assets-17app.akamaized.net/THUMBNAIL_CE9F51C5-7006-4DE6-9059-9AEA98F7DF13.jpg",score:38800},{userID:"9ece1a05-eb2d-403a-b179-ccbfc0ad9250",displayName:"Quinn",picture:"https://assets-17app.akamaized.net/THUMBNAIL_2A847B03-7BE8-4645-B62A-07201A90EDEF.jpg",score:33400},{userID:"32afdaac-a83b-481f-bc5a-1e85c3188c6f",displayName:"Sheenalo",picture:"https://assets-17app.akamaized.net/THUMBNAIL_95D163ED-6BF8-4D09-897C-B2E5320BE462.jpg",score:31600},{userID:"a2e0bdd3-0aa0-4fc4-91c2-b8ad00d26211",displayName:"Charlene",picture:"https://assets-17app.akamaized.net/THUMBNAIL_a943a748-16c8-4afa-87a6-8b6ac0e1f47a.jpg",score:30800},{userID:"47a35fbb-ce6b-4c82-9973-2a9391b6478d",displayName:"LeonaBaby",picture:"https://assets-17app.akamaized.net/THUMBNAIL_B850B9FF-E1FD-4DFA-8737-E67E32B71B8B.jpg",score:22300},{userID:"db8c493f-0a53-4b5f-8ffe-b0967e076e03",displayName:"Sunny",picture:"https://assets-17app.akamaized.net/THUMBNAIL_1A36F357-6EA2-4C77-B26F-588319F26EF2.jpg",score:17800},{userID:"44e1f164-831d-4732-8e49-0cda24369000",displayName:"ImWord",picture:"https://assets-17app.akamaized.net/THUMBNAIL_4f761f7d-0b85-45dd-90ad-1444c548abd6.jpg",score:17300},{userID:"416089f2-f66a-411a-b275-2151d86dcaeb",displayName:"Dophine",picture:"https://assets-17app.akamaized.net/THUMBNAIL_59946513-FC72-4444-8CC9-991BFFF19C22.jpg",score:15400}]};function E(){var e=Object(s.a)(["\n  flex-grow: 1;\n  text-align: right;\n  padding-right: 10px;\n  ::after {\n    content: 'pt';\n  }\n"]);return E=function(){return e},e}function B(){var e=Object(s.a)(["\n  padding-left: 7px;\n"]);return B=function(){return e},e}function j(){var e=Object(s.a)(["\n  background-size: 100%;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  border: 2px solid #fff;\n  background-size: cover;\n"]);return j=function(){return e},e}function y(){var e=Object(s.a)(["\n  width: 50px;\n  padding-left: 10px;\n"]);return y=function(){return e},e}function I(){var e=Object(s.a)(["\n  width: 320px;\n  height: 52px;\n  position: absolute;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  top: ","px;\n  border: 1px solid #ccc;\n  :not(:last-child) {\n    border-bottom: none;\n  }\n"]);return I=function(){return e},e}var x=o.a.div(I(),function(e){return e.top}),A=o.a.div(y()),k=o.a.div.attrs(function(e){return{style:{background:e.style.background}}})(j()),D=o.a.div(B()),F=o.a.div(E()),N=function(e){function t(e){var a;Object(d.a)(this,t);var n=(a=Object(l.a)(this,Object(f.a)(t).call(this,e))).props,r=n.score,i=n.index;return a.state={scoreState:r,indexState:i},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this,a=this.props,n=a.score,r=a.index;e.score!==n&&v({duration:300,timings:function(e){return e},draw:function(a){t.setState({scoreState:e.score+Math.round(a*(n-e.score))})}}),e.index!==r&&v({duration:300,timings:function(e){return e},draw:function(a){t.setState({indexState:e.index+a*(r-e.index)})}})}},{key:"render",value:function(){var e=this.props,t=e.index,a=e.picture,n=e.displayName,i=this.state,c=i.scoreState,s=50*i.indexState;return r.a.createElement(x,{top:s},r.a.createElement(A,null,t+1),r.a.createElement(k,{style:{backgroundImage:"url(".concat(a,"), url(https://webcdn.17app.co/17live/ig-default.svg)")}}),r.a.createElement(D,null,n),r.a.createElement(F,null,c))}}]),t}(r.a.Component);function w(){var e=Object(s.a)(["\n  margin: 0 auto;\n  width: 320px;\n"]);return w=function(){return e},e}var O=o.a.div(w()),M=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).intervalId=0,a.state={data:g()},a.randomUpdateScore=function(){var e=a.state.data;if(e.length>0){var t=b(0,10),n=e.slice();n[t].score+=b(200,500),a.setState(function(e){return Object(u.a)({},e,{data:n.sort(h)})})}},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.randomUpdateScore,300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.data;return e&&e.length?r.a.createElement(O,null,e.map(function(e,t){return r.a.createElement(N,Object.assign({key:e.userID},e,{index:t}))})):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component);function z(){var e=Object(s.a)(["\n  font-size: 1rem;\n  margin: 0;\n  font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft JhengHei',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"]);return z=function(){return e},e}var U=o.a.div(z()),H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null,r.a.createElement(M,null)))};c.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b5dba5bb.chunk.js.map