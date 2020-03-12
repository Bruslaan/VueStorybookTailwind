<template>
  <div class="h-screen bg-orange-400 ">
    <!-- header -->
    <div class="flex items-baseline px-5 pt-16 justify-between">
      <button class="text-white text-lg">Back</button>
      <button class="text-white text-lg">Bag</button>
    </div>
    <div class="flex justify-end mr-10 mt-10">
      <div class="flex-col">
        <h1 class="text-orange-500 uppercase font-semibold">BRAND</h1>
        <p class="mb-3 uppercase text-gray-700 font-semibold">V1</p>
        <h1 class="text-orange-500 uppercase font-semibold">COLOR</h1>
        <p class="mb-3 uppercase text-gray-700 font-semibold">Brown</p>
        <h1 class="text-orange-500 uppercase font-semibold">WARRANTY</h1>
        <p class="uppercase text-gray-700 font-semibold">5 YEARS</p>
      </div>
    </div>

    <!-- bottom Card -->
    <div class="fixed bg-white cardRadius absolute xs:inset-x-0 bottom-0  px-5 py-1">
      <div class="-mt-32">
        <img
          class="w-64"
          src="https://png2.kisspng.com/sh/ea692e15d9294eb0dff58cb392a07018/L0KzQYi4UsAyN2E1epGAYUK0SIa6WcNja2U6UJC7NEe0QIm7VcE2OWM2TKg7M0O1RIWBTwBvbz==/5a2185393bc458.2471084515121462332448.png"
          alt
        />
      </div>
      <div class="flex justify-between mt-5">
        <h1 class="font-bold text-2xl">Modern V Watch</h1>
        <h1 class="font-bold text-2xl">$ 98.00</h1>
      </div>
      <div class="flex mt-3">
        <p class="font-bold">4.4</p>
        <p class="ml-3 text-gray-500">48 Review</p>
      </div>
      <div class="py-6">
        <p
          class="text-gray-400"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis ducimus dolorem</p>
      </div>

      <div class="rounded-md shadow my-8">
        <a
          href="#"
          class="uppercase w-full flex items-center justify-center px-8 py-4 text-base leading-6 font-medium rounded-md text-white bg-orange-400 hover:bg-orange-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
        >ADD TO CARD</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cardRadius {
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
}
</style>