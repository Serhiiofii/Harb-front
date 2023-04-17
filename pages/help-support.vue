<template>
  <div class="bg-gray-50 h-screen">
    <MainNav />
    <div class="max-w-screen-2xl mx-auto px-5 flex mt-4 container mx-auto">
      <Sidebar />
      <div class="w-full bg-white ml-4 p-4 mt-4">
        <b-tabs type="is-toggle" size="is-medium">
          <b-tab-item label="FAQs">
            <div>
              <b-collapse
                class="card my-4"
                animation="slide"
                v-for="(collapse, index) of collapses"
                :key="index"
                :open="isOpen == index"
                @open="isOpen = index"
                :aria-id="'contentIdForA11y5-' + index"
              >
                <template #trigger="props">
                  <div
                    class="card-header bg-yellow-100"
                    role="button"
                    :aria-controls="'contentIdForA11y5-' + index"
                    :aria-expanded="props.open"
                  >
                    <p class="card-header-title">
                      {{ collapse.title }}
                    </p>
                    <a class="card-header-icon">
                      <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                      </b-icon>
                    </a>
                  </div>
                </template>
                <div class="card-content bg-gray-100">
                  <div class="content">
                    {{ collapse.text }}
                  </div>
                </div>
              </b-collapse>
            </div>
          </b-tab-item>
          <b-tab-item label="Support">
            <div>
              <div class="flex py-4">
                <div class="ml-3">
                  <div>Customer Care 101</div>
                  <div class="text-sm">Eunice Ebelike</div>
                </div>
              </div>
              <div class="border-b border-gray-100 mb-8"></div>
              <div class="w-2/3 mr-auto flex my-5">
                <div class="text-sm p-2 bg-blue-100 rounded-md">
                  Vel et commodo et scelerisque aliquam. Sed libero, non
                  praesent felis, sem eget venenatis neque. Massa tincidunt
                  tempor a nisl eu mauris lectus. Amet lobortis auctor at
                  egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam.
                  Sed gravida eget semper vulputate vitae.
                </div>
                <div class="text-xs mt-auto ml-4">12:20pm</div>
              </div>
              <div class="w-2/3 ml-auto flex my-5">
                <div class="text-xs mt-auto mr-4">12:20pm</div>
                <div class="text-sm p-2 bg-yellow-100 rounded-md">
                  Vel et commodo et scelerisque aliquam. Sed libero, non
                  praesent felis, sem eget venenatis neque. Massa tincidunt
                  tempor a nisl eu mauris lectus. Amet lobortis auctor at
                  egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam.
                  Sed gravida eget semper vulputate vitae.
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
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: null,
      collapses: [
        {
          title: "What products do you offer?",
          text: "Our company offers a wide range of products including vessels, pumps, pipes, cranes, safety equipment, hauling equipment like bulldozers, and a lot more.",
        },
        {
          title: "Do you offer any warranties or guarantees on your products?",
          text: "Yes, there are limited warranties on most of our products",
        },
        {
          title: "Can I change or cancel my order?",
          text: "You can change or cancel your order as long as it hasn't already been processed and shipped.",
        },
        {
          title: "What payment methods do you accept?",
          text: "You pay directly to the seller through bank transfer or any other means agreed by both parties",
        },
        {
          title: "How do I contact customer service?",
          text: "You can contact us by email - info@harbourhubs.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
  .tabs.is-medium{
    font-size: 16px !important;
  }
</style>