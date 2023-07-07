<script >
    //  import { RouterLink, RouterView } from "vue-router";
    // export default {
    //     components: 
    // }
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
  <div style="display: flex; margin: auto;">
    <div class="search" >
      <input type="text" placeholder="Search.." >
    </div>
    <div class="cart">
      <img alt="cart" src="@/assets/image/shopping-cart.svg" width="30" height="20" />
    </div>
    <div class="bag">
      <img alt="bag" src="@/assets/image/bags-shopping.svg" width="30" height="20" />
    </div>
    <div class=" Login m-1">
                                <RouterLink to="/login" class="login d-flex justify-content-end " > 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="20%">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>  
                                </RouterLink>
                        </div>
  </div>
    </header>
  <RouterView /> 
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
