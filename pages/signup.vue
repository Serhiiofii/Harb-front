<template>
  <div class="bg-gray-50">
    <HeaderNav />
    <div class="lg:w-96 bg-white mx-auto p-6 mt-20 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Create an account</div>
        <div class="text-sm">Create an account with socials</div>
      </div>
      <div class="flex justify-between w-24 my-5 mx-auto">
        <div>
          <img class="w-10 h-10" src="/icons/google.svg" alt="" />
        </div>
        <div>
          <img class="w-10 h-10" src="/icons/facebook.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-between">
        <div class="my-3 lg:mr-2">
          <div class="text-sm my-1">Enter your First name</div>
          <input
            type="text"
            class="
              p-3
              rounded-sm
              border border-gray-200
              w-full
              rounded-sm
              text-sm
            "
            placeholder="Enter First name"
            v-model="first_name"
          />
        </div>
        <div class="my-3 lg:ml-2">
          <div class="text-sm my-1">Enter your Last Name</div>
          <input
            type="text"
            class="
              p-3
              rounded-sm
              border border-gray-200
              w-full
              rounded-sm
              text-sm
            "
            placeholder="Enter Last name"
            v-model="last_name"
          />
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your email</div>
        <input
          type="text"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="e,g johndoe@gmail.com"
          v-model="email"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your Phone Number</div>
        <input
          type="number"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="090 0000 0000"
          v-model="phone_number"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your password</div>
        <input
          type="password"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter password"
          v-model="password"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Comfrim password</div>
        <input
          type="password"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Comfrim password"
          v-model="password_confirmation"
        />
      </div>
      <div class="my-6">
        <button
          class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
          @click="signupUser"
        >
          {{ loading ? "Loading..." : "Sign Up" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      loading: false,
    };
  },
  methods: {
    async signupUser() {
      try {
        this.loading = true;
        const data = await this.$axios.$post(
          "auth/register",
          {
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone_number,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Successfully authenticated");
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error("Oops! Something");
      }
    },
  },
};
</script>