<template>
  <div class="bg-gray-50 ">
    <HeaderNav />
    <div class="w-96 bg-white mx-auto p-6 mt-20 shadow-md rounded-sm">
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
        />
      </div>
      <div class="my-6">
        <button class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>