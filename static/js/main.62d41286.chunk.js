(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{17:function(e,t,c){e.exports={card:"Card_card__1rhTc",plus:"Card_plus__27yYY",favorite:"Card_favorite__3PZMt"}},39:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(31),s=c.n(n),i=c(13),o=(c(39),c(10)),l=c(12),d=c(4),j=c.n(d),u=c(11),b=c(3),m=c(5),x=c.n(m),h=c(2),f=c(9),p=c.n(f),O=c(1),v=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(B).setCartOpened;return Object(O.jsxs)("div",{className:"cart-empty",children:[Object(O.jsx)("img",{className:"box",src:c,alt:"Empty"}),Object(O.jsx)("h3",{children:t}),Object(O.jsx)("p",{children:r}),Object(O.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:["\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434 ",Object(O.jsx)("img",{src:"img/left-arrow.svg",alt:"Arrow"})]})]})},g=function(){var e=a.a.useContext(B),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},N=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=g(),o=i.cartItems,l=i.setCartItems,d=i.totalPrice,m=a.a.useState(null),h=Object(b.a)(m,2),f=h[0],k=h[1],w=a.a.useState(!1),C=Object(b.a)(w,2),_=C[0],y=C[1],I=a.a.useState(!1),S=Object(b.a)(I,2),A=S[0],T=S[1],B=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,x.a.post("https://6146238d5accc70017dae4bf.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,k(c.id),y(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,x.a.delete("https://6146238d5accc70017dae4bf.mockapi.io/cart/"+a.id);case 14:return e.next=16,N(1e3);case 16:r++,e.next=10;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"),console.error(e.t0);case 25:return e.prev=25,T(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[0,21,25,28]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"".concat(p.a.overlay," ").concat(s?p.a.overlayVisible:""),children:Object(O.jsxs)("div",{className:p.a.drawer,children:[Object(O.jsxs)("h2",{className:"mb-30 d-flex justify-between",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(O.jsx)("img",{onClick:t,className:"cu-p",src:"img/btn-remove.svg",alt:"Remove"})]}),n.length>0?Object(O.jsxs)("div",{className:"d-flex flex-column flex ".concat(p.a.cart),children:[Object(O.jsx)("div",{className:p.a.items,children:n.map((function(e){return Object(O.jsxs)("div",{className:"".concat(p.a.cartItem," d-flex align-center mb-20"),children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:p.a.cartItemImg}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("p",{className:"mb-5",children:e.title}),Object(O.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(O.jsx)("img",{onClick:function(){return c(e.id)},className:p.a.removeBtn,src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(O.jsxs)("div",{className:p.a.cartTotalBlock,children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d," \u0440\u0443\u0431."]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[Math.ceil(d/100*5)," \u0440\u0443\u0431."]})]})]}),Object(O.jsxs)("button",{disabled:A,onClick:B,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(O.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(O.jsx)(v,{title:_?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:_?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(f," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:_?"img/complete.jpg":"img/empty.png"})]})})},w=function(e){var t=g().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(O.jsx)(i.b,{to:"/",children:Object(O.jsxs)("div",{className:"d-flex align-center",children:[Object(O.jsx)("img",{className:"mr-15",width:40,height:40,src:"img/logo.png",alt:"Logo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(O.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(O.jsxs)("ul",{className:"d-flex",children:[Object(O.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 d-flex align-center cu-p",children:[Object(O.jsx)("img",{width:20,className:"mr-10",height:20,src:"img/cart.svg",alt:"cart"}),Object(O.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(O.jsx)("li",{className:"mr-10 d-flex align-center cu-p",children:Object(O.jsx)(i.b,{className:"d-flex align-center justify-center",to:"favorite",children:Object(O.jsx)("img",{width:20,className:"mr-10",height:20,src:"img/favorites.svg",alt:"favorites"})})}),Object(O.jsx)("li",{className:"d-flex align-center",children:Object(O.jsx)(i.b,{className:"d-flex align-center justify-center",to:"orders",children:Object(O.jsx)("img",{width:20,height:20,src:"img/user.svg",alt:"user"})})})]})]})},C=c(34),_=c(17),y=c.n(_),I=function(e){var t=e.id,c=e.imageUrl,r=e.title,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(B).isAddedItems,m=a.a.useState(l),x=Object(b.a)(m,2),h=x[0],f=x[1],p={id:t,parentId:t,title:r,price:n,imageUrl:c};return Object(O.jsx)("div",{className:y.a.card,children:j?Object(O.jsxs)(C.a,{speed:2,width:220,height:233,viewBox:"0 0 220 233",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"158",height:"120"}),Object(O.jsx)("rect",{x:"0",y:"144",rx:"10",ry:"10",width:"158",height:"34"}),Object(O.jsx)("rect",{x:"0",y:"188",rx:"10",ry:"10",width:"80",height:"32"}),Object(O.jsx)("rect",{x:"125",y:"188",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)("div",{className:y.a.favorite,onClick:function(){s(p),f(!h)},children:Object(O.jsx)("img",{src:h?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"Unliked"})}),Object(O.jsx)("img",{width:"100%",height:135,src:c,alt:"sneakers"}),Object(O.jsx)("h5",{children:r}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(O.jsx)("b",{children:n})]}),i&&Object(O.jsx)("img",{className:y.a.plus,onClick:function(){i(p)},src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})},S=function(e){var t=e.searchValue,c=e.setSearchValue,r=e.onChangeSearch,a=e.items,n=e.onAddToCart,s=e.onAddToFavorites,i=e.isLoading;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"mb-40 d-flex align-center justify-between",children:[Object(O.jsx)("h1",{children:t?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "'.concat(t,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"img/search.svg",alt:"Search"}),t&&Object(O.jsx)("img",{onClick:function(){return c("")},className:"cu-p search-clear",src:"img/btn-remove.svg",alt:"Clear"}),Object(O.jsx)("input",{onChange:r,placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:t})]})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return(i?Object(l.a)(Array(10)):e).map((function(e,t){return Object(O.jsx)(I,Object(o.a)({onPlus:function(e){return n(e)},onFavorite:function(e){return s(e)},loading:i},e),t)}))}()})]})},A=function(){var e=a.a.useContext(B),t=e.favorites,c=e.onAddToCart,r=e.onAddToFavorites;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"mb-40 d-flex align-center justify-between",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e){return Object(O.jsx)(I,Object(o.a)({onPlus:function(e){return c(e)},onFavorite:function(e){return r(e)},favorited:!0},e),e.id)}))})]})},T=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://6146238d5accc70017dae4bf.mockapi.io/orders");case 3:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"mb-40 d-flex align-center justify-between",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(l.a)(Array(10)):c).map((function(e,t){return Object(O.jsx)(I,Object(o.a)({loading:i},e),t)}))})]})},B=a.a.createContext({});var D=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=Object(r.useState)([]),f=Object(b.a)(m,2),p=f[0],v=f[1],g=Object(r.useState)(""),N=Object(b.a)(g,2),C=N[0],_=N[1],y=Object(r.useState)(!1),I=Object(b.a)(y,2),D=I[0],P=I[1],F=Object(r.useState)(!0),V=Object(b.a)(F,2),L=V[0],R=V[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://6146238d5accc70017dae4bf.mockapi.io/items");case 3:return t=e.sent,e.next=6,x.a.get("https://6146238d5accc70017dae4bf.mockapi.io/cart");case 6:return c=e.sent,e.next=9,x.a.get("https://6146238d5accc70017dae4bf.mockapi.io/favorites");case 9:r=e.sent,R(!1),d(c.data),v(r.data),a(t.data),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445!"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,x.a.delete("https://6146238d5accc70017dae4bf.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,x.a.post("https://6146238d5accc70017dae4bf.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,d((function(e){return e.map((function(e){return e.id===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d((function(e){return e.filter((function(e){return Number(e.id)!==Number(t)}))})),e.next=4,x.a.delete("https://6146238d5accc70017dae4bf.mockapi.io/cart/".concat(t));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440!"),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p.find((function(e){return e.id===t.id}))){e.next=7;break}return v((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=5,x.a.delete("https://6146238d5accc70017dae4bf.mockapi.io/favorites/".concat(t.id));case 5:e.next=12;break;case 7:return e.next=9,x.a.post("https://6146238d5accc70017dae4bf.mockapi.io/favorites",t);case 9:c=e.sent,r=c.data,v((function(e){return[].concat(Object(l.a)(e),[r])}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(B.Provider,{value:{items:c,cartItems:i,favorites:p,isAddedItems:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},setCartOpened:P,setCartItems:d,onAddToCart:U,onAddToFavorites:M},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[Object(O.jsx)(k,{items:i,onClose:function(){return P(!1)},onRemove:E,opened:D}),Object(O.jsx)(w,{onClickCart:function(){return P(!0)}}),Object(O.jsx)(h.a,{exact:!0,path:"",children:Object(O.jsx)(S,{items:c,cartItems:i,searchValue:C,setSearchValue:_,onChangeSearch:function(e){var t=e.target.value;_(t)},onAddToCart:U,onAddToFavorites:M,isLoading:L})}),Object(O.jsx)(h.a,{path:"favorite",children:Object(O.jsx)(A,{})}),Object(O.jsx)(h.a,{path:"orders",children:Object(O.jsx)(T,{})})]})})};c(69);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(D,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={overlay:"Drawer_overlay__1D4ae",drawer:"Drawer_drawer__3Ocxn",cart:"Drawer_cart__3eIze",items:"Drawer_items__2F929",cartItem:"Drawer_cartItem__3X9Yp",cartItemImg:"Drawer_cartItemImg__3AA4Q",removeBtn:"Drawer_removeBtn__3qanq",cartTotalBlock:"Drawer_cartTotalBlock__3ycnH",greenButton:"Drawer_greenButton__11UPM",overlayVisible:"Drawer_overlayVisible__-x_YO"}}},[[70,1,2]]]);
//# sourceMappingURL=main.62d41286.chunk.js.map