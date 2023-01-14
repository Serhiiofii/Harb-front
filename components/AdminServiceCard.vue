<template>
  <div class="bg-white border border-gray-100 rounded-sm p-4">
    <div class="flex justify-between">
      <div class="flex w-80">
        <img src="/user.png" alt="" />
        <div class="ml-4">
          <div class="text-base font-bold">{{service.seller.company_name}}</div>
          <div class="text-sm">{{service.category}}</div>
        </div>
      </div>
      <div>
        <button
          @click="deleteService(service.id)"
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
      </div>
    </div>
    <div class="my-3 text-sm">
      {{service.description}}
    </div>
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
    service: Object,
  },
  computed: mapState(["token"]),

  data() {
    return {
      path: null,
    };
  },
  mounted() {
    this.path = this.$router.history.current.path;
  },
  methods: {
    deleteService(id) {
      try {
        this.$axios
          .$delete(`admin/services/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          })
          .then((response) => {
            console.log(response.message);
            this.$toast.success(response.message);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>