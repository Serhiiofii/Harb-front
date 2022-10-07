<template>
  <div class="bg-gray-50">
    <HeaderNav />
    <div class="mx-20">
      <div class="flex">
        <div class="w-80 bg-white rounded-lg p-3 m-4">
          <div>Categories</div>
          <div
            v-for="(single, index) in categories"
            :key="index"
            class="flex my-5"
          >
            <img src="/shape.png" class="" alt="" />
            <div class="p-1 my-auto">
              <div class="text-sm font-bold">{{ single.title }}</div>
              <div class="text-xs">{{ single.items }}</div>
            </div>
          </div>
        </div>
        <div class="m-2">
          <div class="w-full m-2 rounded-md relative">
            <img src="/hero.png" class="rounded-md" alt="" />
            <div class="absolute top-4 left-20 w-1/2">
              <div class="text-4xl font-bold text-white">
                Get offshore <br />
                equipments on demand
              </div>
              <div class="my-3 text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                nec at velit hendrerit fames. Hendrerit mauris, adipiscing
                fringilla morbi. Ornare pretium non
              </div>
              <button
                class="
                  bg-transparent
                  border border-white
                  w-44
                  rounded-md
                  text-white
                  p-3
                "
              >
                Become a Seller
              </button>
            </div>
          </div>
          <div>
            <div class="text-3xl font-bold mt-4 mb-2">Top Deals</div>
            <div class="flex">
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="p-20 blue rounded-xl w-1/2 text-white">
          <div class="w-80 my-auto">
            <div class="text-4xl font-bold">Get the best Harbour Deals</div>
            <div class="my-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              nec at velit hendrerit fames. Hendrerit mauris, adipiscing
              fringilla morbi. Ornare pretium non
            </div>
            <button
              class="p-2 w-80 rounded-full border-2 border-white bg-transparent"
            >
              Become a Food Vendor
            </button>
          </div>
        </div>
        <div class="w-1/2 ml-4">
          <div>
            <div class="p-8 brown rounded-xl w-full text-white">
              <div class="w-80">
                <div class="text-3xl font-bold">
                  Become a Vendor on Harbour Hub
                </div>
                <button
                  class="
                    p-2
                    w-80
                    rounded-full
                    border-2 border-white
                    bg-transparent
                    mt-3
                  "
                >
                  Become a Vendor
                </button>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="p-8 weird rounded-xl w-full text-white">
              <div class="w-80">
                <div class="text-3xl font-bold">
                  Subscribe to our newsletter
                </div>
                <button
                  class="
                    p-2
                    w-80
                    rounded-full
                    border-2 border-white
                    bg-transparent
                    mt-3
                  "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
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
      categories: [
        {
          title: "Services",
          items: "200 goods",
        },
        {
          title: "Trucks",
          items: "200 goods",
        },
        {
          title: "Lifebuoy",
          items: "200 goods",
        },
        {
          title: "Drillling Machines",
          items: "200 goods",
        },
        {
          title: "Heavy Duty Machine",
          items: "200 goods",
        },
        {
          title: "pumps and Hoses",
          items: "200 goods",
        },
        {
          title: "Vessels",
          items: "200 goods",
        },
        {
          title: "Users",
          items: "200 goods",
        },
      ],
    };
  },
};
</script>
<style>
body {
  background-color: #f8f6f3 !important;
}
.blue {
  background-color: #2b7edf;
}
.brown {
  background-color: #b98606;
}
.weird {
  background-color: #60bcd9;
}
</style>