<template>
  <div class="bg-gray-50 h-screen">
    <HeaderNav />
    <div class="lg:w-96 bg-white mx-auto p-6 my-20 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Reset Password</div>
        <div class="text-sm">Enter the OTP that was sent to your email</div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your email</div>
        <input
          type="password"
          v-model="email"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter your email"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your the OTP code</div>
        <input
          v-model="reset_code"
          type="number"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter your new password"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your new password</div>
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
          placeholder="Enter your new password"
        />
      </div>

      <div class="my-6">
        <button
          @click="signupUser"
          class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
        >
          {{ loading ? "Loading..." : "Sign In" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      email: "",
      reset_code: "",
      loading: false,
    };
  },
  methods: {
    async signupUser() {
      try {
        this.loading = true;
        const data = await this.$axios.$post(
          "auth/reset-password",
          {
            email: this.email,
            password: this.password,
            reset_code: this.reset_code,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        this.$toast.success("Password reset successful");
        this.$router.push("/login");
        this.loading = false;
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>