(this["webpackJsonpjs-23"]=this["webpackJsonpjs-23"]||[]).push([[0],{10:function(e,t,a){e.exports={Button:"Button_Button__I4DVy",ButtonDiv:"Button_ButtonDiv__1kiZJ"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2nYOu",Modal:"Modal_Modal__24rUg"}},14:function(e,t,a){e.exports={App:"App_App__1VQAq"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2nTi0"}},17:function(e,t,a){e.exports={loader:"Loader_loader__1qqPp"}},23:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),c=a(13),o=a.n(c),i=(a(23),a(3)),l=a(4),u=a(6),h=a(5),p=a(14),m=a.n(p),b=a(7),g=a.n(b),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={value:""},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value)},e.inputValue=function(t){return e.setState({value:t.target.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:g.a.Searchbar,children:Object(r.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.onSubmit,children:[Object(r.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(r.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.inputValue})]})})}}]),a}(n.Component),j=a(15),v=a.n(j),f=a(12),O=a(9),y=a.n(O),S=a(16),_=a.n(S),x=a(17),I=a.n(x),F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(_.a,{className:I.a.loader,type:"Watch",color:"#00BFFF",height:100,width:100})}}]),a}(n.Component);var w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],error:null,status:"idle"},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=1;e.onFetch===this.props.onFetch&&e.numberPage===this.props.numberPage||(e.onFetch===this.props.onFetch&&e.numberPage<this.props.numberPage&&(r=this.props.numberPage),""===this.props.onFetch&&t.status!==this.state.status&&this.setState({status:"idle"}),e.onFetch!==this.props.onFetch&&this.props.numberPage===e.numberPage&&(this.setState({gallery:[]}),this.props.resPage(!0)),1===this.props.numberPage&&(this.setState({status:"pending"}),this.props.visible(!0)),function(e,t){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=").concat("19060894-87e054058a337546d07970d77")).then((function(e){return e.json()}))}(this.props.onFetch,r).then((function(t){if(e.onFetch!==a.props.onFetch&&1===a.props.numberPage){if(a.props.visible(!1),0===t.hits.length)return a.props.visible(!0),a.setState({status:"rejected"});a.setState({gallery:t.hits})}if(e.onFetch===a.props.onFetch&&e.numberPage<a.props.numberPage){a.setState({status:"resolve"}),a.props.visible(!1);var r=a.state.gallery;a.setState({gallery:[].concat(Object(f.a)(r),Object(f.a)(t.hits))}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),0===t.hits.length&&a.props.visible(!0)}t.hits.length>0&&a.setState({status:"resolve"})})).catch((function(){return a.setState({status:"rejected"})})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.status,n=t.gallery;return"idle"===a?Object(r.jsx)("li",{children:Object(r.jsx)("h1",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"})}):"rejected"===a?Object(r.jsx)("li",{children:Object(r.jsx)("h1",{children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})}):"pending"===a?Object(r.jsx)("li",{children:Object(r.jsx)(F,{})}):"resolve"===a?n.map((function(t){return Object(r.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:t.webformatURL,"data-src":t.largeImageURL,alt:"img",className:y.a.ImageGalleryItemImage,onClick:function(){return e.props.largeImageURL(t.largeImageURL)}})},t.id)})):void 0}}]),a}(n.Component),P=a(10),k=a.n(P),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).loadMore=function(){e.props.pageNumber()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:k.a.ButtonDiv,children:Object(r.jsx)("button",{className:k.a.Button,onClick:this.loadMore,children:"Load more"})})}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={visible:!1,page:1},e.largeImageURL=function(t){e.props.src(t)},e.visible=function(t){t&&e.state.visible&&e.setState({visible:!1}),t||e.setState({visible:!0})},e.pageNumber=function(t){var a=e.state.page;e.setState({page:a+1})},e.resPage=function(t){t&&e.setState({page:1})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{className:v.a.ImageGallery,children:Object(r.jsx)(w,{onFetch:this.props.onFetch,largeImageURL:this.largeImageURL,visible:this.visible,numberPage:this.state.page,resPage:this.resPage})}),this.state.visible&&Object(r.jsx)(L,{pageNumber:this.pageNumber})]})}}]),a}(n.Component),B=a(11),C=a.n(B),A=a.p+"static/media/404_error.a378b0df.jpg",G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={modal:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;""!==this.props.src&&this.setState({modal:!0}),window.addEventListener("keydown",(function(t){"Escape"===t.code&&e.setState({modal:!1})})),window.addEventListener("click",(function(t){"img"!==t.target.alt&&e.setState({modal:!1}),"img"===t.target.alt&&e.setState({modal:!0})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;window.removeEventListener("keydown",(function(e){"img"!==e.target.alt&&a.setState({modal:!1}),"img"===e.target.alt&&a.setState({modal:!0})}))}},{key:"render",value:function(){return this.state.modal&&Object(r.jsx)("div",{className:C.a.Overlay,children:Object(r.jsx)("div",{className:C.a.Modal,children:Object(r.jsx)("img",{src:this.props.src,alt:"img"})})})}}]),a}(n.Component);G.defaultProps={src:A};var U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",datasrc:""},e.onSubmit=function(t){return e.setState({search:t})},e.largeImageURL=function(t){e.setState({datasrc:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:m.a.App,children:[Object(r.jsx)(G,{src:this.state.datasrc}),Object(r.jsx)(d,{onSubmit:this.onSubmit}),Object(r.jsx)(N,{onFetch:this.state.search,src:this.largeImageURL})]})}}]),a}(n.Component),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(U,{})}),document.getElementById("root")),M()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2qtg4",SearchForm:"Searchbar_SearchForm__2AYTE",SearchFormButton:"Searchbar_SearchFormButton__3XMrJ",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1V3Rr",SearchFormInput:"Searchbar_SearchFormInput__3X2mZ"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1WXVK",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1xcsY"}}},[[45,1,2]]]);
//# sourceMappingURL=main.6c2062d1.chunk.js.map