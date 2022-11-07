<template>
  <div class="bg-gray-50">
    <RegularNav />
    <div class="lg:w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Sell an Item</div>
        <div class="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla at
          morbi adipiscing id elementum tristique imperdiet quis a. At diam.
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Category</div>
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
        <div class="text-sm my-1">Choose a Location</div>
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
          <option value="hello word">Choose a Location</option>
          <option value="hello word">hello world</option>
        </select>
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