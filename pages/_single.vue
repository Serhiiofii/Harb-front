<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 my-8 container">
      <div class="lg:flex">
        <div class="lg:w-3/5">
          <img src="/cardimg.png" class="w-full lg:h-80" alt="" />
          <div class="flex my-4 justify-between">
            <img src="/cardimg.png" class="img mr-2" alt="" />
            <img src="/cardimg.png" class="img ml-2 lg:h-52" alt="" />
          </div>
        </div>
        <div class="lg:w-2/5 lg:px-8">
          <div class="text-3xl font-bold">{{ product.name }}</div>
          <div class="flex justify-between my-3">
            <button
              @click="isCardModalActive = !isCardModalActive"
              class="bg-blue-600 p-3 w-52 text-white mr-8 rounded-sm"
            >
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
          <button
            v-if="product.sale_type === 'rent'"
            class="p-3 bg-red-100 capitalize w-20 rounded-md"
          >
            {{ product.sale_type }}
          </button>
          <button v-else class="p-3 bg-green-100 capitalize w-20 rounded-md">
            {{ product.sale_type }}
          </button>
          <!-- <div class="my-4">
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
          </div> -->
          <div class="font-bold my-3">Full Specificiation:</div>
          <div class="text-xs">
            <!-- <div class="font-bold mb-3">About:</div> -->
            {{ product.equipment_specification }}
          </div>
        </div>
      </div>
      <div class="my-3">
        <div class="text-3xl font-bold mt-4 mb-2">Recent Sales</div>
        <div class="lg:flex">
          <div v-for="(category, index) in data.recent_sales" :key="index">
            <ProductCard :data="category" />
          </div>
        </div>
      </div>
      <BidModal :isCardModalActive="isCardModalActive" />
      <FooterNav />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),

  data() {
    return {
      isCardModalActive: false,
      single: "",
      data: [],
      product: []
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
          // console.log();
          this.product = response.data.product
          this.data = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.img {
  width: 49%;
}
</style>