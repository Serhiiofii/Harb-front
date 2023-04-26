<template>
  <div class="bg-gray-50">
    <MainNav />
    <div v-if="product !== null" class="max-w-screen-2xl mx-auto px-5 min-h-[calc(100vh-500px)] my-8 container">
      <div class="lg:flex">
        <div class="lg:w-3/5 py-5">
          <img
            :src="product.equipment_images[0]?.image"
            class="w-full lg:h-80"
            alt=""
          />
          <div
            v-if="product.equipment_images.length >= 2"
            class="flex my-4 justify-between"
          >
            <img
              :src="product.equipment_images[1]?.image"
              class="img mr-2"
              alt=""
            />
            <img
              :src="product.equipment_images[2]?.image"
              class="img ml-2 lg:h-52"
              alt=""
            />
          </div>
        </div>
        <div class="lg:w-2/5 lg:px-8">
          <div class="text-3xl font-bold">{{ product.name }}</div>
          <div class="flex justify-between my-3">
            <button
              @click="isCardModalActive = !isCardModalActive"
              class="bg-blue-600 p-3 w-52 text-white mr-8 rounded-sm"
            >
            Ask For Quote
            </button>
            <NuxtLink :to="'/messages/?slug=' + product.seller_id">
              <button class="p-3 w-32 border border-blue-600 mr-4 rounded-sm">
                Chat
              </button>
            </NuxtLink>
            <!-- <button class="p-3 w-32 border border-yellow-600 rounded-sm">
              Call
            </button> -->
          </div>
          <div class="flex items-center">
            <div class="text-sm my-2">Type of Product:</div>
            <button
              v-if="product.sale_type === 'rent'"
              class="px-3 py-0 ml-5 bg-red-100 capitalize w-20 rounded-md "
            >
              {{ product.sale_type }}
            </button>
            <button v-else class="px-3 py-0 ml-5 bg-green-100 capitalize w-20 rounded-md ">
              {{ product.sale_type }}
            </button>
          </div>
          <div class="font-bold my-3">Full Specificiation:</div>
          <div class="text-sm">
            {{ product.equipment_specification }}
          </div>
        </div>
      </div>
      <div class="my-3">
        <div class="text-2xl font-bold mt-8 mb-2">Recent Sales</div>
        <div class="lg:flex">
          <div v-for="(category, index) in data.recent_sales" :key="index">
            <ProductCard :data="category" />
          </div>
        </div>
      </div>
      <BidModal
        :isCardModalActive="isCardModalActive"
        :id="product.id"
        :toggle="toggleCard"
      />
    </div>
    <FooterNav />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),
  middleware: "authenticated",
  data() {
    return {
      isCardModalActive: false,
      single: "",
      data: [],
      product: null,
    };
  },
  mounted() {
    this.single = this.$router.history.current.params.single;
    try {
      this.$axios
        .$get(`products/${this.single}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.product = response.data.product;
          this.data = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    toggleCard() {
      this.isCardModalActive = !this.isCardModalActive;
    },
  },
};
</script>
<style scoped>
.img {
  width: 49%;
}
img {
  object-fit: cover;
}
</style>