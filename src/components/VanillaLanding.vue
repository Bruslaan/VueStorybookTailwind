<template>
  <div>
    <navBar />

    <Header class="h-screen items-center flex" />

    <Section />
  </div>
</template>

<script>
import navBar from "./navBar";
import Header from "./Header";
import Section from "./Section";
export default {
  components: { navBar, Header, Section }
};
</script>

<style>
</style>