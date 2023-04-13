<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 container min-h-[calc(100vh-470px)]">
      <div class="text-2xl my-3 font-bold">Saved items</div>
      <div class="lg:flex justify-between">
        <ProductCard v-for="(item, index) in saved" :key="index" :data="item.equipment" />
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["token"]),

  data() {
    return {
      saved: null,
    };
  },
  mounted() {
    try {
      this.$axios
        .$get("account/saved-items", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.saved = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>