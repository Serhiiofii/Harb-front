<template>
  <div class="mt-20 border-t border-black">
    <div class="lg:flex p-4 justify-between">
      <div class="w-72">
        <img src="/logo.svg" alt="" />
        <div>
          Harbour Hub is a marketplace for buying and selling marine and other
          industrial equipment.
        </div>
      </div>
      <div class="w-40">
        <div class="font-bold mb-4">Company</div>
        <NuxtLink to="/"> <div class="my-1">Home</div> </NuxtLink>
        <NuxtLink to="/becomeaseller"> <div class="my-1">Become a vendor</div> </NuxtLink>
        <NuxtLink to="/"> <div class="my-1">About Us</div> </NuxtLink>
        <NuxtLink to="/"> <div class="my-1">Privacy Policy</div> </NuxtLink>
      </div>
      <div class="w-40">
        <div class="font-bold mb-4">Quick Links</div>
        <NuxtLink to="/login"> <div class="my-1">Login</div> </NuxtLink>
        <NuxtLink to="/signup"> <div class="my-1">Sign Up</div> </NuxtLink>
        <NuxtLink to="/my-orders"> <div class="my-1">Cart</div> </NuxtLink>
        <NuxtLink to="/"> <div class="my-1">Vendors</div> </NuxtLink>
      </div>
      <div>
        <div class="font-bold mb-4">Join Our Newsletter</div>
        <div class="flex">
          <input
            type="text"
            class="rounded-l-full p-3 border border-black w-52"
            placeholder="Your email address"
          />
          <input
            type="button"
            class="rounded-r-full p-3 bg-blue-600 text-white w-32"
            value="Subscribe"
          />
        </div>
        <div class="text-xs mt-1">
          * Will send you tips and updates on top deals
        </div>
      </div>
    </div>
    <div class="p-4 text-center font-bold text-sm">
      Copyright @ HarbourHub 2022. All Rights Reserved.
    </div>
  </div>
</template>
<style>
input:focus {
  outline: none;
}
</style>