<script>
import headerVue from '@/component/header.vue';
import footerVue from '@/component/footer.vue';
import categoriesApi from '../libs/apis/category';
import productsApi from '../libs/apis/product';
export default {
  components: {headerVue, footerVue},
  data() {
    return {
      categories: [],
      products: [],
      checkoutId: this.$route.params.Cid
      
    }
  },
  async mounted() {
    // this.categories = await categoriesApi.getCategoryProduct();
    this.products = await productsApi.all();
    // console.log(this.categories);
    
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
  <headerVue />
 
  <div class="home">
    <div class="first-content">
      <img alt="" class="group" src="@/assets/image/picture.png" />
    </div>
    
    <div class="column">
      <div class="box1">
        <h5>
          Coupon Saving
          <p>up to 25% of every essentail <img alt="car" class="car" src="@/assets/image/coupon.png" style="float: right;" width="100px" height="100px"></p>
        </h5>
        <button>shop coupon</button>
      </div>
      <div class="box2">
        <h5>
          Free Delivery
          <p>with selected items <img alt="car" class="car" src="@/assets/image/cargo-truck.png" style="float: right;" width="100px" height="100px"></p>
          
        </h5><button>Deliver now</button>
      </div>
      <div class="box3">
        <h5>
          Gift Voucher
          <p>with the personal care items <img alt="voucher" class="voucher" src="@/assets/image/gifts.png" style="float: right;" width="100px" height="100px"></p>
         
        </h5><button>Gift now</button>
      </div>
    </div>
    <div class="release" style="font-family: cursive;">
      <h2>Most Update Offers Here!</h2>
    </div>
    <div style="padding-left: 40px; display:flex ;flex: wrap; justify-content: space-evenly;">
      <div v-for="product in products" :key="product._id">
    <div class="wrapped" >
    <div class="product-img">
      <!-- <img src="http://bit.ly/2tMBBTd" height="420" width="327"> -->
      <img :src="product.imageUrl" alt="imglogo" style="width: 227px; height: 250px;" @click="gotocheckout(product._id)">
    </div>
    <div class="product-info">
      <div class="product-text">
        <h2>{{ product.title }}</h2><p><span>{{ product.price }}$</span></p>
      </div>
      <div class="product-price-btn">
        
        <button type="button-1" @click="gotocheckout(product._id)">Order</button>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
    <footerVue /> 

</template>

<style>
/* @media (min-width: 1024px)  */
  
  .first-content{
    margin-left: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-top: 20px;
    justify-content: space-evenly;
    
  }
  
  .release {
    margin-top: 20px;
    text-align: center;
    align-items: center;
    background-color: black;
    height: 70px;
    color: white;
    border: 1px solid gray;
    width: 1250px;
    border-radius: 5px;
    margin-left: 150px;
    
  }
  .column {
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-evenly;
  }
  .column .box1 {
    background-color: #AEECAE;
    width: 300px;
    border-radius: 20px;
    color: aliceblue;
    padding: 25px;
    margin: 20px;
    border: 1px solid;
  box-shadow: 5px 10px 18px #888888;
  }
  .column .box2 {
    background-color: #A3CDC6;
    width: 300px;
    color: aliceblue;
    padding: 25px;
    margin: 20px;
    border-radius: 20px;
    border: 1px solid;
  box-shadow: 5px 10px 18px #888888;
  }
  .column .box3 {
    background-color: #63b7c9;
    width: 300px;
    color: aliceblue;
    margin: 20px;
    padding: 25px;
    border-radius: 20px;
    border: 1px solid;
  box-shadow: 5px 10px 18px #888888;
  }
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
