<template>
  <div class="bg-gray-50 h-screen">
    <HeaderNav />
    <div class="lg:w-96 bg-white mx-auto p-6 my-20 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Sign in</div>
        <div class="text-sm">Sign in with socials</div>
      </div>
      <div class="flex justify-between w-24 my-5 mx-auto">
        <div>
          <img class="w-10 h-10" src="/icons/google.svg" alt="" />
        </div>
        <div>
          <img class="w-10 h-10" src="/icons/facebook.svg" alt="" />
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your email</div>
        <input
          type="text"
          v-model="email"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="e,g johndoe@gmail.com"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Password</div>
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
      <NuxtLink to="/forgot-password">
        <div class="text-right text-sm">Forgot Password?</div>
      </NuxtLink>
      <div class="my-6">
        <button
          @click="signupUser"
          class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
        >
          {{ loading ? "Loading..." : "Sign in" }}
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["userLoggedIn"]),

    async signupUser() {
      try {
        this.loading = true;
        const data = await this.$axios.$post(
          "auth/login",
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        this.userLoggedIn();
        this.$toast.success("Successfully authenticated");
        this.loading = false;
        window.localStorage.setItem("data", JSON.stringify(data));
        this.loading = false;
        // this.$router.push("/");
        window.location.href = "/";
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error("Oops! Something");
      }
    },
  },
};
</script>