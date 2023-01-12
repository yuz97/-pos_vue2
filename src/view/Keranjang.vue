<template>
   <div class="keranjang">
      <Navbar :update-keranjang="keranjang" />
      <div class="row">
         <div class="col">
            <nav aria-label="breadcumb">
               <ol class="breadcrumb shadow-sm">
                  <li class="breadcrumb-item">
                     <router-link class="breadcrumb-link" :to="{ name: 'Home' }"
                        >Home</router-link
                     >
                  </li>
                  <li class="breadcrumb-item">
                     <router-link class="breadcrumb-link" :to="{ name: 'Food' }"
                        >Foods</router-link
                     >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                     Keranjang
                  </li>
               </ol>
            </nav>
         </div>
      </div>
      <div class="row mt-4">
         <div class="col">
            <h4><strong>Keranjang</strong> saya</h4>
            <table class="table table-striped mt-3">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Gambar</th>
                     <th>Makanan</th>
                     <th>Keterangan</th>
                     <th>Jumlah</th>
                     <th>Harga</th>
                     <th>Total Harga</th>
                     <th>Hapus</th>
                  </tr>
               </thead>
               <tbody v-if="keranjang != ''">
                  <tr v-for="(item, i) in keranjang" :key="item.id">
                     <td>
                        <b>{{ i + 1 }}</b>
                     </td>
                     <td>
                        <img
                           :src="`../../images/menu/${item.products.gambar}`"
                           :alt="`${item.products.name}`"
                           width="70"
                           height="70" />
                     </td>
                     <td>{{ item.products.name }}</td>
                     <!-- ---- -->
                     <td v-if="item.keterangan">
                        {{ item.keterangan }}
                     </td>
                     <td v-else>-</td>
                     <!-- ---- -->
                     <td>{{ item.jumlah_pesanan }}</td>
                     <td>Rp. {{ item.products.price }}</td>
                     <td>
                        <b>
                           Rp.
                           {{ item.products.price * item.jumlah_pesanan }}</b
                        >
                     </td>
                     <td>
                        <button
                           class="btn btn-danger btn-sm"
                           v-on:click="deleteKeranjang(item.id)">
                           hapus
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td colspan="6" align="center"><b>Total Bayar :</b></td>
                     <td>
                        Rp. <b>{{ totalBayar }}</b>
                     </td>
                     <td></td>
                  </tr>
               </tbody>
               <tbody v-else>
                  <tr>
                     <td colspan="8" align="center">
                        Keranjang masih Kosong, pesan<router-link
                           :to="{ name: 'Food' }">
                           disini</router-link
                        >
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      <div class="row mt-3 d-flex justify-content-end">
         <div class="col-md-4">
            <form action="" method="post" @submit.prevent="checkout">
               <div class="form-group">
                  <input
                     type="text"
                     v-model="pesan.nama"
                     class="form-control"
                     placeholder="nama costumer" />
               </div>
               <div class="form-group mt-2">
                  <input
                     type="text"
                     v-model="pesan.no_meja"
                     class="form-control"
                     placeholder="nomor meja" />
               </div>
               <div class="form-group mt-2 d-flex justify-content-end">
                  <button type="submit" class="btn btn-success btn-sm">
                     Check out
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
   name: "KeranjangPage",
   components: { Navbar },

   data() {
      return {
         keranjang: [],
         pesan: {},
      };
   },
   methods: {
      getKeranjang() {
         axios
            .get(`http://localhost:3000/cart`)
            .then((res) => (this.keranjang = res.data))
            .catch((e) => console.log(e));
      },

      deleteKeranjang(id) {
         axios
            .delete(`http://localhost:3000/cart/${id}`)
            .then(
               () =>
                  //update keranjang
                  this.getKeranjang(),
               //alert hapus keranjang
               this.$toast.error("pesanan dihapus", {
                  type: "error",
                  position: "top-right",
                  duration: 3000,
               })
            )
            .catch((e) => console.log(e));
      },
      checkout() {
         if (this.pesan.nama && this.pesan.no_meja) {
            //masukkan pesanan ke keranjang
            this.pesan.cart = this.keranjang;
            axios.post(`http://localhost:3000/order`, this.pesan).then(() => {
               this.$router.push({ name: "success" });
               this.$toast.success("pesanan berhasil", {
                  type: "success",
                  position: "top-right",
                  duration: 3000,
               });
            });

            //hapus semua pesanan yang telah dipesan
            this.keranjang.map((item) => {
               return axios.delete(`http://localhost:3000/cart/${item.id}`);
            });
         } else {
            this.$toast.error("nama atau nomor meja tidak boleh kosong", {
               type: "error",
               position: "top-right",
               duration: 3000,
            });
         }
      },
   },
   mounted() {
      this.getKeranjang();
   },
   computed: {
      totalBayar() {
         return this.keranjang.reduce((items, data) => {
            return items + data.jumlah_pesanan * data.products.price;
         }, 0);
      },
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
