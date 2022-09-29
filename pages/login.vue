<template>
  <div class="bg-gray-50 h-screen">
    <HeaderNav />
    <div class="w-96 bg-white mx-auto p-6 my-20 shadow-md rounded-sm">
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
        <button class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm">
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>