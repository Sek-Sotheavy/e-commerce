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
  <div
    class="Cart"
    style="
      display: flex; flex: wrap;
      justify-content: space-between;
      margin-left: 20px;
      padding-bottom: 80px;
    "
  >
    <div v-for="(product, index) in products" :key="index">
      <div v-if="mycartId == product._id">
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
        <div class="col-25">
          <div class="row">
            <h4>
              Summary
              <span class="price" style="color: black"
                ><i class="fa fa-shopping-cart"></i><b>1</b></span
              >
            </h4>
            <p>
              <a href="#">subtotal</a>
              <span class="price"
                ><b>{{ product.price }}</b></span
              >
            </p>
            <p>
              <a href="#">Shipping</a> <span class="price"><b>$5</b></span>
            </p>
            <p>
              <a href="#">Est.Tax</a> <span class="price"><b>$8</b></span>
            </p>
            <hr />
            <p>
              Total <span class="price" style="color: black"><b>$30</b></span>
            </p>
            <br />
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
.pay {
  margin-top: 50px;
  border: 1px solid rgb(247, 240, 240);
  border-radius: 5px;
  background-color: #dfdfe4;
  width: 400px;
  padding: 30px;
}
.button {
  /* float: right; */
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 10px 0 5px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
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
  width: 100%;
  background-color: #0a0a07;
  height: 1px;
}
.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  padding: 0 16px;
}
.row {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
</style>
