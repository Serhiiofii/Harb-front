<template>
  <div class="bg-white shadow-sm min-h-[84px]">
    <div class="max-w-screen-2xl mx-auto px-5 flex py-4 nav justify-between">
      <div class="my-auto">
        <NuxtLink to="/">
          <img class="my-auto" src="/logo.svg" alt="" />
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/login" v-if="path === '/signup' || path === '/'">
          <button class="p-3 bg-blue-600 rounded-md text-white lg:w-52">
            Sign Up / Login
          </button>
        </NuxtLink>
        <NuxtLink to="/signup" v-else>
          <button class="p-3 bg-blue-600 rounded-md text-white lg:w-52">
            Create an Account
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
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
