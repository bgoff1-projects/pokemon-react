(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),l=n.n(o),i=(n(30),n(3)),c=n(4),s=n(6),u=n(5),p=n(7),m=(n(31),n(2));var h="https://pure-caverns-33114.herokuapp.com",y=function(){function e(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.set(i,.5)}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}function t(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.set(i,2)}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}return function(){var n=new Map;return function(t){var n=new Map;e(["Rock","Steel"],n),n.set("Ghost",0),t.set("Normal",n)}(n),function(n){var r=new Map;e(["Fire","Water","Rock","Dragon"],r),t(["Grass","Ice","Bug","Steel"],r),n.set("Fire",r)}(n),function(n){var r=new Map;t(["Fire","Ground","Rock"],r),e(["Water","Grass","Dragon"],r),n.set("Water",r)}(n),function(n){var r=new Map;t(["Water","Flying"],r),e(["Electric","Grass","Dragon"],r),r.set("Ground",0),n.set("Electric",r)}(n),function(n){var r=new Map;e(["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],r),t(["Water","Ground","Rock"],r),n.set("Grass",r)}(n),function(n){var r=new Map;e(["Fire","Water","Ice","Steel"],r),t(["Grass","Ground","Flying","Dragon"],r),n.set("Ice",r)}(n),function(n){var r=new Map;t(["Normal","Ice","Rock","Dark","Steel"],r),e(["Poison","Flying","Psychic","Bug","Fairy"],r),r.set("Ghost",0),n.set("Fighting",r)}(n),function(n){var r=new Map;e(["Poison","Ground","Rock","Ghost"],r),t(["Grass","Fairy"],r),r.set("Steel",0),n.set("Poison",r)}(n),function(n){var r=new Map;e(["Grass","Bug"],r),t(["Fire","Electric","Poison","Rock","Steel"],r),r.set("Flying",0),n.set("Ground",r)}(n),function(n){var r=new Map;e(["Electric","Rock","Steel"],r),t(["Grass","Fighting","Bug"],r),n.set("Flying",r)}(n),function(n){var r=new Map;e(["Psychic","Steel"],r),t(["Fighting","Poison"],r),r.set("Dark",0),n.set("Psychic",r)}(n),function(n){var r=new Map;e(["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],r),t(["Grass","Psychic","Dark"],r),n.set("Bug",r)}(n),function(n){var r=new Map;t(["Fire","Ice","Flying","Bug"],r),e(["Fighting","Ground","Steel"],r),n.set("Rock",r)}(n),function(n){var r=new Map;r.set("Normal",0),e(["Dark"],r),t(["Ghost","Psychic"],r),n.set("Ghost",r)}(n),function(n){var r=new Map;t(["Dragon"],r),e(["Steel"],r),r.set("Fairy",0),n.set("Dragon",r)}(n),function(n){var r=new Map;e(["Fighting","Dragon","Fairy"],r),t(["Psychic","Ghost"],r),n.set("Dark",r)}(n),function(n){var r=new Map;e(["Fire","Water","Electric","Steel"],r),t(["Ice","Fairy"],r),n.set("Steel",r)}(n),function(n){var r=new Map;t(["Fighting","Dragon","Dark"],r),e(["Fire","Poison","Steel"],r),n.set("Fairy",r)}(n),n}()}();function f(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e.types[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;if(y.get(i).has(t)&&2===y.get(i).get(t))return!0}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}function v(e,t){var n=t.types.length;if(0!==n)if(y.get(e).has(t.types[0])){var r=y.get(e).get(t.types[0]);if(1===n)return 2===r;if(2===n)if(y.get(e).has(t.types[1])){var a=y.get(e).get(t.types[1]);if(2===r&&a>=1||2===a&&r>=1)return!0}else if(2===r)return!0}else if(y.get(e).has(t.types[1])&&2===y.get(e).get(t.types[1]))return!0}function g(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){if(v(o.value,t))return!0}}catch(i){r=!0,a=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return!1}function d(e,t){if(1===e.types.length){if(y.get(t).has(e.types[0])&&2===y.get(t).get(e.types[0]))return!0}else if(y.get(t).has(e.types[0])){var n=y.get(t).get(e.types[0]);if(y.get(t).has(e.types[1])){if(n*y.get(t).get(e.types[1])>=2)return!0}else if(2===n)return!0}else if(y.get(t).has(e.types[1])&&2===y.get(t).get(e.types[1]))return!0;return!1}function b(e){for(var t in e.generationFilter)if(!e.generationFilter[t])return!0;for(var n in e.gameFilter)if(e.gameFilter[n])return!0;for(var r in e.typeFilter)if(!e.typeFilter[r])return!0;return!1}var k=function(e){return{type:"ADD_POKEMON_BULK",pokemon:e}};for(var E=n(1),O={},F=0,w=["Red | Blue | Yellow","Gold | Silver | Crystal","Ruby | Sapphire | Emerald","Diamond | Pearl","Platinum","HeartGold | SoulSilver","Black | White","Black 2 | White 2","X | Y","Omega Ruby | Alpha Sapphire","Sun | Moon","Ultra Sun | Ultra Moon"];F<w.length;F++){O[w[F]]=!1}function j(e){for(var t in e)if(e[t])return t;return!1}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_GAME_FILTER":var n=j(e);if(n){for(var r in e)e[r]=!1;if(n!==t.gameToFlip)for(var a in e)e[a]=a===t.gameToFlip}else for(var o in e)e[o]=o===t.gameToFlip;return Object(E.a)({},e);case"SET_ALL_GAMES_OFF":for(var l in e)e.hasOwnProperty(l)&&(e[l]=!1);return Object(E.a)({},e);default:return Object(E.a)({},e)}},P=(n(11),function(e){function t(e){var n;return Object(i.a)(this,t),0===(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).props.pokemon.all.length&&e.dispatch(function(e){return fetch("".concat(h,"/pokemon")).then(function(e){return e.json()}).then(function(t){return e(k(t))})}),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"findIndex",value:function(e,t){for(var n=0;n<this.props.pokemon.all.length;n++)if(this.props.pokemon.all[n].pokemonNumber===e&&t===this.props.pokemon.all[n].name)return n}},{key:"onClick",value:function(e){6!==this.props.pokemon.party.length&&(this.props.dispatch(function(e){return{type:"ADD_TO_PARTY",pokemon:e}}({name:e.name,types:e.types,pokemonNumber:e.pokemonNumber,region:e.region,generation:e.generation})),this.props.dispatch({type:"REMOVE_POKEMON",index:this.findIndex(e.pokemonNumber,e.name)}))}},{key:"gameFilterToAcronym",value:function(e){switch(e){case"Red | Blue | Yellow":return"RBY";case"Gold | Silver | Crystal":return"GSC";case"Ruby | Sapphire | Emerald":return"RSE";case"Diamond | Pearl":return"DP";case"Platinum":return"PT";case"HeartGold | SoulSilver":return"HGSS";case"Black | White":return"BW";case"Black 2 | White 2":return"BW2";case"X | Y":return"XY";case"Omega Ruby | Alpha Sapphire":return"ORAS";case"Sun | Moon":return"SM";case"Ultra Sun | Ultra Moon":return"USUM";default:return""}}},{key:"getArrayFromMap",value:function(e){var t=[];for(var n in e)e[n]&&t.push(this.gameFilterToAcronym(n));return t}},{key:"filter",value:function(){var e=this;return this.props&&this.props.pokemon.all?(this.props.pokemon.checkingParty?this.props.pokemon.lackingCoverage:this.props.pokemon.all).filter(function(t){if(j(e.props.gameFilter)&&!t.games.includes(e.getArrayFromMap(e.props.gameFilter)[0]))return!1;for(var n in e.props.generationFilter)if(e.props.generationFilter.hasOwnProperty(n)&&!1===e.props.generationFilter[n]&&t.hasOwnProperty("generation")&&t.generation===Number.parseInt(n))return!1;for(var r in e.props.typeFilter)if(e.props.typeFilter.hasOwnProperty(r)&&!0===e.props.typeFilter[r]&&(t.types[0]===r||t.types[1]===r))return!0;return!1}).sort(function(t,n){var r=e.gameFilterToAcronym(j(e.props.gameFilter));return r&&t.locations.hasOwnProperty(r)&&n.locations.hasOwnProperty(r)?t.locations[r]-n.locations[r]:t.hasOwnProperty("pokemonNumber")&&n.hasOwnProperty("pokemonNumber")?t.pokemonNumber===n.pokemonNumber?t.generation-n.generation:t.pokemonNumber-n.pokemonNumber:t-n}):null}},{key:"render",value:function(){var e=this,t=this.filter();return 0!==t.length||b(this.props)?t?a.a.createElement("div",{className:"col-md-8 text-center"},t.map(function(t,n){var r=1===t.types.length?"circle ".concat(t.types[0]):"circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary"),o=a.a.createElement("img",{className:r,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"64px",height:"64px",onClick:function(){return e.onClick(t,n)}});return a.a.createElement("span",{key:t.name,title:t.name},o)})):void 0:a.a.createElement("div",{className:"still-loading"},a.a.createElement("div",{className:"buffer"},a.a.createElement("img",{src:"./pokeball.png",alt:"pokeball",className:"pokeball img-fluid"})))}}]),t}(a.a.Component)),S=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party,typeFilter:e.typeFilter,generationFilter:e.generationFilter,gameFilter:e.gameFilter}})(P),_=["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"],C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"findStrengthCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,r=!1,a=void 0;try{for(var o,l=this.props.pokemon.party[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){f(o.value,e)&&t++}}catch(i){r=!0,a=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-2 strengths text-right"},a.a.createElement("div",{className:"text-right"},"Strengths:"),a.a.createElement("table",{style:{width:"100px",marginLeft:"65%",textAlign:"left"}},a.a.createElement("tbody",null,_.map(function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,e.findStrengthCount(t)))})))):null}}]),t}(a.a.Component),x=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(C),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"findWeaknessCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,r=!1,a=void 0;try{for(var o,l=this.props.pokemon.party[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){d(o.value,e)&&t++}}catch(i){r=!0,a=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-2 weaknesses text-left"},a.a.createElement("span",{className:"text-center"},"Weaknesses:"),a.a.createElement("table",{style:{width:"100px"}},a.a.createElement("tbody",null,_.map(function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,e.findWeaknessCount(t)))})))):null}}]),t}(a.a.Component),T=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(R),M=Object(m.b)()(function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(x,null),a.a.createElement(S,null),a.a.createElement(T,null))}),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(e,t){this.props.dispatch(function(e){return{type:"REMOVE_FROM_PARTY",index:e}}(t)),this.props.dispatch(function(e){return{type:"ADD_POKEMON",pokemon:e}}(e))}},{key:"render",value:function(){var e=this,n=t.setUp(this.props.pokemon.party);if(0===this.props.pokemon.all.length)return null;var r=a.a.createElement("div",null,"\xa0");return a.a.createElement("div",{className:"text-center"},n.map(function(t,n){return"empty"===t?a.a.createElement("span",{style:{display:"inline-block"},key:n},a.a.createElement("span",{className:"empty"}),r,r,a.a.createElement("br",null)):(o=1===t.types.length?"circle ".concat(t.types[0]):"circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary"),a.a.createElement("span",{style:{display:"inline-block"},key:n},a.a.createElement("img",{className:o,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"96px",height:"96px",onClick:function(){return e.onClick(t,n)}}),a.a.createElement("div",{className:"name"},t.name),a.a.createElement("div",null,a.a.createElement("span",{className:"type "+t.types[1]},t.types[1]),a.a.createElement("span",{className:"type "+t.types[0]},t.types[0])),a.a.createElement("br",null)));var o}))}}],[{key:"setUp",value:function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.push(i)}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}for(;t.length<6;)t.push("empty");return t}}]),t}(a.a.Component),A=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(G),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"count",value:function(){var e=0;for(var t in this.props.selected)this.props.selected.hasOwnProperty(t)&&!0===this.props.selected[t]&&e++;return 18===e?"All Types Selected":0===e?"No Types Selected":e+" Selected"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.selected)this.props.selected.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.selected)if(t===e&&!0===this.props.selected[e])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_TYPE_FILTER",typeToFlip:e})}},{key:"toggleAll",value:function(){"All Types Selected"===this.count()?this.props.dispatch({type:"FLIP_ALL_TYPE_FILTER_FALSE"}):this.props.dispatch({type:"FLIP_ALL_TYPE_FILTER_TRUE"})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-3"},a.a.createElement("div",{className:"dropdown"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("span",null,this.count())),a.a.createElement("div",{className:"dropdown-menu"},a.a.createElement("div",{key:"all",className:"ml-4"},a.a.createElement("label",{className:"checkbox"},a.a.createElement("button",{onClick:function(){return e.toggleAll()}},"Select all"))),this.getNames().map(function(t){return a.a.createElement("div",{key:t,className:"ml-4"},a.a.createElement("label",{className:"checkbox"},a.a.createElement("input",{type:"checkbox",value:t,onChange:function(){return e.onChange(t)},checked:e.check(t)}),t))})))):null}}]),t}(a.a.Component),D=Object(m.b)(function(e){return{pokemon:e.pokemon,selected:e.typeFilter}})(L),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"count",value:function(){var e=0;for(var t in this.props.generations)this.props.generations.hasOwnProperty(t)&&!0===this.props.generations[t]&&e++;return 7===e?"All Generations":e+" Selected"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.generations)this.props.generations.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.generations)if(t===e&&!0===this.props.generations[e])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_GEN_FILTER",generationToFlip:e})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-3"},a.a.createElement("div",{className:"dropdown float-right"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("span",null,this.count())),a.a.createElement("div",{className:"dropdown-menu"},this.getNames().map(function(n){return a.a.createElement("div",{key:n,className:"ml-4"},a.a.createElement("label",{className:"checkbox"},a.a.createElement("input",{type:"checkbox",value:n,onChange:function(){return e.onChange(n)},defaultChecked:e.check(n)}),t.addRegionalName(n)))})))):null}}],[{key:"addRegionalName",value:function(e){switch(Number.parseInt(e)){case 1:return"".concat(e,": Kanto");case 2:return"".concat(e,": Johto");case 3:return"".concat(e,": Hoenn");case 4:return"".concat(e,": Sinnoh");case 5:return"".concat(e,": Unova");case 6:return"".concat(e,": Kalos");case 7:return"".concat(e,": Alola");default:return e}}}]),t}(a.a.Component),B=Object(m.b)(function(e){return{pokemon:e.pokemon,generations:e.generationFilter}})(I),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"count",value:function(){for(var e in this.props.games)if(this.props.games.hasOwnProperty(e)&&!0===this.props.games[e])return e;return"All Games"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.games)this.props.games.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.games)if(e===t&&!0===this.props.games[t])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_GAME_FILTER",gameToFlip:e})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-3"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("span",null,this.count())),a.a.createElement("div",{className:"dropdown-menu",style:{right:0,left:0}},this.getNames().map(function(t){return a.a.createElement("div",{key:t,className:"ml-4"},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",value:t,onChange:function(){return e.onChange(t)},checked:e.check(t)}),t))}))):null}}]),t}(a.a.Component),Y=Object(m.b)(function(e){return{pokemon:e.pokemon,games:e.gameFilter}})(W),U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.props.dispatch({type:"CHECK_PARTY"})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"col-md-3"},a.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.handleClick()}},"Check Coverage"))}}]),t}(a.a.Component),K=Object(m.b)(function(e){return{pokemon:e.pokemon}})(U),H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return b(this.props)||this.props.all.all.length||this.props.all.party.length?a.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},a.a.createElement(D,null),a.a.createElement(K,null),a.a.createElement(Y,null),a.a.createElement(B,null))):a.a.createElement("span",null)}}]),t}(a.a.Component),V=Object(m.b)(function(e){return{all:e.pokemon,party:e.party,selected:e.typeFilter,generations:e.generationFilter}})(H),X=(n(36),Object(m.b)()(function(){return a.a.createElement("span",null,a.a.createElement(V,null),a.a.createElement("div",{className:"party"},a.a.createElement(A,null)))})),J=Object(m.b)()(function(){return a.a.createElement("div",null,a.a.createElement(X,null),a.a.createElement(M,null))}),z=n(21),$=n(8),q=n(16),Q=n(22),Z=n.n(Q),ee=n(23),te=n.n(ee),ne={},re=!0,ae=!1,oe=void 0;try{for(var le,ie=_[Symbol.iterator]();!(re=(le=ie.next()).done);re=!0){var ce=le.value;ne[ce]=!0}}catch(Fe){ae=!0,oe=Fe}finally{try{re||null==ie.return||ie.return()}finally{if(ae)throw oe}}for(var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_TYPE_FILTER":for(var n in e)if(e.hasOwnProperty(n)&&n===t.typeToFlip){e[n]=!e[n];break}return Object(E.a)({},e);case"FLIP_ALL_TYPE_FILTER_TRUE":for(var r in e)e.hasOwnProperty(r)&&(e[r]=!0);return Object(E.a)({},e);case"FLIP_ALL_TYPE_FILTER_FALSE":for(var a in e)e.hasOwnProperty(a)&&(e[a]=!1);return Object(E.a)({},e);default:return Object(E.a)({},e)}},ue={},pe=0,me=[1,2,3,4,5,6,7];pe<me.length;pe++){ue[me[pe]]=!0}var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_GEN_FILTER":for(var n in e)if(e.hasOwnProperty(n)&&n===t.generationToFlip){e[n]=!e[n];break}return Object(E.a)({},e);default:return Object(E.a)({},e)}},ye={all:[],party:[],checkingParty:!1,lackingCoverage:[]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POKEMON_BULK":if(t.pokemon){var n=t.pokemon;return Object(E.a)({},e,{all:n})}return Object(E.a)({},e);case"ADD_TO_PARTY":if(t.pokemon){var r=e.party,a=!0,o=!1,l=void 0;try{for(var i,c=e.all[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var s=i.value;if(s.name===t.pokemon.name){r.push(s);break}}}catch(Fe){o=!0,l=Fe}finally{try{a||null==c.return||c.return()}finally{if(o)throw l}}return Object(E.a)({},e,{party:r})}return Object(E.a)({},e);case"REMOVE_FROM_PARTY":if(t.index||0===t.index){var u=e.party;return u.splice(t.index,1),Object(E.a)({},e,{party:u})}return Object(E.a)({},e);case"ADD_POKEMON":if(t.pokemon){var p=e.all,m=0;if(p.find(function(e){return e.name===t.pokemon.name}))return Object(E.a)({},e);var h=!0,y=!1,f=void 0;try{for(var v,d=p[Symbol.iterator]();!(h=(v=d.next()).done);h=!0){var b=v.value;if(b.number>m&&b.number<t.pokemon.number&&(m=e.all.indexOf(b)+1)===t.pokemon.number-1)break}}catch(Fe){y=!0,f=Fe}finally{try{h||null==d.return||d.return()}finally{if(y)throw f}}return p.splice(m,0,t.pokemon),Object(E.a)({},e,{all:p})}return Object(E.a)({},e);case"REMOVE_POKEMON":if(t.index||0===t.index){var k=e.all;return k.splice(t.index,1),Object(E.a)({},e,{all:k})}return Object(E.a)({},e);case"CHECK_PARTY":if(e.checkingParty)return e.checkingParty=!1,e.lackingCoverage=[],Object(E.a)({},e);if(0===e.party.length)return Object(E.a)({},e);e.checkingParty=!0;var O=function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value,c=!0,s=!1,u=void 0;try{for(var p,m=i.types[Symbol.iterator]();!(c=(p=m.next()).done);c=!0){var h=p.value;t.includes(h)||t.push(h)}}catch(Fe){s=!0,u=Fe}finally{try{c||null==m.return||m.return()}finally{if(s)throw u}}}}catch(Fe){r=!0,a=Fe}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return t}(e.party),F=!0,w=!1,j=void 0;try{for(var N,P=e.all[Symbol.iterator]();!(F=(N=P.next()).done);F=!0){var S=N.value;g(O,S)||e.lackingCoverage.push(S)}}catch(Fe){w=!0,j=Fe}finally{try{F||null==P.return||P.return()}finally{if(w)throw j}}return Object(E.a)({},e);default:return Object(E.a)({},e)}},ve=Object($.c)({typeFilter:se,generationFilter:he,gameFilter:N,pokemon:fe}),ge=n(24),de=n(17),be=function(){var e={key:"root",storage:Z.a,stateReconciler:te.a},t=Object(q.a)(e,ve),n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,r=Object($.e)(t,n(Object($.a)(ge.a)));return{store:r,persistor:Object(q.b)(r)}}(),ke=be.store,Ee=be.persistor,Oe=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),de.a.initialize("UA-140901863-1"),de.a.pageview(window.location.pathname+window.location.search),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,{store:ke},a.a.createElement(z.a,{loading:null,persistor:Ee},a.a.createElement(J,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.c06457b1.chunk.js.map