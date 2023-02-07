<template>
  <div class="bg-white border border-gray-100 rounded-sm p-4 m-2">
    <div class="flex justify-between">
      <NuxtLink :to="`/user?slug=${data.seller_id}`">
        <div class="flex w-80">
          <img src="/user.png" alt="" />
          <div class="ml-4">
            <div class="text-base font-bold">{{ data.name }}</div>
            <div class="text-sm">{{ data.category }}</div>
          </div>
        </div>
      </NuxtLink>
      <div>
        <button
          v-if="remove === true"
          @click="removeProduct(data.id)"
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
    <!-- <div class="text-sm text-left">Verified</div> -->
  </div>
</template>
<style>
.compcard {
  width: 32%;
}
</style>
<script>
import { mapState } from "vuex";

export default {
  props: {
    data: Object,
    remove: Boolean,
  },
  data() {
    return {
      path: null,
    };
  },
  computed: mapState(["token"]),

  mounted() {
    this.path = this.$router.history.current.path;
    // console.log(this.path);
  },
  methods: {
    async removeProduct(id) {
      try {
        this.loading = true;
        await this.$axios
          .$delete(`seller/services/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            // this.loading = false;
            this.$toast.success("Service deleted successfully!");
          });
      } catch {
        console.log("error");
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>