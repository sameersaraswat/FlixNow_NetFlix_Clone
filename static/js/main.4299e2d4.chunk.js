(this.webpackJsonpflixnow=this.webpackJsonpflixnow||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(44),r=c.n(s),i=(c(74),c(75),c(14)),o=(c(76),c(21)),l=c.p+"static/media/search.3ca36be4.svg",j=c.p+"static/media/logo.abd631a6.svg",d=c(56),u=(d.a.initializeApp({apiKey:"AIzaSyA0S_VfIas4tttdfds5CPgkYhA2JVUqQ-Y",authDomain:"netflix-clone-9db2f.firebaseapp.com",projectId:"netflix-clone-9db2f",storageBucket:"netflix-clone-9db2f.appspot.com",messagingSenderId:"1041495464835",appId:"1:1041495464835:web:763c71c39d93967bc734b6"}).firestore(),d.a.auth()),b=c(31),p=c(6);var h=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=(t[0],t[1]),a=(Object(o.f)(),function(){window.scrollY>100?c(!0):c(!1)});return Object(n.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)("div",{className:"navbar__poster",children:Object(p.jsx)(b.b,{to:"/",children:Object(p.jsx)("img",{src:j})})}),Object(p.jsxs)("div",{className:"navbar__profile",children:[Object(p.jsx)(b.b,{to:"/search",children:Object(p.jsx)("img",{className:"profile__search",src:l})}),Object(p.jsx)("p",{className:"profile__icon",onClick:function(){return u.signOut()},children:"Sign Out"})]})]})},O=c(0),m=c.n(O),x=c(3),f=c(51),v=c.n(f),g={api_key:"8d62f59fbe3f51c31b5be6beb8a37914",poster_baseUrl:"https://image.tmdb.org/t/p/w500",background_baseUrl:"https://image.tmdb.org/t/p/original",omdb_api_key:"fb7704a4",country_flag:"https://www.countryflags.io/US/flat/64.png"},_=g.api_key,y=v.a.create({baseURL:"https://api.themoviedb.org/3",responseType:"json"}),N=v.a.create({baseURL:"https://my-watchlist-1412.herokuapp.com/",responseType:"json"}),w=v.a.create({baseURL:"http://www.omdbapi.com",responseType:"json"}),k={api:y,urls:{weeklytrendingMovies:"/trending/movie/week?api_key=".concat(_,"&language=en-US&page=1"),weeklytrendingShows:"/trending/tv/week?api_key=".concat(_,"&language=en-US&page=1"),topRatedMovies:"/movie/top_rated?api_key=".concat(_,"&language=en-US&page=1"),popularMovies:"/movie/popular?api_key=".concat(_,"&language=en-US&page=1"),popularShows:"/tv/popular?api_key=".concat(_,"&language=en-US&page=1"),topRatedShows:"/tv/top_rated?api_key=".concat(_,"&language=en-US&page=1"),seasonInfo:"tv/<TV_ID>/season/<SEASON_NUMBER>?api_key=".concat(_),watchProviders:"<type>/<TV_ID>/watch/providers?api_key=".concat(_),fetchTrending:"/trending/all/week?api_key=".concat(_,"& language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(_,"& with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(_,'&language="en-US'),fetchActionMovies:"/discover/movie?api_key=".concat(_,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(_,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(_,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(_,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(_,"&with_genres=99")},localAPI:N,omdbAPI:w};c(104);var S=function(e){var t=e.data;return Object(p.jsx)("div",{className:"movie",id:t.id,children:Object(p.jsx)(b.b,{to:"/title/"+t.id,children:Object(p.jsx)("img",{src:null==t.poster_path?"https://keep-calm.net/images/keep-calm-and-netflix-and-chill-600-800.jpg":g.poster_baseUrl+t.poster_path,title:t.title})})})};c(105);var U=function(e){var t=e.data;return Object(p.jsx)("div",{className:"tv",id:t.id,children:Object(p.jsx)(b.b,{to:"/tv/"+t.id,children:Object(p.jsx)("img",{src:null==t.poster_path?"https://keep-calm.net/images/keep-calm-and-netflix-and-chill-600-800.jpg":g.poster_baseUrl+t.poster_path,title:t.name})})})};c(106);var E=function(e){var t=e.title,c=e.fetchUrl,a=e.localUrl,s=e.type,r=k.api,o=k.localAPI,l=Object(n.useState)([]),j=Object(i.a)(l,2),d=j[0],u=j[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),O=h[0],f=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return e.next=3,o.get(c);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,r.get(c);case 8:e.t0=e.sent;case 9:return t=e.t0,u(t.data.results),f(!0),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("div",{className:"row__movies",children:O&&d.map((function(e){return"movies"==s?Object(p.jsx)(S,{data:e},e.id):Object(p.jsx)(U,{data:e},e.id)}))})]})};c(107),c(108);var I=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(p.jsx)("div",{className:"signupScreen",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("h1",{children:"Sign In"}),Object(p.jsx)("input",{ref:e,placeholder:"Email",type:"email"}),Object(p.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(p.jsx)("button",{type:"submit",onClick:function(c){c.preventDefault(),u.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Sign In"}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("span",{className:"signupScreen_gray",children:"New to Netflix? "}),Object(p.jsx)("span",{className:"signupScreen_link",onClick:function(c){c.preventDefault(),u.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up now."})]})]})})};var R=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(p.jsxs)("div",{className:"loginScreen",children:[Object(p.jsxs)("div",{className:"loginScreen_background",children:[Object(p.jsx)("img",{className:"loginScreen_logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(p.jsx)("button",{onClick:function(){return a(!0)},className:"loginScreen_button",children:"Sign In"}),Object(p.jsx)("div",{className:"loginScreen_gradient"})]}),Object(p.jsx)("div",{className:"loginScreen_body",children:c?Object(p.jsx)(I,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Unlimited films, TV programmes and more."}),Object(p.jsx)("h2",{children:"Watch anywhere. Cancel at any time."}),Object(p.jsx)("h3",{children:"Ready to watch? Enter your mail to create or restart your membership."}),Object(p.jsx)("div",{className:"loginScreen_input",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(p.jsx)("button",{onClick:function(){return a(!0)},className:"loginScreen_getStarted",children:"GET STARTED"})]})})]})})]})},T=c(34),C=c(49),L=Object(C.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),A=L.actions,D=A.login,M=A.logout,V=function(e){return e.user.user},P=L.reducer;c(110);var W=function(){var e=Object(T.c)(V);return Object(p.jsxs)("div",{className:"profileScreen",children:[Object(p.jsx)(h,{}),Object(p.jsxs)("div",{className:"profileScreen_body",children:[Object(p.jsx)("h1",{children:"Edit Profile"}),Object(p.jsxs)("div",{className:"profileScreen_info",children:[Object(p.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:""}),Object(p.jsxs)("div",{className:"profileScreen_details",children:[Object(p.jsx)("h2",{children:e.email}),Object(p.jsxs)("div",{className:"profileScreen_plans",children:[Object(p.jsx)("h3",{children:"Plans"}),Object(p.jsx)("button",{onClick:function(){return u.signOut()},className:"profileScreen_signOut",children:"Sign Out"})]})]})]})]})]})};var z=function(){var e=k.urls;return Object(p.jsxs)("div",{className:"homeScreen",children:[Object(p.jsx)(h,{}),Object(p.jsx)(E,{className:"xyz",title:"NETFLIX ORIGINALS",fetchUrl:e.fetchNetflixOriginals,isLargeRow:!0}),Object(p.jsx)(E,{className:"xyz",title:"Trending Now",fetchUrl:e.fetchTrending,isLargeRow:!0}),Object(p.jsx)(E,{className:"xyz",title:"Top Rated",fetchUrl:e.fetchTopRated,isLargeRow:!0}),Object(p.jsx)(E,{className:"xyz",title:"Action Movies",fetchUrl:e.fetchActionMovies,isLargeRow:!0}),Object(p.jsx)(E,{className:"xyz",title:"Comedy Movies",fetchUrl:e.fetchComedyMovies,isLargeRow:!0}),Object(p.jsx)(E,{className:"xyz",title:"Horror Movies",fetchUrl:e.fetchHorrorMovies,isLargeRow:!0}),Object(p.jsx)(E,{className:"xyz",title:"Romance Movies",fetchUrl:e.fetchRomanceMovies,isLargeRow:!0}),Object(p.jsx)(E,{className:"xyz",title:"Documentaries",fetchUrl:e.fetchDocumentaries,isLargeRow:!0})]})};var Y=function(){var e=Object(T.c)(V),t=Object(T.b)();return Object(n.useEffect)((function(){return u.onAuthStateChanged((function(e){t(e?D({uid:e.uid,email:e.email}):M())}))}),[t]),Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(b.a,{children:e?Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(z,{})}),Object(p.jsx)(o.a,{path:"/profile",children:Object(p.jsx)(W,{})})]}):Object(p.jsx)(R,{})})})},B=Object(C.a)({reducer:{user:P}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=c(17),q=c(66);c(111);var H=function(e){var t=e.query,c=e.type,a=k.localAPI,s=Object(n.useState)(1),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)([]),d=Object(i.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),f=(O[0],O[1]),v=Object(n.useState)(!1),g=Object(i.a)(v,2),_=g[0],y=g[1],N="/search?query=".concat(t,"&type=").concat(c);return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get(t);case 2:return n=e.sent,b([].concat(Object(F.a)(c),Object(F.a)(n.data.results))),f(!0),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t,c){e.apply(this,arguments)}(N,[])}),[N]),Object(p.jsx)("div",{className:"search_results",id:"search_results",children:Object(p.jsx)(q.a,{dataLength:u.length,next:function(){var e=N+"&page=".concat(o+1);function t(){return t=Object(x.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get(t);case 2:return 0==(n=e.sent).data.results.length&&y(!0),b([].concat(Object(F.a)(c),Object(F.a)(n.data.results))),f(!0),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}l(o+1),function(e,c){t.apply(this,arguments)}(e,u)},hasMore:!_,loader:Object(p.jsx)("p",{children:"Loading...."}),children:u.map((function(e){return("movie"==e.media_type||"tv"==e.media_type)&&null!=e.poster_path&&("movie"==e.media_type?Object(p.jsx)(S,{data:e,id:e.id}):Object(p.jsx)(U,{data:e,id:e.id}))}))})})};c(112);var J=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{}),Object(p.jsxs)("div",{className:"search__container",children:[Object(p.jsx)("input",{type:"text",className:"search__container__input",autoFocus:!0,placeholder:"Start typing...",onChange:function(e){return a(e.target.value)}}),""!=c&&Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Showing search results for: ",Object(p.jsx)("b",{children:c})]}),c.length>3&&Object(p.jsx)(H,{query:c,type:"movies"})]})]})]})},G={formatDate:function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},generateYoutubeLink:function(e){var t="https://youtube.com/watch?v=";return t+=e},compareDates:function(e,t){return new Date(e).getTime()>new Date(t).getTime()},objectEmpty:function(e){return 0==Object.keys(e)}},K=c.p+"static/media/imdb-logo.179aa3d2.svg",Q=c.p+"static/media/rt-logo.59d2ff0a.svg",X=(c(113),c(114),c.p+"static/media/play.b31da51e.svg");var $=function(e){var t=e.title,c=e.link,n=e.new_tab;return Object(p.jsx)("a",{href:c,target:n?"_blank":"_self",style:{display:"inline-block"},children:Object(p.jsxs)("button",{children:[Object(p.jsx)("img",{src:X}),Object(p.jsx)("span",{children:t})]})})};c(115);var Z=function(e){var t=e.data;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"episode",children:[Object(p.jsx)("p",{className:"episode__number",children:t.episode_number}),Object(p.jsx)("div",{className:"episode__image",children:Object(p.jsx)("img",{src:g.poster_baseUrl+t.still_path})}),Object(p.jsxs)("div",{className:"episode__content",children:[Object(p.jsx)("p",{className:"title",children:t.name}),Object(p.jsx)("p",{className:"summary",children:t.overview})]})]},t.id),Object(p.jsx)("hr",{})]})};var ee=function(e){var t=e.id,c=(e.data,e.season_count),a=[],s=k.urls,r=k.api,o=Object(n.useState)(1),l=Object(i.a)(o,2),j=l[0],d=l[1],u=Object(n.useState)([]),b=Object(i.a)(u,2),h=b[0],O=b[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),g=v[0],_=v[1];Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(c=(c=s.seasonInfo).replace("<TV_ID>",t)).replace("<SEASON_NUMBER>",j),e.next=5,r.get(c);case 5:n=e.sent,O(n.data),_(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]);for(var y=1;y<=c;y++)a.push(y);return Object(p.jsxs)("div",{children:[Object(p.jsx)("select",{className:"dropdown",value:j,onChange:function(e){return d(e.target.value)},children:a.map((function(e){return Object(p.jsxs)("option",{value:e,children:["Season ",e]},e)}))}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"episodes",children:[Object(p.jsx)("hr",{}),g&&h.episodes.map((function(e){return G.compareDates((new Date).getTime(),e.air_date)&&Object(p.jsx)(Z,{data:e},e.id)}))]})]})},te=c(67);var ce=function(e){e.id;var t=e.data;return Object(p.jsxs)("div",{className:"movie_info__videos",children:[0!=t.length&&t.map((function(e){return Object(p.jsx)(te.a,{videoId:e.key},e.key)})),0==t.length&&Object(p.jsx)("p",{children:"No Videos available"})]})};var ne=function(e){e.id;var t=e.data;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"backdrop_images",children:t.backdrops.map((function(e){return Object(p.jsx)("img",{src:g.background_baseUrl+e.file_path,width:"100%",alt:"Backdrop Image"},e.file_path)}))})})};c(127);var ae=function(e){var t=e.data;return Object(p.jsxs)("div",{className:"person",children:[Object(p.jsx)("img",{src:g.poster_baseUrl+t.profile_path}),Object(p.jsxs)("div",{className:"person__info",children:[Object(p.jsx)("p",{children:t.name}),Object(p.jsx)("p",{children:"("==t.character[0]&&t.character}),Object(p.jsx)("p",{children:"("!=t.character[0]&&""!=t.character&&"(".concat(t.character,")")}),Object(p.jsx)("br",{})]})]})};c(128);var se=function(e){e.id;var t=e.data;return Object(p.jsx)("div",{className:"cast",children:t.map((function(e){return null!=e.profile_path&&Object(p.jsx)(ae,{data:e},e.id)}))})};c(129);var re=function(e){var t=e.id,c=e.data;return Object(p.jsx)("div",{className:"provider",title:c.name,children:Object(p.jsx)("img",{src:g.poster_baseUrl+c.logo_path})},t)};var ie=function(e){var t=e.id,c=e.location,a=e.type,s=k.urls,r=k.api,o=Object(n.useState)(c),l=Object(i.a)(o,2),j=l[0],d=l[1],u=Object(n.useState)([]),b=Object(i.a)(u,2),h=b[0],O=b[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),g=v[0],_=v[1],y=Object(n.useState)([]),N=Object(i.a)(y,2),w=N[0],S=N[1];return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var c,n,i,o,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(c=(c=s.watchProviders).replace("<type>",a)).replace("<TV_ID>",t),e.next=5,r.get(c);case 5:n=e.sent,O(n.data.results),_(!0),g&&!G.objectEmpty(h)&&null==h[j]&&d(Object.keys(h)[0]),g&&!G.objectEmpty(h)&&null!=h[j]&&(i=Object.keys(h[j]),o=new Set,l=[],i.map((function(e){"link"!=e&&h[j][e].map((function(e){l.includes(e.provider_name)||o.add({name:e.provider_name,logo_path:e.logo_path}),l.push(e.provider_name)}))})),S(Object(F.a)(o)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g,j]),Object(p.jsxs)("div",{children:[g&&!G.objectEmpty(h)&&Object(p.jsxs)("div",{children:["Your Location:\xa0\xa0",Object(p.jsx)("select",{value:j,className:"dropdown",onChange:function(e){return d(e.target.value)},children:Object.keys(h).map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[G.objectEmpty(h)?Object(p.jsx)("p",{children:"No providers known"}):Object(p.jsx)("p",{children:"You can watch it on:"}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{style:{display:"flex"},children:g&&w.map((function(e){return Object(p.jsx)(re,{data:e},e.name)}))})]})]})};var oe=function(){var e=window.location.href.split("/"),t=e[4],c=k.localAPI,a=Object(n.useState)({}),s=Object(i.a)(a,2),r=s[0],o=s[1],l=Object(n.useState)(!1),j=Object(i.a)(l,2),d=j[0],u=j[1],b=Object(n.useState)(1),O=Object(i.a)(b,2),f=O[0],v=O[1],_=Object(n.useState)(null),y=Object(i.a)(_,2),N=y[0],w=y[1];return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/"+t);case 2:return n=e.sent,o(n.data),u(!0),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),d&&(0==f?w(Object(p.jsx)(ee,{})):1==f?w(Object(p.jsx)(se,{id:r.id,data:r.credits.cast})):2==f?w(Object(p.jsx)(ce,{id:r.id,data:r.videos.results})):3==f?w(Object(p.jsx)(ne,{id:r.id,data:r.images})):4==f&&w(Object(p.jsx)(ie,{id:r.id,location:"US",type:"movie"})))}),[t,f,d]),5!=e.length?Object(p.jsx)("p",{children:"Error"}):Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{}),d?Object(p.jsxs)("div",{style:{marginTop:72},children:[Object(p.jsx)("div",{className:"backdrop_image",style:{backgroundImage:"url(".concat(g.background_baseUrl+r.backdrop_path,")")},children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"content__poster_block",children:Object(p.jsx)("img",{className:"content__poster",src:g.poster_baseUrl+r.poster_path})}),Object(p.jsxs)("div",{className:"content__info",children:[Object(p.jsxs)("p",{className:"content__info__title",children:[r.title," (",r.release_date.split("-")[0],")"]}),Object(p.jsx)("small",{children:G.formatDate(r.release_date)}),"\u2022",Object(p.jsx)("small",{children:r.genres.map((function(e){return e.name})).join(", ")}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{className:"content__info__overview",children:r.overview}),Object(p.jsxs)("div",{className:"ratings",children:[r.ratings.length>0&&r.ratings[0].Source.includes("Internet")&&Object(p.jsxs)("div",{className:"imdb",children:[Object(p.jsx)("img",{src:K}),Object(p.jsx)("p",{children:r.ratings[0].Value.split("/")[0]})]}),r.ratings.length>0&&r.ratings[0].Source.includes("Rotten")&&Object(p.jsxs)("div",{className:"rt",children:[Object(p.jsx)("img",{src:Q}),Object(p.jsx)("p",{children:r.ratings[0].Value})]}),r.ratings.length>1&&r.ratings[1].Source.includes("Rotten")&&Object(p.jsxs)("div",{className:"rt",children:[Object(p.jsx)("img",{src:Q}),Object(p.jsx)("p",{children:r.ratings[1].Value})]})]}),Object(p.jsx)("br",{}),0!=r.videos.results.filter((function(e){return"Trailer"==e.type})).length&&Object(p.jsx)($,{title:"Watch Trailer",link:G.generateYoutubeLink(r.videos.results.filter((function(e){return"Trailer"==e.type}))[0].key),new_tab:!0})]})]})}),Object(p.jsxs)("div",{className:"main_content",children:[Object(p.jsxs)("div",{className:"main_content__menu",children:[Object(p.jsx)("p",{className:1==f&&"active",onClick:function(){return v(1)},children:"Cast"}),Object(p.jsx)("p",{className:2==f&&"active",onClick:function(){return v(2)},children:"Videos"}),Object(p.jsx)("p",{className:3==f&&"active",onClick:function(){return v(3)},children:"Images"}),Object(p.jsx)("p",{className:4==f&&"active",onClick:function(){return v(4)},children:"Where to Watch?"})]}),Object(p.jsx)("div",{className:"main_content__data",children:N})]})]}):Object(p.jsx)("p",{style:{marginTop:72},children:"Loading"})]})};c(130);var le=function(){var e=window.location.href.split("/"),t=e[4],c=k.localAPI,a=Object(n.useState)({}),s=Object(i.a)(a,2),r=s[0],o=s[1],l=Object(n.useState)(!1),j=Object(i.a)(l,2),d=j[0],u=j[1],b=Object(n.useState)(0),O=Object(i.a)(b,2),f=O[0],v=O[1],_=Object(n.useState)(null),y=Object(i.a)(_,2),N=y[0],w=y[1];return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/tv/"+t);case 2:return n=e.sent,o(n.data),u(!0),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),d&&(0==f?w(Object(p.jsx)(ee,{id:r.id,data:r["season/1"],season_count:r.number_of_seasons})):1==f?w(Object(p.jsx)(se,{id:r.id,data:r.credits.cast})):2==f?w(Object(p.jsx)(ce,{id:r.id,data:r.videos.results})):3==f?w(Object(p.jsx)(ne,{id:r.id,data:r.images})):4==f&&w(Object(p.jsx)(ie,{id:r.id,location:"US",type:"tv"})))}),[t,f,d]),5!=e.length?Object(p.jsx)("p",{children:"Error"}):Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{}),d?Object(p.jsxs)("div",{style:{marginTop:72},children:[Object(p.jsx)("div",{className:"backdrop_image",style:{backgroundImage:"url(".concat(g.background_baseUrl+r.backdrop_path,")")},children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"content__poster_block",children:Object(p.jsx)("img",{className:"content__poster",src:g.poster_baseUrl+r.poster_path})}),Object(p.jsxs)("div",{className:"content__info",children:[Object(p.jsxs)("p",{className:"content__info__title",children:[r.name," (",r.first_air_date.split("-")[0],")"]}),Object(p.jsx)("small",{children:r.genres.map((function(e){return e.name})).join(", ")}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{className:"content__info__overview",children:r.overview}),Object(p.jsxs)("div",{className:"ratings",children:[r.ratings.length>0&&r.ratings[0].Source.includes("Internet")&&Object(p.jsxs)("div",{className:"imdb",children:[Object(p.jsx)("img",{src:K}),Object(p.jsx)("p",{children:r.ratings[0].Value.split("/")[0]})]}),r.ratings.length>0&&r.ratings[0].Source.includes("Rotten")&&Object(p.jsxs)("div",{className:"rt",children:[Object(p.jsx)("img",{src:Q}),Object(p.jsx)("p",{children:r.ratings[0].Value})]}),r.ratings.length>1&&r.ratings[1].Source.includes("Rotten")&&Object(p.jsxs)("div",{className:"rt",children:[Object(p.jsx)("img",{src:Q}),Object(p.jsx)("p",{children:r.ratings[1].Value})]})]}),Object(p.jsx)("br",{}),0!=r.videos.results.length&&Object(p.jsx)($,{title:"Watch Trailer",link:G.generateYoutubeLink(r.videos.results.filter((function(e){return"Trailer"==e.type}))[0].key),new_tab:!0})]})]})}),Object(p.jsxs)("div",{className:"main_content",children:[Object(p.jsxs)("div",{className:"main_content__menu",children:[Object(p.jsx)("p",{className:0==f?"active":"",onClick:function(){return v(0)},children:"Episodes"}),Object(p.jsx)("p",{className:1==f?"active":"",onClick:function(){return v(1)},children:"Cast"}),Object(p.jsx)("p",{className:2==f?"active":"",onClick:function(){return v(2)},children:"Videos"}),Object(p.jsx)("p",{className:3==f?"active":"",onClick:function(){return v(3)},children:"Images"}),Object(p.jsx)("p",{className:4==f?"active":"",onClick:function(){return v(4)},children:"Where to Watch?"})]}),Object(p.jsx)("div",{className:"main_content__data",children:N})]})]}):Object(p.jsx)("p",{style:{marginTop:72},children:"Loading"})]})};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(T.a,{store:B,children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,strict:!0,path:"/search",children:Object(p.jsx)(J,{})}),Object(p.jsx)(o.a,{exact:!0,strict:!0,path:"/",children:Object(p.jsx)(Y,{})}),Object(p.jsx)(o.a,{strict:!0,path:"/title",children:Object(p.jsx)(oe,{})}),Object(p.jsx)(o.a,{strict:!0,path:"/tv",children:Object(p.jsx)(le,{})})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){}},[[131,1,2]]]);
//# sourceMappingURL=main.4299e2d4.chunk.js.map