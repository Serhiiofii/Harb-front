<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="max-w-screen-2xl mx-auto px-5 flex mt-4 container">
      <Sidebar />
      <div class="lg:ml-4 mt-4 w-full">
        <div class="flex">
          <div class="border rounded-md w-1/2 p-4 bg-white lg:mr-2">
            <div class="uppercase text-base text-gray-400">quick upload</div>
            <NuxtLink to="/equipmentupload">
              <button class="p-2 mt-4 font-bold text-sm bg-blue-200 rounded-sm w-full">
                Upload a product
              </button>
            </NuxtLink>
          </div>
          <div class="border rounded-md w-1/2 p-4 bg-white lg:ml-2">
            <div class="uppercase text-base text-gray-400">quick upload</div>
            <NuxtLink to="/serviceupload">
              <button class="
                    p-2
                    mt-4
                    font-bold
                    text-sm
                    bg-green-200
                    rounded-sm
                    w-full
                  ">
                Upload a service
              </button>
            </NuxtLink>
          </div>
        </div>
        <div>
          <div v-for="(product, index) in products" :key="index">
            <Product 
              :data="product" 
              :quoteBadge="getQuoteBadge(product.id)"
              :orderBadge="getOrderBadge(product.id)" 
              />
          </div>
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      products: [],
      quotesnotic: [],
      ordersnotic: []
    };
  },
  computed: mapState(["token", "user"]),
  mounted() {
    try {
      // let seller = JSON.parse(window.localStorage.getItem("seller_id"));
      this.$axios
        .$get(`account/sellers/${this.user.seller.id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.products = response.data.equipments;
          this.quotesnotic = response.data.quotesnotic;
          this.ordersnotic = response.data.ordersnotic;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getQuoteBadge: function(product) {
      const quotesnotic = this.quotesnotic.filter((val) => {
        if(val.equipment_id === product) return true;
      })
      if(quotesnotic.length > 0){
        return quotesnotic[0]?.total;
      } else {
        return 0;
      }
    },
    getOrderBadge: function(product) {
      const ordersnotic = this.ordersnotic.filter((val) => {
        if(val.equipment_id === product) return true;
      })
      if(ordersnotic.length > 0){
        return ordersnotic[0]?.total;
      } else {
        return 0;
      }
    }
  }
};
</script>