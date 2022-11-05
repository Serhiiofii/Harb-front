<template>
  <div class="bg-gray-50">
    <HeaderNav />
    <div class="w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Business Account Details</div>
        <div class="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla at
          morbi adipiscing id elementum tristique imperdiet quis a. At diam.
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Bank Account Name</div>
        <input
          type="text"
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
        <button class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm">
          Proceed
        </button>
      </div>
    </div>
    <SuccessModal />
  </div>
</template>
<style >
textarea:focus {
  outline: none;
}
</style>