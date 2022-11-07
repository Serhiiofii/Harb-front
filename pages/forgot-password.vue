<template>
  <div class="bg-gray-50 h-screen">
    <HeaderNav />
    <div class="lg:w-96 bg-white mx-auto p-6 my-20 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Forgotten Password</div>
        <div class="text-sm">An OTP will be sent to the email entered</div>
      </div>
      <div v-if="email_" class="my-6">
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
          @click="email != '' ? email_ = !email_ : null"
            class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
          >
            Sign In
          </button>
        </div>
      </div>
      <div v-else class="my-6">
        <div class="my-3">
          <div class="text-sm my-1">Enter your new password</div>
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
            placeholder="Enter your new password"
          />
        </div>
        <div class="my-3">
          <div class="text-sm my-1">Enter your new password</div>
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
            placeholder="Enter your new password"
          />
        </div>

        <div class="my-6">
          <button
            class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      email_: true,
      email: "",
    };
  },
});
</script>