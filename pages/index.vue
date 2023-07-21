<template>
  <div class="bg-gray-50">
    <div v-if="user === null">
      <HeaderNav />
    </div>
    <div v-else>
      <MainNav />
    </div>
    <div class="max-w-screen-2xl mx-auto px-5 lg:mx-10 p-2">
      <div class="lg:flex">
        <div v-show="sidebar" class="
              lg:w-1/4
              w-full
              bg-white
              p-4
              my-4
              rounded-md
              shadow-md
              lg:relative
              lg:block
              hidden
            ">
          <div class="font-bold text-xl mb-8 mt-4">Categories</div>
          <div v-for="(single, index) in categories" :key="index" class="hover:bg-blue-500 hover:scale-[1.1] duration-200">
            <NuxtLink :to="'categories?slug=' + single.slug" class="hover:text-white">
              <div class="flex lg:my-6">
                <img :src="require(`~/assets/icons/${single.img}.jpeg`)" class="w-10 h-10 m-1" alt="" />
                <div class="p-1 my-auto">
                  <div class="text-sm font-bold">{{ single.title }}</div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="lg:mt-4 md:px-3 lg:px-5 lg:w-3/4 w-full">
          <div class="flex lg:my-auto items-center">
            <button class="bg-blue-500 h-12 px-5 text-white" @click="searchData">Search</button>
            <input v-model="search" type="text" class="p-3 border border-gray-100 w-full h-12"
              placeholder="Search items on harbour hub" @change="searchData" />
          </div>

          <div class="rounded-md mb-5">
            <div class="w-full relative mt-2">
              <Carousel :user="user" />
            </div>
          </div>

          <div v-if="search !== ''" class="bg-white border mb-6">
            <div class="p-3 bg-blue-500 text-white font-bold">
              Search Result
            </div>
            <div class="w-full">
              <div v-if="data.length > 0" class="flex flex-wrap xl:justify-between justify-around">
                <div v-for="(top, index) in data" :key="index" class="w-full lg:w-1/2 px-3">
                  <ProductCard :data="top" />
                </div>
              </div>
              <div v-if="data.length === 0" class="text-center py-10">
                Sorry, we couldn't find any results for "<i>{{ search }}</i>"
              </div>
            </div>
          </div>

          <div v-if="search === '' && single === 'All Categories'" class="bg-white border mb-6">
            <div class="p-3 bg-blue-500 text-white font-bold">
              Top Deals
            </div>
            <div class="flex flex-wrap xl:justify-between justify-around">
              <div v-for="(top, index) in data.top_deals" :key="index" class="w-full lg:w-1/2 px-3">
                <ProductCard :data="top" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="search === '' && single === 'All Categories'">
        <div class="bg-white border mb-6">
          <div class="p-3 bg-blue-500 text-white font-bold">
            Popular Products
          </div>
          <div class="flex flex-wrap xl:justify-between justify-around">
            <div v-for="(featured, index) in data.featured_products" :key="index" class="w-full lg:w-1/3 px-3">
              <ProductCard :data="featured" />
            </div>
          </div>
        </div>

        <div class="bg-white border mb-6">
          <div class="p-3 bg-blue-500 text-white font-bold">
            Most Viewed
          </div>
          <div class="flex flex-wrap xl:justify-between justify-around">
            <div v-for="(category, index) in data.most_viewed_products" :key="index" class="w-full lg:w-1/3 px-3">
              <ProductCard :data="category" />
            </div>
          </div>
        </div>
        
        <div class="bg-white border mb-6">
          <div class="p-3 bg-blue-500 text-white font-bold">
            Recent Sales
          </div>
          <div class="flex flex-wrap xl:justify-between justify-around">
            <div v-for="(category, index) in data.recent_sales" :key="index" class="w-full lg:w-1/3 px-3">
              <ProductCard :data="category" />
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex">
        <div class="lg:p-20 p-8 blue rounded-xl lg:w-1/2 text-white">
          <div class="lg:w-96 my-auto">
            <div class="text-4xl font-bold">Become a Seller on Harbour Hub</div>
            <div class="my-3 text-sm">
              Sell your equipment at the best price. Experience the ease of
              listing and selling your equipment in the hub with secured payment
              methods and have your equipment sold to the best-fit buyer.
            </div>
            <div v-if="user === null || user.user_role === 'user'">
              <NuxtLink to="/becomeaseller">
                <button class="
                      p-2
                      lg:w-80
                      w-full
                      rounded-full
                      border-2 border-white
                      bg-transparent
                    ">
                  Become a Seller
                </button>
              </NuxtLink>
            </div>
            <div v-else>
              <NuxtLink to="/seller">
                <button class="
                      p-2
                      lg:w-80
                      w-full
                      rounded-full
                      border-2 border-white
                      bg-transparent
                    ">
                  Sell an Item
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 lg:ml-4 top">
          <div>
            <div class="p-8 brown rounded-xl w-full text-white">
              <div class="lg:w-80">
                <div class="text-2xl font-bold">Get the best Harbour Deals</div>
                <button class="
                      p-2
                      lg:w-80
                      w-full
                      rounded-full
                      border-2 border-white
                      bg-transparent
                      mt-3
                    ">
                  Explore Top Deals
                </button>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="p-8 weird rounded-xl w-full text-white">
              <div class="lg:w-80">
                <div class="text-2xl font-bold">
                  Subscribe to our newsletter
                </div>
                <!-- <div class="my-3 text-sm">
                  Be the first to know about the update of new equipment and
                  exclusive management and maintenance tips
                </div> -->
                <button class="
                      p-2
                      lg:w-80
                      w-full
                      rounded-full
                      border-2 border-white
                      bg-transparent
                      mt-3
                    ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import categories from "~/assets/jsons/categories";

export default {
  // middleware: "authenticated",
  computed: mapState(["sidebar", "token", "user"]),

  data() {
    return {
      search: "",
      store: [],
      single: "All Categories",
      categories: categories,
      data: [],
    };
  },
  methods: {
    ...mapMutations(["toggleSidenav", "mutateToken", "mutateUser"]),
    searchData() {
      if (this.search !== "") {
        this.$axios
          .$post(
            "equipments/search",
            {
              search: this.search,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            // console.log(response.data);
            this.data = response.data;
          });
      } else {
        this.data = this.store;
      }
    },
    categoryFilter(category) {
      this.single = category.title;
      if (this.single === "All Categories") {
        this.data = this.store;
      } else {
        this.$axios
          .$get(`equipment/categories/${category.slug}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              // Authorization: "Bearer " + this.token,
            },
          })
          .then((response) => {
            // console.log(response.data);
            this.data = response.data;
          });
      }
    },
    onResize() {
      if (screen.width > 600 && this.sidebar === false) {
        this.toggleSidenav();
      }
    }
  },
  mounted() {
    if (screen.width <= 600 && this.sidebar === true) {
      this.toggleSidenav();
    }
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)

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
          // console.log(response.data);
          this.data = response.data;
          this.store = response.data;
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
.nav-item {
  margin-top: 8px !important;
}
</style>