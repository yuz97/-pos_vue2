<template>
   <nav
      class="navbar navbar-expand-lg bg-body-tertiary bg-light navbar-light shadow-sm">
      <div class="container-fluid">
         <router-link class="navbar-brand" to="/" exact>Our Food</router-link>
         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <router-link class="nav-link" aria-current="page" to="/" exact
                     >Home
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/about">About</router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/food">Food</router-link>
               </li>
            </ul>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <router-link class="nav-link" aria-current="page" to="/" exact
                     >Cart
                     <span>0</span>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
export default {
   name: "NavbarComponent",
};
</script>

<style></style>
