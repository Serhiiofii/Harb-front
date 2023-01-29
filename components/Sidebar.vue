<template>
  <div
    v-show="sidebar"
    class="
      lg:w-96
      w-full
      bg-white
      p-4
      my-4
      rounded-md
      lg:relative
      fixed
      z-10
      lg:top-0
      top-12
      left-0
    "
  >
    <div class="my-4 text-gray-400 uppercase">Hi {{ user.first_name }},</div>
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
    <NuxtLink to="/messages">
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
    <div v-if="user.user_role !== 'user'">
      <div class="bg-gray-300 h-1 w-full"></div>
      <NuxtLink to="/seller">
        <div class="flex my-5">
          <img src="/icons/company.svg" alt="" />
          <div class="ml-4">Company Profile</div>
        </div>
      </NuxtLink>
      <NuxtLink to="/seller/products">
        <div class="flex my-5">
          <img src="/icons/products.svg" alt="" />
          <div class="ml-4">Products</div>
        </div>
      </NuxtLink>
      <NuxtLink to="/seller/services">
        <div class="flex my-5">
          <img src="/icons/services.svg" alt="" />
          <div class="ml-4">Services</div>
        </div>
      </NuxtLink>
    </div>

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
    <div @click="logout" class="flex my-5 cursor-pointer">
      <img src="/icons/logout.svg" alt="" />
      <div class="ml-4">Logout</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: mapState(["sidebar", "user"]),
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["toggleSidenav"]),
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  mounted() {
    if (screen.width <= 600) {
      this.toggleSidenav();
    }
  },
};
</script>
<style>
.h-1 {
  height: 1px;
}

.show,
.hide {
  display: block;
  width: 25%;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .show {
    display: block;
    position: fixed;
    z-index: 10;
    top: 980px;
    height: 100vh;
    left: 0px;
    padding: 20px;
    background-color: white;
    width: 100%;
  }
}
</style>