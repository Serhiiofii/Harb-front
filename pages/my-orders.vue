<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="mx-20 flex mt-4">
      <div class="w-full bg-white p-2">
        <Product />
      </div>
      <div class="w-96 ml-4">
        <div class="bg-white p-2">
          <div class="text-lg font-bold my-1">Checkout</div>
          <div class="line bg-gray-100"></div>
          <div class="flex justify-between my-1 mt-3">
            <div class="text-sm">Sub Total:</div>
            <div class="font-bold">₦14,500</div>
          </div>
          <div class="flex justify-between my-1">
            <div class="text-sm">Grand Total:</div>
            <div class="font-bold text-yellow-500">₦14,500</div>
          </div>
        </div>
        <div class="bg-white my-4 p-2">
          <div class="line bg-gray-100"></div>
          <div>
            <div class="text-sm mt-3 mb-1">Delivery Address</div>
            <textarea
              name=""
              class="
                p-2
                bg-gray-100
                w-full
                border
                text-sm
                border-gray-200
                rounded-sm
              "
            >
            No 10 Agip Estate, Rumuoduma, Port Harcourt, Nigeria.</textarea
            >
          </div>
          <div>
            <div class="text-sm mt-3 mb-1">Phone Number</div>
            <input
              class="
                p-2
                bg-gray-100
                w-full
                border
                text-sm
                border-gray-200
                rounded-sm
              "
              value="2348135126541"
            />
          </div>
          <div>
            <div class="text-sm mt-3 mb-1">Delivery Method:</div>
            <button class="p-2 bg-red-100 font-bold px-4 text-sm">Pay Using Card</button>
          </div>
        </div>
        <button class="bg-blue-600 p-2 w-full text-white">Checkout</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.line {
  height: 1px;
}
textarea:focus {
  outline: none;
}
</style>