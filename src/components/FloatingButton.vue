<template>
  <div>
    <!-- Code begins here -->
    <a href="#" class="float bg-orange-500 hover:bg-orange-700">
      <!-- <i class="fa fa-plus my-float"></i> -->
      <h1 class="text-white text-xl my-float">+</h1>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;

  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}

.my-float {
  margin-top: 15px;
}
</style>