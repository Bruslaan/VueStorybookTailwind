<template>
  <div class="bg-gray-100 text-gray-900">
    <navBar />
    <Header class="items-center flex lg:h-screen" />
  </div>
</template>

<script>
import navBar from "./navBar";
import Header from "./Header";

export default {
  components: { navBar, Header }
};
</script>

<style>
</style>