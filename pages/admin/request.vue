<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="lg:mx-20 flex mt-4 container">
      <AdminSidebar />
      <div class="lg:ml-4 w-full">
        <div class="lg:ml-4 w-full">
          <div class="my-4">
            <input
              type="text"
              class="p-3 w-full rounded-md bg-transparent border"
              placeholder="Search"
            />
          </div>
          <div class="flex">
            <div
              class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4"
            >
              <div class="text-sm my-2">Active Request</div>
              <div
                class="
                  rounded-md
                  bg-blue-200
                  w-44
                  flex
                  justify-evenly
                  mx-auto
                  text-sm text-blue-900
                  p-2
                "
              >
                View Account
                <img src="/icons/Vector.svg" class="h-3 w-3 my-auto" alt="" />
              </div>
            </div>

            <div
              class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4"
            >
              <div class="text-sm my-2">All Request</div>
              <div
                class="
                  rounded-md
                  bg-yellow-50
                  text-sm text-yellow-900
                  p-2
                  mx-auto
                "
              >
                309384 Made
              </div>
            </div>
            <div class="border bg-white rounded-md p-4 w-1/2 text-center">
              <div class="text-sm my-2">Total Requested Amount</div>
              <div
                class="
                  rounded-md
                  bg-green-200
                  text-sm
                  mx-auto
                  text-green-900
                  p-2
                "
              >
                4,000,334.09 NGN
              </div>
            </div>
          </div>
          <div class="border p-3 my-4 bg-white rounded-md">
            <div class="flex justify-between">
              <div class="uppercase text-sm text-gray-400">Request list</div>
              <div class="flex">
                <div>
                  <select
                    class="bg-red-200 text-sm rounded-sm mx-1"
                    name=""
                    id=""
                  >
                    <option value="All">Filter by Date</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex justify-between my-3">
              <div class="w-52 text-sm text-gray-400 uppercase">
                Company name
              </div>
              <div class="w-52 text-sm text-gray-400 uppercase">
                amount requested
              </div>
              <div class="w-52 text-sm text-gray-400 uppercase">
                Date of request
              </div>
              <div class="w-40 text-sm text-gray-400 uppercase">Status</div>
              <div class="w-20 text-sm text-gray-400 uppercase">file</div>
            </div>
            <div class="bg-gray-300 h-1 w-full my-3"></div>
            <div>
              <div class="flex justify-between my-3">
                <div class="w-52 text-sm my-auto font-bold">Herkshire Mate</div>
                <div class="w-52 text-sm my-auto font-bold">#300,000</div>
                <div class="w-52 text-sm my-auto text-gray-400">
                  9 Sep - 2022 , 13:02
                </div>
                <div class="w-40">
                  <button
                    class="
                      bg-blue-200
                      text-sm
                      p-2
                      w-full
                      rounded-sm
                      text-blue-800
                    "
                  >
                    Click to approve
                  </button>
                </div>
                <div class="w-20">
                  <button
                    class="bg-blue-200 text-sm p-2 rounded-sm text-blue-800"
                  >
                    View File
                  </button>
                </div>
              </div>
              <div class="bg-gray-300 h-1 w-full my-3"></div>
            </div>
            <div>
              <div class="flex justify-between my-3">
                <div class="w-52 text-sm my-auto font-bold">Herkshire Mate</div>
                <div class="w-52 text-sm my-auto font-bold">#300,000</div>
                <div class="w-52 text-sm my-auto text-gray-400">
                  9 Sep - 2022 , 13:02
                </div>
                <div class="w-40">
                  <button
                    class="
                      bg-green-200
                      w-full
                      text-sm
                      p-2
                      rounded-sm
                      text-green-800
                    "
                  >
                    Approved
                  </button>
                </div>
                <div class="w-20">
                  <button
                    class="bg-green-200 text-sm p-2 rounded-sm text-green-800"
                  >
                    View File
                  </button>
                </div>
              </div>
              <div class="bg-gray-300 h-1 w-full my-3"></div>
            </div>
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
  middleware: "authenticated",

  data() {
    return {
      orders: [],
      ongoing: 0,
      declined: 0,
      total: 0,
    };
  },
  mounted() {
    try {
      this.$axios
        .$get(`admin/orders`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.orders = response.data.orders;
          this.ongoing = response.data.ongoing;
          this.declined = response.data.declined;
          this.total = response.data.total;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>