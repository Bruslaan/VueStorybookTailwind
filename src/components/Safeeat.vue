<template>
  <div class="bg-gray-100 text-gray-900">
    <navBar>
      <template v-slot:logo>Saf'Eat</template>
    </navBar>
    <Header class="items-center flex lg:h-screen"></Header>
    <Feature />
    <FirstSection class="mt-12" />

    <div class="mx-6 mt-64 max-w-xl md:mx-auto">
      <Acordion name="Services" />
      <Acordion name="Cookies" />
      <Acordion name="Datenschutz" />
      <Acordion name="Sitemap" />
    </div>

    <Footer />
  </div>
</template>

<script>
import navBar from "./navBar";
import Header from "./Header";
import Feature from "./Feature";
import FirstSection from "./NormalSection";
import Acordion from "./Acordion";
import Footer from "./Footer";

export default {
  components: { navBar, Header, FirstSection, Acordion, Footer, Feature }
};
</script>

<style>
</style>