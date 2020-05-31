<template>
  <div>
    <FloatingButton />
    <navBar>
      <template v-slot:logo>Saf'Eat</template>
    </navBar>

    <h1 class="mt-20 mb-10 text-center font-thin text-orange-500 text-3xl flex-wrap">Mein Menu</h1>

    <p
      class="text-center text-gray-600 max-w-xl mx-auto mb-6"
    >Hier steht iwas anderes Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non perferendis nihil beatae molestiae d laborum assumenda libero.</p>

    <TabBar class="mb-5"/>

    <div class="px-10 flex flex-wrap justify-center">
      <CardComponent v-for="i in 6" :key="i" class="md:w-1/2 lg:w-1/4">
        <template v-slot:name>{{i}}</template>
      </CardComponent>
    </div>

    <div class="mt-64">
      <Question />
    </div>
  </div>
</template>

<script>
import navBar from "./navBar";
import CardComponent from "./CardComponent";
import Question from "./QuestionSection";
import FloatingButton from "./FloatingButton";
import TabBar from "./TabBar";
export default {
  components: { navBar, CardComponent, Question, FloatingButton, TabBar }
};
</script>

<style>
</style>