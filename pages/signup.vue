<template>
  <div class="bg-gray-50">
    <HeaderNav />
    <div class="lg:w-96 bg-white mx-auto p-6 mt-20 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Create an account</div>
        <div class="text-sm">Create an account with socials</div>
      </div>
      <div class="flex justify-between w-24 my-5 mx-auto">
        <div @click="googlePopup()" class="cursor-pointer">
          <img class="w-10 h-10" src="/icons/google.svg" alt="" />
        </div>
        <div>
          <img class="w-10 h-10" src="/icons/facebook.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-between">
        <div class="my-3 lg:mr-2">
          <div class="text-sm my-1">Enter your First name</div>
          <input type="text" class="
                      p-3
                      rounded-sm
                      border border-gray-200
                      w-full
                      rounded-sm
                      text-sm
                    " placeholder="Enter First name" v-model="first_name" />
        </div>
        <div class="my-3 lg:ml-2">
          <div class="text-sm my-1">Enter your Last Name</div>
          <input type="text" class="
                      p-3
                      rounded-sm
                      border border-gray-200
                      w-full
                      rounded-sm
                      text-sm
                    " placeholder="Enter Last name" v-model="last_name" />
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your email</div>
        <input type="text" class="
                    p-3
                    rounded-sm
                    border border-gray-200
                    w-full
                    rounded-sm
                    text-sm
                  " placeholder="e,g johndoe@gmail.com" v-model="email" />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your Phone Number</div>
        <input type="number" class="
                    p-3
                    rounded-sm
                    border border-gray-200
                    w-full
                    rounded-sm
                    text-sm
                  " placeholder="090 0000 0000" v-model="phone_number" />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter your password</div>
        <input type="password" class="
                    p-3
                    rounded-sm
                    border border-gray-200
                    w-full
                    rounded-sm
                    text-sm
                  " placeholder="Enter password" v-model="password" />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Confirm password</div>
        <input type="password" class="
                    p-3
                    rounded-sm
                    border border-gray-200
                    w-full
                    rounded-sm
                    text-sm
                  " placeholder="Confirm password" v-model="password_confirmation" />
      </div>
      <div class="my-6">
        <button class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm" @click="signupUser">
          {{ loading ? "Loading..." : "Sign Up" }}
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
      password_confirmation: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      loading: false,
      loginUrl: null
    };
  },

  methods: {
    ...mapMutations(["userLoggedIn", "mutateToken", "mutateUser"]),

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
        this.loading = false;
        // this.$toast.success("Successfully authenticated");
        this.$store.commit('saveEmailForVerify', this.email)
        this.$router.push("/emailverify");
      } catch (error) {
        console.log(error.response.data.message);
        this.loading = false;
        this.$toast.error(error.response.data.message);
      }
    },

    googlePopup() {
      var width = 500;
      var height = 600;
      var toppx = (window.innerHeight / 2) - (height / 2);
      var leftpx = (window.innerWidth / 2) - (width / 2);
      window.open(this.loginUrl, 'google auth', "width=" + width + ",height=" + height + ",scrollbars=no,left=" + leftpx + ",top=" + toppx)
    },

    // This method save the new token and username
    onMessage(e) {
      if (e.origin !== window.origin || e.data.status !== "success") {
        return
      }
      const response = e.data;
      this.userLoggedIn();
      this.$toast.success("Successfully authenticated");
      window.localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );
      window.localStorage.setItem(
        "token",
        JSON.stringify(response.data.token)
      );
      this.mutateToken();
      this.mutateUser();
      if (response.data.user.user_role === "admin") {
        this.$router.push("/admin");
      } else {
        this.$router.push("/");
      }
    }
  },

  mounted() {
    this.$axios.$get('auth/google', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        this.loginUrl = response.url;
      })
      .catch((error) => console.error(error));

    window.addEventListener('message', this.onMessage, false)
  },

  beforeDestroy() {
    window.removeEventListener('message', this.onMessage)
  },
};
</script>