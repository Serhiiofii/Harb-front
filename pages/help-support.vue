<template>
  <div class="bg-gray-50 h-screen">
    <MainNav />
    <div class="mx-20 flex mt-4">
      <Sidebar />
      <div class="w-full bg-white ml-4 p-4">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: null,
      collapses: [
        {
          title: "Title 1",
          text: "Text 1",
        },
        {
          title: "Title 2",
          text: "Text 2",
        },
        {
          title: "Title 3",
          text: "Text 3",
        },
      ],
    };
  },
};
</script>