<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 flex mt-4">
      <Sidebar />
      <div class="w-full ml-4 bg-white p-10 container">
        <div>
          <div class="flex justify-between">
            <div class="uppercase text-gray-300 my-2">Notifications</div>
            <div class="text-xs text-green-400 w-12 my-2">See all</div>
          </div>
        </div>
        <div class="h-1 bg-gray-100 w-full"></div>
        <div>
          <div class="flex justify-between my-2">
            <div class="">
              <div>Bid for tathoth Hose - N300,000</div>
              <div class="text-xs text-gray-200">6 - Sep - 2022, 13:02</div>
            </div>
            <div
              class="
                text-xs text-green-800 text-center
                bg-green-100
                rounded-sm
                p-1
                my-auto
                w-12
              "
            >
              View
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let local = JSON.parse(window.localStorage.getItem("data"));
    try {
      this.$axios
        .$get("account/notifications", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + local.data.token,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>