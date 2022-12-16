<template>
  <div class="bg-gray-50">
    <RegularNav />
    <div class="lg:w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Register a Seller</div>
        <div class="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla at
          morbi adipiscing id elementum tristique imperdiet quis a. At diam.
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
            <img src="/upload.png" alt="" />
          </div>
          <div>
            <img src="/upload.png" alt="" />
          </div>
          <div>
            <img src="/upload.png" alt="" />
          </div>
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
  </div>
</template>
<script>
export default {
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
      business_documents: [],
    };
  },
  methods: {
    async registerSeller() {
      try {
        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("data"));
        const data = await this.$axios.$post(
          "seller/register",
          {
            company_name: this.company_name,
            company_email: this.company_email,
            otp: this.otp,
            business_entity: this.business_entity,
            company_role: this.company_role,
            business_location: this.business_location,
            business_description: this.business_description,
            business_documents: this.business_documents,
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
        this.$toast.success("Seller Registered Successfully");
        this.$router.push("/businessdetails");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error("Oops! Something happened");
      }
    },
    async getOtp() {
      try {
        if (this.company_email == "") {
          this.$toast.error("Please enter company email");
          return;
        }
        let local = JSON.parse(window.localStorage.getItem("data"));
        const data = await this.$axios.$post(
          "seller/request-otp",
          {
            company_email: this.company_email,
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
        this.$toast.success("OTp sent Successfully");
      } catch {
        console.log("error");
        this.loading = false;
        this.$toast.error("Oops! Something happened");
      }
    },
  },
};
</script>
<style >
textarea:focus {
  outline: none;
}
</style>