<script>
import headerVue from '@/component/header.vue';
import footerVue from '@/component/footer.vue';
export default{
    components: {headerVue,footerVue}
}
</script>
<template>
    <headerVue/>
<div class="checkout">
    <div class="contact" style="display: grid;grid-template-columns: auto auto;justify-content: space-evenly;">
       <div class="wrapped">
        <p style=" margin-left: 100px; color: blue;">IUNIK-Calemdula Complete Cleansing Oil</p>
        <img alt="" src="@/assets/image/p3.svg" style="margin-left: 100px;"/>
        <p style=" margin-left: 100px; color: rgb(90, 90, 228);">Makeup Alley Review: 5/5 out of 1 review
<br>Formulated without: sulfates, mineral oil, parabens, artificial colorants, fragrances<br>
Potential irritants: This product is made with Simmondsia Chinensis (Jojoba) Seed Oil.</p>
    </div> 
    <div class="wrapper">
         <h1>IUNIK- Cleansing Oil <br>  9.99 USD</h1>
         <div style="margin-bottom: 50px;">
         <p>Quantity</p>
         <button type="button" id="plus"> + </button>
         <input value=""  min="1" max="5" type="number" step="1" name="quantity" id="quantity">
         <button type="button" id="minus" > - </button>
        </div>
         <div class="button" style="display: inline; padding-left: 20px;">
            <button type="submit" style="border: 2px solid rgb(240, 230, 230);background-color:#91DE85; width: 100px; border-radius: 10px; height: 30px;">Add to cart</button>
            <button type="submit" style="border: 2px solid rgb(240, 230, 230);background-color:#91DE85; width: 100px; border-radius: 10px; height: 30px; margin-left: 30px;">Buy now</button>
         </div>
    </div>
    </div>
    <footerVue />
</div>
</template>
<style>
.footer{
    
    border: 1px	solid gray;
    background-color: #C4C9DA;
  }
.wrapped{
    height: 580px;
}

</style>