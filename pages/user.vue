<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="mx-20 my-8">
      <div class="relative">
        <img src="/cover.png" alt="" />
        <img src="/user.png" class="absolute top-28 w-24 left-12" alt="" />
        <div class="flex justify-evenly ml-20 p-4">
          <div class="w-1/2">
            <div class="font-bold">Yahama Services</div>
            <div>
              <div class="text-xs text-blue-600">About:</div>
              <div class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                sagittis semper mauris vitae. Dui sed donec dui est, in posuere
                eget ut. Et, sollicitudin augue feugiat magna quam.
              </div>
            </div>
          </div>
          <div class="my-auto textp-sm">
            <div class="text-xs text-blue-600">Location:</div>
            <div>Lagos, Nigeria</div>
          </div>
          <div class="flex text-white w-52 justify-between">
            <button class="bg-blue-800 p-3 w-24 h-12 my-auto rounded-sm">
              Contact
            </button>
            <button class="bg-yellow-300 p-3 w-24 h-12 my-auto rounded-sm">
              Chat
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="text-2xl my-3 font-bold">Equipments for sale/rent</div>
        <div class="flex justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div class="mt-4">
        <div class="text-2xl my-3 font-bold">Services</div>
        <div class="flex justify-between">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      <FooterNav />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>