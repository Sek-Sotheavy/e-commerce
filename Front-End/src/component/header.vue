<script >
    
</script>
<template>
    <header> 
    <div style="padding-left: 40px;">
      <img alt="clothlogo" class="logo" src="@/assets/image/logo.svg" width="200" height="200" />
    </div>
    
  <div class="wrapper">
   
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/contactus">Contact Us</RouterLink>
      <!-- <RouterLink to="/checkout">Checkout</RouterLink> -->
    
    </nav>
  </div>
  <div style="display: flex; margin: auto;">
    <div class="search" >
      <img alt="search" src="@/assets/image/search.svg" width="30" height="20">
      <!-- <input type="text" placeholder="Search.." > -->
    </div>
    <div class="cart">
       <RouterLink to="/addtocart">  <img alt="cart" src="@/assets/image/shopping-cart.svg" width="30" height="20" /></RouterLink>
    </div>
    <div class="bag">
      <img alt="bag" src="@/assets/image/bags-shopping.svg" width="30" height="20" />
    </div>
    <div class="acc" style="margin-right: 20px;">
       <img alt="acc" src="@/assets/image/acc.svg">
    
    </div>
  </div>
    </header>
  <RouterView /> 
</template>
<style scoped>
header {
  background-color: white;
  width: 100%;
  height: 90px;
  border: 0.1px solid whitesmoke;
  position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1;
        font-size: 20px;
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  font-family: cursive;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  nav {
    margin: auto;
    justify-content:center;
    display: flex; 
    font-size: 1rem;
  }
  
}
</style>
