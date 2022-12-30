<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 container">
      <div class="lg:flex">
        <div
          v-show="sidebar"
          class="
            lg:w-96
            w-full
            bg-white
            p-4
            my-4
            rounded-md
            lg:relative
            fixed
            z-10
            lg:top-0
            top-12
            left-0
          "
        >
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
        <div class="lg:m-2">
          <div class="w-full lg:m-2 rounded-md relative">
            <img
              src="/hero.png"
              class="rounded-md w-full lg:h-auto h-60"
              alt=""
            />
            <div class="absolute top-8 lg:left-20 left-4 lg:w-1/2">
              <div class="lg:text-4xl text-xl font-bold text-white">
                Get offshore <br />
                equipments on demand
              </div>
              <div class="my-3 text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                nec at velit hendrerit fames. Hendrerit mauris, adipiscing
                fringilla morbi. Ornare pretium non
              </div>
              <NuxtLink to="/becomeaseller">
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
              </NuxtLink>
            </div>
          </div>
          <div>
            <div class="text-3xl font-bold mt-4 mb-2">Top Deals</div>
            <div class="lg:flex">
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>

      <div class="lg:flex">
        <div class="lg:p-20 p-8 blue rounded-xl lg:w-1/2 text-white">
          <div class="lg:w-80 my-auto">
            <div class="text-4xl font-bold">Get the best Harbour Deals</div>
            <div class="my-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              nec at velit hendrerit fames. Hendrerit mauris, adipiscing
              fringilla morbi. Ornare pretium non
            </div>
            <button
              class="
                p-2
                lg:w-80
                w-full
                rounded-full
                border-2 border-white
                bg-transparent
              "
            >
              Become a Food Vendor
            </button>
          </div>
        </div>
        <div class="lg:w-1/2 lg:ml-4 top">
          <div>
            <div class="p-8 brown rounded-xl w-full text-white">
              <div class="lg:w-80">
                <div class="text-3xl font-bold">
                  Become a Vendor on Harbour Hub
                </div>
                <button
                  class="
                    p-2
                    lg:w-80
                    w-full
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
              <div class="lg:w-80">
                <div class="text-3xl font-bold">
                  Subscribe to our newsletter
                </div>
                <button
                  class="
                    p-2
                    lg:w-80
                    w-full
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
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  middleware: "authenticated",

  computed: mapState(["sidebar"]),

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
  methods: {
    ...mapMutations(["toggleSidenav"]),
  },
  mounted() {
    if (screen.width <= 600) {
      this.toggleSidenav();
    }
  },
};
</script>

<style scoped>
.blue {
  background-color: #2b7edf;
}
.brown {
  background-color: #b98606;
}
.weird {
  background-color: #60bcd9;
}
/* .show {
  width: 25% !important;
} */
</style>