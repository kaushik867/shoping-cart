"use strict";(self.webpackChunkmy_cart=self.webpackChunkmy_cart||[]).push([[928],{6928:(E,p,i)=>{i.r(p),i.d(p,{CartModule:()=>k});var a=i(8583),t=i(7716),m=i(8072),g=i(9855),_=i(6215);let u=(()=>{class e{constructor(){this.orderDetails=new _.X([])}getOrderDetails(){return this.orderDetails}setOrders(r){const n=this.orderDetails.getValue();n.push(r),this.orderDetails.next(n)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=i(4655),v=i(5939),l=i(3738);function C(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",2),t._uU(2," No Order yet...!!! "),t.qZA(),t.qZA())}function O(e,o){if(1&e&&(t.TgZ(0,"mat-card"),t._UZ(1,"img",3),t.TgZ(2,"div",4),t.TgZ(3,"h3"),t._uU(4),t.qZA(),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"strong"),t._uU(9),t.qZA(),t.qZA(),t.qZA()),2&e){const r=t.oxw().$implicit;t.xp6(1),t.Q6J("src",r.image,t.LSH),t.xp6(3),t.Oqu(null==r?null:r.title),t.xp6(1),t.hij(" ",t.lcZ(6,4,null==r?null:r.time)," "),t.xp6(4),t.hij("Price: $",null==r?null:r.price,"")}}function T(e,o){if(1&e&&(t.ynx(0),t.YNc(1,O,10,6,"mat-card",0),t.BQk()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.orderDetails.length>0)}}let y=(()=>{class e{constructor(r,n){this.orderSvc=r,this.router=n,this.orderDetails=[]}ngOnInit(){this.orderSvc.getOrderDetails().subscribe(r=>{this.orderDetails=[...r]},r=>{this.router.navigate(["/server-error"])})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(u),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-order-details"]],decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["role","alert",1,"alert","alert-danger"],[3,"src"],[1,"column-1"],[1,"column-2"]],template:function(r,n){1&r&&(t.YNc(0,C,3,0,"div",0),t.YNc(1,T,2,1,"ng-container",1)),2&r&&(t.Q6J("ngIf",0===n.orderDetails.length),t.xp6(1),t.Q6J("ngForOf",n.orderDetails))},directives:[a.O5,a.sg,l.a8],pipes:[a.uU],styles:["mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}img[_ngcontent-%COMP%]{height:75px;width:50px}.column-1[_ngcontent-%COMP%], .column-2[_ngcontent-%COMP%]{margin:7px}.column-2[_ngcontent-%COMP%]{margin-left:auto}.alert[_ngcontent-%COMP%]{text-align:center;margin:20px}"]}),e})();var f=i(1095);const b=function(e){return["/details/",e]},A=function(e){return["/usercart/buy",e]};function I(e,o){if(1&e){const r=t.EpF();t.ynx(0),t.TgZ(1,"mat-card"),t.TgZ(2,"div",5),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t._UZ(9,"img",8),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"strong"),t._uU(12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"mat-card-actions",10),t.TgZ(14,"button",11),t.NdJ("click",function(){const d=t.CHM(r).$implicit;return t.oxw(2).removeItem(d.id)}),t._uU(15,"Remove"),t.qZA(),t.TgZ(16,"button",12),t._uU(17,"Buy now"),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&e){const r=o.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(6,b,r.id)),t.xp6(2),t.Oqu(null==r?null:r.title),t.xp6(2),t.Oqu(null==r?null:r.category),t.xp6(3),t.Q6J("src",r.image,t.LSH),t.xp6(3),t.hij("Price: $",null==r?null:r.price,""),t.xp6(4),t.Q6J("routerLink",t.VKq(8,A,r.id))}}function D(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"mat-card",13),t.TgZ(1,"div",14),t.TgZ(2,"h3"),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",15),t.TgZ(5,"button",16),t.NdJ("click",function(){return t.CHM(r),t.oxw(2).buyAll()}),t._uU(6,"proceed with all"),t.qZA(),t.qZA(),t.qZA()}if(2&e){const r=t.oxw(2);t.xp6(3),t.hij(" Total Quantity: ",r.products.length,"")}}function S(e,o){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,I,18,10,"ng-container",3),t.YNc(2,D,7,1,"mat-card",4),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",r.products),t.xp6(1),t.Q6J("ngIf",r.products.length>0)}}function q(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",17),t._uU(2," Yout cart is Empty "),t.qZA(),t.qZA())}let M=(()=>{class e{constructor(r,n,c,d){this.cartSvc=r,this.prodSvc=n,this.orderSvc=c,this.router=d,this.products=[]}ngOnInit(){this.cartSvc.cartItems.subscribe(r=>{this.products=[...r]})}removeItem(r){this.cartSvc.removeItemFromCart(r)}buyAll(){this.products.forEach(r=>{this.prodSvc.getProductById(r.id).subscribe(n=>{const c=Object.assign(Object.assign({},n),{time:new Date,order:"successfull"});this.orderSvc.setOrders(c),this.cartSvc.removeItemFromCart(r.id),this.products=[],this.router.navigate(["/usercart/cart"])})})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(m.N),t.Y36(g.s),t.Y36(u),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart-item"]],decls:6,vars:2,consts:[["label","Cart Details"],[4,"ngIf"],["label","Order Details"],[4,"ngFor","ngForOf"],["id","buy-all",4,"ngIf"],["id","pointer",3,"routerLink"],[1,"two-section"],[1,"image-conatiner"],["mat-card-image","",3,"src"],[2,"margin-left","auto"],["align","end"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"routerLink"],["id","buy-all"],[1,"column-1"],[1,"column-2"],["mat-raised-button","","color","primary",3,"click"],["role","alert",1,"alert","alert-danger"]],template:function(r,n){1&r&&(t.TgZ(0,"mat-tab-group"),t.TgZ(1,"mat-tab",0),t.YNc(2,S,3,2,"div",1),t.YNc(3,q,3,0,"div",1),t.qZA(),t.TgZ(4,"mat-tab",2),t._UZ(5,"app-order-details"),t.qZA(),t.qZA()),2&r&&(t.xp6(2),t.Q6J("ngIf",n.products.length>0),t.xp6(1),t.Q6J("ngIf",0===n.products.length))},directives:[v.SP,v.uX,a.O5,y,a.sg,l.a8,s.rH,l.n5,l.$j,l.G2,l.hq,f.lW],styles:[".action-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row}.two-section[_ngcontent-%COMP%]{display:flex;flex-direction:row}img[_ngcontent-%COMP%]{height:90px;width:60px;object-fit:cover;margin:10px}#pointer[_ngcontent-%COMP%]{cursor:pointer}.column-1[_ngcontent-%COMP%]{margin:7px}.column-2[_ngcontent-%COMP%]{margin:7px 7px 7px auto}#buy-all[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;background-color:#7fffd4}.alert[_ngcontent-%COMP%]{text-align:center;margin:20px}"]}),e})();var Z=i(5886),h=i(4466),Y=i(5312),P=i(9047),F=i(6297);function J(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",2),t._uU(2," Yout cart is Empty "),t.qZA(),t.qZA())}function U(e,o){1&e&&t._UZ(0,"app-loader")}const Q=function(){return["/usercart/cart"]};function B(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"app-product-details",3),t.TgZ(1,"mat-card-actions",4),t.TgZ(2,"button",5),t._uU(3,"back"),t.qZA(),t.TgZ(4,"button",6),t.NdJ("click",function(){t.CHM(r);const c=t.oxw();return c.placedOrder(c.product.id)}),t._uU(5,"Proceed"),t.qZA(),t.qZA(),t.qZA()}if(2&e){const r=t.oxw();t.Q6J("product",r.product),t.xp6(2),t.Q6J("routerLink",t.DdM(2,Q))}}let j=(()=>{class e{constructor(r,n,c,d,x,H){this.actRoutes=r,this.cartSvc=n,this.loadSvc=c,this.prodSvc=d,this.router=x,this.OrderSvc=H,this.product={},this.loading=!1}ngOnInit(){this.actRoutes.params.subscribe(r=>{r.id&&this.cartSvc.cartItems.getValue().length&&this.prodSvc.getProductById(r.id).subscribe(n=>{this.product=Object.assign({},n)},n=>{this.router.navigate(["server-error"])})}),this.loadSvc.loading.subscribe(r=>{this.loading=r})}placedOrder(r){this.prodSvc.getProductById(r).subscribe(n=>{const c=Object.assign(Object.assign({},n),{time:new Date,order:"successfull"});this.OrderSvc.setOrders(c),this.cartSvc.removeItemFromCart(r),this.product={},this.router.navigate(["/usercart/cart"])})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(s.gz),t.Y36(m.N),t.Y36(Y.b),t.Y36(g.s),t.Y36(s.F0),t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-buying-details"]],decls:5,vars:7,consts:[[4,"ngIf"],[3,"product",4,"ngIf"],["role","alert",1,"alert","alert-danger"],[3,"product"],[1,"action-buttons"],["mat-button","","color","warn",3,"routerLink"],["mat-button","","color","primary",2,"margin-left","auto",3,"click"]],template:function(r,n){1&r&&(t.YNc(0,J,3,0,"div",0),t.ALo(1,"json"),t.YNc(2,U,1,0,"app-loader",0),t.YNc(3,B,6,3,"app-product-details",1),t.ALo(4,"json")),2&r&&(t.Q6J("ngIf","{}"==t.lcZ(1,3,n.product)&&!n.loading),t.xp6(2),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf","{}"!=t.lcZ(4,5,n.product)&&!n.loading))},directives:[a.O5,P.R,F.Z,l.hq,f.lW,s.rH],pipes:[a.Ts],styles:[".alert[_ngcontent-%COMP%]{text-align:center;margin:20px}"]}),e})();var N=i(2298);let w=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,h.m,Z.q]]}),e})();const L=[{path:"cart",component:M},{path:"buy/:id",component:j}];let k=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,s.Bz.forChild(L),Z.q,h.m,N.ProductsModule,w]]}),e})()}}]);