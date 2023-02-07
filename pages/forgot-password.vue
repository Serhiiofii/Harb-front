<template>
  <div class="bg-gray-50 h-screen">
    <HeaderNav />
    <div class="lg:w-96 bg-white mx-auto p-6 my-20 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Forgotten Password</div>
        <div class="text-sm">An OTP will be sent to the email entered</div>
      </div>
      <div class="my-6">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      email_: true,
      email: "",
      loading: false,
    };
  },
  methods: {
    async signupUser() {
      try {
        this.loading = true;
        const data = await this.$axios.$post(
          "auth/forgot-password",
          {
            email: this.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        this.$toast.success(data.message);
        this.$router.push("/resetpassword");
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