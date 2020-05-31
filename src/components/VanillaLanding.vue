<template>
  <div class="bg-gray-100 text-gray-900">
    <navBar />
    <Header class="items-center flex lg:h-screen" />
    <FirstSection class="mt-12" />

    <div class="mx-6 mt-64 max-w-xl md:mx-auto">
      <Acordion name="Services" />
      <Acordion name="Cookies" />
      <Acordion name="Datenschutz" />
      <Acordion name="Sitemap" />
    </div>

    <Footer />
    <Question />
  </div>
</template>

<script>
import navBar from "./navBar";
import Header from "./Header";
import FirstSection from "./NormalSection";
import Acordion from "./Acordion";
import Footer from "./Footer";
import Question from "./QuestionSection";

export default {
  components: { navBar, Header, FirstSection, Acordion, Footer, Question }
};
</script>

<style>
</style>