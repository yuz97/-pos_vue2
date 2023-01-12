<template>
   <div class="detail">
      <Navbar />
      <div class="row">
         <div class="col">
            <nav aria-label="breadcumb">
               <ol class="breadcrumb shadow-sm">
                  <li class="breadcrumb-item">
                     <router-link class="breadcrumb-link" :to="{ name: 'Home' }"
                        >Home</router-link
                     >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                     Detail
                  </li>
               </ol>
            </nav>
         </div>
      </div>
      <div class="row mt-4">
         <div class="col-md-4 text-center">
            <img
               :src="`../../images/menu/${product.gambar}`"
               height="250"
               alt="gambar"
               class="rounded w-100" />
         </div>
         <div class="col-md-8">
            <div class="card shadow-sm">
               <div class="card-body">
                  <table class="table table-stripped">
                     <tr>
                        <th>Nama Product</th>
                        <td>{{ product.name }}</td>
                     </tr>
                     <tr>
                        <th>Harga</th>
                        <td>{{ product.price }}</td>
                     </tr>
                  </table>
                  <form action="" method="post" @submit.prevent>
                     <div class="form-group">
                        <label for="">Jumlah Pesanan</label>
                        <input
                           v-model="pesan.jumlah_pesanan"
                           type="number"
                           min="0"
                           name="jumlah_pesanan"
                           class="form-control" />
                     </div>
                     <div class="form-group">
                        <label for="">Keterangan</label>
                        <textarea
                           v-model="pesan.keterangan"
                           name="keterangan"
                           class="form-control"
                           rows="3"
                           placeholder="keterangan pedas,tambah bawang..."></textarea>
                     </div>
                     <button
                        class="btn btn-success btn-sm mt-2"
                        type="submit"
                        v-on:click="pemesanan">
                        Order Now
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
   name: "DetailPage",
   components: { Navbar },
   data() {
      return {
         product: [],
         pesan: {},
      };
   },
   methods: {
      productDetail() {
         axios
            .get(`http://localhost:3000/products/${this.$route.params.id}`)
            .then((res) => (this.product = res.data))
            .catch((e) => console.log(e));
      },
      pemesanan() {
         if (this.pesan.jumlah_pesanan > 0 && this.jumlah_pesanan != "") {
            this.pesan.products = this.product;
            axios
               .post(` http://localhost:3000/cart`, this.pesan)
               .then(
                  () =>
                     // push ke keranjang
                     this.$router.push({ path: "/keranjang" }),
                  //alert success
                  this.$toast.success("berhasil masuk keranjang", {
                     type: "success",
                     position: "top-right",
                     duration: 3000,
                  })
               )
               .catch((e) => console.log(e));
         } else {
            //alert failed
            this.$toast.error("pesanan tidak boleh kosong", {
               type: "error",
               position: "top-right",
               duration: 3000,
            });
         }
      },
   },
   mounted() {
      this.productDetail();
   },
};
</script>

<style>
.breadcrumb {
   background-color: white;

   color: white;
   padding: 8px;
   border-radius: 5px;
}
.breadcrumb-link {
   text-decoration: none;
}
</style>
