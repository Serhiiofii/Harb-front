<template>
  <div class="bg-gray-50">
    <RegularNav />
    <div class="lg:w-2/5 bg-white mx-auto p-6 mt-8 shadow-md rounded-sm">
      <div class="text-center">
        <div class="font-bold text-2xl">Equipment Upload</div>
        <div class="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla at
          morbi adipiscing id elementum tristique imperdiet quis a. At diam.
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Name</div>
        <input
          type="text"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Enter Company Name"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Category</div>
        <select
          name=""
          id=""
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
        >
          <option value="hello word">Select a Category</option>
          <option value="hello word">hello world</option>
        </select>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Manufacturer</div>
        <input
          type="text"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Manufacturer"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Specification</div>
        <input
          type="text"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Specification"
        />
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Year of Build</div>
        <select
          name=""
          id=""
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
        >
          <option value="hello word">Select Year</option>
          <option value="hello word">hello world</option>
        </select>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Equipment Description</div>
        <textarea
          name=""
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
            h-32
          "
          placeholder="Description......"
        ></textarea>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Add Image:</div>
        <div class="flex justify-between">
          <div>
            <img src="/upload.png" alt="" />
          </div>
          <div>
            <img src="/upload.png" alt="" />
          </div>
          <div>
            <img src="/upload.png" alt="" />
          </div>
        </div>
      </div>
      <div class="my-3">
        <div class="text-sm my-1">Add a Custom Specification:</div>
        <input
          type="text"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
          "
          placeholder="Specification Title:"
        />
        <input
          type="text"
          class="
            p-3
            rounded-sm
            border border-gray-200
            w-full
            rounded-sm
            text-sm
            mt-1
          "
          placeholder="Specification Details"
        />
      </div>

      <div class="mt-6">
        <NuxtLink to="/businessdetails">
          <button
            class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
          >
            Proceed
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style >
textarea:focus {
  outline: none;
}
</style>