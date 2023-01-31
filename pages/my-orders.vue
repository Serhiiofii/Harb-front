<template>
  <div class="bg-gray-50">
    <MainNav />
    <div
      v-if="cart !== null && cart.length > 0"
      class="lg:mx-20 container lg:flex mt-4"
    >
      <div class="w-full bg-white p-2">
        <div v-for="(single, index) in cart" :key="index">
          <Product :data="single.equipment" />
        </div>
      </div>
      <div
        v-show="sidebar"
        class="
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
        "
      >
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
            <textarea
              name=""
              class="
                p-2
                bg-gray-100
                w-full
                border
                text-sm
                border-gray-200
                rounded-sm
              "
              v-model="user.delivery_address"
            >
            </textarea>
          </div>
          <div>
            <div class="text-sm mt-3 mb-1">Phone Number</div>
            <input
              class="
                p-2
                bg-gray-100
                w-full
                border
                text-sm
                border-gray-200
                rounded-sm
              "
              :value="user.phone"
            />
          </div>
          <!-- <div>
            <div class="text-sm mt-3 mb-1">Delivery Method:</div>
            <button class="p-2 bg-red-100 font-bold px-4 text-sm">
              Pay Using Card
            </button>
          </div> -->
        </div>

        <button class="bg-blue-600 p-2 w-full text-white">
          <paystack
            :amount="total * 100"
            :email="user.email"
            paystackkey="pk_test_d5d28afc7480b03bab11b88a84879d68f8a089af"
            :reference="reference"
            :callback="processPayment"
            :close="close"
          >
            Checkout
          </paystack>
        </button>
      </div>
    </div>
    <div v-else class="text-center p-2">No equipments in your cart.</div>
    <div class="mx-20">
      <div class="my-3">
        <div class="text-3xl font-bold mt-4 mb-2">Similar Items</div>
        <div class="lg:flex flex-wrap">
          <div
            v-for="(category, index) in data.similar_products"
            :key="index"
            class="lg:w-1/3"
          >
            <ProductCard :data="category" />
          </div>
        </div>
      </div>
      <div class="my-3">
        <div class="text-3xl font-bold mt-4 mb-2">Similar Services</div>
        <div class="lg:flex flex-wrap">
          <div
            v-for="(category, index) in data.similar_services"
            :key="index"
            class="lg:w-1/3"
          >
            <ServiceCard :data="category" />
          </div>
        </div>
      </div>
    </div>
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
      cart: null,
      total: 0,
    };
  },
  methods: {
    ...mapMutations(["toggleSidenav"]),
    processPayment() {
      try {
        this.$axios
          .$post(
            "transactions/verify",
            {
              paystack_reference_id: this.reference,
              cart_reference_id: "",
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
          });
      } catch (e) {
        console.log(e);
      }
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
    if (screen.width <= 600) {
      this.toggleSidenav();
    }
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
          console.log(response.data);
          this.data = response.data;
          this.cart = response.data.cart_items;
          this.cart.map((single) => {
            this.total = this.total + +single.bid_amount;
          });
        });
    } catch (error) {
      console.log(error);
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