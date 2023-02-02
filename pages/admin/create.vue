<template>
  <div class="bg-gray-50">
    <div class="px-20 nav flex py-4 justify-between bg-white">
     <NuxtLink to="/admin">
       <div class="my-auto">
        <img class="my-auto" src="/logo.svg" alt="" />
      </div>
     </NuxtLink>
    </div>
    <div class="lg:w-96 bg-white mx-auto p-4 mt-8 shadow-md rounded-lg">
      <div class="text-center">
        <div class="font-bold text-2xl">Create an Admin</div>
        <div class="text-xs">Create an account with socials</div>
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
          @click="createAdmin"
        >
          {{ loading ? "Loading..." : "Sign in" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),
  middleware: "admin",

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
      loading: false,
    };
  },

  methods: {
    createAdmin() {
      this.loading = true;
      if (this.password !== this.password_confirmation) {
        this.$toast.error("Password does not match");
        this.loading = false;
        return;
      }
      try {
        this.$axios
          .$post(
            `admin/create-admin`,
            {
              first_name: this.first_name,
              last_name: this.last_name,
              email: this.email,
              password: this.password,
              phone: this.phone_number,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            this.$toast.success("Admin created successfully");
            this.$router.push("/admin/roles");
            this.loading = false;
          });
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error("Oops something went wrong");
      }
    },
  },
};
</script>
