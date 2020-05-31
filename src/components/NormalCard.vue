<template>
  <div>
    <div class="text-center m-4 lg:w-full px-8">
      <h1 class="text-gray-800 text-3xl font-bold text-lg mb-6"><slot name="schritt"></slot></h1>
       <!-- <img src="../assets/zondicons/swap.svg" class="" /> -->
      <h2 class="font-bold text-gray-800"><slot name="title"></slot></h2>
      <br />
      <p class="text-gray-600"><slot name="description"></slot></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>


</style>