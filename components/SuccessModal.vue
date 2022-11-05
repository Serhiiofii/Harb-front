<template>
  <div v-show="isComponentModalActive" class="w-screen h-full bg-gray-50 absolute top-20">
    <div class="80 mx-auto"></div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isComponentModalActive: true,
    };
  },
};
</script>