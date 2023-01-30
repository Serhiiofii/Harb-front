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
            <div class="font-bold">{{ data.seller.company_name }}</div>
            <div>
              <div class="text-xs text-blue-600">About:</div>
              <div class="text-sm">
                {{ data.seller.business_description }}
              </div>
            </div>
          </div>
          <div class="my-auto textp-sm">
            <div class="text-xs text-blue-600">Location:</div>
            <div>{{ data.seller.business_location }}</div>
          </div>
          <div class="flex text-white lg:w-52 lg:mt-0 mt-3 justify-between">
            <button class="bg-blue-800 p-3 w-24 h-12 my-auto rounded-sm">
              Contact
            </button>
            <NuxtLink
              :to="{ name: 'messages', params: { slug: data.seller.id } }"
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
            v-for="(category, index) in data.products"
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
            <ServiceCard :data="category" />
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
    };
  },
  computed: mapState(["token", "user"]),
  mounted() {
    try {
      this.$axios
        .$get(`account/sellers/${this.user.seller.id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.products = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>