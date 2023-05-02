<template>
  <div class="lg:p-3 my-2 border border-gray-100 relative bg-white shadow-md">
    <div class="lg:flex">
      <div class="lg:w-96">
        <img class="lg:h-52 lg:w-80 w-full" :src="image1" alt="" />
      </div>
      <div class="lg:ml-5 w-full lg:mt-0 mt-2 lg:p-0 p-2 grid grid-rows-3">
        <div class="row-span-3">
          <div class="flex">
            <img src="/user.png" alt="" />
            <div class="ml-3">
              <div class="font-bold">{{ name }}</div>
              <div>{{ category }}</div>
            </div>
          </div>
          <div class="lg:text-base text-xs my-2">
            {{ description }}
          </div>
          <div class="flex">
            <div class="mr-6 lg:text-sm text-xs">Date Uploaded:</div>
            <div class="lg:text-sm text-xs">
              {{ data.created_at.substring(0, 10) }}
            </div>
          </div>
        </div>
        <div v-if="path !== '/my-orders'" class="lg:mt-0 flex justify-end row-span-1">
          <div class="flex">
            <button @click="getOrders()" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-blue-200
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO2YTUoDQRCFX1wHN+p91LUgutS5h7hTTyR6A0N2ijfxJ26VJwMVCKiQaOxXlbwPajFMT/rLo7tTE8AYY4wxxhjTHK5IyeCKlDzAqsj9qRao7k+1QHV/qgWq+1MtUN2faoHq/lQLVPenWqC6P9UC1f2pFqjuT7VAdX8uILABoIsaIAelAuxmxp/+8Dmt/xxwgFijAAex8k68hX8XYEbk/lQLVPenWqC6P9UC1f3pPrBdgJ37QAe4dOg+sF2AGZH7Uy1Q3Z9qger+VAtU96f7wHYBdu4DHeDSofvAdgFmRO5PtUB1f6oFqvtTLVDdn+4D2wXYuQ90gEuH7gPbBZgRuT/VAtX9qRao7k+1QHV/qgWq+1MtUN2faoEq/ixW8+IAUSzA7NABrkGAYwCjmXvjRNclAuxl72bujRJdlwgwM8wa4CQmGiI3kwU8N2PsawMvPMZku8jN4wKe+zH2oYEXrmKya+TmYgHP2xjbP/Pv7MRS7yc8Q162ADzN4XkeY57jmSYcA/iIiW8A7CU9Ew8AvH/jOYxtO115/Xc5bC13BOAlwbsu/1jPivCmbAO4jMP3LUEY81b/C30fZ16zbWuMMcYYY4zBVz4BsgbyphZRiP0AAAAASUVORK5CYII="
                alt="" /> <span class="hidden sm:block">Orders</span>
            </button>
            <button @click="openUpdateModal(data.id)" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-green-200
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1" src="/edit.png" alt="" /> <span class="hidden sm:block">Update</span>
            </button>
            <button @click="removeProduct(data.id)" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-red-100
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1" src="/icons/close.svg" alt="" /> <span
                class="hidden sm:block">Remove</span>
            </button>
          </div>
        </div>
        <div v-else class="lg:mt-0 flex justify-end row-span-1">
          <div class="flex">
            <button @click="cancelCart(cartedId)" class="
                flex
                justify-center
                p-3
                rounded-sm
                font-bold
                lg:w-28
                text-sm
                bg-red-100
                mx-1
              ">
              <img class="w-4 h-4 my-auto mx-1" src="/icons/close.svg" alt="" /> <span
                class="hidden sm:block">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showOrders" v-if="path !== '/my-orders'">
      <Orders :orders="orders" />
    </div>

    <b-modal v-model="isModalActive" :width="640" scroll="keep">
      <div class="card p-5">
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
        <div class="mt-6">
          <button @click="upload" class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm">
            {{ loading ? "Loading..." : "Proceed" }}
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import categories from "~/assets/jsons/categories";

export default {
  props: {
    data: Object,
    cartedId: String
  },
  data() {
    return {
      path: "",
      orders: [],

      showOrders: false,
      isModalActive: false,

      categories: categories,
      name: "",
      category: "",
      manufacturer: "",
      specification: "",
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
  computed: mapState(["token"]),
  mounted() {
    this.path = this.$router.history.current.path;
    this.name = this.data.name;
    this.category = this.data.category;
    this.manufacturer = this.data.manufacturer;
    this.specification = this.data.equipment_specification;
    this.description = this.data.description;
    this.type = this.data.sale_type;
    this.custom_title = this.data.custom_title;
    this.custom_details = this.data.custom_details;
    this.image1 = this.image1URL = this.data.equipment_images[0]?.image;
    this.image2 = this.image2URL = this.data.equipment_images[1]?.image;
    this.image3 = this.image3URL = this.data.equipment_images[2]?.image;
  },
  methods: {
    cancelCart(id) {
      this.$axios
        .$delete(`account/cart-items/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          location.reload();
          this.$toast.success("Product canceled successfully!");
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
        });
    },
    async removeProduct(id) {
      if (!confirm("Are you sure you want to delete this product?"))
        return;
      try {
        this.loading = true;
        await this.$axios
          .$delete(`seller/equipments/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + this.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            // this.loading = false;
            this.$toast.success("Product deleted successfully!");
            location.reload();
          });
      }
      catch (error) {
        console.log("error");
        this.$toast.error(error.response.data.message);
      }
    },
    getOrders() {
      this.showOrders = !this.showOrders;
      this.$axios
        .$get(`seller/orders/${this.data.seller_id}/${this.data.id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.orders = response.data.orders;
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
        });
    },
    openUpdateModal(id) {
      this.isModalActive = true
    },
    async uploadFile(id) {
      const files = event.target.files;
      this[`image${id}`] = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = async (e) => {
        this[`image${id}URL`] = await e.target.result;
      };
    },
    async upload() {
      const formData = new FormData();
      formData.append("id", this.data.id);
      formData.append("name", this.name);
      formData.append("category", this.category);
      formData.append("manufacturer", this.manufacturer);
      formData.append("equipment_specification", this.specification);
      formData.append("description", this.description);
      formData.append("sale_type", this.type);
      formData.append("images[]", this.image1);
      formData.append("images[]", this.image2);
      formData.append("images[]", this.image3);
      try {
        this.loading = true;
        await this.$axios
          .$post(
            "seller/equipments/save",
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
            this.loading = false;
            this.isModalActive = false;
            this.name = response.data.equipment.name;
            this.category = response.data.equipment.category;
            this.manufacturer = response.data.equipment.manufacturer;
            this.specification = response.data.equipment.equipment_specification;
            this.description = response.data.equipment.description;
            this.type = response.data.equipment.sale_type;
            if(response.data.equipment_images) {
              this.image1 = this.image1URL = response.data.equipment_images[0]?.image;
              this.image2 = this.image2URL = response.data.equipment_images[1]?.image;
              this.image3 = this.image3URL = response.data.equipment_images[2]?.image;
            }
            this.$toast.success("Equipment update successfully!");
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
<style scoped>
img {
  object-fit: cover;
}
</style>