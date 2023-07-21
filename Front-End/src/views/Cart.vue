<script>
   import headerVue from '@/component/header.vue';
import footerVue from '../component/footer.vue';
export default{
    components: {headerVue, footerVue}
}
</script>
<template>
    <headerVue/><h1 style="margin-left: 30px;">Your Cart</h1>
            <br>
            <hr>
        <div class="Cart" style="display: flex; justify-content:space-evenly; margin-left: 20px;">
            
            <table>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        <tr>
            <td><img alt="" src="@/assets/image/p3.svg" style="margin-right: 70px;"/></td>
            <td><p style="margin-right: 50px;">1 item</p></td>
            <td>20USD</td>
            <td><img style="width: 70px;" src="https://static.vecteezy.com/system/resources/thumbnails/003/241/364/small/trash-bin-icon-line-vector.jpg"> </td>
        </tr>
        
        </table> 
        <div class="pay">
             <h1 style="font-size: 1.25rem;font-weight: bold; text-align: center;">Summary</h1>
             <br>
             <div class="summary" style="display: flex; justify-content: space-around;">
                <div class="topic">
                     <h2 style="font-weight: 50;">subtotal</h2>
                     <h2 style="font-weight: 50;">shipping</h2>
                     <h2 style="font-weight: 50;">E-Tax</h2>
                     <hr>
                     <h2 style="font-weight: 50;">Total</h2>
                </div>
                <div class="value">
                    <h3>20USD</h3>
              <h3 style="margin-top: 30px;">0.5</h3>
              <h3 style="margin-top: 30px;">0.02</h3><hr>
              
              <h3>20USD</h3>
                </div>
            </div>
            <br>
            <RouterLink to="/payment" type="button" class="button">Pay now</RouterLink>
        </div>
    </div>
    <footerVue/>
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
.button{
background-color: #4fc8a5; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-left: 	30px;
  cursor: pointer;

}
hr{
  border: 0;
  clear:both;
  display:block;
  width: 100%;               
  background-color:#0a0a07;
  height: 1px;
  
}

</style>