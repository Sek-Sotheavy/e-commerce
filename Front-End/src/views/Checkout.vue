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
    };
  },
  methods: {},
  async mounted() {
    this.products = await productApi.all();
  },
};
</script>
<template>
  <headerVue />
  <div class="checkout" style="padding-left: 40px; display:grid ;grid: wrap; justify-content: space-between;">
    <div  v-for="(product, index) in products" :key="index">
        <div v-if="checkoutId == product._id">
      <div 
        class="contact"
        style="
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-evenly "
      >
        <div class="wrapped">
          <p style="margin-left: 50px; color: blue">{{ product.title }}</p>
          <img alt="" :src="product.imageUrl" style="margin-left: 100px; width: 300px;" />
          <p style="margin-left: 100px; color: rgb(90, 90, 228)">{{ product.desc }}</p>
        </div>
      </div>
      <div class="">
        <h1>
          {{ product.title }} <br />
          20.00 USD
        </h1>
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
          <router-link to="/mycart">
            <button
              type="submit"
              style="
                border: 2px solid rgb(240, 230, 230);
                background-color: #91de85;
                width: 100px;
                border-radius: 10px;
                height: 30px;
              "
            >
              Add to cart
            </button></router-link
          >
          <router-link to="/mycart">
            <button
              type="submit"
              style="
                border: 2px solid rgb(240, 230, 230);
                background-color: #91de85;
                width: 100px;
                border-radius: 10px;
                height: 30px;
                margin-left: 30px;
              "
            >
              Buy now
            </button></router-link
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
.wrapped {
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
</style>
