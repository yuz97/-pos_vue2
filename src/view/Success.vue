<template>
   <div class="success">
      <Navbar />
      <div class="row">
         <div class="col-md-12 text-center mt-4">
            <h2><strong>Please wait a minute</strong></h2>
            Your<b> food</b> is in process
         </div>
      </div>
      <div class="row">
         <div class="col-md-12 text-center">
            <img
               src="../assets/images/finish.png"
               alt="gameboy"
               width="300"
               height="300" />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
   name: "successPage",
   components: { Navbar },
};
</script>

<style></style>
