<script>
import headerVue from "@/component/header.vue";
import footerVue from "@/component/footer.vue";
import productApi from "../libs/apis/product";
export default {
  components: { headerVue, footerVue },
  data() {
    return {
      products: [],
      checkoutId: this.$route.params.Cid,
      mycartId: this.$route.params.Cartid,
      AddId: this.$route.params.Aid,
    };
  },
  async mounted() {
    this.products = await productApi.all();
  },
  methods: {
    async onClick(categoryId, productId){
      this.products = await productsApi.getAllProduct(categoryId, productId)
    },
    gotomycart(mycartId){
        this.$router.push({name:'Cart', params:{Cartid:mycartId}})
    },
    gotoAddtoCart(AddId){
      this.$router.push({name:'Addtocart', params:{Aid:AddId}})
    }
  }
};
</script>
<template>
  <headerVue />
  <div class="checkout" style="padding-left: 40px; display:flex ;flex: wrap; justify-content: space-evenly;">
    <div  v-for="(product, index) in products" :key="index">
        <div v-if="checkoutId == product._id">
      <div 
        class="detail">
        <div class="wrappe">
          <p style="margin-left: 50px; color: blue">{{ product.title }}</p>
          <img alt="" :src="product.imageUrl" style="margin-left: 100px; width: 300px; border-radius: 10px;" />
          <p style="margin-left: 100px; color: rgb(90, 90, 228)">{{ product.desc }}</p>
        </div>
      </div>
      <div class="cart" style="">
        <h3>
          {{ product.title }} <br />
          {{ product.price }} $
        </h3>
        <div style="margin-bottom: 50px">
          <p>Quantity</p>
          <button type="button" id="plus">+</button>
          <input
            value=""
            min="1"
            max="5"
            type="number"
            step="1"
            name="quantity"
            id="quantity"
          />
          <button type="button" id="minus">-</button>
        </div>
        <div class="button" style="display: inline; padding-left: 20px">
            <button  @click="gotoAddtoCart(product._id)"
              type="submit"
              class="button1"
            >
              Add to cart
            </button>
            
          >
            <button @click="gotomycart(product._id)"
              type="submit"
              class="button1"
            >
              Buy now
            </button>
          >
        </div>
      </div></div>
    </div></div>
    <hr />
    <div style="padding-left: 30px">
      <h3>Related product</h3>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg" alt="" />
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px">
          <p>
            JUMISO -Aloe Facial Serum <br />120ml <br />18.00$ <br />45% 9.99
            USD
          </p>
        </div>
      </div>
    </div>
    
  <footerVue />
</template>
<style>
.wrappe {
  height: 580px;
}
hr {
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: #0a0a07;
  height: 1px;
}
.product {
  width: 200px;
  height: 350px;
  border-radius: 15px;
  background-color: white;
  padding-left: 45px;
  border: #c4c9da solid rgb(222, 213, 213);
  margin: 10px;
  box-shadow: 5px 10px #ded7d7;
}
.button1{
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
</style>
