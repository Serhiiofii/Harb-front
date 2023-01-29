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
                <label class="switch">
                  <input
                    type="checkbox"
                    :checked="admin.admin_roles[0].payments"
                    @change="
                      toggle(admin.id, {
                        orders: admin.admin_roles[0].orders,
                        products: admin.admin_roles[0].products,
                        payments: admin.admin_roles[0].payments === 0 ? 1 : 0,
                        services: admin.admin_roles[0].services,
                      })
                    "
                  />
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="w-40">
                <label class="switch">
                  <input
                    type="checkbox"
                    :checked="admin.admin_roles[0].orders"
                    @change="
                      toggle(admin.id, {
                        orders: admin.admin_roles[0].orders === 0 ? 1 : 0,
                        products: admin.admin_roles[0].products,
                        payments: admin.admin_roles[0].payments,
                        services: admin.admin_roles[0].services,
                      })
                    "
                  />
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="w-40">
                <label class="switch">
                  <input
                    type="checkbox"
                    :checked="admin.admin_roles[0].products"
                    @change="
                      toggle(admin.id, {
                        orders: admin.admin_roles[0].orders,
                        products: admin.admin_roles[0].products === 0 ? 1 : 0,
                        payments: admin.admin_roles[0].payments,
                        services: admin.admin_roles[0].services,
                      })
                    "
                  />
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="w-40">
                <label class="switch">
                  <input
                    type="checkbox"
                    :checked="admin.admin_roles[0].services"
                    @change="
                      toggle(admin.id, {
                        orders: admin.admin_roles[0].orders,
                        products: admin.admin_roles[0].products,
                        payments: admin.admin_roles[0].payments,
                        services: admin.admin_roles[0].services === 0 ? 1 : 0,
                      })
                    "
                  />
                  <span class="slider round"></span>
                </label>
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
    toggle(id, roles) {
      this.$axios
        .$put(`admin/${id}/roles`, roles, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$toast.success("Admin role updated successfully!");
        });
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>