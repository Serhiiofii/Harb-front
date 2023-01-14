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
              <div class="text-sm my-2">Total Companies</div>
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
                {{ total }}
              </div>
            </div>

            <div
              class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4"
            >
              <div class="text-sm my-2">Verified Companies</div>
              <div
                class="
                  rounded-md
                  bg-yellow-50
                  w-44
                  text-sm text-yellow-900
                  p-2
                  mx-auto
                "
              >
                {{ verified }}
              </div>
            </div>
            <div class="border bg-white rounded-md p-4 w-1/2 text-center">
              <div class="text-sm my-2">Suspended Companies</div>
              <div
                class="
                  rounded-md
                  bg-green-200
                  text-sm
                  mx-auto
                  w-44
                  text-green-900
                  p-2
                "
              >
                {{ suspended }}
              </div>
            </div>
          </div>
          <div class="border p-3 my-4 bg-white rounded-md">
            <div class="flex justify-between">
              <div class="uppercase text-sm text-gray-400">CompAny</div>
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
              <div class="w-52 text-sm text-gray-400 uppercase">
                Company name
              </div>
              <div class="w-52 text-sm text-gray-400 uppercase">
                date created
              </div>
              <div class="w-52 text-sm text-gray-400 uppercase">
                account holder
              </div>
              <div class="w-20 text-sm text-gray-400 uppercase">verifed</div>
              <div class="w-40 text-sm text-gray-400 uppercase">vIEW dOCS.</div>
            </div>
            <div class="bg-gray-300 h-1 w-full my-3"></div>
            <div v-for="(company, index) in companies" :key="index">
              <div class="flex justify-between my-3">
                <div class="w-52 text-sm my-auto font-bold">
                  {{ company.company_name }}
                </div>
                <div class="w-52 text-sm my-auto font-bold">
                  {{ company.created_at.substring(0, 10) }}
                </div>
                <div class="w-52 text-sm my-auto text-gray-400">
                  {{ company.user.first_name }} {{ company.user.last_name }}
                </div>
                <div class="w-20" @click="verifyCompany(company.id)">
                  <b-field>
                    <b-switch
                      type="is-info"
                      v-model="company.is_verified"
                      true-value="Yes"
                      false-value="No"
                    >
                    </b-switch>
                  </b-field>
                </div>
                <div class="w-40">
                  <button
                    class="bg-green-200 text-sm p-2 rounded-sm text-green-800"
                  >
                    DOCUMENT
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

  data() {
    return {
      companies: [],
      suspended: 0,
      verified: 0,
      total: 0,
    };
  },
  mounted() {
    try {
      this.$axios
        .$get(`admin/companies`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.companies = response.data.companies;
          this.suspended = response.data.suspended_companies;
          this.verified = response.data.verified_companies;
          this.total = response.data.total_companies;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    verifyCompany(id) {
      try {
        this.$axios
          .$put(`admin/companies/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          })
          .then((response) => {
            console.log(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>