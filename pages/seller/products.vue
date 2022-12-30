<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 flex mt-4 container">
      <Sidebar />
      <div class="lg:ml-4 w-full">
        <div class="flex">
          <div class="border rounded-md w-1/2 p-4 bg-white lg:mr-2">
            <div class="uppercase text-base text-gray-400">quick upload</div>
            <NuxtLink to="/equipmentupload">
              <button
                class="p-2 mt-4 font-bold text-sm bg-blue-200 rounded-sm w-full"
              >
                Upload a product
              </button>
            </NuxtLink>
          </div>
          <div class="border rounded-md w-1/2 p-4 bg-white lg:ml-2">
            <div class="uppercase text-base text-gray-400">quick upload</div>
            <NuxtLink to="/serviceupload">
              <button
                class="
                  p-2
                  mt-4
                  font-bold
                  text-sm
                  bg-green-200
                  rounded-sm
                  w-full
                "
              >
                Upload a service
              </button>
            </NuxtLink>
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