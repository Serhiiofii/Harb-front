<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 my-8 container">
      <div class="relative">
        <img src="/cover.png" class="lg:h-auto h-40" alt="" />
        <img
          src="/user.png"
          class="absolute top-28 w-24 lg:left-12 left-6"
          alt=""
        />
        <div class="lg:flex justify-evenly lg:ml-20 p-4 lg:mt-0 mt-10">
          <div class="lg:w-1/2">
            <div class="font-bold">{{ seller.company_name }}</div>
            <div>
              <div class="text-xs text-blue-600">About:</div>
              <div class="text-sm">
                {{ seller.business_description }}
              </div>
            </div>
          </div>
          <div class="my-auto textp-sm">
            <div class="text-xs text-blue-600">Location:</div>
            <div>{{ seller.business_location }}</div>
          </div>
          <div class="flex text-white lg:w-52 lg:mt-0 mt-3 justify-between">
            <button class="bg-blue-800 p-3 w-24 h-12 my-auto rounded-sm">
              Contact
            </button>
            <NuxtLink :to="'/messages/?slug=' + seller.id">
              >
              <button class="bg-yellow-300 p-3 w-24 h-12 my-auto rounded-sm">
                Chat
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div>
        <div class="text-2xl my-3 font-bold">Equipments for sale/rent</div>
        <div class="lg:flex justify-between flex-wrap">
          <div
            v-for="(category, index) in data.equipments"
            :key="index"
            class="lg:w-1/3"
          >
            <ProductCard :data="category" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="text-2xl my-3 font-bold">Services</div>
        <div class="lg:flex justify-between flex-wrap">
          <div
            v-for="(category, index) in data.services"
            :key="index"
            class="lg:w-1/3"
          >
            <ServiceCard :data="category" :remove="false" />
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      data: [],
      seller: [],
    };
  },
  computed: mapState(["token", "user"]),
  mounted() {
    console.log();
    try {
      this.$axios
        .$get(`account/sellers/${this.$router.history.current.query.slug}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
          this.seller = response.data.seller;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>