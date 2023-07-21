<script>
import headerGuestVue from '../component/headerGuest.vue'; 
import footerVue from '@/component/footer.vue';
export default{
    components: {headerGuestVue, footerVue}
}
</script>

<template>
  <headerGuestVue />
 
  <div class="guesthome">
    <div class="first-content">
      <img alt="" class="group" src="@/assets/image/pic1.svg" />
    </div>
    <div class="release">
      <h2>New Release Product</h2>
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
    <div style="padding-left: 40px; display:flex ;flex: wrap; justify-content: space-evenly;">
      <div class="product">
        <div class="product1">
          <img src="@/assets/image/picp1.svg"  alt=""></div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
        </div>
        <div class="product">
        <div class="product2">
          <img src="@/assets/image/picp2.svg"  alt=""></div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
        </div>
        <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt=""></div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
        </div>
        <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt=""></div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
        </div>
    </div>
    <footerVue />
   
    </div>

</template>

<style>
@media (min-width: 1024px) {
  .first-content{
    margin-left: 70px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-top: 10px;
    justify-content: space-evenly;
  }
  
  .release {
    margin-top: 10px;
    text-align: center;
    margin-left: 30px;
    background-color: #80ddd6;
    height: 70px;
    border: 1px solid gray;
    width: 1400px;
    border-radius: 15px;
    margin-left: 40px;
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
  }
  .column .box2 {
    background-color: #A3CDC6;
    width: 300px;
    color: aliceblue;
    padding: 25px;
    margin: 20px;
    border-radius: 20px;
  }
  .column .box3 {
    background-color: #63b7c9;
    width: 300px;
    color: aliceblue;
    margin: 20px;
    padding: 25px;
    border-radius: 20px;
  }
  .product {
    width: 200px;
    height: 350px; border-radius: 15px;
    background-color: white; padding-left: 45px;
    border: 2px solid rgb(238, 233, 233);
    margin: 10px;
    box-shadow: 5px 10px #ded7d7;
  }

}
</style>
