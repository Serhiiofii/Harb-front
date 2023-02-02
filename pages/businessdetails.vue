<template>
  <div class="bg-gray-50">
    <RegularNav />
    <div class="lg:w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Business Account Details</div>
        <div class="text-xs">
          Please upload your business details with the right information
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Bank Account Name</div>
        <input
          type="text"
          v-model="account_name"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Bank Account Name"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Bank Account Number</div>
        <input
          type="number"
          v-model="account_number"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Bank Account Number"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Select Bank</div>
        <select
          v-model="bank_name"
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
          <option value="hello word">Select a Category</option>
          <option value="hello word">hello world</option>
        </select>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Postion in the Company</div>
        <input
          type="text"
          v-model="company_position"
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
        <div class="text-sm my-1">Account Officer Name</div>
        <input
          type="text"
          v-model="account_officer_name"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter Account Officers Name"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Account Officer Phone Number</div>
        <input
          type="text"
          v-model="account_officer_phone"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter Account Officers Phone Number"
        />
      </div>
      <div class="flex">
        <input type="checkbox" />
        <div class="text-xs p-4">
          To continue with account creation, have you read the
          <span class="text-blue-600">Terms</span> and
          <span class="text-blue-600">Conditions</span> on Harbour Hub.
        </div>
      </div>
      <div class="mt-6">
        <button
          @click="accountDetails"
          class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
        >
          {{ loading ? "Loading..." : "Proceed" }}
        </button>
      </div>
    </div>
    <SuccessModal :isComponentModalActive="isComponentModalActive" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isComponentModalActive: false,
      loading: false,
      account_name: "",
      account_number: "",
      bank_name: "",
      company_position: "",
      account_officer_name: "",
      account_officer_phone: "",
      seller_id: "",
    };
  },
  mounted() {
    this.seller_id = this.$router.history.current.params.slug;
    console.log(this.$router);
  },
  methods: {
    async accountDetails() {
      try {
        this.loading = true;
        let local = JSON.parse(window.localStorage.getItem("token"));
        const data = await this.$axios.$post(
          "seller/account-details",
          {
            account_name: this.account_name,
            account_number: this.account_number,
            bank_name: this.bank_name,
            company_position: this.company_position,
            account_officer: this.account_officer_name,
            account_officer_phone: this.account_officer_phone,
            seller_id: this.seller_id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + local,
            },
          }
        );
        console.log(data);
        this.loading = false;
        this.$toast.success("Bank Details added Successfully");
        this.isComponentModalActive = true;
        this.$router.push("/account");
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