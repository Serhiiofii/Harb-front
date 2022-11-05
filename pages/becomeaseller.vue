<template>
  <div class="bg-gray-50">
    <HeaderNav />
    <div class="w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
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
          <div class="w-40 text-center my-auto font-bold text-yellow-600">
            Send OTP
          </div>
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Enter OTP From Email</div>
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
          placeholder="6 Digit OTP"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Type of Business Entity</div>
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
          <option value="hello word">hello world</option>
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
        <NuxtLink to="/businessdetails">
          <button
            class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
          >
            Proceed
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style >
textarea:focus {
  outline: none;
}
</style>