(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},34:function(e,t,n){e.exports=n(53)},39:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),l=n.n(o),i=(n(39),n(40),n(2)),c=n(4),s=n(5),p=n(7),u=n(6),m=n(8);var y="https://pure-caverns-33114.herokuapp.com",h=function(){function e(e,t){var n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.set(i,.5)}}catch(c){a=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}}function t(e,t){var n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.set(i,2)}}catch(c){a=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}}return function(){var n=new Map;return function(t){var n=new Map;e(["Rock","Steel"],n),n.set("Ghost",0),t.set("Normal",n)}(n),function(n){var a=new Map;e(["Fire","Water","Rock","Dragon"],a),t(["Grass","Ice","Bug","Steel"],a),n.set("Fire",a)}(n),function(n){var a=new Map;t(["Fire","Ground","Rock"],a),e(["Water","Grass","Dragon"],a),n.set("Water",a)}(n),function(n){var a=new Map;t(["Water","Flying"],a),e(["Electric","Grass","Dragon"],a),a.set("Ground",0),n.set("Electric",a)}(n),function(n){var a=new Map;e(["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],a),t(["Water","Ground","Rock"],a),n.set("Grass",a)}(n),function(n){var a=new Map;e(["Fire","Water","Ice","Steel"],a),t(["Grass","Ground","Flying","Dragon"],a),n.set("Ice",a)}(n),function(n){var a=new Map;t(["Normal","Ice","Rock","Dark","Steel"],a),e(["Poison","Flying","Psychic","Bug","Fairy"],a),a.set("Ghost",0),n.set("Fighting",a)}(n),function(n){var a=new Map;e(["Poison","Ground","Rock","Ghost"],a),t(["Grass","Fairy"],a),a.set("Steel",0),n.set("Poison",a)}(n),function(n){var a=new Map;e(["Grass","Bug"],a),t(["Fire","Electric","Poison","Rock","Steel"],a),a.set("Flying",0),n.set("Ground",a)}(n),function(n){var a=new Map;e(["Electric","Rock","Steel"],a),t(["Grass","Fighting","Bug"],a),n.set("Flying",a)}(n),function(n){var a=new Map;e(["Psychic","Steel"],a),t(["Fighting","Poison"],a),a.set("Dark",0),n.set("Psychic",a)}(n),function(n){var a=new Map;e(["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],a),t(["Grass","Psychic","Dark"],a),n.set("Bug",a)}(n),function(n){var a=new Map;t(["Fire","Ice","Flying","Bug"],a),e(["Fighting","Ground","Steel"],a),n.set("Rock",a)}(n),function(n){var a=new Map;a.set("Normal",0),e(["Dark"],a),t(["Ghost","Psychic"],a),n.set("Ghost",a)}(n),function(n){var a=new Map;t(["Dragon"],a),e(["Steel"],a),a.set("Fairy",0),n.set("Dragon",a)}(n),function(n){var a=new Map;e(["Fighting","Dragon","Fairy"],a),t(["Psychic","Ghost"],a),n.set("Dark",a)}(n),function(n){var a=new Map;e(["Fire","Water","Electric","Steel"],a),t(["Ice","Fairy"],a),n.set("Steel",a)}(n),function(n){var a=new Map;t(["Fighting","Dragon","Dark"],a),e(["Fire","Poison","Steel"],a),n.set("Fairy",a)}(n),n}()}();function f(e,t){var n=!0,a=!1,r=void 0;try{for(var o,l=e.types[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;if(h.get(i).has(t)&&2===h.get(i).get(t))return!0}}catch(c){a=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}}function v(e,t){var n=t.types.length;if(0!==n)if(h.get(e).has(t.types[0])){var a=h.get(e).get(t.types[0]);if(1===n)return 2===a;if(2===n)if(h.get(e).has(t.types[1])){var r=h.get(e).get(t.types[1]);if(2===a&&r>=1||2===r&&a>=1)return!0}else if(2===a)return!0}else if(h.get(e).has(t.types[1])&&2===h.get(e).get(t.types[1]))return!0}function d(e,t){var n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){if(v(o.value,t))return!0}}catch(i){a=!0,r=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return!1}function g(e,t){if(1===e.types.length){if(h.get(t).has(e.types[0])&&2===h.get(t).get(e.types[0]))return!0}else if(h.get(t).has(e.types[0])){var n=h.get(t).get(e.types[0]);if(h.get(t).has(e.types[1])){if(n*h.get(t).get(e.types[1])>=2)return!0}else if(2===n)return!0}else if(h.get(t).has(e.types[1])&&2===h.get(t).get(e.types[1]))return!0;return!1}function b(e){for(var t in e.generationFilter)if(!e.generationFilter[t])return!0;for(var n in e.gameFilter)if(e.gameFilter[n])return!0;for(var a in e.typeFilter)if(!e.typeFilter[a])return!0;return!1}var k=function(e){return{type:"ADD_POKEMON_BULK",pokemon:e}};for(var E=n(1),O={},F=0,j=["Red | Blue | Yellow","Gold | Silver | Crystal","Ruby | Sapphire | Emerald","Diamond | Pearl","Platinum","HeartGold | SoulSilver","Black | White","Black 2 | White 2","X | Y","Omega Ruby | Alpha Sapphire","Sun | Moon","Ultra Sun | Ultra Moon"];F<j.length;F++){O[j[F]]=!1}function w(e){for(var t in e)if(e[t])return t;return!1}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_GAME_FILTER":var n=w(e);if(n){for(var a in e)e[a]=!1;if(n!==t.gameToFlip)for(var r in e)e[r]=r===t.gameToFlip}else for(var o in e)e[o]=o===t.gameToFlip;return Object(E.a)({},e);case"SET_ALL_GAMES_OFF":for(var l in e)e.hasOwnProperty(l)&&(e[l]=!1);return Object(E.a)({},e);default:return Object(E.a)({},e)}},N=(n(18),function(e){function t(e){var n;return Object(c.a)(this,t),0===(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).props.pokemon.all.length&&e.dispatch(function(e){return fetch("".concat(y,"/pokemon")).then(function(e){return e.json()}).then(function(t){return e(k(t))})}),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"findIndex",value:function(e,t){for(var n=0;n<this.props.pokemon.all.length;n++)if(this.props.pokemon.all[n].pokemonNumber===e&&t===this.props.pokemon.all[n].name)return n}},{key:"onClick",value:function(e){6!==this.props.pokemon.party.length&&(this.props.dispatch(function(e){return{type:"ADD_TO_PARTY",pokemon:e}}({name:e.name,types:e.types,pokemonNumber:e.pokemonNumber,region:e.region,generation:e.generation})),this.props.dispatch({type:"REMOVE_POKEMON",index:this.findIndex(e.pokemonNumber,e.name)}))}},{key:"gameFilterToAcronym",value:function(e){switch(e){case"Red | Blue | Yellow":return"RBY";case"Gold | Silver | Crystal":return"GSC";case"Ruby | Sapphire | Emerald":return"RSE";case"Diamond | Pearl":return"DP";case"Platinum":return"PT";case"HeartGold | SoulSilver":return"HGSS";case"Black | White":return"BW";case"Black 2 | White 2":return"BW2";case"X | Y":return"XY";case"Omega Ruby | Alpha Sapphire":return"ORAS";case"Sun | Moon":return"SM";case"Ultra Sun | Ultra Moon":return"USUM";default:return""}}},{key:"getArrayFromMap",value:function(e){var t=[];for(var n in e)e[n]&&t.push(this.gameFilterToAcronym(n));return t}},{key:"filter",value:function(){var e=this;return this.props&&this.props.pokemon.all?(this.props.pokemon.checkingParty?this.props.pokemon.lackingCoverage:this.props.pokemon.all).filter(function(t){if(w(e.props.gameFilter)&&!t.games.includes(e.getArrayFromMap(e.props.gameFilter)[0]))return!1;for(var n in e.props.generationFilter)if(e.props.generationFilter.hasOwnProperty(n)&&!1===e.props.generationFilter[n]&&t.hasOwnProperty("generation")&&t.generation===Number.parseInt(n))return!1;for(var a in e.props.typeFilter)if(e.props.typeFilter.hasOwnProperty(a)&&!0===e.props.typeFilter[a]&&(t.types[0]===a||t.types[1]===a))return!0;return!1}).sort(function(t,n){var a=e.gameFilterToAcronym(w(e.props.gameFilter));return a&&t.locations.hasOwnProperty(a)&&n.locations.hasOwnProperty(a)?t.locations[a]-n.locations[a]:t.hasOwnProperty("pokemonNumber")&&n.hasOwnProperty("pokemonNumber")?t.pokemonNumber===n.pokemonNumber?t.generation-n.generation:t.pokemonNumber-n.pokemonNumber:t-n}):null}},{key:"render",value:function(){var e=this,t=this.filter();return 0!==t.length||b(this.props)?t?r.a.createElement("div",{className:"col-md-8 text-center"},t.map(function(t,n){var a=1===t.types.length?"circle ".concat(t.types[0]):"circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary"),o=r.a.createElement("img",{className:a,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"64px",height:"64px",onClick:function(){return e.onClick(t,n)}});return r.a.createElement("span",{key:t.name,title:t.name},o)})):void 0:r.a.createElement("div",{className:"still-loading"},r.a.createElement("div",{className:"buffer"},r.a.createElement("img",{src:"./pokeball.png",alt:"pokeball",className:"pokeball img-fluid"})))}}]),t}(r.a.Component)),S=Object(i.b)(function(e){return{pokemon:e.pokemon,party:e.party,typeFilter:e.typeFilter,generationFilter:e.generationFilter,gameFilter:e.gameFilter}})(N),_=["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"],C=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"findStrengthCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,a=!1,r=void 0;try{for(var o,l=this.props.pokemon.party[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){f(o.value,e)&&t++}}catch(i){a=!0,r=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?r.a.createElement("div",{className:"col-md-2 strengths text-right"},r.a.createElement("div",{className:"text-right"},"Strengths:"),r.a.createElement("table",{style:{width:"100px",marginLeft:"65%",textAlign:"left"}},r.a.createElement("tbody",null,_.map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,e.findStrengthCount(t)))})))):null}}]),t}(r.a.Component),x=Object(i.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(C),R=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"findWeaknessCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,a=!1,r=void 0;try{for(var o,l=this.props.pokemon.party[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){g(o.value,e)&&t++}}catch(i){a=!0,r=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?r.a.createElement("div",{className:"col-md-2 weaknesses text-left"},r.a.createElement("span",{className:"text-center"},"Weaknesses:"),r.a.createElement("table",{style:{width:"100px"}},r.a.createElement("tbody",null,_.map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,e.findWeaknessCount(t)))})))):null}}]),t}(r.a.Component),T=Object(i.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(R),A=Object(i.b)()(function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(x,null),r.a.createElement(S,null),r.a.createElement(T,null))}),M=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onClick",value:function(e,t){this.props.dispatch(function(e){return{type:"REMOVE_FROM_PARTY",index:e}}(t)),this.props.dispatch(function(e){return{type:"ADD_POKEMON",pokemon:e}}(e))}},{key:"saveParty",value:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var r,o=this.props.pokemon.party[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value;e.push(Object(E.a)({},l))}}catch(i){n=!0,a=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}this.props.dispatch({type:"SAVE_PARTY",party:e})}},{key:"render",value:function(){var e=this,n=t.setUp(this.props.pokemon.party);if(0===this.props.pokemon.all.length)return null;var a=r.a.createElement("div",null,"\xa0");return r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:"partyMembers rounded"},n.map(function(t,n){return"empty"===t?r.a.createElement("span",{style:{display:"inline-block"},key:n},r.a.createElement("span",{className:"empty"}),a,a,r.a.createElement("br",null)):(1===t.types.length?(o="circle ".concat(t.types[0]),l=r.a.createElement("span",{className:"type "+t.types[0]},t.types[0])):(o="circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary"),l=r.a.createElement("span",null,r.a.createElement("span",{className:"type "+t.types[1]},t.types[1]),r.a.createElement("span",{className:"type "+t.types[0]},t.types[0]))),r.a.createElement("span",{style:{display:"inline-block"},key:n},r.a.createElement("img",{className:o,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"96px",height:"96px",onClick:function(){return e.onClick(t,n)}}),r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",null,l),r.a.createElement("br",null)));var o,l}),r.a.createElement("img",{src:"add_team.svg",alt:"add team",onClick:function(){return e.saveParty()},className:"addPokemon",title:"Add Pokemon To Party"})))}}],[{key:"setUp",value:function(e){var t=[],n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.push(i)}}catch(c){a=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}for(;t.length<6;)t.push("empty");return t}}]),t}(r.a.Component),G=Object(i.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(M),L=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"count",value:function(){var e=0;for(var t in this.props.selected)this.props.selected.hasOwnProperty(t)&&!0===this.props.selected[t]&&e++;return 18===e?"All Types Selected":0===e?"No Types Selected":e+" Selected"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.selected)this.props.selected.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.selected)if(t===e&&!0===this.props.selected[e])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_TYPE_FILTER",typeToFlip:e})}},{key:"toggleAll",value:function(){"All Types Selected"===this.count()?this.props.dispatch({type:"FLIP_ALL_TYPE_FILTER_FALSE"}):this.props.dispatch({type:"FLIP_ALL_TYPE_FILTER_TRUE"})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",null,this.count())),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("div",{key:"all",className:"ml-4"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("button",{onClick:function(){return e.toggleAll()}},"Select all"))),this.getNames().map(function(t){return r.a.createElement("div",{key:t,className:"ml-4"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",value:t,onChange:function(){return e.onChange(t)},checked:e.check(t)}),t))})))):null}}]),t}(r.a.Component),D=Object(i.b)(function(e){return{pokemon:e.pokemon,selected:e.typeFilter}})(L),I=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"count",value:function(){var e=0;for(var t in this.props.generations)this.props.generations.hasOwnProperty(t)&&!0===this.props.generations[t]&&e++;return 7===e?"All Generations":e+" Selected"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.generations)this.props.generations.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.generations)if(t===e&&!0===this.props.generations[e])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_GEN_FILTER",generationToFlip:e})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",null,this.count())),r.a.createElement("div",{className:"dropdown-menu"},this.getNames().map(function(n){return r.a.createElement("div",{key:n,className:"ml-4"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",value:n,onChange:function(){return e.onChange(n)},defaultChecked:e.check(n)}),t.addRegionalName(n)))})))):null}}],[{key:"addRegionalName",value:function(e){switch(Number.parseInt(e)){case 1:return"".concat(e,": Kanto");case 2:return"".concat(e,": Johto");case 3:return"".concat(e,": Hoenn");case 4:return"".concat(e,": Sinnoh");case 5:return"".concat(e,": Unova");case 6:return"".concat(e,": Kalos");case 7:return"".concat(e,": Alola");default:return e}}}]),t}(r.a.Component),Y=Object(i.b)(function(e){return{pokemon:e.pokemon,generations:e.generationFilter}})(I),B=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"count",value:function(){for(var e in this.props.games)if(this.props.games.hasOwnProperty(e)&&!0===this.props.games[e])return e;return"All Games"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.games)this.props.games.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.games)if(e===t&&!0===this.props.games[t])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_GAME_FILTER",gameToFlip:e})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",null,this.count())),r.a.createElement("div",{className:"dropdown-menu",style:{right:0,left:0}},this.getNames().map(function(t){return r.a.createElement("div",{key:t,className:"ml-4"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:t,onChange:function(){return e.onChange(t)},checked:e.check(t)}),t))}))):null}}]),t}(r.a.Component),W=Object(i.b)(function(e){return{pokemon:e.pokemon,games:e.gameFilter}})(B),U=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.dispatch({type:"CHECK_PARTY"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.handleClick()}},"Check Coverage"))}}]),t}(r.a.Component),K=Object(i.b)(function(e){return{pokemon:e.pokemon}})(U),V=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return b(this.props)||this.props.all.all.length||this.props.all.party.length?r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse row",id:"navbarCollapse"},r.a.createElement(D,null),r.a.createElement(K,null),r.a.createElement(W,null),r.a.createElement(Y,null))):r.a.createElement("span",null)}}]),t}(r.a.Component),H=Object(i.b)(function(e){return{all:e.pokemon,party:e.party,selected:e.typeFilter,generations:e.generationFilter}})(V),X=(n(45),Object(i.b)()(function(){return r.a.createElement("span",null,r.a.createElement(H,null),r.a.createElement("div",{className:"party"},r.a.createElement(G,null)))})),J=Object(i.b)(function(e){return{pokemon:e.pokemon.all}})(function(e){return e.pokemon.length>0?r.a.createElement("footer",{className:"bg-dark text-white text-center mt-5"},r.a.createElement("div",{className:"row",style:{marginLeft:"0",marginRight:"0"}},r.a.createElement("span",{className:"col"},"\xa9 of bgoff1"),r.a.createElement("span",{className:"col"},"Pok\xe9mon info and images fetched from PokeAPI"),r.a.createElement("span",{className:"col"},"Pok\xe9mon is \xa9 of Nintendo, 1995-2019"))):null}),$=Object(i.b)()(function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(A,null),r.a.createElement(J,null))}),q=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(p.a)(this,Object(u.a)(t).call(this,e));var a=!0,r=!1,o=void 0;try{for(var l,i=n.props.savedParties.parties[Symbol.iterator]();!(a=(l=i.next()).done);a=!0)for(var s=l.value;s.length<6;)s.push({name:"empty"})}catch(m){r=!0,o=m}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onClick",value:function(e){this.props.dispatch({type:"REMOVE_PARTY",party:this.props.savedParties.parties[e]})}},{key:"render",value:function(){var e=this;if(this&&this.props&&this.props.savedParties){var t=r.a.createElement("div",null,"\xa0"),n=this.props.savedParties.parties;return r.a.createElement("div",null,n.map(function(n,a){return r.a.createElement("div",{key:a},n.map(function(n,o){return"empty"===n.name?r.a.createElement("span",{style:{display:"inline-block"},key:o,onClick:function(){return e.onClick(a)}},r.a.createElement("span",{className:"empty"}),t,t,r.a.createElement("br",null)):(1===n.types.length?(l="circle ".concat(n.types[0]),i=r.a.createElement("span",{className:"type "+n.types[0]},n.types[0])):(l="circle ".concat(n.types[1],"-main ").concat(n.types[0],"-secondary"),i=r.a.createElement("span",null,r.a.createElement("span",{className:"type "+n.types[1]},n.types[1]),r.a.createElement("span",{className:"type "+n.types[0]},n.types[0]))),r.a.createElement("span",{style:{display:"inline-block"},key:o},r.a.createElement("img",{className:l,src:"data:image/png;base64, ".concat(n.image),alt:n.name,width:"96px",height:"96px",onClick:function(){return e.onClick(a)}}),r.a.createElement("div",{className:"name"},n.name),r.a.createElement("div",null,i),r.a.createElement("br",null)));var l,i}))}))}return r.a.createElement("span",null)}}]),t}(r.a.Component),z=Object(i.b)(function(e){return{savedParties:e.savedParties}})(q),Q=n(28),Z=n(11),ee=n(24),te=n(29),ne=n.n(te),ae=n(30),re=n.n(ae),oe={},le=!0,ie=!1,ce=void 0;try{for(var se,pe=_[Symbol.iterator]();!(le=(se=pe.next()).done);le=!0){var ue=se.value;oe[ue]=!0}}catch(_e){ie=!0,ce=_e}finally{try{le||null==pe.return||pe.return()}finally{if(ie)throw ce}}for(var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_TYPE_FILTER":for(var n in e)if(e.hasOwnProperty(n)&&n===t.typeToFlip){e[n]=!e[n];break}return Object(E.a)({},e);case"FLIP_ALL_TYPE_FILTER_TRUE":for(var a in e)e.hasOwnProperty(a)&&(e[a]=!0);return Object(E.a)({},e);case"FLIP_ALL_TYPE_FILTER_FALSE":for(var r in e)e.hasOwnProperty(r)&&(e[r]=!1);return Object(E.a)({},e);default:return Object(E.a)({},e)}},ye={},he=0,fe=[1,2,3,4,5,6,7];he<fe.length;he++){ye[fe[he]]=!0}var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_GEN_FILTER":for(var n in e)if(e.hasOwnProperty(n)&&n===t.generationToFlip){e[n]=!e[n];break}return Object(E.a)({},e);default:return Object(E.a)({},e)}},de={all:[],party:[],checkingParty:!1,lackingCoverage:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POKEMON_BULK":if(t.pokemon){var n=t.pokemon;return Object(E.a)({},e,{all:n})}return Object(E.a)({},e);case"ADD_TO_PARTY":if(t.pokemon){var a=e.party,r=!0,o=!1,l=void 0;try{for(var i,c=e.all[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;if(s.name===t.pokemon.name){a.push(s);break}}}catch(_e){o=!0,l=_e}finally{try{r||null==c.return||c.return()}finally{if(o)throw l}}return Object(E.a)({},e,{party:a})}return Object(E.a)({},e);case"REMOVE_FROM_PARTY":if(t.index||0===t.index){var p=e.party;return p.splice(t.index,1),Object(E.a)({},e,{party:p})}return Object(E.a)({},e);case"ADD_POKEMON":if(t.pokemon){var u=e.all,m=0;if(u.find(function(e){return e.name===t.pokemon.name}))return Object(E.a)({},e);var y=!0,h=!1,f=void 0;try{for(var v,g=u[Symbol.iterator]();!(y=(v=g.next()).done);y=!0){var b=v.value;if(b.number>m&&b.number<t.pokemon.number&&(m=e.all.indexOf(b)+1)===t.pokemon.number-1)break}}catch(_e){h=!0,f=_e}finally{try{y||null==g.return||g.return()}finally{if(h)throw f}}return u.splice(m,0,t.pokemon),Object(E.a)({},e,{all:u})}return Object(E.a)({},e);case"REMOVE_POKEMON":if(t.index||0===t.index){var k=e.all;return k.splice(t.index,1),Object(E.a)({},e,{all:k})}return Object(E.a)({},e);case"CHECK_PARTY":if(e.checkingParty)return e.checkingParty=!1,e.lackingCoverage=[],Object(E.a)({},e);if(0===e.party.length)return Object(E.a)({},e);e.checkingParty=!0;var O=function(e){var t=[],n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value,c=!0,s=!1,p=void 0;try{for(var u,m=i.types[Symbol.iterator]();!(c=(u=m.next()).done);c=!0){var y=u.value;t.includes(y)||t.push(y)}}catch(_e){s=!0,p=_e}finally{try{c||null==m.return||m.return()}finally{if(s)throw p}}}}catch(_e){a=!0,r=_e}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return t}(e.party),F=!0,j=!1,w=void 0;try{for(var P,N=e.all[Symbol.iterator]();!(F=(P=N.next()).done);F=!0){var S=P.value;d(O,S)||e.lackingCoverage.push(S)}}catch(_e){j=!0,w=_e}finally{try{F||null==N.return||N.return()}finally{if(j)throw w}}return Object(E.a)({},e);default:return Object(E.a)({},e)}},be={parties:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_PARTY":if(t.party){console.log("state",e.parties),console.log("action",t.party);var n=e.parties;return n.push(t.party),Object(E.a)({},e,{parties:n})}return Object(E.a)({},e);case"REMOVE_PARTY":if(t.party){var a=e.parties.filter(function(e){return e!==t.party});return Object(E.a)({},e,{parties:a})}return Object(E.a)({},e);default:return Object(E.a)({},e)}},Ee=Object(Z.c)({typeFilter:me,generationFilter:ve,gameFilter:P,pokemon:ge,savedParties:ke}),Oe=n(31),Fe=n(32),je=n(15),we=function(){var e={key:"root",storage:ne.a,stateReconciler:re.a},t=Object(ee.a)(e,Ee),n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,a=Object(Z.e)(t,n(Object(Z.a)(Oe.a)));return{store:a,persistor:Object(ee.b)(a)}}(),Pe=we.store,Ne=we.persistor,Se=function(){return r.a.createElement(i.a,{store:Pe},r.a.createElement(Q.a,{loading:null,persistor:Ne},r.a.createElement(Fe.a,null,r.a.createElement(je.d,null,r.a.createElement(je.b,{path:"/pokemon",component:$}),r.a.createElement(je.b,{path:"/parties",component:z}),r.a.createElement(je.a,{to:"/pokemon"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.3baa279a.chunk.js.map