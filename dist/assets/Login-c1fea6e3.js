import{_ as p,r as u,o as _,c as m,a as e,v as l,x as c,b as h,w as f,d as b,p as y,h as w}from"./index-9e94b1a8.js";const v="/assets/photo-3388c957.jpg";const g={data(){return{email:"",password:""}},methods:{async onSubmit(o){o.preventDefault();try{const r=await(await fetch("http://localhost:3001/auth/login",{method:"POST",headers:{"Content-type":"application/json",Origin:"http://localhost:3000"},body:JSON.stringify({email:this.email,password:this.password})})).json();if(!r.success){alert(r.error);return}}catch(t){console.log(t)}this.$router.push({name:"home"})}}},n=o=>(y("data-v-1a2db02c"),o=o(),w(),o),x={style:{"background-color":"black"}},S={style:{display:"flex","justify-content":"center"}},k={style:{"max-width":"500px"}},j=n(()=>e("div",{class:"imgcontainer"},[e("img",{src:v,alt:"Avatar",class:"avatar"})],-1)),L={class:"container"},V=n(()=>e("label",{for:"email"},[e("b",null,"Email")],-1)),C=n(()=>e("label",{for:"psw"},[e("b",null,"Password")],-1)),E=n(()=>e("button",{type:"submit",class:"loginbtn"},"Log in",-1)),I={class:"container",style:{"background-color":"#f1f1f1",display:"flex","justify-content":"end"}};function N(o,t,r,B,a,i){const d=u("RouterLink");return _(),m("main",null,[e("div",x,[e("div",S,[e("div",k,[e("form",{onSubmit:t[2]||(t[2]=(...s)=>i.onSubmit&&i.onSubmit(...s)),method:"post"},[j,e("div",L,[V,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.email=s),type:"text",placeholder:"Enter email",name:"email",required:""},null,512),[[c,a.email]]),C,l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>a.password=s),type:"password",placeholder:"Enter Password",name:"psw",required:""},null,512),[[c,a.password]]),E]),e("div",I,[h(d,{to:"/register"},{default:f(()=>[b("Create your new account here.")]),_:1})])],32)])])])])}const P=p(g,[["render",N],["__scopeId","data-v-1a2db02c"]]);export{P as default};
