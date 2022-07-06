"use strict";(self.webpackChunkmy_cart=self.webpackChunkmy_cart||[]).push([[833],{9833:(B,u,r)=>{r.r(u),r.d(u,{CartModule:()=>q});var s=r(8583),t=r(7716),p=r(8072),l=r(5939),i=r(3738),a=r(4655),m=r(1095);const g=function(n){return["/details/",n]},Z=function(n){return["/usercart/buy",n]};function v(n,e){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"mat-card"),t.TgZ(2,"div",4),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t._UZ(9,"img",7),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"strong"),t._uU(12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"mat-card-actions",9),t.TgZ(14,"button",10),t.NdJ("click",function(){const M=t.CHM(o).$implicit;return t.oxw(2).removeItem(M.id)}),t._uU(15,"Remove"),t.qZA(),t.TgZ(16,"button",11),t._uU(17,"Buy now"),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const o=e.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(6,g,o.id)),t.xp6(2),t.Oqu(null==o?null:o.title),t.xp6(2),t.Oqu(null==o?null:o.category),t.xp6(3),t.Q6J("src",o.image,t.LSH),t.xp6(3),t.hij("Price: $",null==o?null:o.price,""),t.xp6(4),t.Q6J("routerLink",t.VKq(8,Z,o.id))}}function f(n,e){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,v,18,10,"ng-container",3),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.products)}}let C=(()=>{class n{constructor(o){this.cartSvc=o,this.products=[]}ngOnInit(){this.cartSvc.cartItems.subscribe(o=>{this.products=[...o]})}removeItem(o){this.cartSvc.removeItemFromCart(o)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(p.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart-item"]],decls:5,vars:1,consts:[["label","Cart Details"],[4,"ngIf"],["label","Order Details"],[4,"ngFor","ngForOf"],["id","pointer",3,"routerLink"],[1,"two-section"],[1,"image-conatiner"],["mat-card-image","",3,"src"],[2,"margin-left","auto"],["align","end"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"routerLink"]],template:function(o,c){1&o&&(t.TgZ(0,"mat-tab-group"),t.TgZ(1,"mat-tab",0),t.YNc(2,f,2,1,"div",1),t.qZA(),t.TgZ(3,"mat-tab",2),t._uU(4," Order Details "),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngIf",c.products.length))},directives:[l.SP,l.uX,s.O5,s.sg,i.a8,a.rH,i.n5,i.$j,i.G2,i.hq,m.lW],styles:[".action-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row}.two-section[_ngcontent-%COMP%]{display:flex;flex-direction:row}img[_ngcontent-%COMP%]{height:90px;width:60px;object-fit:cover;margin:10px}#pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();var h=r(5886),y=r(4466),x=r(9855),T=r(6297);const b=function(){return["/usercart/cart"]};let A=(()=>{class n{constructor(o,c,d){this.actRoutes=o,this.prodSvc=c,this.router=d,this.product={}}ngOnInit(){this.actRoutes.params.subscribe(o=>{o.id&&this.prodSvc.getProductById(o.id).subscribe(c=>{this.product=Object.assign({},c)},c=>{this.router.navigate(["server-error"])})})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(a.gz),t.Y36(x.s),t.Y36(a.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-buying-details"]],decls:6,vars:3,consts:[[3,"product"],[1,"action-buttons"],["mat-button","","color","warn",3,"routerLink"],["mat-button","","color","primary",2,"margin-left","auto"]],template:function(o,c){1&o&&(t.TgZ(0,"app-product-details",0),t.TgZ(1,"mat-card-actions",1),t.TgZ(2,"button",2),t._uU(3,"back"),t.qZA(),t.TgZ(4,"button",3),t._uU(5,"Proceed"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.Q6J("product",c.product),t.xp6(2),t.Q6J("routerLink",t.DdM(2,b)))},directives:[T.Z,i.hq,m.lW,a.rH],styles:[""]}),n})();var I=r(5546);const O=[{path:"cart",component:C},{path:"buy/:id",component:A}];let q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,a.Bz.forChild(O),h.q,y.m,I.ProductsModule]]}),n})()}}]);