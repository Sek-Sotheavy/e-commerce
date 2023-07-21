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
   <div style="padding-left: 40px; display:grid;grid-template-columns: auto auto auto auto; justify-content: space-evenly;">
    
    <div v-for="product in products" :key="product._id" >
          <div class="product">
             <div class="image">
              <img :src="product.imageUrl" alt="imglogo" style="width: 150px; height: 150px;" @click="gotocheckout(product._id)">
             </div>
             <div class="desc">
              <div style="text-align: center;"> {{product.title}}</div>
            <div style="text-align: center; margin-right: 65px;">{{product.price}}15$</div>
             </div>
          </div>
        </div>
    </div>
    <footerVue />
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .product {
    width: 200px;
    height: 350px; border-radius: 15px;
    background-color: white; padding-left: 45px;
    border: #C4C9DA solid rgb(222, 213, 213);
    margin: 10px;
    box-shadow: 5px 10px #ded7d7;
  }
  }
  </style>