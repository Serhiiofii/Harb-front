<template>
  <div class="bg-white shadow-md min-h-[84px]">
    <b-navbar class="max-w-screen-2xl px-5 mx-auto py-4 fixed lg:relative top-0 w-full">
      <template #brand>
        <div class="my-auto w-full flex justify-between">
          <div class="flex items-center w-6 relative lg:hidden">
            <b-navbar v-show="customerPages.includes($nuxt.$route.name)" class="absolute -top-2 left-0 categories-inheader">
              <template #end>
                <b-navbar-item v-for="(single, index) in categories" :key="index" class=" w-[350px]">
                  <a :href="'categories?slug=' + single.slug">
                    <div class="flex lg:my-6">
                      <img :src="require(`~/assets/icons/${single.img}.jpeg`)" class="w-10 h-10 m-1" alt="" />
                      <div class="p-1 my-auto">
                        <div class="text-sm font-bold">{{ single.title }}</div>
                      </div>
                    </div>
                  </a>
                </b-navbar-item>
              </template>
            </b-navbar>
          </div>
          <NuxtLink to="/" class="my-auto">
            <img class="w-40 my-auto ml-8 lg:ml-0" src="/logo.svg" alt="" />
          </NuxtLink>
          <div class="bar w-1"></div>
        </div>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="lg:flex lg:w-full justify-between lg:p-0 p-3">
            <NuxtLink to="my-orders" class="my-auto py-3">
              <div class="flex my-auto nav-item px-4 md:px-0">
                <img src="/icons/Union.png" class="w-4 h-4 mr-1 my-auto" alt="" />
                <span class="block lg:hidden">Cart</span>
              </div>
            </NuxtLink>

            <div class="my-auto nav-item py-3">
              <b-dropdown aria-role="list" class="mt-1" position="is-bottom-left">
                <template #trigger="{}">
                  <div class="flex items center">
                    <img src="/icons/bell.png" class="h-4 w-4 mx-4 cursor-pointer" alt="" />
                    <span class="-ml-3 block lg:hidden">Notifications</span>
                  </div>
                </template>
                <b-dropdown-item aria-role="listitem">
                  <div class="flex justify-between w-80">
                    <div class="uppercase text-gray-300">Notifications</div>
                    <div class="text-xs text-green-400 w-12">
                      <NuxtLink to="/notifications">See all</NuxtLink>
                    </div>
                  </div>
                </b-dropdown-item>
                <div class="h-1 bg-gray-100 w-full"></div>
                <b-dropdown-item aria-role="listitem">
                  <div v-for="(single, index) in notifications" :key="index" class="flex justify-between w-80 my-2">
                    <div class="">
                      <div>{{ single.title }}</div>
                      <div class="text-xs text-gray-200">
                        {{ single.created_at.substring(0, 10) }}
                      </div>
                    </div>
                  </div>
                </b-dropdown-item>
                <div class="h-1 bg-gray-100 w-full"></div>
              </b-dropdown>
            </div>

            <NuxtLink v-if="role === 'user'" to="/becomeaseller" class="my-auto">
              <div class="my-auto nav-item px-4 md:px-0">Become a seller</div>
            </NuxtLink>

            <b-dropdown v-else aria-role="list" class="my-auto">
              <template #trigger="{ active }">
                <b-button label="Sell an Item" class="border-none" :icon-right="active ? 'menu-up' : 'menu-down'" />
              </template>
              <NuxtLink class="my-auto" to="/equipmentupload">
                <b-dropdown-item aria-role="listitem">Equipment Upload</b-dropdown-item>
              </NuxtLink>
              <NuxtLink class="my-auto" to="/serviceupload">
                <b-dropdown-item aria-role="listitem">Service Upload</b-dropdown-item>
              </NuxtLink>
            </b-dropdown>

            <div class="flex my-auto nav-item user-dropdown">
              <img v-if="avatar === null" src="/user.png" class="w-8 my-auto h-8 ml-4" alt="" />
              <img v-else :src="avatar" class="w-8 my-auto h-8 rounded-full ml-4" alt="" />
              <b-dropdown aria-role="list">
                <template #trigger="{ active }">
                  <b-button class="border-none" :label="'Hi ' + name" :icon-right="active ? 'menu-up' : 'menu-down'" />
                </template>

                <b-dropdown-item aria-role="listitem">Hi {{ name }}</b-dropdown-item>
                <div class="h-1 bg-gray-100 w-full"></div>
                <b-dropdown-item aria-role="listitem">
                  <NuxtLink to="/account">
                    <div class="flex">
                      <img src="/icons/user.svg" alt="" />
                      <div class="ml-3">Account</div>
                    </div>
                  </NuxtLink>
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

                <div v-show="user.user_role !== 'user'" class="h-1 bg-gray-100 w-full"></div>
                <b-dropdown-item v-show="user.user_role !== 'user'" aria-role="listitem">
                  <NuxtLink to="/seller">
                    <div class="flex">
                      <img src="/icons/company.svg" alt="" />
                      <div class="ml-3">Company Profile</div>
                    </div>
                  </NuxtLink>
                </b-dropdown-item>
                <b-dropdown-item v-show="user.user_role !== 'user'" aria-role="listitem">
                  <NuxtLink to="/seller/products">
                    <div class="flex">
                      <img src="/icons/products.svg" alt="" />
                      <div class="ml-3">Products</div>
                    </div>
                  </NuxtLink>
                </b-dropdown-item>
                <b-dropdown-item v-show="user.user_role !== 'user'" aria-role="listitem">
                  <NuxtLink to="/seller/services">
                    <div class="flex">
                      <img src="/icons/services.svg" alt="" />
                      <div class="ml-3">Services</div>
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
                  <NuxtLink to="/help-support">
                    <div class="flex">
                      <img src="/icons/help.svg" alt="" />
                      <div class="ml-3">Help / Support</div>
                    </div>
                  </NuxtLink>
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
    </b-navbar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import categories from "~/assets/jsons/categories";

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
      categories: categories,
      customerPages: ['index','single', 'categories', 'my-orders']
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

/* .bar {
  display: none;
} */
/* @media (max-width: 600px) {
  .bar {
    display: block;
  }
  .nav-item {
    margin-top: 8px !important;
  }
} */
</style>