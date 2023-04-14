<template>
  <b-navbar class="lg:px-20 py-4 nav">
    <!-- <div class="flex py-4 px-20 justify-between bg-white nav"> -->
    <template #brand>
      <div class="my-auto w-full flex justify-between lg:px-0 px-4">
        <div class="bar w-10">
          <img
            @click="toggleSidenav()"
            src="/hamburger-menu.svg"
            class="w-6"
            alt=""
          />
        </div>
        <NuxtLink to="/" class="my-auto">
          <img class="w-40 my-auto" src="/logo.svg" alt="" />
        </NuxtLink>
        <!-- <div class="bar w-10">
          <img src="/hamburger-menu.svg" alt="" />
        </div> -->
      </div>
    </template>

    <!-- <div class="lg:flex hidden"> -->
    <template #end>
      <!-- <div class="lg:flex my-auto lg:p-0 p-2">
        <b-dropdown aria-role="list" class="z-10 lg:-mr-1 nav-item">
          <template #trigger="{ active }">
            <b-button
              label="All Categories"
              type="is-info"
              class="h-12"
              :icon-right="active ? 'menu-up' : 'menu-down'"
            />
          </template>
          <div v-for="(single, index) in categories" :key="index" class="p-2">
            {{ single.title }}
          </div>
        </b-dropdown>
        <input
          v-model="search"
          type="text"
          class="p-3 border border-gray-100 lg:w-96 w-full h-12 nav-item"
          placeholder="Search items on harbour hub"
          @change="searchData"
        />
      </div> -->
      <b-navbar-item tag="div">
        <div class="lg:flex lg:w-full justify-between lg:p-0 p-3">
          <NuxtLink to="my-orders" class="my-auto">
            <div class="flex my-auto nav-item px-4 md:px-0">
              <img src="/icons/Union.png" class="w-4 h-4 mr-1 my-auto" alt="" />
              <span class="block lg:hidden">Cart</span>
            </div>
          </NuxtLink>

          <div class="my-auto nav-item">
            <b-dropdown aria-role="list" class="mt-1" position="is-bottom-left">
              <template #trigger="{}">
                <div class="flex items center">
                  <img
                    src="/icons/bell.png"
                    class="h-4 w-4 mx-4 cursor-pointer"
                    alt=""
                  />
                  <span class="-ml-3 block lg:hidden">Notifications</span>
                </div>
              </template>
              <b-dropdown-item aria-role="listitem">
                <div class="flex justify-between w-80">
                  <div class="uppercase text-gray-300">Notifications</div>
                  <div class="text-xs text-green-400 w-12">See all</div>
                </div>
              </b-dropdown-item>
              <div class="h-1 bg-gray-100 w-full"></div>
              <b-dropdown-item aria-role="listitem">
                <div
                  v-for="(single, index) in notifications"
                  :key="index"
                  class="flex justify-between w-80 my-2"
                >
                  <div class="">
                    <div>{{ single.title }}</div>
                    <div class="text-xs text-gray-200">
                      {{ single.created_at.substring(0, 10) }}
                    </div>
                  </div>
                  <!-- <div
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
                </div> -->
                </div>
              </b-dropdown-item>
              <div class="h-1 bg-gray-100 w-full"></div>
            </b-dropdown>
          </div>
          <NuxtLink v-if="role === 'user'" to="/becomeaseller" class="my-auto">
            <div class="my-auto nav-item px-4 md:px-0">Become a seller</div>
          </NuxtLink>

          <b-dropdown v-else aria-role="list">
            <template #trigger="{ active }">
              <b-button
                label="Sell an Item"
                class="border-none"
                :icon-right="active ? 'menu-up' : 'menu-down'"
              />
            </template>
            <NuxtLink class="my-auto" to="/equipmentupload">
              <b-dropdown-item aria-role="listitem"
                >Equipment Upload</b-dropdown-item
              >
            </NuxtLink>
            <NuxtLink class="my-auto" to="/serviceupload">
              <b-dropdown-item aria-role="listitem"
                >Service Upload</b-dropdown-item
              >
            </NuxtLink>
          </b-dropdown>

          <div class="flex my-auto nav-item">
            <img
              v-if="avatar === null"
              src="/user.png"
              class="w-8 my-auto h-8 ml-4"
              alt=""
            />
            <img
              v-else
              :src="avatar"
              class="w-8 my-auto h-8 rounded-full ml-4"
              alt=""
            />
            <b-dropdown aria-role="list">
              <template #trigger="{ active }">
                <b-button
                  class="border-none"
                  :label="'Hi ' + name"
                  :icon-right="active ? 'menu-up' : 'menu-down'"
                />
              </template>

              <b-dropdown-item aria-role="listitem"
                >Hi {{ name }}</b-dropdown-item
              >
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
                <NuxtLink to="/messages">
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
                <NuxtLink to="/help-support"
                  ><div class="flex">
                    <img src="/icons/help.svg" alt="" />
                    <div class="ml-3">Help / Support</div>
                  </div></NuxtLink
                >
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem">
                <div class="flex" @click="logout">
                  <img src="/icons/logout.svg" alt="" />
                  <div class="ml-3">Logout</div>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </b-navbar-item>
    </template>
    <!-- </div> -->
    <!-- </div> -->
  </b-navbar>
</template>
<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  computed: mapState(["user", "token"]),
  data() {
    return {
      data: [],
      name: "",
      sidebar: false,
      role: "",
      name: "",
      avatar: null,
      notifications: null,
      categories: [
        {
          title: "Hauling Equipment",
          items: "200 goods",
        },
        {
          title: "Vessels",
          items: "200 goods",
        },
        {
          title: "Subsea Equipment",
          items: "200 goods",
        },
        {
          title: "Cranes",
          items: "200 goods",
        },
        {
          title: "Pumps and Hoses",
          items: "200 goods",
        },
        {
          title: "OCTG Pipes",
          items: "200 goods",
        },
        {
          title: "Safety Equipment",
          items: "200 goods",
        },
        {
          title: "Power",
          items: "200 goods",
        },
      ],
    };
  },
  mounted() {
    this.name = this.user.first_name;
    this.role = this.user.user_role;
    this.avatar = this.user.avatar;
    try {
      this.$axios
        .$get("account/notifications", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          this.notifications = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapMutations(["toggleSidenav"]),
    logout() {
      localStorage.clear();
      window.location.href = "/";
    },
  },
};
</script>
<style scoped>
.h-1 {
  height: 1px;
}
.bar {
  display: none;
}
@media (max-width: 600px) {
  .bar {
    display: block;
  }
  .nav-item {
    margin-top: 8px !important;
  }
}
</style>