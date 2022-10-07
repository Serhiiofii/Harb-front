<template>
  <div class="flex py-4 px-20 justify-between bg-white">
    <div>
      <img class="my-auto" src="/logo.svg" alt="" />
    </div>
    <div class="flex">
      <b-dropdown aria-role="list" class="z-10 -mr-1">
        <template #trigger="{ active }">
          <b-button
            label="All Categories"
            type="is-info"
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
      <b-field>
        <b-autocomplete
          v-model="name"
          :keep-first="keepFirst"
          :open-on-focus="openOnFocus"
          :data="filteredDataObj"
          icon="magnify"
          field="user.first_name"
          @select="(option) => (selected = option)"
          :clearable="clearable"
        >
        </b-autocomplete>
      </b-field>
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