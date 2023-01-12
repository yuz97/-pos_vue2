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
                  <router-link class="nav-link" :to="{ name: 'Food' }"
                     >Food</router-link
                  >
               </li>
            </ul>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <router-link
                     class="nav-link"
                     aria-current="page"
                     :to="{ name: 'Keranjang' }"
                     exact
                     >Cart
                     <span>{{
                        updateKeranjang
                           ? updateKeranjang.length
                           : jumlah_pesanan.length
                     }}</span>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
import axios from "axios";

export default {
   name: "NavbarComponent",
   props: ["updateKeranjang"],
   data() {
      return {
         // keranjang: [],
         jumlah_pesanan: [],
      };
   },
   methods: {
      getKeranjang() {
         axios
            .get(`http://localhost:3000/cart`)
            .then((res) => (this.jumlah_pesanan = res.data))
            .catch((e) => console.log(e));
      },
   },
   mounted() {
      this.getKeranjang();
   },
};
</script>

<style></style>
