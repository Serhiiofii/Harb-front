<template>
  <div class="px-20 nav flex py-4 justify-between bg-white">
    <div class="my-auto">
      <NuxtLink to="/">
        <img class="my-auto" src="/logo.svg" alt="" />
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/">
        <button class="p-3 bg-blue-600 rounded-md text-white lg:w-52">
          Buy an Item
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>
<style>
</style>