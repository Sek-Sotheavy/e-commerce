<script>
import headerVue from '@/component/header.vue';
import footerVue from '../component/footer.vue';
import productApi from "../libs/apis/product";
export default{
    components: {headerVue, footerVue},
    data(){
      return {
      products: [],
      products: [],
      checkoutId: this.$route.params.Cid,
    };
    },
    async mounted() {
    this.products = await productApi.all();
  },
  methods: {
    async onClick(categoryId, productId){
      this.products = await productsApi.getAllProduct(categoryId, productId)
    },
    gotocheckout(checkoutId){
        this.$router.push({name:'Checkout', params:{Cid:checkoutId}})
    }
  }
}

</script>
<template>
  <headerVue/><h1 style="font-family:cursive; text-align: center; color: blue;">All Product</h1>
  <div style="padding-left: 30px; display:flex ;flex-wrap: wrap; justify-content: space-evenly;">
      <div v-for="product in products" :key="product._id">
    <div class="wrapped" >
    <div class="product-img">
      <!-- <img src="http://bit.ly/2tMBBTd" height="420" width="327"> -->
      <img :src="product.imageUrl" alt="imglogo" style="width: 227px; height: 250px;" @click="gotocheckout(product._id)">
    </div>
    <div class="product-info">
      <div class="product-text">
        <h2>{{ product.title }}</h2>
         <p><span>{{ product.price }}$</span></p>
      </div>
      <div class="product-price-btn">
       
        <button type="button" @click="gotocheckout(product._id)">ORDER</button>
      </div>
    </div>
  </div>
</div>
</div>
    <footerVue />
  </template>
  
  <style>
 .wrapped {
  height: 250px;
  width: 450px;
  margin: 30px auto;
  margin-right: 20px;
  border-radius: 7px 7px 7px 7px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.product-img {
  float: left;
}

.product-img img {
  border-radius: 7px 0 0 7px;
}

.product-info {
  float: left;
  height: 250px;
  width: 200px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
}

.product-text {
  height: 150px;
  width: 227px;
}

.product-text h2 {
  margin: 0 0 0 38px;
  padding-top: 52px;
  font-size: 15px;
  color: #474747;
  font-family: 'Bentham', serif;
}

.product-price-btn {
  height: 103px;
  width: 200px;
  margin-top: 17px;
  position: relative;
}

span {
  display: flex;
  height: 50px;
  font-family: 'Suranna', serif;
  font-size: 20px;
  margin-left: 40px;
}

.product-price-btn button {
  float: right;
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 10px 0 5px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.product-price-btn button:hover {
  background-color: #79b0a1;
}
  </style>