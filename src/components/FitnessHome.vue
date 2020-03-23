<template>
  <div class="md:mt-20">
    <div class="flex justify-center items-center h-24 sticky top-0 bg-white">
      <h4 class="text-gray-300 text-lg mr-4">Woche 1</h4>
      <h1 class="text-3xl text-gray-900 font-bold">Woche 2</h1>
      <h4 class="text-gray-300 text-lg ml-4">Woche 3</h4>
    </div>

    <div class="w-full">
      <div class="px-6 my-6 max-w-lg mx-auto">
        <div class="relative flex justify-between items-center border-green-300 border px-8 rounded py-4">
          <div>
            <h1 class="text-xl text-gray-700">Tag 1</h1>
            <span class="text-gray-500 text-sm">01.02.2020</span>
          </div>
          <div class="bg-white rounded-full border-green-300 border p-4">
            <img src="../assets/zondicons/checkmark.svg" class="w-5 text-center h-5" />
          </div>
        </div>
      </div>
    </div>



    <div class="w-full">
      <div class="px-6 my-6 max-w-lg mx-auto">
        <div class="relative flex justify-between items-center border-green-300 border px-8 rounded py-4">
          <div>
            <h1 class="text-xl text-gray-700">Tag 2</h1>
            <span class="text-gray-500 text-sm">04.02.2020</span>
          </div>
          <div class="bg-white rounded-full border-green-300 border p-4">
            <img src="../assets/zondicons/checkmark.svg" class="w-5 text-center h-5" />
          </div>
        </div>
      </div>
    </div>


    <div class="w-full">
      <div class="px-6 my-6 max-w-lg mx-auto">
        <div class="flex justify-between items-center border px-8 rounded py-4">
          <div>
            <h1 class="text-xl">Tag 3</h1>
            <span class="text-gray-500 text-sm">Heute</span>
          </div>
          
        </div>
      </div>
    </div>

    <div
      class="nav flex fixed bottom-0 inset-x-0 bg-white fixed border-t w-full md:hidden justify-evenly"
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