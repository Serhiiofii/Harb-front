<template>
  <div class="max-w-md m-2 lg:my-0 my-4 rounded-xl shadow-md overflow-hidden mx-auto hover:scale-[1.025] duration-200">
    <NuxtLink :to="data.id">
      <img
        :src="data?.equipment_images[0]?.image"
        class="h-52 w-full"
        alt=""
      />
    </NuxtLink>

    <div class="flex justify-between p-3 bg-white">
      <div class="w-5/6">
        <div class="text-xl font-bold my-1">
          {{ data.name }}
        </div>
        <div class="tect-sm font-light my-1">
          {{ data.description }}
        </div>
        <NuxtLink :to="data.id">
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
      <div class="">
        <img @click="save" class="cursor-pointer" src="/heart.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),

  props: {
    data: Object,
  },
  mounted() {
    // console.log(this.data.id);
  },
  methods: {
    save() {
      try {
        this.$axios
          .$post(
            `account/saved-items/${this.data.id}`,
            {
              amount: 5000,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            // console.log(response.data);
            this.$toast.success("Product Saved Successfully");
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
img {
  object-fit: cover;
}
</style>