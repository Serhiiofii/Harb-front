<template>
  <section>
    <b-modal v-model="showModal" :width="500" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="text-2xl font-bold text-center my-3">Place a {{ type == "bid" ? "Bid" : "Quote" }}:</div>
          <div class="">
            <!-- <div class="w-44 rounded-md bg-blue-100"></div> -->
            <div>
              <!-- <div class="font-bold my-1">Tatomh Hose:</div> -->
              <div>
                <div class="flex justify-between mb-1">
                  <div class="text-xs">Enter {{ type == "bid" ? "Your" : "" }} Amount Quote</div>
                  <div class="text-xs" v-if="type == 'bid'">Seller's Quote: <strong>{{ this.quote?.amount }}</strong></div>
                </div>
                <input type="number" v-model="bid" class="p-2 border rounded-sm w-full border-gray-200" />
                <div class="flex justify-between mt-1">
                  <div @click="bid = 10000" class="
                      cursor-pointer
                      bg-green-200
                      text-green-900
                      w-14
                      text-xs text-center
                      rounded-ms
                      p-1
                    ">
                    10,000
                  </div>
                  <div @click="bid = 30000" class="
                      cursor-pointer
                      bg-green-200
                      text-green-900
                      w-14
                      text-xs
                      rounded-sm
                      text-center
                      p-1
                    ">
                    30,000
                  </div>
                  <div @click="bid = 50000" class="
                      cursor-pointer
                      bg-green-200
                      text-green-900
                      w-14
                      rounded-sm
                      text-xs text-center
                      p-1
                    ">
                    50,000
                  </div>
                </div>
                <button class="p-2 bg-blue-600 text-white w-full rounded-sm mt-4" @click="makeBid">
                  Make {{ type == "bid" ? "Bid" : "Quote" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    isCardModalActive: Boolean,
    id: String,
    toggle: Function,
    type: String,
    quote: Object
  },
  computed: mapState(["token"]),
  data() {
    return {
      bid: this.quote?.amount??1000,
      showModal: this.isCardModalActive
    };
  },
  methods: {
    makeBid() {
      let uri = `products/${this.id}/bid`;
      if (this.type !== 'bid') {
        uri = `seller/products/quote/${this.id}`
      };
      this.$axios
        .$post(
          uri,
          {
            amount: this.bid,
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
          this.$toast.success(response.message);
          this.toggle();
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
        })
    },
  },
  watch: {
    quote: function () {
      console.log(this.quote)
      this.bid = this.quote?.amount ?? 1000;
    },
    isCardModalActive: function () {
      this.showModal = this.isCardModalActive;
    }
  }
};
</script>