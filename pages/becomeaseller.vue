<template>
  <div class="bg-gray-50">
    <RegularNav />
    <div class="lg:w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Register a Seller </div>
        <div class="text-xs">
          Join our network of trusted sellers and expand your reach in the
          offshore market. By becoming a seller on our platform, you will gain
          access to a global audience and benefit from our streamlined,
          user-friendly sales process.
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Company Name</div>
        <input
          type="text"
          v-model="company_name"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter Company Name"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Company Email Address</div>
        <div class="flex">
          <input
            type="text"
            v-model="company_email"
            class="
              p-3
              rounded-sm
              border border-gray-200
              w-full
              rounded-sm
              text-sm
            "
            placeholder="Enter Company Email"
          />
          <div
            @click="getOtp"
            class="
              w-40
              text-center
              cursor-pointer
              my-auto
              font-bold
              text-yellow-600
            "
          >
            Send OTP
          </div>
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter OTP From Email</div>
        <input
          type="number"
          v-model="otp"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="6 Digit OTP"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Type of Business Entity</div>
        <select
          v-model="business_entity"
          name=""
          id=""
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
        >
          <option value="hello word">hello world</option>
          <option value="hello word">hello world</option>
        </select>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Postion in the Company</div>
        <input
          type="text"
          v-model="company_role"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter Designation"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">
          Enter Business Legal Documents: CAC, Other documents...
        </div>
        <div class="flex justify-between">
          <div>
            <label for="fileInput" v-if="image1URL">
              <img
                :src="image1URL"
                class="cursor-pointer w-40 h-40 rounded-md"
                alt=""
              />
            </label>

            <label for="fileInput" v-else>
              <img src="/upload.png" class="cursor-pointer" alt="" />
            </label>
          </div>

          <div>
            <label for="fileInput1" v-if="image2URL">
              <img
                :src="image2URL"
                class="cursor-pointer w-40 h-40 rounded-md"
                alt=""
              />
            </label>

            <label for="fileInput1" v-else>
              <img src="/upload.png" class="cursor-pointer" alt="" />
            </label>
          </div>
          <div>
            <label for="fileInput2" v-if="image3URL">
              <img
                :src="image3URL"
                class="cursor-pointer w-40 h-40 rounded-md"
                alt=""
              />
            </label>

            <label for="fileInput2" v-else>
              <img src="/upload.png" class="cursor-pointer" alt="" />
            </label>
          </div>
          <input
            type="file"
            id="fileInput"
            @change="uploadFile(1)"
            class="hidden"
          />
          <input
            type="file"
            id="fileInput1"
            @change="uploadFile(2)"
            class="hidden"
          />
          <input
            type="file"
            id="fileInput2"
            @change="uploadFile(3)"
            class="hidden"
          />
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Location</div>
        <input
          type="text"
          v-model="business_location"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter Business Address"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Business Descrition</div>
        <textarea
          name=""
          v-model="business_description"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
            h-32
          "
          placeholder="About Business"
        ></textarea>
      </div>
      <div class="mt-6">
        <button
          @click="registerSeller"
          class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
        >
          {{ loading ? "Loading..." : "Proceed" }}
        </button>
      </div>
    </div>
    <div class="lg:mx-20">
      <FooterNav />
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
      loading: false,
      company_name: "",
      company_email: "",
      otp: "",
      business_entity: "",
      company_role: "",
      business_location: "",
      business_description: "",

      image1: "",
      image2: "",
      image3: "",

      image1URL: "",
      image2URL: "",
      image3URL: "",
    };
  },
  methods: {
    async uploadFile(id) {
      const files = event.target.files;
      this[`image${id}`] = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = async (e) => {
        this[`image${id}URL`] = await e.target.result;
      };
    },
    async registerSeller() {
      const formData = new FormData();
      formData.append("company_name", this.company_name);
      formData.append("company_email", this.company_email);
      formData.append("otp", this.otp);
      formData.append("business_entity", this.business_entity);
      formData.append("company_role", this.company_role);
      formData.append("business_location", this.business_location);
      formData.append("business_description", this.business_description);
      formData.append("business_documents[]", this.image1);
      formData.append("business_documents[]", this.image2);
      formData.append("business_documents[]", this.image3);
      try {
        this.loading = true;
        await this.$axios
          .$post(
            "seller/register",
            formData,
            // {
            //   company_name: this.company_name,
            //   company_email: this.company_email,
            //   otp: this.otp,
            //   business_entity: this.business_entity,
            //   company_role: this.company_role,
            //   business_location: this.business_location,
            //   business_description: this.business_description,
            // },
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
            this.loading = false;
            this.$toast.success("Seller Registered Successfully");
            this.$router.push({
              name: "businessdetails",
              params: { slug: response.data.seller.user_id },
            });
            // window.localStorage.setItem(
            //   "seller_id",
            //   JSON.stringify(response.data.seller.id)
            // );
          });
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error(error.response.data.message);      }
    },
    async getOtp() {
      try {
        if (this.company_email == "") {
          this.$toast.error("Please enter company email");
          return;
        }
        const data = await this.$axios.$post(
          "seller/request-otp",
          {
            company_email: this.company_email,
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
        this.$toast.success("OTp sent Successfully");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error(error.response.data.message);      }
    },
  },
};
</script>
<style >
textarea:focus {
  outline: none;
}
</style>