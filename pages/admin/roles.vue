<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="lg:mx-20 flex mt-4 container">
      <AdminSidebar />
      <div class="lg:ml-4 w-full">
        <div class="flex">
          <div class="w-1/2 border rounded-md p-4">
            <div class="text-base text-gray-500 uppercase">Special admins</div>
            <div class="flex justify-between">
              <div class="text-sm my-auto">List of Admins @ Harbour Hub</div>
              <NuxtLink to="/admin/create">
                <button
                  class="flex bg-blue-200 text-sm text-blue-900 p-3 rounded-sm"
                >
                  <div class="my-auto">Click to add an Admin</div>
                  <img
                    class="w-4 h-4 ml-4 my-auto"
                    src="/icons/plus-circle.svg"
                    alt=""
                  />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="my-4">
          <input
            type="text"
            class="p-3 w-full rounded-md bg-transparent border"
            placeholder="Search"
          />
        </div>

        <div class="border p-3 my-4 bg-white rounded-md">
          <div class="flex justify-between">
            <div class="uppercase text-sm text-gray-400">Admins</div>
            <div class="flex">
              <div>
                <select
                  class="bg-red-200 text-sm rounded-sm mx-1"
                  name=""
                  id=""
                >
                  <option value="All">All</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex justify-between my-3">
            <div class="w-52 text-sm text-gray-400 uppercase">Users</div>
            <div class="w-40 text-sm text-gray-400 uppercase">Payments</div>
            <div class="w-40 text-sm text-gray-400 uppercase">Request</div>
            <div class="w-40 text-sm text-gray-400 uppercase">Products</div>
            <div class="w-40 text-sm text-gray-400 uppercase">services</div>
          </div>
          <div class="bg-gray-300 h-1 w-full my-3"></div>
          <div v-for="(admin, index) in admins" :key="index">
            <div class="flex justify-between my-3">
              <div class="w-52 text-sm my-auto font-bold">
                {{ admin.first_name }} {{ admin.last_name }}
              </div>
              <div class="w-40">
                <b-field>
                  <b-switch
                    type="is-info"
                    v-model="admin.admin_roles[0].payments"
                    true-value="Yes"
                    false-value="No"
                    @click.native="toggle(admin.id)"
                  >
                    {{ admin.admin_roles[0].payments === 1 ? "Yes" : "No" }}
                  </b-switch>
                </b-field>
              </div>
              <div class="w-40">
                <b-field>
                  <b-switch
                    type="is-info"
                    v-model="admin.admin_roles[0].orders"
                    true-value="Yes"
                    false-value="No"
                    @click.native="toggle"
                  >
                    {{ admin.admin_roles[0].orders === 1 ? "Yes" : "No" }}
                  </b-switch>
                </b-field>
              </div>
              <div class="w-40">
                <b-field>
                  <b-switch
                    type="is-info"
                    v-model="admin.admin_roles[0].products"
                    true-value="Yes"
                    false-value="No"
                    @click.native="toggle"
                  >
                    {{ admin.admin_roles[0].products === 1 ? "Yes" : "No" }}
                  </b-switch>
                </b-field>
              </div>
              <div class="w-40">
                <b-field>
                  <b-switch
                    type="is-info"
                    v-model="admin.admin_roles[0].services"
                    true-value="Yes"
                    false-value="No"
                    @click.native="toggle"
                  >
                    {{ admin.admin_roles[0].services === 1 ? "Yes" : "No" }}
                  </b-switch>
                </b-field>
              </div>
            </div>
            <div class="bg-gray-300 h-1 w-full my-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),

  data() {
    return {
      admins: [],
      isSwitchedCustom: ["no", "yes"],
    };
  },
  mounted() {
    try {
      this.$axios
        .$get(`admin/get-admins`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.admins = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    toggle(id) {
      this.$axios
        .$put(
          `admin/${id}/roles`,
          {
            orders: 0,
            products: 1,
            payments: 1,
            services: 1,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.$toast.success("Admin role updated successfully!");
        });
    },
  },
};
</script>
