<template>
  <div class="bg-gray-50">
    <RegularNav />
    <div class="lg:w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Services Upload</div>
        <div class="text-xs">
          Welcome to the service upload section, please upload your service with
          the right descriptions.
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Services Name</div>
        <input
          type="text"
          v-model="name"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter Services Name  "
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Category</div>
        <select
          name=""
          v-model="category"
          id=""
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
        >
          <option value="hello word">Select a Category</option>
          <option value="hello word">hello world</option>
        </select>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Service Description</div>
        <textarea
          name=""
          v-model="description"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
            h-32
          "
          placeholder="Description......"
        ></textarea>
      </div>
      <div class="mt-6">
        <button
          @click="upload"
          class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
        >
          {{ loading ? "Loading..." : "Proceed" }}
        </button>
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<style >
textarea:focus {
  outline: none;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),

  setup() {
    return {
      name: "",
      category: "",
      description: "",
      loading: false,
    };
  },
  methods: {
    async upload() {
      this.loading = true;
      try {
        const data = await this.$axios.$post(
          "seller/services/add",
          {
            name: this.name,
            category: this.category,
            description: this.description,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Services uploaded successfully!");
        this.$router.push("/seller/services");
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>