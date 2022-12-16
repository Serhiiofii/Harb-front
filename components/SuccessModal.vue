<template>
  <div
    v-show="isComponentModalActive"
    class="w-screen h-full bg-gray-50 fixed top-0"
  >
    <div class="w-96 bg-white p-6 rounded-md my-20 mx-auto">
      <img src="/congrats.png" class="w-40 mx-auto" alt="" />
      <div class="text-center">
        <div class="my-4">Congratulations!!!</div>
        <div class="my-2 text-xs w-52 mx-auto">
          Account has been sent for approval. Thank you for using
          <span class="text-yellow-400">Harbour Hub</span>
        </div>
      </div>
    </div>
    <div class="w-96 mx-auto">
      <NuxtLink to="/account">
        <button
          class="bg-blue-600 w-full p-3 mx-auto text-white font-bold rounded-sm"
        >
          Proceed
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: { isComponentModalActive: Boolean },
};
</script>