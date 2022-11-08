<template>
  <div class="bg-gray-50 h-screen">
    <MainNav />
    <div class="lg:mx-20 lg:flex mt-4 container">
      <div
        :class="
          sidebar ? 'show' : 'hide'
        "
      >
        <input
          type="text"
          class="bg-gray-100 p-3 w-full rounded-md"
          placeholder="Search a message"
        />
        <div class="flex py-4">
          <img src="/user.png" alt="" />
          <div class="lg:ml-3">
            <div>Offshore Winch</div>
            <div class="text-sm">Dunlop Oil & Marine Industrail Hose</div>
          </div>
          <div class="text-xs ml-auto mt-auto">12:20pm</div>
        </div>
      </div>
      <div class="w-full lg:ml-4 bg-white p-4">
        <div class="flex py-4">
          <img src="/user.png" alt="" />
          <div class="ml-3">
            <div>Offshore Winch</div>
            <div class="text-sm">Dunlop Oil & Marine Industrail Hose</div>
          </div>
        </div>
        <div class="border-b border-gray-100 mb-8"></div>
        <div class="lg:w-2/3 mr-auto flex my-5">
          <div class="text-sm p-2 bg-blue-100 rounded-md">
            Vel et commodo et scelerisque aliquam. Sed libero, non praesent
            felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu
            mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras
            nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate
            vitae.
          </div>
          <div class="text-xs mt-auto ml-4">12:20pm</div>
        </div>
        <div class="lg:w-2/3 ml-auto flex my-5">
          <div class="text-xs mt-auto mr-4">12:20pm</div>
          <div class="text-sm p-2 bg-yellow-100 rounded-md">
            Vel et commodo et scelerisque aliquam. Sed libero, non praesent
            felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu
            mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras
            nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate
            vitae.
          </div>
        </div>
        <div class="w-full relative">
          <input
            type="text"
            class="p-3 w-full bg-gray-100 rounded-md"
            placeholder="Type a message"
          />
          <div class="flex absolute top-1 right-4">
            <img class="p-2" src="/icons/send.svg" alt="" />
            <img class="p-2" src="/icons/img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: mapState(["sidebar"]),
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["toggleSidenav"]),
  },
  mounted() {
    if (screen.width <= 600) {
      this.toggleSidenav();
    }
  },
};
</script>

<style scoped>
.show {
  width: 50% !important;
}
</style>