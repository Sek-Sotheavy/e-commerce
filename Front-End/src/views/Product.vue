<script>
import headerVue from '@/component/header.vue';
import footerVue from '../component/footer.vue';
export default{
    components: {headerVue, footerVue}
}
</script>
<template>
  <headerVue/>
   <div style="padding-left: 40px; display:grid;grid-template-columns: auto auto auto auto; justify-content: space-evenly;">
      <div class="product">
        <div class="product1">
          <img src="@/assets/image/picp1.svg"  alt=""></div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
        </div>
      <div class="product">
        <div class="product2">
          <img src="@/assets/image/picp2.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product4">
          <img src="@/assets/image/p3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Brigthening Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
        </div>
      </div>
      <div class="product">
        <div class="product3">
          <img src="@/assets/image/picp3.svg"  alt="">
        </div>
        <div class="nameProduct" style="text-align: center; margin-right: 50px;">
          <p>JUMISO -Aloe Facial Serum <br>120ml <br>18.00$ <br>45% 9.99 USD</p>
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
    background-color: #C4C9DA; padding-left: 45px;
    border: #C4C9DA solid gray;
    margin: 10px;
  }
  }
  </style>