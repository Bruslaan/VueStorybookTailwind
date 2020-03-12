<template>
  <div>
    <!-- NAV -->
    <nav class="w-full  bg-white flex fixed justify-between px-10 pt-6 pb-4 items-center">
      <a href class="text-lg">
        <img src="../assets/zondicons/cheveron-left.svg" class="w-10 text-center h-10" />
      </a>
      <a href class="text-2xl font-bold">
        <img src="../assets/zondicons/dots-horizontal-double.svg" class="w-5 text-center h-5" />
      </a>
    </nav>

    <div class="h-20"></div>
    <!-- Header -->
    <header class="px-10 py-4">
      <div class="flex justify-between items-center">
        <!-- left side -->
        <div>
          <h1 class="text-4xl font-bold leading-tight">Straight</h1>
          <p class="text-gray-600 text-2xl leading-none">squat</p>
        </div>
        <!-- right side -->
        <div class="border-l pl-5 py-3">
          <h1 class="text-3xl leading-tight">
            2
            <span class="text-gray-900 text-sm">times</span>
          </h1>
          <p class="text-gray-500">a week</p>
        </div>
      </div>
    </header>

    <!-- Video Card -->

    <div class="max-w-xl mx-auto">
      <img class="content-center object-contain" src="../assets/VideoImage.png" alt />
    </div>

    <!-- Bottom Nav -->
    <div class="flex h-20 fixed inset-x-0 bottom-0 justify-center items-center">
      <div class>
        <button
          class="px-5 py-4 bg-white rounded-l-full shadow-lg text-center text-gray-700 focus:outline-none outline-none hover:bg-gray-600 hover:text-white"
        >Zurück</button>
        <button
          class="px-5 py-4 bg-white rounded-r-full shadow-lg text-center text-gray-700 focus:outline-none hover:bg-gray-600 hover:text-white"
        >Weiter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>