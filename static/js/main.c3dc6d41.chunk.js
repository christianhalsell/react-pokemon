(this["webpackJsonpreact-pokemon"]=this["webpackJsonpreact-pokemon"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=(a(13),a(14),a(6)),s=a(3),i=a(4),m=a(5),u=a(7),p=(a(15),a(16),function(){return r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner-content"},r.a.createElement("div",{className:"banner-eevee"}),r.a.createElement("div",{className:"banner-logo"}),r.a.createElement("div",{className:"banner-pikachu"})))}),d=(a(17),function(e){var t=e.handleChange,a=e.placeholder;return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{className:"search-field",type:"search",placeholder:a,onChange:t})))}),h=(a(18),a(19),function(e){var t=e.pokemon;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.id,".png"),alt:""})),r.a.createElement("div",{className:"card-text"},t.name))}),f=function(e){var t=e.pokemon;return r.a.createElement("div",{className:"card-list"},t.map((function(e,t){return r.a.createElement(h,{key:t,pokemon:e})})))},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={pokemon:[],searchField:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807").then((function(e){return e.json()})).then((function(t){return e.setState({pokemon:t.results.map((function(e,t){return Object(l.a)({id:t+1},e)}))})}))}},{key:"render",value:function(){var e=this.state,t=e.pokemon,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"homepage"},r.a.createElement(p,null),r.a.createElement(d,{placeholder:"Search for Pokemon...",handleChange:this.handleChange}),r.a.createElement(f,{pokemon:n}))}}]),a}(r.a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.c3dc6d41.chunk.js.map