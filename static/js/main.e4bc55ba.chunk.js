(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),s=n.n(r),c=(n(15),n(1)),l=n(5),u=n(6),i=n(8),d=n(7),g=n(9),h=function(e){var t=e.goods;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)})))},m=(n(16),function(e){var t=e.onChange,n=e.numbers,o=e.length,r=Array.from({length:[n]},(function(e,t){return t}));return a.a.createElement("select",{onChange:t,value:o,className:"select"},r.map((function(e,t){return a.a.createElement("option",{value:t+1,key:e},t+1)})))}),b=(n(3),function(e){var t=e.reversed,n=e.sortedAlphabetically,o=e.reseted,r=e.sortedByLength;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",className:"button",onClick:t},"Reverse"),a.a.createElement("button",{type:"button",className:"button",onClick:n},"Sort alphabetically"),a.a.createElement("button",{type:"button",className:"button",onClick:o},"Reset"),a.a.createElement("button",{type:"button",className:"button",onClick:r},"Sort by length"))}),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={goods:n.props.goodsList,isClicked:!1,resetGoods:Object(c.a)(n.props.goodsList),length:1},n.clicked=function(){n.setState({isClicked:!0})},n.reversed=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).reverse()}}))},n.sortedAlphabetically=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).sort()}}))},n.sortedByLength=function(){function e(e,t){return e.length-t.length}n.setState((function(t){return{goods:Object(c.a)(t.goods).sort(e)}}))},n.reseted=function(){n.setState((function(e){return{goods:e.resetGoods,length:1}}))},n.selected=function(e){var t=+e.target.value;n.setState({length:t})},n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.isClicked,o=e.length,r=t.filter((function(e){return e.length>o}));return n?a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{onChange:this.selected,numbers:this.state.resetGoods.length,length:this.state.length}),a.a.createElement(b,{reversed:this.reversed,sortedAlphabetically:this.sortedAlphabetically,reseted:this.reseted,sortedByLength:this.sortedByLength}),a.a.createElement(h,{goods:r})):a.a.createElement("button",{type:"button",className:"button",onClick:this.clicked},"Start")}}]),t}(a.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),a.a.createElement(f,{goodsList:p}))};s.a.render(a.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.e4bc55ba.chunk.js.map