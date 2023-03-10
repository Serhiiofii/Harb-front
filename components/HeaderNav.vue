<template>
  <div class="flex py-4 px-20 nav justify-between bg-white">
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
