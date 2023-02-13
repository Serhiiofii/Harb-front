<template>
  <div class="bg-gray-50">
    <div v-if="user === null">
      <HeaderNav />
    </div>
    <div v-else>
      <MainNav />
    </div>
    <div class="lg:mx-20 p-2">
      <div class="lg:flex justify-between flex-wrap">
        <div v-for="(featured, index) in data" :key="index" class="lg:w-1/3">
          <ProductCard :data="featured" />
        </div>
      </div>
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