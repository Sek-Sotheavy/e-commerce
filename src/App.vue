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
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      
    </nav>
  </div>
  <div class="icon" style="float: right; margin-right: 40px;">
         <img alt="cart" class="cart" src="@/assets/image/shopping-cart.svg" width="30" height="20" /><img alt="search" class="search" src="@/assets/image/search.svg" width="30" height="20" />
       <img alt="shop" class="shop" src="@/assets/image/bags-shopping.svg" width="30" height="20" />
       
       
        
      </div>
  </header> <RouterView />
</template>

<style scoped>
header {
  background-color: #d9d9d9;
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
