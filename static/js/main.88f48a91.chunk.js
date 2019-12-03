(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,t,a){e.exports={App:"styles_App__2sPPR",Searchbar:"styles_Searchbar__MZQM7",SearchForm:"styles_SearchForm__1UtAm","SearchForm-button":"styles_SearchForm-button__1_BM1","SearchForm-button-label":"styles_SearchForm-button-label__WmRCx","SearchForm-input":"styles_SearchForm-input__1Be-u",ImageGallery:"styles_ImageGallery__2VuoT",ImageGalleryItem:"styles_ImageGalleryItem__1XQjo",ImageGalleryItem_image:"styles_ImageGalleryItem_image__2oi-U",Overlay:"styles_Overlay__3VHVn",Modal:"styles_Modal__1k8UN",Button:"styles_Button__2BlLB"}},22:function(e,t,a){e.exports={ld:"loader_ld__fqsGn"}},23:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),c=a(9),s=a(4),i=a(5),m=a(7),u=a(6),h=a(8),d=a(2),p=a.n(d),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleChange=function(e){a.setState({search:e.target.value})},a.handleSubmit=function(e){var t=a.props.onSearch;e.preventDefault(),t(a.state.search),a.setState({search:""})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:p.a.Searchbar},r.a.createElement("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:p.a["SearchForm-button"]},r.a.createElement("span",{className:p.a["SearchForm-button-label"]},"Search")),r.a.createElement("input",{className:p.a["SearchForm-input"],type:"text",autoComplete:"off",placeholder:"Search images and photos",onChange:this.handleChange})))}}]),t}(n.Component),y=a(20),f=a.n(y),_="14441096-534811d7a70c206cdf6d1f3a5",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"news",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return f.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(_,"&image_type=photo&orientation=horizontal&per_page=12"))},S=function(e){var t=e.pic,a=e.openModal,n=e.handleKeyPress;return r.a.createElement("li",{onClick:function(){return a(t.largeImageURL)},onKeyUp:function(e){return n(e)},className:p.a.ImageGalleryItem,role:"presentation"},r.a.createElement("img",{src:t.largeImageURL,alt:"",className:p.a.ImageGalleryItem_image}))},v=function(e){var t=e.pics,a=e.openModal,n=e.handleKeyPress;return r.a.createElement("ul",{className:p.a.ImageGallery},t.map((function(e){return r.a.createElement(S,{key:e.id,pic:e,openModal:a,handleKeyPress:n})})))},E=function(e){var t=e.onClose,a=e.pic,n=e.handleKeyPress;return r.a.createElement("div",{className:"style.Overlay ImageGalleryItem",onClick:t,onKeyUp:function(e){return n(e)},role:"presentation"},r.a.createElement("div",{className:p.a.Modal},r.a.createElement("img",{src:a,alt:""})))},I=function(e){var t=e.changePage;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t,type:"button",className:p.a.Button},"Load more"))},M=a(21),w=a.n(M),O=a(22),N=a.n(O),P=(a(66),function(){return r.a.createElement("div",{className:N.a.ld},r.a.createElement(w.a,{type:"Bars",color:"#somecolor",height:80,width:80}))}),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pics:[],pageNumber:1,isLoading:!1,isOpenModal:!1},a.onSearch=function(e){a.setState({query:e}),a.setState({isLoading:!0}),b(e).then((function(e){return a.setState({pics:e.data.hits})})).catch((function(e){return console.warn(e)})).finally((function(){return a.setState({isLoading:!1})}))},a.changePage=function(){var e=a.state,t=e.query,n=e.pageNumber;a.setState({isLoading:!0}),b(t,n+1).then((function(e){return a.setState((function(t){return{pics:[].concat(Object(c.a)(t.pics),Object(c.a)(e.data.hits)),pageNumber:t.pageNumber+1}}))})).catch((function(e){return console.warn(e)})).finally((function(){a.setState({isLoading:!1})}))},a.openModal=function(e){a.setState({isOpenModal:!0,modalImage:e}),window.addEventListener("keydown",a.closeModal)},a.closeModal=function(e){e.target!==e.currentTarget&&"Escape"!==e.code||(a.setState({isOpenModal:!1}),window.removeEventListener("keydown",a.closeModal))},a.handleKeyPress=function(e){27===(e.keyCode||e.which)&&(a.open(),e.preventDefault())},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.pics;t.pics!==a&&a.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state.isOpenModal,t=this.state,a=t.pics,n=t.isLoading,o=t.modalImage;return r.a.createElement("div",null,r.a.createElement(g,{onSearch:this.onSearch}),r.a.createElement(v,{pics:a,openModal:this.openModal,handleKeyPress:this.handleKeyPress}),n&&r.a.createElement(P,null),e&&r.a.createElement(E,{pic:o,handleKeyPress:this.handleKeyPress,onClose:this.closeModal}),a.length>0&&r.a.createElement(I,{changePage:this.changePage}))}}]),t}(n.Component);l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.88f48a91.chunk.js.map