<template>
  <div class="lg:flex lg:p-3 my-2 border border-gray-100 relative">
    <div class="lg:w-96">
      <img
        class="lg:h-52 lg:w-80 w-full"
        :src="data.equipment_images[0].image"
        alt=""
      />
    </div>
    <div class="lg:ml-5 w-full lg:mt-0 mt-2 lg:p-0 p-2">
      <div class="flex">
        <img src="/user.png" alt="" />
        <div class="ml-3">
          <div class="font-bold">{{ data.name }}</div>
          <div>{{ data.category }}</div>
        </div>
      </div>
      <div class="lg:text-base text-xs my-2">
        {{ data.description }}
      </div>
      <div class="flex">
        <div class="mr-6 lg:text-sm text-xs">Date Uploaded:</div>
        <div class="lg:text-sm text-xs">
          {{ data.created_at.substring(0, 10) }}
        </div>
      </div>
      <div class="lg:mt-0 absolute right-6 bottom-6 mt-2">
        <button
          @click="removeProduct(data.id)"
          class="
            flex
            justify-between
            p-3
            rounded-sm
            font-bold
            w-28
            text-sm
            bg-red-100
            lg:ml-auto
          "
        >
          <img class="w-4 h-4 my-auto" src="/icons/close.svg" alt="" /> Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    data: Object,
  },
  computed: mapState(["token"]),
  mounted() {
    // console.log(this.data)
  },
  methods: {
    async removeProduct(id) {
      try {
        this.loading = true;
        await this.$axios
          .$delete(`seller/equipments/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            // this.loading = false;
            this.$toast.success("Product deleted successfully!");
          });
      } catch {
        console.log("error");
        this.$toast.error("Oops! Something happened");
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