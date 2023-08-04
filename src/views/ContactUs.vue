<script>
import headerVue from '@/component/header.vue';
import footerVue from '../component/footer.vue';
export default{
    components: {headerVue,footerVue}
}
</script>
<template>
  <headerVue/>
  <div class="contactus">
    <div>
      <div
        class="contact"
        style="
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-evenly;
        "
      >
        <div class="input" style="margin-left: 10px">
          <h1>Contact</h1>
          <div class="box1" style="margin: 20px;">
            <label for="username">Name </label><br />
            <input
              type="text"
              placeholder=""
              style="
                border: 2px solid white;
                background-color: white;
                width: 300px;
                border-radius: 10px;
                height: 25px;
              "
            />
          </div>
          <div class="box2" style="margin: 20px;">
            <label for="username">Email </label><br />
            <input
              type="text"
              placeholder=""
              style="
                border: 2px solid white;
                background-color: white;
                width: 300px;
                border-radius: 10px;
                height: 25px;
              "
            />
          </div>
          <div class="box3" style="margin: 20px;">
            <label for="username">Phone number </label><br />
            <input
              type="text"
              placeholder=""
              style="
                border: 2px solid white;
                background-color: white;
                width: 300px;
                border-radius: 10px;
                height: 30px;
              "
            />
          </div>
          <div>
            <input
              type="submit"
              value="Send Message"
              style="
                width: 200px;
                height: 30px;
                border-radius: 10px;
                background-color: rgb(24, 165, 135);
                margin: 20px;
              "
            />
          </div>
        </div>
        <div class="message">
          <p1>please enter message here</p1>
        </div>
      </div>
    </div>
    <div class="wrapped">
      <p>Follow us On</p>
      <div
        style=" justify-content: center;
          display: grid;
          grid-template-columns: 100px 100px 100px;">
        <div><img alt="" src="@/assets/image/twitter.svg" /></div>
        <div><img alt="" src="@/assets/image/ig.svg" /></div>
        <div><img alt="" src="@/assets/image/fb.svg" /></div>
      </div>
      <div>
      <div style="padding: 100px;
          display: flex;
          justify-content: space-between;" >
        <div>
           <div class="b1" style="border: 1px solid white; width: 100px; height: 100px; background-color: #c4c9da;  margin-left: 20px; border-radius: 15px;">
            <img src="@/assets/image/phone.svg" style=" padding-top: 20px;"> 
         </div>  
         <p>  Contact Us<br>
              012 7383992</p>    
        </div>
        <div>
              <div class="b1" style="border: 1px solid white; width: 100px; height: 100px; background-color: #c4c9da; margin-left: 70px; border-radius: 15px;">
                <img src="@/assets/image/mail.svg" style=" padding-top: 20px;"> 
              </div>  
              <p>           Drop Mail<br>
                haruto@gmail.com<br>
                seksotheavy31@gmail.com</p>
        </div>
         
            <div>
             <div class="b1" style="border: 1px solid white; width: 100px; height: 100px; background-color: #c4c9da;  margin-left: 10px; border-radius: 15px;">
              <img src="@/assets/image/location.svg" style=" padding-top: 20px;"> 
            </div>
             <p>  Location <br>
               Phnom Penh</p>
            </div>
      </div>
    </div>
    
    </div>
    <footerVue />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contactus {
    padding-top: 30px;
  }
  .contactus .contact {
    /* text-align: center; */
    margin: 50px;
    margin-left: 250px;
    border: 1px solid gray;
    width: 1000px;
    height: 400px;
    border-radius: 20px;
    background-color: #c4c9da;
  }
  .contactus p {
    margin-left: 30px;
  }
  .message {
    text-align: center;
    margin: 50px;
    border: 2px solid #c4c9da;
    background-color: white;
    width: 400px;
    height: 300px;
    border-radius: 20px;
  }
  .wrapped {
    text-align: center;
    /* margin-bottom: 70px; */
  }
}
</style>
