<script>
import headerVue from "@/component/header.vue";
import footerVue from "@/component/footer.vue";
import productApi from "../libs/apis/product";
export default {
  components: { headerVue, footerVue },
  data() {
    return {
      products: [],
      mycartId: this.$route.params.Cartid,
    };
  },
  async mounted() {
    this.products = await productApi.all();
  },
};
</script>
<template>
  <headerVue />
  <h1 style="margin-left: 30px">Your Cart</h1>
  <br />
  <hr />
 
    <div v-for="(product, index) in products" :key="index">
      <div v-if="mycartId == product._id">
         <div class="Cart" style=" margin-left: 20px; padding-bottom: 80px; display:flex ;flex-wrap: wrap; justify-content: space-evenly;">
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                alt=""
                :src="product.imageUrl"
                style="width: 200px; height: 200px"
              />
            </td>
            <td><p style="margin-right: 50px">1 item</p></td>
            <td>{{ product.price }}</td>
            <td>
              <img
                style="width: 70px"
                src="https://static.vecteezy.com/system/resources/thumbnails/003/241/364/small/trash-bin-icon-line-vector.jpg"
              />
            </td>
          </tr>
        </table>
        <div class="ccolumn">
          <div class="payy">
            <h4>summary <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>1</b></span></h4>
      <p><a href="#">subtotal</a> <span class="price">{{ product.price }}</span></p>
      <p><a href="#">shipping</a> <span class="price">$5</span></p>
      <hr>
      <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
            <RouterLink to="/payment"
              ><button type="button" class="button">Pay now</button></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerVue />
</template>
<style>
.button {
  /* float: right; */
  display: inline-block;
  height: 40px;
  width: 150px;
  margin: 0 5px 0 5px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}
hr {
  border: 0;
  clear: both;
  display: block;
  background-color: #0a0a07;
  height: 1px;
}
.ccolumn{
  padding: 0 16px;
 
}
.payy {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 5px; 
  width: 300px;
  height: 400px;
}
</style>
