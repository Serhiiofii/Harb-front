<template>
  <div class="bg-gray-50">
    <div class="px-20 nav flex py-4 justify-between bg-white">
      <div class="my-auto">
        <img class="my-auto" src="/logo.svg" alt="" />
      </div>
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
          @click="signupUser"
        >
          {{ loading ? "Loading..." : "Sign in" }}
        </button>
      </div>
    </div>
  </div>
</template>