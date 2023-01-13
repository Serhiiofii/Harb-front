<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="lg:mx-20 flex mt-4 container">
      <AdminSidebar />
      <div class="lg:ml-4 w-full">
        <div class="my-4">
          <input
            type="text"
            class="p-3 w-full rounded-md bg-transparent border"
            placeholder="Search"
          />
        </div>
        <div class="flex">
          <div class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4">
            <div class="text-sm my-2">Total Services</div>
            <div
              class="
                rounded-md
                bg-blue-200
                w-20
                mx-auto
                text-sm text-blue-900
                p-2
              "
            >
              {{ total }}
            </div>
          </div>

          <div class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4">
            <div class="text-sm my-2">Services Booked</div>
            <div
              class="
                rounded-md
                bg-yellow-50
                text-sm text-yellow-900
                p-2
                w-20
                mx-auto
              "
            >
              {{ booked }}
            </div>
          </div>
          <div class="border bg-white rounded-md p-4 w-1/2 text-center">
            <div class="text-sm my-2">Services unbooked</div>
            <div
              class="
                rounded-md
                bg-green-200
                text-sm
                w-20
                mx-auto
                text-green-900
                p-2
              "
            >
              {{ unbooked }}
            </div>
          </div>
        </div>
        <div class="py-4 flex w-full justify-end">
          <div>
            <select name="" id="" class="bg-red-200 text-sm rounded-sm mx-1">
              <option value="Location">Location</option>
            </select>
          </div>
          <div>
            <select name="" id="" class="bg-red-200 text-sm rounded-sm mx-1">
              <option value="Filter by Date">Filter by Date</option>
            </select>
          </div>
        </div>
        <div class="bg-white border p-2 flex justify-between flex-wrap">
          <div class="p-2 w-1/2"><AdminServiceCard /></div>
          <div class="p-2 w-1/2"><AdminServiceCard /></div>
          <div class="p-2 w-1/2"><AdminServiceCard /></div>
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
      services: [],
      booked: 0,
      unbooked: 0,
      total: 0,
    };
  },
  mounted() {
    try {
      this.$axios
        .$get(`admin/services`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.products = response.data.services;
          this.booked = response.data.booked_services;
          this.unbooked = response.data.unbooked_services;
          this.total = response.data.total_services;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>