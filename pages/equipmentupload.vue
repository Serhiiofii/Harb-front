<template>
  <div class="bg-gray-50">
    <RegularNav />
    <div class="lg:w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Equipment Upload</div>
        <div class="text-xs">
          Welcome to the equipment upload section, please upload your equipment
          with the right specifications.
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Name</div>
        <input type="text" v-model="name" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          " placeholder="Enter Equipment Name" />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Category</div>
        <select name="" v-model="category" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          ">
          <option v-for="(category, index) in categories" :value="category.slug" :key="index">
            {{ category.title }}
          </option>
        </select>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Manufacturer</div>
        <input v-model="manufacturer" type="text" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          " placeholder="Manufacturer" />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Specification</div>
        <input type="text" v-model="specification" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          " placeholder="Specification" />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Year of Build</div>
        <input type="date" v-model="year_of_build" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          " />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Sale Type</div>
        <select name="" v-model="type" id="" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          ">
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
          <option value="lease">lease</option>
        </select>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Description</div>
        <textarea v-model="description" name="" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
            h-32
          " placeholder="Description......"></textarea>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Add Image:</div>
        <div class="flex justify-between">
          <div class="w-1/3 p-2">
            <label for="fileInput" v-if="image1URL">
              <img :src="image1URL" class="cursor-pointer mx-auto rounded-md" alt="" />
            </label>
            <label for="fileInput" v-else>
              <img src="/upload.png" class="cursor-pointer mx-auto" alt="" />
            </label>
          </div>
          <div class="w-1/3 p-2">
            <label for="fileInput1" v-if="image2URL">
              <img :src="image2URL" class="cursor-pointer mx-auto rounded-md" alt="" />
            </label>
            <label for="fileInput1" v-else>
              <img src="/upload.png" class="cursor-pointer mx-auto" alt="" />
            </label>
          </div>
          <div class="w-1/3 p-2">
            <label for="fileInput2" v-if="image3URL">
              <img :src="image3URL" class="cursor-pointer mx-auto rounded-md" alt="" />
            </label>
            <label for="fileInput2" v-else>
              <img src="/upload.png" class="cursor-pointer mx-auto" alt="" />
            </label>
          </div>
          <input type="file" id="fileInput" @change="uploadFile(1)" class="hidden"
            accept="image/png, image/gif, image/jpeg" />
          <input type="file" id="fileInput1" @change="uploadFile(2)" class="hidden"
            accept="image/png, image/gif, image/jpeg" />
          <input type="file" id="fileInput2" @change="uploadFile(3)" class="hidden"
            accept="image/png, image/gif, image/jpeg" />
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Add a Custom Specification:</div>
        <input type="text" v-model="custom_title" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          " placeholder="Specification Title:" />
        <input type="text" v-model="custom_details" class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
            mt-1
          " placeholder="Specification Details" />
      </div>

      <div class="mt-6">
        <button @click="upload" class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm">
          {{ loading ? "Loading..." : "Proceed" }}
        </button>
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<style >
textarea:focus {
  outline: none;
}
</style>

<script>
import { mapState } from "vuex";

import categories from "~/assets/jsons/categories";

export default {
  computed: mapState(["token"]),
  data() {
    return {
      categories: categories,
      name: "",
      category: "",
      manufacturer: "",
      specification: "",
      year_of_build: "",
      description: "",
      type: "sale",
      custom_title: "",
      custom_details: "",
      loading: false,

      image1: "",
      image2: "",
      image3: "",

      image1URL: "",
      image2URL: "",
      image3URL: "",
    };
  },
  methods: {
    async uploadFile(id) {
      const files = event.target.files;
      this[`image${id}`] = files[0];
      // console.log(this[`image${id}`]);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = async (e) => {
        this[`image${id}URL`] = await e.target.result;
      };
    },
    async upload() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("category", this.category);
      formData.append("manufacturer", this.manufacturer);
      formData.append("equipment_specification", this.specification);
      formData.append("build_year", this.year_of_build);
      formData.append("description", this.description);
      formData.append("sale_type", this.type);
      formData.append("custom_specifications", {
        title: this.custom_title,
        details: this.custom_details,
      });
      formData.append("images[]", this.image1);
      formData.append("images[]", this.image2);
      formData.append("images[]", this.image3);
      try {
        this.loading = true;
        await this.$axios
          .$post(
            "seller/equipments/add",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            this.loading = false;
            this.$toast.success("Equipment uploaded successfully!");
            this.$router.push("/seller/products");
          });
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>