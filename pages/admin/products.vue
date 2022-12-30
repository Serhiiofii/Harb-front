<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="lg:mx-20 flex mt-4 container">
      <AdminSidebar />
      <div class="lg:ml-4 w-full">
        <div class="my-4">
          <input
            type="text"
            class="p-3 w-full rounded-md bg-transparent border"
            placeholder="Search"
          />
        </div>
        <div class="flex">
          <div class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4">
            <div class="text-sm my-2">Total Products</div>
            <div
              class="
                rounded-md
                bg-blue-200
                w-20
                mx-auto
                text-sm text-blue-900
                p-2
              "
            >
              50,758
            </div>
          </div>

          <div class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4">
            <div class="text-sm my-2">Sold Products</div>
            <div
              class="
                rounded-md
                bg-yellow-50
                text-sm text-yellow-900
                p-2
                w-20
                mx-auto
              "
            >
              50,758
            </div>
          </div>
          <div class="border bg-white rounded-md p-4 w-1/2 text-center">
            <div class="text-sm my-2">Rented Products</div>
            <div
              class="
                rounded-md
                bg-green-200
                text-sm
                w-20
                mx-auto
                text-green-900
                p-2
              "
            >
              409
            </div>
          </div>
        </div>
        <div class="py-4 flex w-full justify-end">
          <div>
            <select name="" id="" class="bg-red-200 text-sm rounded-sm mx-1">
              <option value="Location">Location</option>
            </select>
          </div>
          <div>
            <select name="" id="" class="bg-red-200 text-sm rounded-sm mx-1">
              <option value="Filter by Date">Filter by Date</option>
            </select>
          </div>
        </div>
        <div>
          <Product />
          <Product />
        </div>
      </div>
    </div>
  </div>
</template>