<template>
  <div class="home">
    <div class="p1">
      <h3>Find Your<br />favorite Outfit Here!</h3>
    </div>
    <div class="release">
      <h2>New Release Product</h2>
    </div>
    <div class="column">
      <div class="box1">
        <h5>
          Coupon Saving
          <p>up to 25% of every essentail <img alt="car" class="car" src="@/assets/image/coupon.png" style="float: right;" width="140px" height="100px"></p>
        </h5>
        <button>shop coupon</button>
      </div>
      <div class="box2">
        <h5>
          Free Delivery
          <p>with selected items <img alt="car" class="car" src="@/assets/image/cargo-truck.png" style="float: right;" width="140px" height="100px"></p>
          
        </h5><button>Deliver now</button>
      </div>
      <div class="box3">
        <h5>
          Gift Voucher
          <p>with the personal care items <img alt="voucher" class="voucher" src="@/assets/image/gifts.png" style="float: right;" width="140px" height="100px"></p>
         
        </h5><button>Gift now</button>
      </div>
    </div>
      <div class="product">
        <div>
          <img alt="shirt" class="logo"  src="@/assets/image/shirt.jpg" width="160px" height="160px"/>
          <p>$12.00<span> <a style="margin-left: 50px;">Black T-shirt</a></span></p>
        </div>
        <div>
          <img alt="dress" class="logo"  src="@/assets/image/dress.jpg" width="160px" height="160px"/>
          <p>$12.00<span> <a style="margin-left: 50px;">White Dress</a></span></p>
        </div>
        <div>
          <img alt="kid" class="logo"  src="@/assets/image/zara.jpg" width="160px" height="160px"/>
          <p>$25.00<span> <a style="margin-left: 50px;">Winter-Suit</a></span></p>
        </div>
        <div>
          <img alt="shoes" class="logo"  src="@/assets/image/shoes.jpg" width="160px" height="160px"/>
          <p>$12.00<span> <a style="margin-left: 50px;">Nike-Shoes</a></span></p>
        </div>
      </div>
      <div class="footer">
        <div class="email" style=" float: right; margin-bottom: 40px;" >
            <p>Stay in touch with our NewSletter</p>
           <button >Enter Email</button>
           </div>
           <p style="margin-left: 10px;">Your Style</p>
           
           
           <div style="margin: auto; text-align: center;">
            <a href="#">Women</a> | <a href="#">Men</a> |
            <a href="#">Kiddo</a>
      </div>
           <div class="icon">
        <img alt="visa" class="search" src="@/assets/image/visa.png" style="margin-left: 10px;"  width="30" height="20" />
        <img alt="card" class="cart" src="@/assets/image/credit-card.png" style="margin-left: 5px;" width="30" height="20" />
        <img alt="am" class="shop" src="@/assets/image/american-express.png" style="margin-left: 5px;" width="30" height="20" />
      </div>
      
      </div>
    </div>

</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    background-color: #a1e3d4;
    padding: 20px;
  }
  .footer{
    border: 1px	solid gray;
    background-color: #d9d9d9;
  }
  .p1 {
    text-align: center;
    margin-left: 30px;
    background-color: #d9d9d9;
    height: 150px;
    border: 1px solid gray;
    width: 1400px;
  }
  .release {
    margin-top: 10px;
    text-align: center;
    margin-left: 30px;
    background-color: #d9d9d9;
    height: 70px;
    border: 1px solid gray;
    width: 1400px;
  }
  .column {
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }
  .column .box1 {
    background-color: #a15c5c;
    width: 390px;
    color: aliceblue;
    padding: 25px;
    margin: 20px;
  }
  .column .box2 {
    background-color: #549e7a;
    width: 390px;
    color: aliceblue;
    padding: 25px;
    margin: 20px;
  }
  .column .box3 {
    background-color: #63b7c9;
    width: 390px;
    color: aliceblue;
    margin: 20px;
    padding: 25px;
  }
  .product {
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }

  .product > div {
   // background-color: #d9d9d9;
    width: 200px;
    margin: 30px;
   padding: 25px;
  }
  .logo{
   // display:block;
   // margin-left: auto;
   // margin-right: auto;
  }
}
</style>
