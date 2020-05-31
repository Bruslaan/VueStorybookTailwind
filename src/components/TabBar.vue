<template>
  <div class="headerSticky">
    <div class="bg-white ">
      <nav class="flex flex-col sm:flex-row justify-center">
        <button
          class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
        >Vorspeise</button>
        <button
          class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        >Hauptgang</button>
        <button
          class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        >Nachtisch</button>
        <button
          class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        >Getränke</button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.headerSticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>