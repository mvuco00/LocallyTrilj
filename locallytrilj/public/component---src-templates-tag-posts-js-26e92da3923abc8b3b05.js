(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/kxI":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("q1tI"),s=a.n(c),l=a("TSYQ"),i=a.n(l),o=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,l=e.tag,u=Object(n.a)(e,["className","cssModule","innerRef","tag"]),m=Object(o.c)(i()(t,"card-body"),a);return s.a.createElement(l,Object(r.a)({},u,{className:m,ref:c}))};u.defaultProps={tag:"div"},t.a=u},"2fD1":function(e,t,a){"use strict";a.r(t),a.d(t,"filterQuery",(function(){return i}));var r=a("q1tI"),n=a.n(r),c=a("Bl7J"),s=a("vrFN"),l=a("rgsX"),i="4133851778";t.default=function(e){var t=e.data,a=e.pageContext.tag,r=a.charAt(0).toUpperCase()+a.slice(1);return r=(r=r.replace("-"," ")).replace(/\b\w/g,(function(e){return e.toUpperCase()})),n.a.createElement(c.a,null,n.a.createElement(s.a,{title:a}),n.a.createElement("h1",{className:"page-title"},r),n.a.createElement("div",{className:"all-posts"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return n.a.createElement(l.a,{key:t.id,title:t.frontmatter.title,business:t.frontmatter.business,type:t.frontmatter.type,path:t.fields.slug,date:t.frontmatter.date,body:t.excerpt,fluid:t.frontmatter.image.childImageSharp.fluid,tags:t.frontmatter.tags})}))))}},ChEw:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("q1tI"),s=a.n(c),l=a("TSYQ"),i=a.n(l),o=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,c=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),u=Object(o.c)(i()(t,"card-title"),a);return s.a.createElement(c,Object(r.a)({},l,{className:u}))};u.defaultProps={tag:"div"},t.a=u},ezmu:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("q1tI"),s=a.n(c),l=a("TSYQ"),i=a.n(l),o=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,c=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),u=Object(o.c)(i()(t,"card-text"),a);return s.a.createElement(c,Object(r.a)({},l,{className:u}))};u.defaultProps={tag:"p"},t.a=u},jhdv:function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},rgsX:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=a("Wbzz"),s=a("9eSz"),l=a.n(s),i=a("BLzl"),o=a("/kxI"),u=a("ChEw"),m=a("x863"),d=a("2Te1"),f=a("ezmu"),g=a("jhdv");t.a=function(e){var t=e.title,a=e.business,r=(e.type,e.date),s=e.body,p=e.path,b=e.fluid;e.tags;return n.a.createElement("div",{className:"blog-container"},n.a.createElement(i.a,{style:{width:"80%",height:"95%"}},n.a.createElement(c.Link,{to:"/blog/"+p},n.a.createElement(l.a,{className:"card-image-top",fluid:b})),n.a.createElement(o.a,null,n.a.createElement(c.Link,{to:"/blog/"+p,className:"card-link"},n.a.createElement(u.a,{tag:"h5"},t)),n.a.createElement(m.a,{className:"mb-2 text-muted"},n.a.createElement("div",{className:"card-tags"},n.a.createElement("span",{className:"text-info"},r),n.a.createElement("span",null,n.a.createElement(d.a,{color:"info",className:"text-uppercase"},n.a.createElement(c.Link,{to:"/tag/"+Object(g.slugify)(a)},a.replace("-"," ")))))),n.a.createElement(f.a,null,s),n.a.createElement(c.Link,{to:"/blog/"+p,className:"btn btn-outline-primary float-right procitajvise"},"Pročitaj više"))))}},x863:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("q1tI"),s=a.n(c),l=a("TSYQ"),i=a.n(l),o=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,c=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),u=Object(o.c)(i()(t,"card-subtitle"),a);return s.a.createElement(c,Object(r.a)({},l,{className:u}))};u.defaultProps={tag:"div"},t.a=u}}]);
//# sourceMappingURL=component---src-templates-tag-posts-js-26e92da3923abc8b3b05.js.map