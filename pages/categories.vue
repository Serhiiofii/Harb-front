<template>
  <div class="bg-gray-50">
    <div class="min-h-[84px]">
      <div v-if="user === null">
        <HeaderNav />
      </div>
      <div v-else>
        <MainNav />
      </div>
    </div>
    <div class="max-w-screen-2xl mx-auto px-5 p-2 min-h-[calc(100vh-470px)]">
      <div v-if="data !== null && data.length > 0" class="flex flex-wrap xl:justify-between justify-around">
        <div v-for="(featured, index) in data" :key="index" class="w-full lg:w-1/3 px-3">
          <ProductCard :data="featured" />
        </div>
      </div>
      <div v-else class="text-center p-2 text-xl pt-5">No Data.</div>
    </div>
    <FooterNav />
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
  computed: mapState(["sidebar", "token", "user"]),

  mounted() {
    this.$axios
      .$get(`equipment/categories/${this.$router.history.current.query.slug}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.data = response.data;
      });
  },
};
</script>