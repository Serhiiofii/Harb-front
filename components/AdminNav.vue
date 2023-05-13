<template>
  <div class="bg-white shadow-md min-h-[84px]">
    <b-navbar class="max-w-screen-2xl px-5 mx-auto py-4 fixed lg:relative top-0 w-full">
      <template #brand>
        <div class="flex justify-center lg:justify-between items-center lg:w-96">
          <NuxtLink to="/admin">
            <div class="">
              <img class="my-auto" src="/logo.svg" alt="" />
            </div>
          </NuxtLink>
          <div class="hidden lg:block">
            <div class="text-xl">Good Morning</div>
            <div class="text-sm">Welcome back, Admin</div>
          </div>
        </div>
      </template>
      <template #end>
        <div class="flex justify-between px-5">
          <div>
            <input type="text" class="p-3 rounded-md border w-76 sm:w-96" placeholder="Search" />
          </div>
          <div class="flex">
            <div class="my-auto">
              <img src="/icons/Chat.svg" alt="" class="w-6 h-6 my-auto mx-4" />
            </div>
            <div class="my-auto">
              <img src="/icons/notifications.svg" class="w-6 h-6 my-auto mx-4" alt="" />
            </div>
          </div>
        </div>
        <div class="px-5 lg:hidden">
          <b-navbar-item>
            <NuxtLink to="/admin/accounts">
              <div class="flex my-1">
                <img src="/icons/user.svg" alt="" />
                <div class="ml-4">Account</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <b-navbar-item>
            <NuxtLink to="/admin/payments">
              <div class="flex my-1">
                <img src="/icons/saved.svg" alt="" />
                <div class="ml-4">Payments</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <b-navbar-item>
            <NuxtLink to="/admin/notifications">
              <div class="flex my-1">
                <img src="/icons/bell.svg" alt="" />
                <div class="ml-4">Notification</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <div class="h-1 bg-gray-100 w-full"></div>
          <b-navbar-item>
            <NuxtLink to="/admin/products">
              <div class="flex my-1">
                <img src="/icons/products.svg" alt="" />
                <div class="ml-4">Products</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <b-navbar-item>
            <NuxtLink to="/admin/request">
              <div class="flex my-1">
                <img src="/icons/bell.svg" alt="" />
                <div class="ml-4">Request</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <b-navbar-item>
            <NuxtLink to="/admin/services">
              <div class="flex my-1">
                <img src="/icons/services.svg" alt="" />
                <div class="ml-4">Services</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <b-navbar-item>
            <NuxtLink to="/admin/companies">
              <div class="flex my-1">
                <img src="/icons/company.svg" alt="" />
                <div class="ml-4">Companies</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <div class="h-1 bg-gray-100 w-full"></div>
          <NuxtLink to="/admin/userlogs">
            <div class="flex my-5">
              <img src="/icons/log-file-icon.svg" width="16" alt="" />
              <div class="ml-4">User Logs</div>
            </div>
          </NuxtLink>
          <b-navbar-item>
            <NuxtLink to="/admin/roles">
              <div class="flex my-1">
                <img src="/icons/user.svg" alt="" />
                <div class="ml-4">Roles</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <b-navbar-item>
            <NuxtLink to="/admin/change-password">
              <div class="flex my-1">
                <img src="/icons/password.svg" alt="" />
                <div class="ml-4">Change Password</div>
              </div>
            </NuxtLink>
          </b-navbar-item>
          <b-navbar-item @click="logout" class="flex my-1 cursor-pointer">
            <img src="/icons/logout.svg" alt="" />
            <div class="ml-4">Logout</div>
          </b-navbar-item>
        </div>
      </template>
    </b-navbar>
  </div>
</template>


<script>
export default {
  data() {
    return {}
  },

  methods: {
    logout() {
      localStorage.clear();
      window.location.href = "/";
    },
  },
}
</script>