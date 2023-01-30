<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="lg:mx-20 flex mt-4">
      <AdminSidebar />
      <div class="lg:ml-4 my-4 w-full">
        <div v-if="data !== null">
          <div class="flex justify-between">
            <div class="p-2 w-2/3">
              <div class="border rounded-md p-4 flex justify-between">
                <div class="my-auto">
                  <div class="text-xs">Total Users</div>
                  <div class="text-xl font-bold">{{ data.total_users }}</div>
                </div>
                <div>
                  <img src="/admin/user.png" alt="" />
                </div>
              </div>
            </div>
            <div class="p-2 w-2/3">
              <div class="border rounded-md p-4 flex justify-between">
                <div class="my-auto">
                  <div class="text-xs">Active Customers</div>
                  <div class="text-xl font-bold">
                    {{ data.active_customers }}
                  </div>
                </div>
                <div>
                  <img src="/admin/customers.png" alt="" />
                </div>
              </div>
            </div>
            <div class="p-2 w-2/3">
              <div class="border rounded-md p-4 flex justify-between">
                <div class="my-auto">
                  <div class="text-xs">Total Equipments</div>
                  <div class="text-xl font-bold">
                    {{ data.total_equipments }}
                  </div>
                </div>
                <div>
                  <img src="/admin/equipments.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="p-4 m-2 w-full rounded-md border">
              <div class="flex justify-between">
                <div class="uppercase text-gray-300">recent transactions</div>
                <div class="text-xs text-green-400 w-12 my-auto">See all</div>
              </div>
              <div
                v-for="(single, index) in data.recent_transactions"
                :key="index"
                class="flex justify-between my-2"
              >
                <div class="">
                  <div>{{ single.amount }} {{ single.user.first_name }}</div>
                  <div class="text-xs text-gray-200">
                    {{ single.created_at.substring(0, 10) }}
                  </div>
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
            </div>
            <!-- <div class="p-4 m-2 rounded-md w-full border">
            <div class="flex justify-between">
              <div class="uppercase text-gray-300">
                Recent withdrawal request
              </div>
              <div class="text-xs text-green-400 w-12 my-auto">See all</div>
            </div>
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
          </div> -->
          </div>
          <div class="flex">
            <div class="w-full border p-4 m-2 rounded-md">
              <div class="text-xl font-bold">Services</div>
              <div class="text-xs">Total {{ data.total_services }}</div>
              <apexchart
                width="380"
                type="donut"
                :options="option1"
                :series="series1"
              ></apexchart>
            </div>
            <div class="w-full border p-4 m-2 rounded-md">
              <div class="text-xl font-bold">Products</div>
              <div class="text-xs">Total {{ data.total_products }}</div>
              <apexchart
                width="380"
                type="pie"
                :options="option2"
                :series="series2"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import VueApexCharts from "vue-apexcharts";

export default {
  computed: mapState(["token"]),
  middleware: "authenticated",

  data() {
    return {
      data: null,
      option1: {
        labels: ["Active Services", "Number of Clicked Services"],
      },
      option2: {
        labels: ["Product on Rent", "Product on Sale"],
      },
      series1: null,
      series2: null,
    };
  },
  mounted() {
    try {
      this.$axios
        .$get("admin/dashboard/get-data", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
          this.series1 = [
            this.data.active_services,
            this.data.clicked_services,
          ];
          this.series2 = [this.data.rented_products, this.data.sold_products];
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>