<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="max-w-screen-2xl mx-auto px-5 flex mt-4 container mx-auto">
      <Sidebar />
      <div class="w-full ml-4 mt-4 bg-white p-10 container">
        <div>
          <div class="flex justify-between">
            <div class="uppercase text-gray-300 my-2">Notifications</div>
            <div class="text-xs text-green-400 w-12 my-2">See all</div>
          </div>
        </div>
        <div class="h-1 bg-gray-100 w-full"></div>
        <div v-for="(not, index) in notifications" :key="index">
          <div class="flex justify-between my-2">
            <div class="">
              <div class="text-sm">{{ not.title }}</div>
              <div class="text-xs text-gray-200">
                {{ not.created_at.substring(0, 10) }}
              </div>
            </div>
            <div
              v-if="not.equipment_id === null"
              class="
                text-xs text-green-800 text-center
                bg-green-100
                rounded-sm
                p-1
                my-auto
                w-12
              "
            >
            <NuxtLink to="">View</NuxtLink>
            </div>
            <div v-else-if="not.type === 'bid' && user.user_role==='seller'" class="flex justify-between w-44">
              <button
                @click="approve(not.equipment_id)"
                class="
                  text-xs text-green-800 text-center
                  bg-green-100
                  rounded-sm
                  p-1
                  my-auto
                  w-20
                  cursor-pointer
                "
              >
                Approve
              </button>
              <button
                @click="decline(not.equipment_id)"
                class="
                  text-xs text-red-800 text-center
                  bg-red-100
                  rounded-sm
                  p-1
                  my-auto
                  w-20
                  cursor-pointer
                "
              >
                Decline
              </button>
            </div>
            <div v-else-if="not.type === 'quote' && user.user_role==='seller'">
              <button
                @click="openModal(not.quote_id, 'quote')"
                class="
                  text-xs text-green-800 text-center
                  bg-blue-200
                  rounded-sm
                  p-1
                  my-auto
                  w-20
                  cursor-pointer
                "
              >
                Make Quote
              </button>
              <button
                class="
                  text-xs text-green-800 text-center
                  bg-green-100
                  rounded-sm
                  p-1
                  my-auto
                  w-20
                  cursor-pointer
                "
              >
              <NuxtLink to="/seller/products">View Project</NuxtLink>
              </button>
            </div>
            <div v-else-if="not.type === 'quote' && user.user_role==='user'">
              <button
                @click="openModal(not.equipment_id, 'bid', not.quote)"
                class="
                  text-xs text-green-800 text-center
                  bg-blue-200
                  rounded-sm
                  p-1
                  my-auto
                  w-20
                  cursor-pointer
                "
              >
                Confirm Quote
              </button>
            </div>
          </div>
          <div class="h-1 bg-gray-100 w-full"></div>
        </div>
      </div>
      <BidModal
        :isCardModalActive="isCardModalActive"
        :id="dataId"
        :toggle="toggleCard"
        :type="type"
        :quote="quote"
      />
    </div>
    <FooterNav />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["user","token"]),

  data() {
    return {
      notifications: [],
      isCardModalActive: false,
      dataId: '',
      type: 'quote',
      quote: null 
    };
  },
  mounted() {
    try {
      this.$axios
        .$get("account/notifications", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.notifications = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    approve(id) {
      try {
        this.$axios
          .$put(
            `seller/products/${id}/bid-offer`,
            {
              offer: "approve",
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
            this.$toast.success("Bid approved");
          });
      } catch (error) {
        console.log(error);
        this.$toast.error(error.response.data.message);      }
    },
    decline(id) {
      try {
        this.$axios
          .$put(
            `seller/products/${id}/bid-offer`,
            {
              offer: "decline",
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
            this.$toast.success("Bid declined");
          });
      } catch (error) {
        console.log(error);
        this.$toast.error(error.response.data.message);      }
    },
    toggleCard() {
      this.isCardModalActive = !this.isCardModalActive;
    },
    openModal(dataId, type, quote=null) {
      this.isCardModalActive = !this.isCardModalActive;
      this.dataId = dataId;
      this.type = type;
      if(quote) this.quote = quote;
      else this.quote = null
    }
  },
};
</script>