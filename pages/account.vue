<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 flex mt-4 container">
      <Sidebar />
      <div class="lg:ml-4 w-full">
        <div class="bg-white">
          <div class="lg:flex">
            <div class="m-2 border border-gray-200 rounded-md">
              <div class="lg:flex">
                <div class="p-2">
                  <span class="text-sm">First Name</span> <br />
                  <input
                    type="text"
                    v-model="data.first_name"
                    class="
                      p-2
                      border border-gray-200
                      rounded-sm
                      lg:w-auto
                      w-full
                    "
                  />
                </div>
                <div class="p-2">
                  <span class="text-sm">Last Name</span> <br />
                  <input
                    type="text"
                    v-model="data.last_name"
                    class="
                      p-2
                      border border-gray-200
                      rounded-sm
                      lg:w-auto
                      w-full
                    "
                  />
                </div>
              </div>
              <div class="p-2">
                <span class="text-sm">Enter your email</span> <br />
                <input
                  type="text"
                  v-model="data.email"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
              <div class="p-2">
                <span class="text-sm">Enter your Phone Number</span> <br />
                <input
                  type="number"
                  v-model="data.phone"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
            </div>
            <div class="m-2 lg:w-full">
              <div class="lg:flex">
                <div
                  class="
                    border-gray-200 border
                    lg:mr-1
                    justify-evenly
                    p-3
                    flex
                    lg:w-1/2
                  "
                >
                  <div class="font-bold text-base my-auto">Avatar</div>
                  <div class="w-20 rounded-full bg-blue-100 w-20">
                    <img src="/icons/user.svg" class="mx-auto my-8" alt="" />
                  </div>
                </div>
                <div
                  class="
                    lg:w-1/2
                    top
                    border border-gray-200
                    p-2
                    rounded-md
                    lg:ml-1
                  "
                >
                  <textarea
                    class="w-full bg-gray-200 h-full rounded-md"
                    name=""
                    v-model="data.bio"
                  ></textarea>
                </div>
              </div>
              <div class="my-2">
                <textarea
                  class="w-full border border-gray-200 h-20 rounded-md"
                  name=""
                  v-model="data.delivery_address"
                ></textarea>
              </div>
              <div>
                <input
                  type="text"
                  class="p-2 border border-gray-200 w-full"
                  value="Location:"
                  v-model="data.location"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="bg-white mt-4 p-2">
          <b-tabs type="is-toggle">
            <b-tab-item label="Products">
              <div>
                <Product />
                <Product />
              </div>
            </b-tab-item>
            <b-tab-item label="Services">
              <div class="flex justify-between">
                <div class="mr-2"><ServiceCard /></div>
                <div class="ml-2"><ServiceCard /></div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  middleware: "authenticated",
  data() {
    return {
      data: [],
      loading: false,
    };
  },
  computed: mapState(["token"]),
  mounted() {
    let local = JSON.parse(window.localStorage.getItem("data"));
    this.data = local.data.user;
  },
  // methods: {
  //   async signupUser() {
  //     try {
  //       this.loading = true;
  //       let local = JSON.parse(window.localStorage.getItem("data"));
  //       const data = await this.$axios.$put(
  //         "account/password",
  //         {
  //           old_password: this.password,
  //           password: this.new_password,
  //           password_confirmation: this.password_confirmation,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //             Authorization: "Bearer " + local.data.token,
  //           },
  //         }
  //       );
  //       console.log(data);
  //       this.loading = false;
  //       this.$toast.success("Successfully authenticated");
  //       // this.$router.push("/");
  //     } catch {
  //       console.log("error");
  //       this.loading = false;
  //       this.$toast.error("Oops! Something happened");
  //     }
  //   },
  // },
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