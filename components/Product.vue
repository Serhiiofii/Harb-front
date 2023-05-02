<template>
  <div class="lg:p-3 my-2 border border-gray-100 relative bg-white shadow-md">
    <div class="lg:flex">
      <div class="lg:w-96">
        <img class="lg:h-52 lg:w-80 w-full" :src="data.equipment_images[0]?.image" alt="" />
      </div>
      <div class="lg:ml-5 w-full lg:mt-0 mt-2 lg:p-0 p-2 grid grid-rows-3">
        <div class="row-span-3">
          <div class="flex">
            <img src="/user.png" alt="" />
            <div class="ml-3">
              <div class="font-bold">{{ data.name }}</div>
              <div>{{ data.category }}</div>
            </div>
          </div>
          <div class="lg:text-base text-xs my-2">
            {{ data.description }}
          </div>
          <div class="flex">
            <div class="mr-6 lg:text-sm text-xs">Date Uploaded:</div>
            <div class="lg:text-sm text-xs">
              {{ data.created_at.substring(0, 10) }}
            </div>
          </div>
        </div>
        <div v-if="path !== '/my-orders'" class="lg:mt-0 flex justify-end row-span-1">
          <div class="flex">
            <button @click="getOrders()" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-blue-200
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO2YTUoDQRCFX1wHN+p91LUgutS5h7hTTyR6A0N2ijfxJ26VJwMVCKiQaOxXlbwPajFMT/rLo7tTE8AYY4wxxhjTHK5IyeCKlDzAqsj9qRao7k+1QHV/qgWq+1MtUN2faoHq/lQLVPenWqC6P9UC1f2pFqjuT7VAdX8uILABoIsaIAelAuxmxp/+8Dmt/xxwgFijAAex8k68hX8XYEbk/lQLVPenWqC6P9UC1f3pPrBdgJ37QAe4dOg+sF2AGZH7Uy1Q3Z9qger+VAtU96f7wHYBdu4DHeDSofvAdgFmRO5PtUB1f6oFqvtTLVDdn+4D2wXYuQ90gEuH7gPbBZgRuT/VAtX9qRao7k+1QHV/qgWq+1MtUN2faoEq/ixW8+IAUSzA7NABrkGAYwCjmXvjRNclAuxl72bujRJdlwgwM8wa4CQmGiI3kwU8N2PsawMvPMZku8jN4wKe+zH2oYEXrmKya+TmYgHP2xjbP/Pv7MRS7yc8Q162ADzN4XkeY57jmSYcA/iIiW8A7CU9Ew8AvH/jOYxtO115/Xc5bC13BOAlwbsu/1jPivCmbAO4jMP3LUEY81b/C30fZ16zbWuMMcYYY4zBVz4BsgbyphZRiP0AAAAASUVORK5CYII="
                alt="" /> <span class="hidden sm:block">Orders</span>
            </button>
            <button @click="openUpdateModal(data.id)" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-green-200
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1" src="/edit.png" alt="" /> <span
                class="hidden sm:block">Update</span>
            </button>
            <button @click="removeProduct(data.id)" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-red-100
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1" src="/icons/close.svg" alt="" /> <span
                class="hidden sm:block">Remove</span>
            </button>
          </div>
        </div>
        <div v-else class="lg:mt-0 flex justify-end row-span-1">
          <div class="flex">
            <button @click="cancelCart(cartedId)" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-red-100
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1" src="/icons/close.svg" alt="" /> <span
                class="hidden sm:block">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showOrders" v-if="path !== '/my-orders'">
      <Orders :orders="orders" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    data: Object,
    cartedId: String
  },
  data() {
    return {
      path: "",
      showOrders: false,
      orders: []
    };
  },
  computed: mapState(["token"]),
  mounted() {
    // console.log(this.data)
    this.path = this.$router.history.current.path;
  },
  methods: {
    cancelCart(id) {
      this.$axios
        .$delete(`account/cart-items/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          location.reload();
          this.$toast.success("Product canceled successfully!");
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
        })
    },

    async removeProduct(id) {
      if (!confirm("Are you sure you want to delete this product?")) return;

      try {
        this.loading = true;
        await this.$axios
          .$delete(`seller/equipments/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            // this.loading = false;
            this.$toast.success("Product deleted successfully!");
          });
      } catch (error) {
        console.log("error");
        this.$toast.error(error.response.data.message);
      }
    },

    getOrders() {
      this.showOrders = !this.showOrders;

      this.$axios
        .$get(`seller/orders/${this.data.seller_id}/${this.data.id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.orders = response.data.orders;
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
        })
    },

    openUpdateModal(id) {

    }
  },
};
</script>
<style scoped>
img {
  object-fit: cover;
}
</style>