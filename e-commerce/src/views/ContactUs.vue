<template>
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
          <div class="box1">
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
          <div class="box2">
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
          <div class="box3">
            <label for="username">Phone number </label><br />
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
          <div>
            <input
              type="submit"
              value="Send Message"
              style="
                width: 150px;
                height: 30px;
                border-radius: 10px;
                background-color: blue;
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
        style="
          display: grid;
          grid-template-columns: auto auto auto;
          justify-content: space-evenly;
        "
      >
        <div><img alt="" src="@/assets/image/twitter.svg" /></div>
        <div><img alt="" src="@/assets/image/ig.svg" /></div>
        <div><img alt="" src="@/assets/image/fb.svg" /></div>
      </div>
      <div>
      <div style="
          display: grid;
          grid-template-columns: auto auto auto;
          justify-content: space-evenly;
        ">
         <div class="b1" style="border: 1px solid white; width: 70px; height: 70px;">
             
         </div>
      </div>
    </div>
    
    </div>
    <div class="footer">
        <div class="email" style=" float: right; margin-bottom: 40px;" >
            <p>Stay in touch with our NewSletter</p>
            <input type="text" placeholder="Enter email" style="border: 2px solid rgb(240, 230, 230);background-color:white; width: 100px; border-radius: 10px; height: 30px;">
            <button type="submit" style="border: 2px solid rgb(240, 230, 230);background-color:blue; width: 100px; border-radius: 10px; height: 30px;">subscribe</button>
           </div>
           <p style="margin-left: 10px;">Your Style</p>
           
        <div style="margin-left: 200px; text-align: center;">
            <a href="#">Cleanser</a> | <a href="#">Serum</a> |
            <a href="#">Toner</a>
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
    /* margin-left: 10px; */
    border: 2px solid #c4c9da;
    background-color: white;
    width: 400px;
    height: 300px;
    border-radius: 20px;
  }
  .footer {
    border: 1px solid gray;
    background-color: #c4c9da;
  }
  .wrapped {
    text-align: center;
    margin-bottom: 150px;
    /* padding-bottom: 100px; */
  }
}
</style>
