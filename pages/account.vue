<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 flex mt-4 container">
      <Sidebar />
      <div class="lg:ml-4 w-full">
        <div class="bg-white">
          <div class="lg:flex">
            <div class="m-2 border relative border-gray-200 rounded-md">
              <div class="lg:flex mt-6">
                <div class="p-2">
                  <span class="text-sm">First Name</span> <br />
                  <input
                    type="text"
                    v-model="first_name"
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
                    v-model="last_name"
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
                  v-model="email"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
              <div class="p-2">
                <span class="text-sm">Enter your Phone Number</span> <br />
                <input
                  type="number"
                  v-model="phone"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
              <div
                @click="updateInfo"
                class="absolute top-3 cursor-pointer right-3"
              >
                <img class="w-4 h-4" src="/edit.png" alt="" />
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
                  <label for="fileInput">
                    <div
                      v-if="imageURL === null && avatar === null"
                      class="w-20 rounded-full bg-blue-100 h-20"
                    >
                      <img
                        src="/icons/user.svg"
                        class="mx-auto my-auto"
                        alt=""
                      />
                    </div>
                    <img
                      v-else
                      :src="imageURL || avatar"
                      class="w-20 h-20 rounded-full"
                      alt=""
                    />
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    @change="updatePhoto"
                    class="hidden"
                  />
                </div>
                <div
                  class="
                    lg:w-1/2
                    top
                    border border-gray-200
                    p-2
                    rounded-md
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
                    class="w-full p-1 bg-gray-200 h-full rounded-md"
                    name=""
                    v-model="delivery_address"
                  ></textarea>
                </div>
              </div>
              <div class="my-2 p-2 border border-gray-200 relative">
                <div class="font-bold text-xs">Bio</div>
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
              <div class="relative">
                <div class="absolute top-3 left-2 text-sm font-bold">
                  Location:
                </div>
                <div
                  @click="updateLocation"
                  class="absolute top-3 cursor-pointer right-3"
                >
                  <img class="w-4 h-4" src="/edit.png" alt="" />
                </div>
                <input
                  type="text"
                  class="py-2 border border-gray-200 pl-20 w-full"
                  v-model="location"
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
import { mapMutations } from "vuex";

export default {
  middleware: "authenticated",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      bio: "",
      location: "",
      delivery_address: "",
      loading: false,
      currentImage: undefined,
      avatar: null,
      image: "",
      imageURL: null,
    };
  },
  computed: mapState(["token"]),
  mounted() {
    try {
      this.$axios
        .$get("account/profile", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          window.localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
          this.mutateUser();
          this.first_name = response.data.first_name;
          this.last_name = response.data.last_name;
          this.email = response.data.email;
          this.phone = response.data.phone;
          this.location = response.data.location;
          this.delivery_address = response.data.delivery_address;
          this.bio = response.data.bio;
          this.avatar = response.data.avatar;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapMutations(["mutateUser"]),
    async updateInfo() {
      try {
        this.loading = true;
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
              Authorization: "Bearer " + this.token,
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
        const data = await this.$axios.$put(
          "account/delivery-address",
          {
            delivery_address: this.delivery_address,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
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
        const data = await this.$axios.$put(
          "account/bio",
          {
            bio: this.bio,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
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
        const data = await this.$axios.$put(
          "account/location",
          {
            location: this.location,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
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

    async updatePhoto() {
      try {
        const files = event.target.files;
        this.image = files[0];

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = async (e) => {
          this.imageURL = await e.target.result;
        };
        let formData = new FormData();
        formData.append("photo", this.image);

        this.loading = true;
        const data = await this.$axios.$post("account/update-photo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.token,
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