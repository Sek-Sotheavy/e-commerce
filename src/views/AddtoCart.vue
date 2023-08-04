<script>
import headerVue from '@/component/header.vue';
import footerVue from '@/component/footer.vue';
import categoriesApi from '../libs/apis/category';
import productsApi from '../libs/apis/product';
export default{
    components: {headerVue, footerVue},
    data() {
    return {
      products: [],
      AddId: this.$route.params.Aid,
    };
    
},
async mounted() {
    this.products = await productsApi.all();
},
  methods: {
    async onClick(categoryId, productId){
      this.products = await productsApi.getAllProduct(categoryId, productId)
    },
    
}
}
</script>
<template>
   <headerVue/>
   <div>
    <div class="Addtocart">
        <h1>Shipping Cart</h1>
        <hr>
            <div class="p1">
              <div v-for="(product, index) in products" :key="index">
                <div v-if="AddId == product._id">
                  <div class="detail">
                    <img alt="" :src="product.imageUrl" style="margin-left: 40px; width: 100px; border-radius: 10px;margin-top: 20px;" />
                    <!-- {{ product.title }}; -->
                  </div>
                  <Routerlink to="/mycart/:Cartid"><button>Pay now</button></Routerlink>
                </div>
              </div>  
            </div>
    </div>
   </div>

   <footerVue/>
</template>
<style>
    .p1{
        width: 1200px;
        height: 150px;
        box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        margin-bottom: 100px;
        margin-left: 60px;
    }
</style>