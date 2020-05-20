<template>
  <div>
    <div class="text-center mt-8 mx-8 mb-8">
      <h1
        class="text-2xl max-w-lg mx-auto text-orange-500"
      >Wie funktioniert das?</h1>
    </div>
    <div class="mx-auto max-w-screen-lg px-4 flex flex-wrap justify-center">
      <NormalCard class="w-full lg:w-1/3" v-for="(i,index) in features" :key="index">
        <template v-slot:schritt>{{index+1}}.</template>
        <template v-slot:title>{{i.title}}</template>
        <template v-slot:description>{{i.description}}</template>
      </NormalCard>
    </div>
  </div>
</template>

<script>
import NormalCard from "./NormalCard";
export default {
  data() {
    return {
      features: [
        {
          title: "Qr Code scannen",
          description: "Der Kunde scannt einen Qr Code am eingang"
        },
        {
          title: "Bestellen oder Reservieren",
          description: "What do you fancy? Browse through countless menus and reviews."
        },
        {
          title: "Bezahlen",
          description: "Pay cash or online with Creditcard, Klarna, PayPal, Bitcoin. Bon appetit!"
        }
      ]
    };
  },
  components: { NormalCard }
};
</script>

<style>
</style>