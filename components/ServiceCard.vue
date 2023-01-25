<template>
  <div class="bg-white border border-gray-100 rounded-sm p-4 m-2">
    <div class="flex justify-between">
      <div class="flex w-80">
        <img src="/user.png" alt="" />
        <div class="ml-4">
          <div class="text-base font-bold">{{ data.name }}</div>
          <div class="text-sm">{{ data.category }}</div>
        </div>
      </div>
      <div>
        <button
          v-if="path === '/account' || '/seller/services'"
          class="
            p-3
            border border-yellow-500
            w-32
            rounded-sm
            flex
            justify-evenly
          "
        >
          <img class="w-4 my-auto h-4" src="/icons/close.svg" alt="" />
          Remove
        </button>
        <button v-else class="p-3 border border-yellow-500 w-32 rounded-sm">
          Follow
        </button>
      </div>
    </div>
    <div class="my-3 text-sm">
      {{ data.description }}
    </div>
    <div class="text-sm text-left">Verified</div>
  </div>
</template>
<style>
.compcard {
  width: 32%;
}
</style>
<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      path: null,
    };
  },
  mounted() {
    this.path = this.$router.history.current.path;
  },
};
</script>