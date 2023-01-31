<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 flex mt-4 container">
      <Sidebar />
      <div class="lg:ml-4 w-full">
        <div class="flex my-4">
          <div class="border p-4 rounded-md w-1/2 lg:mr-2">
            <div class="text-base uppercase text-gray-500">Wallet</div>
            <div class="flex justify-between my-3">
              <div class="text-xl font-bold my-auto">#300, 0000</div>
              <div>
                <button
                  class="
                    p-2
                    bg-green-200
                    w-40
                    text-sm text-green-900
                    rounded-md
                  "
                >
                  Request for Cash
                </button>
              </div>
            </div>
          </div>
          <div class="border p-4 rounded-md w-1/2 lg:ml-2">
            <div class="text-base uppercase text-gray-500">
              Transaction Receipts
            </div>
            <div class="flex justify-between my-3">
              <div class="text-xs my-auto">
                Click to view all Recieved transactions
              </div>
              <div>
                <button
                  class="p-2 bg-red-200 w-40 text-sm text-red-900 rounded-md"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white roundd-xl p-3">
          <div class="lg:flex">
            <div class="w-1/2">
              <div class="text-gray-500 text-sm uppercase m-2">
                Company’s Profile
              </div>
              <div class="m-2 border relative border-gray-200 rounded-xl">
                <div class="p-2">
                  <span class="text-sm">Company’s Name</span> <br />
                  <input
                    type="text"
                    v-model="name"
                    class="p-2 border border-gray-200 rounded-sm w-full"
                  />
                </div>
                <div class="p-2">
                  <span class="text-sm">Company’s Email</span> <br />
                  <input
                    type="text"
                    v-model="email"
                    class="p-2 border border-gray-200 rounded-sm w-full"
                  />
                </div>
                <div class="p-2">
                  <span class="text-sm">Company’s Phone Number</span> <br />
                  <input
                    type="number"
                    v-model="phone"
                    class="p-2 border border-gray-200 rounded-sm w-full"
                  />
                </div>
              </div>
            </div>

            <div class="m-2 lg:w-full">
              <div class="lg:flex">
                <div class="lg:w-1/2">
                  <div class="text-gray-500 text-sm uppercase my-2">
                    profile logo
                  </div>
                  <div
                    class="
                      border-gray-200 border
                      lg:mr-1
                      justify-evenly
                      p-3
                      rounded-xl
                      flex
                    "
                  >
                    <div class="w-20 rounded-full bg-blue-100 w-20">
                      <img src="/icons/user.svg" class="mx-auto my-8" alt="" />
                    </div>
                    <!-- <input @change="uploadPhoto" type="file" name="" ref="file" /> -->
                  </div>
                </div>
                <div class="lg:w-1/2">
                  <div class="text-gray-500 text-sm uppercase my-2">
                    Company’s address
                  </div>
                  <div
                    class="
                      top
                      border border-gray-200
                      p-2
                      rounded-xl
                      relative
                      lg:ml-1
                    "
                  >
                    <div
                      @click="updateDelivery"
                      class="absolute top-3 cursor-pointer right-3"
                    >
                      <img class="w-4 h-4" src="/edit.png" alt="" />
                    </div>
                    <textarea
                      class="w-full p-1 h-20 rounded-md"
                      name=""
                      v-model="location"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="text-gray-500 text-sm uppercase my-2">
                Company’s Bio
              </div>
              <div class="my-2 p-2 border rounded-xl border-gray-200 relative">
                <div
                  @click="updateBio"
                  class="absolute top-3 cursor-pointer right-3"
                >
                  <img class="w-4 h-4" src="/edit.png" alt="" />
                </div>
                <textarea
                  class="w-full border-none h-20 rounded-md"
                  name=""
                  v-model="bio"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white my-4 p-3">
          <div class="text-gray-500 text-sm uppercase my-2">Bank details</div>
          <div class="border border-gray-200 p-2">
            <div class="p-2 relative">
              <span class="text-sm my-1">Bank Name</span> <br />
              <input
                type="text"
                v-model="bank_name"
                class="p-2 border border-gray-200 rounded-sm w-full"
              />
              <div
                @click="updateBio"
                class="absolute bottom-6 cursor-pointer right-3"
              >
                <img class="w-4 h-4" src="/edit.png" alt="" />
              </div>
            </div>
            <div class="p-2 relative">
              <span class="text-sm my-1">Bank Account Number</span> <br />
              <input
                type="text"
                v-model="account"
                class="p-2 border border-gray-200 rounded-sm w-full"
              />
              <div
                @click="updateBio"
                class="absolute bottom-6 cursor-pointer right-3"
              >
                <img class="w-4 h-4" src="/edit.png" alt="" />
              </div>
            </div>
            <!-- <div class="p-2 relative">
              <span class="text-sm my-1">Enter your Phone Number</span> <br />
              <input
                type="text"
                v-model="phone"
                class="p-2 border border-gray-200 rounded-sm w-full"
              />
              <div
                @click="updateBio"
                class="absolute bottom-6 cursor-pointer right-3"
              >
                <img class="w-4 h-4" src="/edit.png" alt="" />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // middleware: "authenticated",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      bio: "",
      location: "",
      account: "",
      bank_name: "",
      loading: false,
      currentImage: undefined,
    };
  },
  computed: mapState(["token", "user"]),
  mounted() {
    try {
      // let seller = JSON.parse(window.localStorage.getItem("seller_id"));
      this.$axios
        .$get(`account/sellers/${this.user.seller.id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.name = response.data.seller.company_name;
          this.email = response.data.seller.company_email;
          this.phone = response.data.seller.user.phone;
          this.location = response.data.seller.business_location;
          this.bio = response.data.seller.business_description;

          this.bank_name =
            response.data.seller.business_accounts[0].account_name;
          this.account =
            response.data.seller.business_accounts[0].account_number;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async updateInfo() {
      try {
        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("data"));
        const data = await this.$axios.$put(
          "account/personal-info",
          {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + local.data.token,
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Profile Info Updated!");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error("Oops! Something happened");
      }
    },
    async updateDelivery() {
      try {
        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("data"));
        const data = await this.$axios.$put(
          "account/delivery-address",
          {
            delivery_address: this.delivery_address,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + local.data.token,
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Delivery address Updated!");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error("Oops! Something happened");
      }
    },
    async updateBio() {
      try {
        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("data"));
        const data = await this.$axios.$put(
          "account/bio",
          {
            bio: this.bio,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + local.data.token,
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Profile Bio Updated!");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error("Oops! Something happened");
      }
    },
    async updateLocation() {
      try {
        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("data"));
        const data = await this.$axios.$put(
          "account/location",
          {
            location: this.location,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + local.data.token,
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Profile Location Updated!");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error("Oops! Something happened");
      }
    },
    async uploadPhoto() {
      try {
        let formData = new FormData();
        let file = this.$refs.file.files.item(0);
        console.log(file);
        formData.append("photo", file);

        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("data"));
        const data = await this.$axios.$post("account/update-photo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + local.data.token,
          },
        });
        console.log(data);
        this.loading = false;
        this.$toast.success("Profile Photo Updated!");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error("Oops! Something happened");
      }
    },
  },
};
</script>
<style scoped>
textarea:focus {
  outline: none;
}
@media (max-width: 600px) {
  .top {
    margin-top: 10px;
  }
}
</style>