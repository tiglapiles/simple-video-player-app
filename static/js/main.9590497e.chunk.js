(this["webpackJsonpsimple-video-player-app"]=this["webpackJsonpsimple-video-player-app"]||[]).push([[0],{108:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){e.exports=a.p+"static/media/captions.ch.1ace3ffb.vtt"},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(79),o=a.n(i),l=(a(90),a(25)),r=a(26),s=a(28),m=a(27),u=a(29),d=a(24),h=a(18),p=a(80),v=a.n(p),E=a(84);a(49),a(108);var f=function(e){var t=e.vlist,a=void 0===t?[]:t,n=Object(h.f)();return c.a.createElement("div",{className:"video-list"},c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns is-multiline"},a.map((function(e,t){return c.a.createElement("div",{className:"column is-3 video-item",onClick:function(){return function(e){n.push("/video",Object(E.a)({},e))}(e)},key:t},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:"https://switch-cn.gtgres.com/global-images/737058f0-642d-11ea-b2ec-abc0f6730fb6.jpg",alt:"Placeholder"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"contetn"},c.a.createElement("div",null,e.title.ch)))))}))))))},b=a(19),g=(a(133),a(134),"http://seeker.haetek.com:6869/"),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.item,t=e.title,n=(e.video_path,e.webvtt);return c.a.createElement("div",null,c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,t.ch)),c.a.createElement("div",{className:"box player-box"},c.a.createElement(b.Player,{playsInline:!0,poster:"https://switch-cn.gtgres.com/global-images/737058f0-642d-11ea-b2ec-abc0f6730fb6.jpg",crossOrigin:"anonymous"},c.a.createElement("source",{src:"".concat(g,"static/videos/unique_id1.mp4"),type:"video/mp4"}),c.a.createElement("track",{kind:"captions",src:"".concat(g).concat(n),srcLang:"en",label:"English",default:!0}),c.a.createElement("track",{kind:"captions",src:a(135),srcLang:"cn-Zh",label:"Chinese"}),c.a.createElement(b.BigPlayButton,{position:"center"}),c.a.createElement(b.ControlBar,{autoHide:!1},c.a.createElement(b.PlaybackRateMenuButton,{rates:[5,2,1,.5,.1]}),c.a.createElement(b.ReplayControl,{seconds:10,order:2.2}),c.a.createElement(b.ForwardControl,{seconds:10,order:3.2}),c.a.createElement(b.ClosedCaptionButton,{order:7})))))}}]),t}(n.Component);var N=function(e){var t=Object(h.f)();return c.a.createElement("div",null,c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement(y,{item:t.location.state}))))},k=(a(136),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).queryVideo=function(){v()("http://seeker.haetek.com:6869/videos",{method:"post",data:{model_action:"search",query_string:"",video_ids:[],type:"global"}}).then((function(e){a.setState({videoList:e.data.result_data})})).catch((function(e){console.log(e)}))},a.handleInput=function(e){a.setState({inputValue:e})},a.handleSearch=function(e){e.preventDefault(),a.queryVideo()},a.state={inputValue:"",videoList:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.queryVideo()}},{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Search Videos",onChange:this.handleInput})),c.a.createElement("div",{className:"control"},c.a.createElement("a",{href:"/",className:"button is-info",onClick:this.handleSearch},"Search"))))),c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/video"},c.a.createElement(N,null)),c.a.createElement(h.a,{path:"/"},c.a.createElement(f,{vlist:[{video_id:"unique_id1",title:{ch:"\u91cf\u5b50\u7269\u7406\uff08\u91cf\u5b50\u529b\u5b66\uff09\u7684\u53ef\u89c6\u5316",en:"Visualization of Quantum Physics (Quantum Mechanics)"},video_path:{"720P":"static/videos/unique_id1.mp4"},audio_path:"static/audios/unique_id1.wav",lang:"en",webvtt:"static/vtts/unique_id1.vtt"}]})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a(137)},90:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.9590497e.chunk.js.map