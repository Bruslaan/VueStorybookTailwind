<template>
  <div>
    <a
      v-on:click="open=!open"
      class="flex justify-between border-b py-3 cursor-pointer select-none"
    >
      <div>
        <h4 class="text-gray-800 font-light">{{name}}</h4>
        <transition>
          <ul v-if="open" class="mt-3">
            <li class="pl-3 py-1 hover:text-gray-800 text-gray-600">
              <a href>First Link</a>
            </li>
            <li class="pl-3 py-1 hover:text-gray-800 text-gray-600">
              <a href>Second Link</a>
            </li>
          </ul>
        </transition>
      </div>
      <div>
        <h4>{{state}}</h4>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "mother"
    }
  },
  computed: {
    state() {
      return this.open ? "-" : "+";
    }
  },
  data() {
    return {
      open: false
    };
  }
};
</script>

<style>
</style>