<template>
  <div class="flex py-4 px-20 justify-between bg-white">
    <div class="my-auto">
      <img class="w-40" src="/logo.svg" alt="" />
    </div>
    <div class="flex my-auto">
      <b-dropdown aria-role="list" class="z-10 -mr-1">
        <template #trigger="{ active }">
          <b-button
            label="All Categories"
            type="is-info"
            class="h-12"
            :icon-right="active ? 'menu-up' : 'menu-down'"
          />
        </template>
        <div class="flex w-96">
          <b-dropdown-item aria-role="listitem">Sort by</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Location</b-dropdown-item>
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Price -
            Highest</b-dropdown-item
          >
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Lagos</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Price -
            Lowest</b-dropdown-item
          >
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />London</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Recent
            Item</b-dropdown-item
          >
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Abuja</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"></b-dropdown-item>
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Port
            harcourt</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"></b-dropdown-item>
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Africa</b-dropdown-item
          >
        </div>
      </b-dropdown>
      <input
        type="text"
        class="p-3 border border-gray-100 w-96 h-12"
        placeholder="Search items on harbour hub"
      />
    </div>
    <NuxtLink to="my-orders" class="my-auto">
      <div class="flex my-auto">
        <img src="/icons/Union.png" class="w-4 h-4 mr-1 my-auto" alt="" />
        Cart
      </div>
    </NuxtLink>
    <div class="my-auto">Become a seller</div>
    <div class="my-auto">
      <b-dropdown aria-role="list" class="mt-1" position="is-bottom-left">
        <template #trigger="{}">
          <img src="/icons/bell.png" class="h-4 w-4 cursor-pointer" alt="" />
        </template>
        <b-dropdown-item aria-role="listitem">
          <div class="flex justify-between w-80">
            <div class="uppercase text-gray-300">Notifications</div>
            <div class="text-xs text-green-400 w-12">See all</div>
          </div>
        </b-dropdown-item>
        <div class="h-1 bg-gray-100 w-full"></div>
        <b-dropdown-item aria-role="listitem">
          <div class="flex justify-between w-80 my-2">
            <div class="">
              <div>Bid for tathoth Hose - N300,000</div>
              <div class="text-xs text-gray-200">6 - Sep - 2022, 13:02</div>
            </div>
            <div
              class="
                text-xs text-green-800 text-center
                bg-green-100
                rounded-sm
                p-1
                my-auto
                w-12
              "
            >
              View
            </div>
          </div>
        </b-dropdown-item>
        <div class="h-1 bg-gray-100 w-full"></div>
      </b-dropdown>
    </div>
    <div class="flex my-auto">
      <img src="/user.png" class="w-8 my-auto h-8" alt="" />
      <b-dropdown aria-role="list">
        <template #trigger="{ active }">
          <b-button
            class="border-none"
            label="Hi Louis"
            :icon-right="active ? 'menu-up' : 'menu-down'"
          />
        </template>

        <b-dropdown-item aria-role="listitem">Hi Louis</b-dropdown-item>
        <div class="h-1 bg-gray-100 w-full"></div>
        <b-dropdown-item aria-role="listitem">
          <NuxtLink to="/account"
            ><div class="flex">
              <img src="/icons/user.svg" alt="" />
              <div class="ml-3">Account</div>
            </div></NuxtLink
          >
        </b-dropdown-item>
        <b-dropdown-item aria-role="listitem">
          <NuxtLink to="/saved">
            <div class="flex">
              <img src="/icons/saved.svg" alt="" />
              <div class="ml-3">Saved Items</div>
            </div>
          </NuxtLink>
        </b-dropdown-item>
        <b-dropdown-item aria-role="listitem">
          <NuxtLink to="/my-orders">
            <div class="flex">
              <img src="/icons/orders.svg" alt="" />
              <div class="ml-3">My Orders</div>
            </div>
          </NuxtLink>
        </b-dropdown-item>
        <b-dropdown-item aria-role="listitem">
          <NuxtLink to="">
            <div class="flex">
              <img src="/icons/msg.svg" alt="" />
              <div class="ml-3">Messages</div>
            </div>
          </NuxtLink>
        </b-dropdown-item>
        <div class="h-1 bg-gray-100 w-full"></div>
        <b-dropdown-item aria-role="listitem">
          <NuxtLink to="/change-password">
            <div class="flex">
              <img src="/icons/pass.svg" alt="" />
              <div class="ml-3">Change Password</div>
            </div>
          </NuxtLink>
        </b-dropdown-item>
        <b-dropdown-item aria-role="listitem">
          <NuxtLink to=""
            ><div class="flex">
              <img src="/icons/help.svg" alt="" />
              <div class="ml-3">Help / Support</div>
            </div></NuxtLink
          >
        </b-dropdown-item>
        <b-dropdown-item aria-role="listitem">
          <div class="flex">
            <img src="/icons/logout.svg" alt="" />
            <div class="ml-3">Logout</div>
          </div>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      name: "",
    };
  },
  computed: {},
};
</script>
<style scoped>
.h-1 {
  height: 1px;
}
</style>