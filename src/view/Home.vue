<template>
   <div class="home">
      <Navbar />
      <div class="row">
         <div class="col">
            <div class="d-flex justify-content-around align-items-center">
               <div>
                  <h2><b>Choose Your Favourite</b></h2>
                  <p class="text-center">We deserve <b>Indonesian Food</b></p>
               </div>
               <img
                  src="../assets/images/order_food.png"
                  alt="cookie"
                  width="200"
                  height="300" />
            </div>
         </div>
      </div>
      <div class="row my-4">
         <div class="col d-flex justify-content-between align-items-center">
            <h3>Best Food</h3>

            <router-link to="/foods" class="btn btn-success"
               >Lihat Semua</router-link
            >
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
   name: "HomePage",
   components: {
      Navbar,
      CardProduct,
   },
   data() {
      return {
         products: [],
      };
   },
   methods: {
      // setProduct(data) {
      //    this.products = data;
      // },
      getProducts() {
         //cara 1
         // axios.get(`http://localhost:3000/products`)
         //    .then((res) => (this.setProduct(res.data)))
         //    .catch((e) => console.log(e));

         //cara2
         axios
            .get(`http://localhost:3000/best-product`)
            .then((res) => (this.products = res.data))
            .catch((e) => console.log(e));
      },
   },
   mounted() {
      this.getProducts();
   },
};
</script>

<style>
.btn-success {
   background-color: #50bc50;
   color: white;
   border: none;
}
</style>
