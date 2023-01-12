<template>
   <div class="food">
      <Navbar />
      <div class="row">
         <div class="col">
            <h4>Daftar Makanan</h4>
         </div>
      </div>

      <div class="row mx-4 d-flex justify-content-center">
         <div class="col-sm-6">
            <input
               v-model="search"
               @keyup="searchFood"
               type="text"
               class="form-control"
               placeholder="find your dishes here..." />
         </div>
      </div>
      <div class="row">
         <div
            class="col-md-3 col-sm-6"
            v-for="product in products"
            :key="product.id">
            <CardProduct :product="product" />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
export default {
   name: "FoodPage",
   components: {
      Navbar,
      CardProduct,
   },
   data() {
      return {
         products: [],
         search: "",
      };
   },

   methods: {
      getProducts() {
         axios
            .get(`http://localhost:3000/products`)
            .then((res) => (this.products = res.data))
            .catch((e) => console.log(e));
      },
      searchFood() {
         axios
            .get(`http://localhost:3000/products?q=${this.search}`)
            .then((res) => (this.products = res.data))
            .catch((e) => console.log(e));
      },
   },
   mounted() {
      this.getProducts();
   },
};
</script>

<style></style>
