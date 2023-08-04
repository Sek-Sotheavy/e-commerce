<!-- <script>import { RouterView } from "vue-router";</script> -->
<template>
    
	<div class="footer ">
	<div class="email" style=" float: right; margin-bottom: 40px;" >
		<p>Stay in touch with our NewSletter</p>
		<input type="text" placeholder="Enter email" style="border: 2px solid rgb(240, 230, 230);background-color:white; width: 100px; border-radius: 10px; height: 25px;">
		<button type="submit" style="border: 2px solid rgb(240, 230, 230);background-color:blue; width: 100px; border-radius: 10px; height: 30px;">subscribe</button>
	   </div>
	   <p style="margin-left: 10px;">Your Style</p>
	   
	<div style="margin-left: 200px; text-align: center;">
		<a href="#">Cleanser</a> | <a href="#">Serum</a> |
		<a href="#">Toner</a>
  </div>
	   <div class="icon">
	<img alt="visa" class="search" src="@/assets/image/visa.png" style="margin-left: 10px;"  width="30" height="20" />
	<img alt="card" class="cart" src="@/assets/image/credit-card.png" style="margin-left: 5px;" width="30" height="20" />
	<img alt="am" class="shop" src="@/assets/image/american-express.png" style="margin-left: 5px;" width="30" height="20" />
  </div>
	</div>

<RouterView />
</template>
<style>
.footer{
border: 1px	solid gray;
background-color: black;
margin-top: 50px;
font-family: cursive;
color: white;
position: -webkit-sticky;
        position: sticky;
        bottom: 0;
        z-index: 1;
        font-size: 20px;
bottom: 0;
width:100%;
}
</style>