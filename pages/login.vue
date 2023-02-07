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
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  mounted() {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
  },
  methods: {
    ...mapMutations(["userLoggedIn", "mutateToken", "mutateUser"]),

    async signupUser() {
      try {
        this.loading = true;
        await this.$axios
          .$post(
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
          )
          .then((response) => {
            console.log(response.data.user);
            this.userLoggedIn();
            this.$toast.success("Successfully authenticated");
            this.loading = false;
            window.localStorage.setItem(
              "user",
              JSON.stringify(response.data.user)
            );
            window.localStorage.setItem(
              "token",
              JSON.stringify(response.data.token)
            );
            this.loading = false;
            this.mutateToken();
            this.mutateUser();
            if (response.data.user.user_role === "admin") {
              this.$router.push("/admin");
            } else {
              this.$router.push("/");
            }
          });
        // window.location.href = "/";
      } catch (error) {
        console.log(error.response.data.message);
        this.loading = false;
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>