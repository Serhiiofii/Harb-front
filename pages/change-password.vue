<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 flex mt-4">
      <Sidebar />
      <div class="w-full container bg-white lg:ml-4">
        <div class="lg:w-96 mx-auto p-3 shadow-md mt-8">
          <div class="my-3">
            <div class="text-sm my-1">Enter Current Password</div>
            <input
              type="password"
              v-model="password"
              class="
                p-3
                rounded-sm
                border border-gray-200
                w-full
                rounded-sm
                text-sm
              "
              placeholder="****************"
            />
          </div>
          <div class="my-3">
            <div class="text-sm my-1">Enter NEW Password</div>
            <input
              type="password"
              v-model="new_password"
              class="
                p-3
                rounded-sm
                border border-gray-200
                w-full
                rounded-sm
                text-sm
              "
              placeholder="****************"
            />
          </div>
          <div class="my-3">
            <div class="text-sm my-1">Re-Enter NEW Password</div>
            <input
              type="password"
              v-model="password_confirmation"
              class="
                p-3
                rounded-sm
                border border-gray-200
                w-full
                rounded-sm
                text-sm
              "
              placeholder="****************"
            />
          </div>
          <div class="mt-6">
            <button
              @click="signupUser"
              class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
            >
              {{ loading ? "Loading..." : "Proceed" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  middleware: "authenticated",
  data() {
    return {
      password: "",
      password_confirmation: "",
      new_password: "",
      loading: false,
    };
  },
  computed: mapState(["token"]),

  methods: {
    async signupUser() {
      try {
        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("token"));
        const data = await this.$axios.$put(
          "account/password",
          {
            old_password: this.password,
            password: this.new_password,
            password_confirmation: this.password_confirmation,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + local,
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Successfully authenticated");
        // this.$router.push("/");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error(error.response.data.message);      }
    },
  },
};
</script>