import{d as V,m as r,c as g,b as e,u as h,F as C,a as l,w as d,aa as S,ab as I,e as R,ac as q,o as b,ad as E,ae as U}from"./index-mcqlMqqB.js";import{d as z,_ as B,V as L,e as F}from"./plugin-vueexport-helper-l-UeFufL.js";import{r as M,p as T,j as $,q as j,_ as A,s as K}from"./http-s4Lc6b9n.js";const O=a=>M.post("/api/v1/user/login",a),c=a=>(E("data-v-7c7cab23"),a=a(),U(),a),D={class:"login-page"},G={class:"top-nav"},H=c(()=>e("img",{src:B,alt:""},null,-1)),J=[H],P={class:"content-wrap"},Q=c(()=>e("div",{class:"img-wrap"},[e("img",{src:j,alt:""})],-1)),W={class:"form-wrap"},X={class:"form-inner"},Y=c(()=>e("div",{class:"sub-title"},"享樂酒店，誠摯歡迎",-1)),Z=c(()=>e("div",{class:"form-title"},"立即開始旅程",-1)),ee={class:"form",action:""},te={style:{"margin-top":"20px","margin-bottom":"10px"}},se={class:"has-account"},oe=V({__name:"LoginView",setup(a){const v=L,w=z(),u=q(),k=r(1),m=r(!1),s=r({email:"",password:""});function x(){var _;(_=f.value)==null||_.validate(t=>{t||O(s.value).then(n=>{if(n.status===200){m.value?localStorage.setItem("remember",s.value.email):localStorage.removeItem("remember"),w.success({content:"成功",meta:"登入成功",duration:2e3});const i=n.data.token,p=n.data.result.name;v.set("TOKEN",i),v.set("USER_NAME",p),u.push({name:"room"})}})})}const f=r(null),y=r({email:{type:"email",required:!0,message:"格式不正確",trigger:["input","blur"]},password:{required:!0,message:"必填",trigger:["input","blur"]}});return(_,t)=>{const n=A,i=K,p=T,N=$;return b(),g("div",D,[e("nav",G,[e("div",{class:"logo",onClick:t[0]||(t[0]=o=>h(u).push({name:"home"}))},J)]),e("div",P,[Q,e("div",W,[e("div",X,[Y,Z,e("form",ee,[k.value===1?(b(),g(C,{key:0},[l(p,{ref_key:"formRef",ref:f,model:s.value,rules:y.value},{default:d(()=>[l(i,{label:"電子信箱",path:"email"},{default:d(()=>[l(n,{value:s.value.email,"onUpdate:value":t[1]||(t[1]=o=>s.value.email=o),type:"text",size:"large",maxlength:"50",clearable:"",placeholder:"請輸入電子信箱"},null,8,["value"])]),_:1}),l(i,{label:"密碼",path:"password"},{default:d(()=>[l(n,{value:s.value.password,"onUpdate:value":t[2]||(t[2]=o=>s.value.password=o),type:"password",size:"large",maxlength:"50",clearable:"",placeholder:"請輸入密碼"},null,8,["value"])]),_:1})]),_:1},8,["model","rules"]),e("div",te,[l(N,{size:"small",checked:m.value,"onUpdate:checked":t[3]||(t[3]=o=>m.value=o),label:"記住帳號"},null,8,["checked"])]),e("button",{type:"button",class:"btn yellow",onClick:S(x,["prevent"])},"會員登入")],64)):I("",!0),e("div",se,[R(" 沒有會員嗎？ "),e("span",{onClick:t[4]||(t[4]=o=>h(u).push({name:"register"}))}," 立即註冊")])])])])])])}}}),re=F(oe,[["__scopeId","data-v-7c7cab23"]]);export{re as default};
