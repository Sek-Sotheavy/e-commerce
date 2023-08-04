<script>
import headerVue from '@/component/header.vue';
import footerVue from '@/component/footer.vue';
export default{
    components: {headerVue, footerVue},
}
</script>
<template>
  <headerVue />
  <div style="padding-left: 40px; display:flex ;flex: wrap; justify-content: space-evenly; margin-bottom: 90px;">
    <div class="tick">
        <img alt="tick" src="@/assets/image/tick.jpg" style="width: 400px; height: 400px;"> 
    </div>
    <div class="thankyou">
        <h1>Sucessful !</h1>
        <p>Thank you your ordering.</p>
    </div>
  </div>
  <footerVue />
</template>