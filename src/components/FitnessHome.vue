<template>
  <div class="md:mt-20">
    <div
      class="flex justify-center items-center h-24 sticky top-0 bg-white shadow-sm fixed absolute"
    >
      <h4 class="text-gray-400 text-lg mr-4">Woche 1</h4>
      <h1 class="text-3xl text-gray-900 font-bold">Woche 2</h1>
      <h4 class="text-gray-400 text-lg ml-4">Woche 3</h4>
    </div>

    <div v-for="item in 4" :key="item" class="w-full">
      <div class="px-6 my-6 max-w-lg mx-auto">
        <div
          class="flex justify-between items-center shadow-sm px-4 py-10 bg-white"
          style="border-radius: 1rem;"
        >
          <div>
            <h1 class="text-xl text-gray-700">{{item}}. Tag</h1>
            <span class="text-gray-500 text-sm">01.02.2020</span>
          </div>

          <div>
            <h1 class="text-gray-700">Dauer</h1>
            <h1 class="text-gray-500">30 Min.</h1>
          </div>
          <!-- <div class="bg-white rounded-full px-2 py-1 bg-green-700">
            <div class="text-center">
              <h1 class="text-white">Erledigt</h1>
            </div>
          </div>-->
        </div>
      </div>
    </div>

    <div
      class="nav flex fixed bottom-0 inset-x-0 bg-white fixed border-t rounded-t-full w-full md:hidden justify-evenly"
    >
      <a class>
        <img src="../assets/zondicons/hot.svg" class="w-5 text-center h-5" />
      </a>
      <a class>
        <img src="../assets/zondicons/checkmark.svg" class="w-5 text-center h-5" />
      </a>
      <a class>
        <img src="../assets/zondicons/user.svg" class="w-5 text-center h-5" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  background: white;
  padding: 10px env(safe-area-inset-right, 20px)
    max(10px, env(safe-area-inset-bottom, 20px)) env(safe-area-inset-left, 20px);
}
</style>