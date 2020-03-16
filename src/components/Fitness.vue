<template>
  <div class>
    <!-- NAV -->
    <nav class="w-full bg-white flex fixed justify-between px-10 pt-6 pb-4 items-center">
      <a href class="text-lg">
        <img src="../assets/zondicons/cheveron-left.svg" class="w-10 text-center h-10" />
      </a>
      <a href class="text-2xl font-bold">
        <img src="../assets/zondicons/dots-horizontal-double.svg" class="w-5 text-center h-5" />
      </a>
    </nav>

    <div class="h-20 lg:h-40"></div>
    <!-- Header -->
    <div class="lg:flex-row-reverse lg:flex">
      <header class="px-10 py-4 max-w-2xl mx-auto">
        <div class="flex justify-between items-center">
          <!-- left side -->
          <div>
            <h1 class="text-4xl font-bold leading-tight mr-4">Straight</h1>
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

      <div class="sm:max-w-xl sm:mx-auto ml-5">
        <img
          class="leftRadius rightRadius noRadiosOnSm content-center object-contain shadow-lg"
          src="../assets/VideoImage.png"
          alt
        />

        <!-- <video  class="leftRadius rightRadius noRadiosOnSm  object-contain shadow-lg w-full">
          <source src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.ogv" type="video/mp4">
          <source src="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.ogv" type="video/ogg" />Your browser does not support HTML5 video.
        </video> -->
        <!-- <video width="500" height="400" controls> <source src="https://temp.media/video/?height=400&width=500&length=10" type="video/mp4"></video> -->
      </div>
    </div>

    <!-- Describtion -->

    <div class="py-5 px-10 max-w-lg mx-auto">
      <!-- <h1 class="text-2xl font-bold leading-tight">Beschreibung</h1> -->

      <!-- sets -->
      <table class="w-full">
        <tbody>
          <tr class="border-b">
            <td class="py-4 text-gray-600">Sets:</td>
            <td>3</td>
          </tr>
          <tr class="border-b">
            <td class="py-4 text-gray-600">Wiederholungen:</td>
            <td>13</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Bottom Nav -->
    <div class="flex h-40 fixed inset-x-0 bottom-0 justify-center items-center">
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

<style >

.leftRadius {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

@media (min-width: 640px) {
  .rightRadius {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
}
</style>