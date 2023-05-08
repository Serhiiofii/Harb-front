<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="max-w-screen-2xl mx-auto px-3 flex mt-4 container">
      <AdminSidebar />
      <div class="lg:ml-4 w-full">
        <div class="my-4">
          <input type="text" class="p-3 border w-full rounded-md bg-transparent" placeholder="Search" v-model="search"
            @change="searchData" />
        </div>
        <!-- <div class="md:flex justify-between">
          <div class="
              flex
              justify-between
              md:w-1/2
              border
              p-4
              rounded-md
              bg-white
              lg:mr-3
            ">
            <div>
              <div class="text-gray-400 my-4 text-lg uppercase">
                View top accounts
              </div>
              <div class="text-base my-4">Top 10 Accounts on Harbour Hub</div>
            </div>
            <div class="mt-auto">
              <button class="
                  my-4
                  flex
                  justify-between
                  bg-blue-200
                  p-3
                  rounded-md
                  text-blue-900
                ">
                View All
                <img class="w-3 h-3 my-auto ml-3" src="/icons/Vector.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="
              flex
              justify-between
              md:w-1/2
              border
              p-4
              rounded-md
              bg-white
              lg:ml-3
            ">
            <div>
              <div class="text-gray-400 my-4 text-lg uppercase">
                deleted accounts
              </div>
              <div class="text-base my-4">Deleted Accounts on Harbour Hub</div>
            </div>
            <div class="mt-auto">
              <button class="
                  my-4
                  flex
                  justify-between
                  bg-blue-200
                  p-3
                  rounded-md
                  text-blue-900
                ">
                View All
                <img class="w-3 h-3 my-auto ml-3" src="/icons/Vector.svg" alt="" />
              </button>
            </div>
          </div>
        </div> -->
        <div class="my-4 border bg-white rounded-md p-3">
          <div class="flex justify-between">
            <div class="uppercase text-sm text-gray-400">All accounts</div>
            <div class="text-green-800 text-sm">See all</div>
          </div>
          <div class="bg-gray-300 h-1 w-full my-3"></div>
          <div v-for="(account, index) in accounts" :key="index">
            <div class="flex justify-between">
              <div>
                <div class="text-sm capitalize">
                  {{ account.first_name }} {{ account.last_name }}
                </div>
                <div class="text-xs text-gray-300">
                  Date Created {{ account.created_at.substring(0, 10) }}
                </div>
              </div>
              <div class="flex justify-between">
                <div class="mx-2">
                  <NuxtLink :to="'/admin/' + account.id">
                    <button class="bg-blue-200 p-2 rounded-md text-sm text-blue-800">
                      View Account
                    </button>
                  </NuxtLink>
                </div>
                <!-- <div>
                  <button
                    class="bg-blue-200 p-2 rounded-md text-sm text-blue-800"
                  >
                    Send a message
                  </button>
                </div> -->
                <div>
                  <button @click="deleteAccount(account.id)" class="bg-red-200 p-2 rounded-md text-sm text-red-800">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-gray-300 h-1 w-full my-3"></div>
          </div>
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),
  middleware: "admin",

  data() {
    return {
      search: "",
      accounts: [],
      store: [],
    };
  },
  mounted() {
    try {
      this.$axios
        .$get("admin/users", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          this.accounts = response.data;
          this.store = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    searchData() {
      if (this.search !== "") {
        this.$axios
          .$post(
            "admin/users/search",
            {
              search: this.search,
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
            this.accounts = response.data;
          });
      } else {
        this.accounts = this.store;
      }
    },
    deleteAccount(id) {
      try {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$axios
              .$delete(`admin/users/${id}`, {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: "Bearer " + this.token,
                },
              })
              .then((response) => {
                console.log(response.message);
                this.$toast.success(response.message);
              });
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>