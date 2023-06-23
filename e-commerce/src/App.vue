<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header> 
    <div>
      <img alt="clothlogo" class="logo" src="@/assets/image/logo.svg" width="125" height="125" />
    </div>
    
  <div class="wrapper">
   
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/contactus">Contact Us</RouterLink>
      <RouterLink to="/checkout">Checkout</RouterLink>
    </nav>
  </div>
      <div class="search" >
      <input type="text" placeholder="Search.." >
    </div>
    <div class="cart">
      <img alt="cart" src="@/assets/image/shopping-cart.svg" width="30" height="20" />
    </div>
    <div class="bag">
      <img alt="bag" src="@/assets/image/bags-shopping.svg" width="30" height="20" />
    </div>
    <div class="acc">
       <img alt="acc" src="@/assets/image/acc.svg">
    </div>
  </header> <RouterView />
</template>

<style scoped>
header {
  background-color: #C4C9DA;
  width: 100%;
  height: 50px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
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
