<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="mx-20 my-8">
      <div class="flex">
        <div class="w-3/5">
          <img src="/cardimg.png" class="w-full h-80" alt="" />
          <div class="flex my-4 justify-between">
            <img src="/cardimg.png" class="img mr-2" alt="" />
            <img src="/cardimg.png" class="img ml-2 h-52" alt="" />
          </div>
        </div>
        <div class="w-2/5 px-8">
          <div class="text-3xl font-bold">Tatooth Long Yatch</div>
          <div class="flex justify-between my-3">
            <button class="bg-blue-600 p-3 w-52 text-white mr-8 rounded-sm">
              Make a Bid
            </button>
            <button class="p-3 w-32 border border-blue-600 mr-4 rounded-sm">
              Chat
            </button>
            <button class="p-3 w-32 border border-yellow-600 rounded-sm">
              Call
            </button>
          </div>
          <div class="text-xs my-2">Type of Product:</div>
          <button class="p-3 bg-red-100 w-24 font-bold rounded-md">Rent</button>
          <div class="my-4">
            <div class="text-xs">Length:</div>
            <div class="font-bold text-lg">62.3m (204.4ft)</div>
          </div>
          <div class="text-xs w-52 my-4">
            <div class="my-1 flex justify-between">
              Specification: <span class="w-20">Specification</span>
            </div>
            <div class="my-1 flex justify-between">
              Colour: <span class="w-20">Colour</span>
            </div>
            <div class="my-1 flex justify-between">
              Year: <span class="w-20">2020</span>
            </div>
            <div class="my-1 flex justify-between">
              Location:<span class="w-20">China</span>
            </div>
            <div class="my-1 flex justify-between">
              Company: <span class="text-blue-600 w-20">Long Tee Mack</span>
            </div>
          </div>
          <div class="text-xs my-3">Full Specificiation:</div>
          <div class="text-xs">
            <div class="font-bold mb-3">About:</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet odio
            risus velit tellus ullamcorper. Vestibulum odio commodo ultrices
            pellentesque ipsum ac. Massa pellentesque quis duis nullam. Non
            vulputate fringilla non, pulvinar. Interdum eros, in molestie amet,
            lacus tempor congue. Eleifend nunc aliquam nunc odio. Luctus enim
            egestas cum volutpat velit amet suspendisse. Iaculis vitae amet
            lobortis amet sodales. Adipiscing congue libero ut bibendum odio
          </div>
        </div>
      </div>
      <div>
        <div class="text-2xl font-bold">Recent Sales</div>
        <div class="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <FooterNav />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.img {
  width: 49%;
}
</style>