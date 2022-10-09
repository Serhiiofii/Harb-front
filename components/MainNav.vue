<template>
  <div class="flex py-4 px-20 justify-between bg-white">
    <div class="my-auto">
      <img class=" w-40" src="/logo.svg" alt="" />
    </div>
    <div class="flex my-auto">
      <b-dropdown aria-role="list" class="z-10 -mr-1">
        <template #trigger="{ active }">
          <b-button
            label="All Categories"
            type="is-info"
            class="h-12"
            :icon-right="active ? 'menu-up' : 'menu-down'"
          />
        </template>
        <div class="flex w-96">
          <b-dropdown-item aria-role="listitem">Sort by</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Location</b-dropdown-item>
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Price -
            Highest</b-dropdown-item
          >
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Lagos</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Price -
            Lowest</b-dropdown-item
          >
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />London</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Recent
            Item</b-dropdown-item
          >
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Abuja</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"></b-dropdown-item>
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Port
            harcourt</b-dropdown-item
          >
        </div>
        <div class="flex">
          <b-dropdown-item aria-role="listitem"></b-dropdown-item>
          <b-dropdown-item aria-role="listitem"
            ><input type="radio" class="m-1 my-auto" />Africa</b-dropdown-item
          >
        </div>
      </b-dropdown>
      <input type="text" class="p-3 border border-gray-100 w-96 h-12" placeholder="Search items on harbour hub" />
    </div>
    <div class="flex my-auto">
      <img src="/icons/Union.png" class="w-4 h-4 mr-1 my-auto" alt="" />
      Cart
    </div>
    <div class="my-auto">Become a seller</div>
    <img src="/icons/bell.png" class="h-4 w-4 my-auto" alt="" />
    <div class="flex my-auto">
      <img src="/user.png" class="w-8 my-auto h-8" alt="" />
      <b-dropdown aria-role="list">
        <template #trigger="{ active }">
          <b-button
            class="border-none"
            label="Hi Louis"
            :icon-right="active ? 'menu-up' : 'menu-down'"
          />
        </template>

        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      name: "",
    };
  },
  computed: {
    filteredDataObj() {
      return this.data.filter((option) => {
        return (
          option.user.first_name
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>
<style scoped>
</style>