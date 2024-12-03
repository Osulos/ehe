import{c as e,f as t,g as f,h as v,i as x,j as o}from"./chunk-7V7WNOD5.js";var B=t(o(),1);var h=class h extends B.ColumnsBase{};e(h,"UrunCesitleriColumns"),h.columnsKey="DosyaUrunler.UrunCesitleri",h.Fields=(0,B.fieldsProxy)();var _=h;var C=t(o(),1);var s=class s{static getLookup(){return(0,C.getLookup)("DosyaUrunler.UrunCesitleri")}static async getLookupAsync(){return(0,C.getLookupAsync)("DosyaUrunler.UrunCesitleri")}};e(s,"UrunCesitleriRow"),s.idProperty="UrunCesitleriid",s.nameProperty="Ad",s.localTextPrefix="DosyaUrunler.UrunCesitleri",s.lookupKey="DosyaUrunler.UrunCesitleri",s.deletePermission="Administration:General",s.insertPermission="Administration:General",s.readPermission="Administration:General",s.updatePermission="Administration:General",s.Fields=(0,C.fieldsProxy)();var T=s;var ee=t(o(),1),Y;(r=>(r.baseUrl="DosyaUrunler/UrunCesitleri",r.Methods={Create:"DosyaUrunler/UrunCesitleri/Create",Update:"DosyaUrunler/UrunCesitleri/Update",Delete:"DosyaUrunler/UrunCesitleri/Delete",Retrieve:"DosyaUrunler/UrunCesitleri/Retrieve",List:"DosyaUrunler/UrunCesitleri/List"},["Create","Update","Delete","Retrieve","List"].forEach(i=>{r[i]=function(d,c,w){return(0,ee.serviceRequest)(r.baseUrl+"/"+i,d,c,w)}})))(Y||(Y={}));var M=t(o(),1);var b=class b extends M.ColumnsBase{};e(b,"UrunEklemeColumns"),b.columnsKey="DosyaUrunler.UrunEkleme",b.Fields=(0,M.fieldsProxy)();var re=b;var V=t(o(),1);var S=t(o(),1);var U=class U extends S.PrefixedContext{constructor(n){if(super(n),!U.init){U.init=!0;var r=S.StringEditor;(0,S.initFormType)(U,["Ad",r])}}};e(U,"UrunCesitleriForm"),U.formKey="DosyaUrunler.UrunCesitleri";var z=U;var l=t(o(),1);var j=t(o(),1);var K=t(o(),1);var te,X,me;te=[K.Decorators.panel(),K.Decorators.registerClass("ehe.DosyaUrunler.UrunlerDialog")];var k=class k extends(me=K.EntityDialog){constructor(){super(...arguments);this.form=new F(this.idPrefix)}getFormKey(){return F.formKey}getRowDefinition(){return m}getService(){return D.baseUrl}afterLoadEntity(){super.afterLoadEntity(),this.form.UrunYeniGrid.UrunCesitleriid=this.entity.UrunCesitleriid}updateInterface(){super.updateInterface(),this.deleteButton.hide(),this.saveAndCloseButton.hide(),this.applyChangesButton.hide(),this.toolbar.findButton("extra-button-class").hide()}};X=f(me),k=x(X,0,"UrunlerDialog",te,k),e(k,"UrunlerDialog"),v(X,1,k);var W=k;var oe,Z,Ue;oe=[j.Decorators.registerEditor("ehe.DosyaUrunler.UrunYeniGrid")];var A=class A extends(Ue=j.EntityGrid){getColumnsKey(){return H.columnsKey}getDialogType(){return W}getIdProperty(){return m.idProperty}getLocalTextPrefix(){return m.localTextPrefix}getRowDefinition(){return m}getService(){return D.baseUrl}constructor(n){super(n)}getButtons(){return null}getInitialTitle(){return null}usePager(){return!1}getGridCanLoad(){return this.UrunCesitleriid!=null}get UrunCesitleriid(){return this._UrunCesitleriid}set UrunCesitleriid(n){this._UrunCesitleriid!=n&&(this._UrunCesitleriid=n,this.setEquality(m.Fields.UrunCesitleriid,n),this.refresh())}};Z=f(Ue),A=x(Z,0,"UrunYeniGrid",oe,A),e(A,"UrunYeniGrid"),v(Z,1,A);var L=A;var y=class y extends l.PrefixedContext{constructor(n){if(super(n),!y.init){y.init=!0;var r=l.StringEditor,i=l.IntegerEditor,d=l.LookupEditor,c=L;(0,l.initFormType)(y,["UrunAdi",r,"UrunAciklamasi",r,"UrunStokAdeti",i,"UrunFiyati",i,"UrunKodu",i,"UrunCesitleriid",d,"UrunYeniGrid",c])}}};e(y,"UrunEklemeForm"),y.formKey="DosyaUrunler.UrunEkleme";var ie=y;queueMicrotask(()=>[P]);var se=t(o(),1);var a=class a{};e(a,"UrunEklemeRow"),a.idProperty="Id",a.nameProperty="UrunAdi",a.localTextPrefix="DosyaUrunler.UrunEkleme",a.deletePermission="Administration:General",a.insertPermission="Administration:General",a.readPermission="Administration:General",a.updatePermission="Administration:General",a.Fields=(0,se.fieldsProxy)();var ne=a;var ae=t(o(),1),ue;(r=>(r.baseUrl="DosyaUrunler/UrunEkleme",r.Methods={Create:"DosyaUrunler/UrunEkleme/Create",Update:"DosyaUrunler/UrunEkleme/Update",Delete:"DosyaUrunler/UrunEkleme/Delete",Retrieve:"DosyaUrunler/UrunEkleme/Retrieve",List:"DosyaUrunler/UrunEkleme/List"},["Create","Update","Delete","Retrieve","List"].forEach(i=>{r[i]=function(d,c,w){return(0,ae.serviceRequest)(r.baseUrl+"/"+i,d,c,w)}})))(ue||(ue={}));var J=t(o(),1);var G=class G extends J.ColumnsBase{};e(G,"UrunlerColumns"),G.columnsKey="DosyaUrunler.Urunler",G.Fields=(0,J.fieldsProxy)();var le=G;var p=t(o(),1);var R=class R extends p.PrefixedContext{constructor(n){if(super(n),!R.init){R.init=!0;var r=p.StringEditor,i=p.IntegerEditor,d=p.LookupEditor,c=L;(0,p.initFormType)(R,["UrunAdi",r,"UrunAciklamasi",r,"UrunStokAdeti",i,"UrunFiyati",i,"UrunKodu",i,"UrunCesitleriid",d,"UrunYeniGrid",c])}}};e(R,"UrunlerForm"),R.formKey="DosyaUrunler.Urunler";var F=R;queueMicrotask(()=>[P]);var g=t(o(),1);var u=class u{static getLookup(){return(0,g.getLookup)("DosyaUrunler.Urunler")}static async getLookupAsync(){return(0,g.getLookupAsync)("DosyaUrunler.Urunler")}};e(u,"UrunlerRow"),u.idProperty="UrunlerId",u.nameProperty="UrunAdi",u.localTextPrefix="DosyaUrunler.Urunler",u.lookupKey="DosyaUrunler.Urunler",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,g.fieldsProxy)();var m=u;var pe=t(o(),1),D;(r=>(r.baseUrl="DosyaUrunler/Urunler",r.Methods={Create:"DosyaUrunler/Urunler/Create",Update:"DosyaUrunler/Urunler/Update",Delete:"DosyaUrunler/Urunler/Delete",Retrieve:"DosyaUrunler/Urunler/Retrieve",List:"DosyaUrunler/Urunler/List",AzaltStok:"DosyaUrunler/Urunler/AzaltStok"},["Create","Update","Delete","Retrieve","List","AzaltStok"].forEach(i=>{r[i]=function(d,c,w){return(0,pe.serviceRequest)(r.baseUrl+"/"+i,d,c,w)}})))(D||(D={}));var N=t(o(),1);var I=class I extends N.ColumnsBase{};e(I,"UrunSallaColumns"),I.columnsKey="DosyaUrunler.UrunEkleme",I.Fields=(0,N.fieldsProxy)();var de=I;var Q=t(o(),1);var O=class O extends Q.ColumnsBase{};e(O,"UrunYeniColumns"),O.columnsKey="ehe.DosyaUrunler.UrunYeniColumns.UrunYeniColumns",O.Fields=(0,Q.fieldsProxy)();var H=O;var ce,$,ye;ce=[V.Decorators.registerClass("ehe.DosyaUrunler.UrunCesitleriDialog")];var q=class q extends(ye=V.EntityDialog){getFormKey(){return z.formKey}getRowDefinition(){return T}getService(){return Y.baseUrl}};$=f(ye),q=x($,0,"UrunCesitleriDialog",ce,q),e(q,"UrunCesitleriDialog"),v($,1,q);var P=q;export{_ as a,T as b,Y as c,re as d,P as e,W as f,ie as g,ne as h,ue as i,le as j,m as k,D as l};
//# sourceMappingURL=chunk-V2EF3LC7.js.map