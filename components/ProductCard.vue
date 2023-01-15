<template>
  <div class="m-2 lg:my-0 my-4">
    <NuxtLink :to="data.id">
      <img src="/cardimg.png" alt="" />
      <div class="text-xl font-bold my-1">
        {{ data.name }}
      </div>
      <div class="tect-sm font-light my-1">
        {{ data.description }}
      </div>
      <button
        v-if="data.sale_type === 'rent'"
        class="p-3 bg-red-100 capitalize w-20 rounded-md"
      >
        {{ data.sale_type }}
      </button>
      <button v-else class="p-3 bg-green-100 capitalize w-20 rounded-md">
        {{ data.sale_type }}
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>