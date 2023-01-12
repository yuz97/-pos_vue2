<template>
   <div>
      <div class="card my-2 shadow-md roundend-sm">
         <img
            :src="`images/menu/${product.gambar}`"
            height="250"
            class="best-food" />
         <div class="card-body">{{ product.name }}</div>
         <div class="card-footer d-flex justify-content-between items-center">
            {{ product.price }}
            <router-link
               :to="`/detail/${product.id}`"
               class="btn btn-success btn-sm"
               >pesan</router-link
            >
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "CardProduct",
   props: ["product"],
};
</script>

<style>
.best-food {
   border-top-right-radius: 5px;
   border-top-left-radius: 5px;
}
</style>
