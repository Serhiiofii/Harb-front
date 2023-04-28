<template>
  <div class="bg-gray-50">
    <div class="min-h-[84px]">
        <MainNav />
    </div>
    <div v-if="cart !== null && cart.length > 0" class="max-w-screen-2xl mx-auto px-5 container lg:flex mt-4 min-h-[calc(100vh-500px)]">
      <div class="w-full bg-white p-2">
        <div v-for="(single, index) in cart" :key="index">
          <Product :data="single.equipment" :cartedId="single.id" />
        </div>
      </div>
      <div v-show="sidebar" class="
            lg:w-1/2
            w-full
            bg-white
            p-4
            lg:ml-4
            rounded-md
            lg:relative
            fixed
            z-10
            lg:top-0
            top-16
            h-full
            left-0
          ">
        <div class="bg-white lg:p-2">
          <div class="text-lg font-bold my-1">Checkout</div>
          <div class="line bg-gray-100"></div>
          <div class="flex justify-between my-1 mt-3">
            <div class="text-sm">Sub Total:</div>
            <div class="font-bold">₦ {{ total }}</div>
          </div>
          <div class="flex justify-between my-1">
            <div class="text-sm">Grand Total:</div>
            <div class="font-bold text-yellow-500">₦ {{ total }}</div>
          </div>
        </div>
        <div class="bg-white my-4 p-2">
          <div class="line bg-gray-100"></div>
          <div>
            <div class="text-sm mt-3 mb-1">Delivery Address</div>
            <textarea name="" class="
                  p-2
                  bg-gray-100
                  w-full
                  border
                  text-sm
                  border-gray-200
                  rounded-sm
                " v-model="delivery_address">
              </textarea>
          </div>
          <div>
            <div class="text-sm mt-3 mb-1">Phone Number</div>
            <input class="
                  p-2
                  bg-gray-100
                  w-full
                  border
                  text-sm
                  border-gray-200
                  rounded-sm
                " v-model="phone" />
          </div>
        </div>

        <button class="bg-blue-600 p-2 w-full text-white">
          <paystack 
            :amount="total * 100" 
            :email="user.email"
            paystackkey="pk_test_8a2dc8687d9dc2d11727fabed59508de76890271" 
            :reference="reference"
            :callback="processPayment" 
            :close="close">
            Checkout
          </paystack>
        </button>
      </div>
    </div>
    <div v-else class="text-center p-2 min-h-[calc(100vh-500px)] text-xl pt-5">No equipments in your cart.</div>
    <div class="max-w-screen-2xl mx-auto px-5">
      <div class="my-3">
        <div class="text-2xl font-bold mt-4 mb-2">Similar Items</div>
        <div class="flex flex-wrap xl:justify-between justify-around">
          <div v-for="(category, index) in data.similar_products" :key="index" class="w-full lg:w-1/3 px-3">
            <ProductCard :data="category" />
          </div>
        </div>
      </div>
      <div class="my-3">
        <div class="text-2xl font-bold mt-4 mb-2">Similar Services</div>
        <div class="flex flex-wrap xl:justify-between justify-around">
          <div v-for="(category, index) in data.similar_services" :key="index" class="w-full lg:w-1/3 px-3">
            <ServiceCard :data="category" :remove="false" />
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
import paystack from "vue-paystack";

export default {
  components: {
    paystack,
  },
  data() {
    return {
      data: [],
      cart: [],
      total: 0,
      delivery_address: "",
      phone: "",
    };
  },
  methods: {
    ...mapMutations(["toggleSidenav"]),
    processPayment() {
        this.$axios
          .$post(
            "transactions/verify",
            {
              paystack_reference_id: this.reference,
              cart_reference_id: this.cart[0].checkout_id,
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
            console.log(response.data);
            this.$toast.success("Payment completed!");
          })
          .catch((error)=>{
            this.$toast.error(error.response.data.message);
          })
    },
    close() {
      this.$toast.error("Transaction was not completed, window closed.");
    },
  },

  computed: {
    ...mapState(["sidebar", "token", "user"]),
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
  },
  mounted() {
    this.delivery_address = this.user.delivery_address
    this.phone = this.user.phone
    try {
      this.$axios
        .$get("account/cart-items", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.data = response.data;
          this.cart = response.data.cart_items;
          this.cart.map((single) => {
            this.total += single.bid_amount * 1;
          });
        });
    } catch (error) {
      console.log(error);
      this.$toast.error(error.response.data.message);
    }
  },
};
</script>
<style scoped>
.line {
  height: 1px;
}

textarea:focus {
  outline: none;
}

.show {
  width: 50% !important;
}
</style>