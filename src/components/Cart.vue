<template>
   <div>
      <li class="nav-item">
         <router-link
            class="nav-link"
            aria-current="page"
            :to="{ name: 'Keranjang' }"
            exact
            >Cart
            <span>{{
               updateKeranjang ? updateKeranjang.length : jumlah_pesanan.length
            }}</span>
         </router-link>
      </li>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: "CartComponent",
   props: ["updateKeranjang"],
   data() {
      return {
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
