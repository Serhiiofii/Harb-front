<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="mx-20 flex mt-4">
      <Sidebar />
      <div class="ml-4 w-full">
        <div class="bg-white">
          <div class="flex">
            <div class="m-2 border border-gray-200 rounded-md">
              <div class="flex">
                <div class="p-2">
                  <span class="text-sm">First Name</span> <br />
                  <input
                    type="text"
                    class="p-2 border border-gray-200 rounded-sm"
                  />
                </div>
                <div class="p-2">
                  <span class="text-sm">Last Name</span> <br />
                  <input
                    type="text"
                    class="p-2 border border-gray-200 rounded-sm"
                  />
                </div>
              </div>
              <div class="p-2">
                <span class="text-sm">Enter your email</span> <br />
                <input
                  type="text"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
              <div class="p-2">
                <span class="text-sm">Enter your Phone Number</span> <br />
                <input
                  type="number"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
            </div>
            <div class="m-2 w-full">
              <div class="flex">
                <div
                  class="
                    border-gray-200 border
                    mr-1
                    justify-evenly
                    p-3
                    flex
                    w-1/2
                  "
                >
                  <div class="font-bold text-base my-auto">Avatar</div>
                  <div class="w-20 rounded-full bg-blue-100 w-20">
                    <img src="/icons/user.svg" class="mx-auto my-8" alt="" />
                  </div>
                </div>
                <div class="w-1/2 border border-gray-200 p-2 rounded-md ml-1">
                  <textarea
                    class="w-full bg-gray-200 h-full rounded-md"
                    name=""
                  ></textarea>
                </div>
              </div>
              <div class="my-2">
                <textarea
                  class="w-full border border-gray-200 h-20 rounded-md"
                  name=""
                ></textarea>
              </div>
              <div>
                <input
                  type="text"
                  class="p-2 border border-gray-200 w-full"
                  value="Location:"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-4 p-2">
          <Product />
          <Product />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
textarea:focus {
  outline: none;
}
</style>