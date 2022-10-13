<template>
  <div class="bg-white rounded-md py-4 px-10 w-80">
    <div class="my-4 text-gray-400 uppercase">Hi Louis,</div>
    <NuxtLink to="/account">
      <div class="flex my-5">
        <img src="/icons/user.svg" alt="" />
        <div class="ml-4">Account</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/saved">
      <div class="flex my-5">
        <img src="/icons/saved.svg" alt="" />
        <div class="ml-4">Saved Items</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/my-orders">
      <div class="flex my-5">
        <img src="/icons/orders.svg" alt="" />
        <div class="ml-4">My Orders</div>
      </div>
    </NuxtLink>
    <NuxtLink to="messages">
      <div class="flex my-5">
        <img src="/icons/msg.svg" alt="" />
        <div class="ml-4">Messages</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/notifications">
      <div class="flex my-5">
        <img src="/icons/bell.svg" alt="" />
        <div class="ml-4">Notification</div>
      </div>
    </NuxtLink>
    <div class="bg-gray-300 h-1 w-full"></div>
    <NuxtLink to="/products">
      <div class="flex my-5">
        <img src="/icons/products.svg" alt="" />
        <div class="ml-4">Products</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/services">
      <div class="flex my-5">
        <img src="/icons/services.svg" alt="" />
        <div class="ml-4">Services</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/company-profile">
      <div class="flex my-5">
        <img src="/icons/company.svg" alt="" />
        <div class="ml-4">Company Profile</div>
      </div>
    </NuxtLink>
    <div class="bg-gray-300 h-1 w-full"></div>
    <NuxtLink to="/change-password">
      <div class="flex my-5">
        <img src="/icons/password.svg" alt="" />
        <div class="ml-4">Change Password</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/help-support">
      <div class="flex my-5">
        <img src="/icons/help.svg" alt="" />
        <div class="ml-4">Help / Support</div>
      </div>
    </NuxtLink>
    <div class="flex my-5">
      <img src="/icons/logout.svg" alt="" />
      <div class="ml-4">Logout</div>
    </div>
  </div>
</template>
<style>
.h-1 {
  height: 1px;
}
</style>