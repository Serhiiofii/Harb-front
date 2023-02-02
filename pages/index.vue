<template>
  <div class="bg-gray-50">
    <div v-if="user === null">
      <HeaderNav />
    </div>
    <div v-else>
      <MainNav />
    </div>
    <div class="lg:mx-20">
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
          <div class="font-bold text-xl mb-8 mt-4">Categories</div>
          <div
            v-for="(single, index) in categories"
            :key="index"
            class="flex lg:my-6"
          >
            <img
              :src="require(`~/assets/icons/${single.img}.jpeg`)"
              class="w-10 h-10 m-1"
              alt=""
            />
            <div class="p-1 my-auto">
              <div class="text-sm font-bold">{{ single.title }}</div>
              <!-- <div class="text-xs">{{ single.items }}</div> -->
            </div>
          </div>
        </div>
        <div class="lg:m-2">
          <div class="w-full lg:m-2 rounded-md relative mt-28">
            <img
              src="/hero.png"
              class="rounded-md w-full lg:h-auto h-60"
              alt=""
            />
            <div class="absolute lg:top-12 top-6 lg:left-20 left-4 lg:w-1/2">
              <div class="lg:text-4xl text-xl font-bold text-white">
                Get offshore <br />
                equipments on demand
              </div>
              <div class="my-3 text-white text-sm">
                Find marine equipment, equipment for industrial use, and
                industrial spare parts. Whether you're looking to buy or sell
                you'll find the best deals here
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
              <div
                v-for="(top, index) in data.top_deals"
                :key="index"
                class="lg:w-1/2"
              >
                <ProductCard :data="top" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-3xl font-bold mt-4 mb-2">Popular Products</div>
        <div class="lg:flex justify-between flex-wrap">
          <div
            v-for="(featured, index) in data.featured_products"
            :key="index"
            class="lg:w-1/3"
          >
            <ProductCard :data="featured" />
          </div>
        </div>
      </div>
      <div>
        <div class="text-3xl font-bold mt-4 mb-2">Recent Sales</div>
        <div class="lg:flex justify-between flex-wrap">
          <div
            v-for="(category, index) in data.recent_sales"
            :key="index"
            class="lg:w-1/3"
          >
            <ProductCard :data="category" />
          </div>
        </div>
      </div>
      <div>
        <div class="text-3xl font-bold mt-4 mb-2">Most Viewed</div>
        <div class="lg:flex justify-between flex-wrap">
          <div
            v-for="(category, index) in data.most_viewed_products"
            :key="index"
            class="lg:w-1/3"
          >
            <ProductCard :data="category" />
          </div>
        </div>
      </div>
      <div class="lg:flex">
        <div class="lg:p-20 p-8 blue rounded-xl lg:w-1/2 text-white">
          <div class="lg:w-96 my-auto">
            <div class="text-4xl font-bold">Become a Vendor on Harbour Hub</div>
            <div class="my-3 text-sm">
              Sell your equipment at the best price. Experience the ease of
              listing and selling your equipment in the hub with secured payment
              methods and have your equipment sold to the best-fit buyer.
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
              Become a Vendor
            </button>
          </div>
        </div>
        <div class="lg:w-1/2 lg:ml-4 top">
          <div>
            <div class="p-8 brown rounded-xl w-full text-white">
              <div class="lg:w-80">
                <div class="text-3xl font-bold">Get the best Harbour Deals</div>
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
                  Explore Top Deals
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
                <!-- <div class="my-3 text-sm">
                  Be the first to know about the update of new equipment and
                  exclusive management and maintenance tips
                </div> -->
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
  // middleware: "authenticated",
  computed: mapState(["sidebar", "token", "user"]),

  data() {
    return {
      categories: [
        {
          title: "Hauling Equipment",
          img: "img1",
        },
        {
          title: "Vessels",
          img: "img2",
        },
        {
          title: "Subsea Equipment",
          img: "img3",
        },
        {
          title: "Cranes",
          img: "img4",
        },
        {
          title: "Pumps and Hoses",
          img: "img5",
        },
        {
          title: "OCTG Pipes",
          img: "img6",
        },
        {
          title: "Safety Equipment",
          img: "img7",
        },
        {
          title: "Power",
          img: "img8",
        },
      ],
      data: [],
      search: "forklift",
    };
  },
  methods: {
    ...mapMutations(["toggleSidenav", "mutateToken", "mutateUser"]),

  },
  mounted() {
    if (screen.width <= 600) {
      this.toggleSidenav();
    }
    // this.toggleSidenav();
    // if (this.token) {
    try {
      this.$axios
        .$get("products/get-products", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        });
    } catch (error) {
      console.log(error);
    }
    // }
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