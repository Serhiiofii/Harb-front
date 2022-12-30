<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="lg:mx-20 flex mt-4 container">
      <AdminSidebar />
      <div class="lg:ml-4 w-full">
        <div class="my-4">
          <input
            type="text"
            class="p-3 border bg-transparent w-full rounded-md"
            placeholder="Search"
          />
        </div>
        <div class="flex my-3">
          <div class="border bg-white p-4 w-1/2 lg:mr-2">
            <div class="uppercase text-gray-500 my-3">Jane Harry OKONUMI</div>
            <div class="flex justify-between">
              <div class="my-auto">jane@email.com</div>
              <button
                class="bg-green-100 text-green-900 flex p-3 rounded-md text-sm"
              >
                View CAC
                <img
                  class="my-auto w-4 h-4 ml-2"
                  src="/icons/Union.svg"
                  alt=""
                />
              </button>
              <button
                class="bg-blue-100 text-blue-900 flex p-3 rounded-md text-sm"
              >
                View Other Docs
                <img
                  class="my-auto w-4 h-4 ml-2"
                  src="/icons/Vector.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div class="border bg-white p-4 w-1/2 lg:ml-2">
            <div class="text-gray-500 my-3">TRANSACTIONS</div>
            <div class="flex justify-between">
              <div>
                <button class="bg-red-200 w-52 text-red-700 rounded-md text-sm p-3">
                  Sold Transactions: 200
                </button>
              </div>
              <div>
                <button class="bg-red-200 w-52 text-red-700 rounded-md text-sm p-3">
                  Rented Transactions: 10
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="lg:flex">
            <div class="m-2 border relative border-gray-200 rounded-md">
              <div class="lg:flex mt-6">
                <div class="p-2">
                  <span class="text-sm">First Name</span> <br />
                  <input
                    type="text"
                    v-model="first_name"
                    class="
                      p-2
                      border border-gray-200
                      rounded-sm
                      lg:w-auto
                      w-full
                    "
                  />
                </div>
                <div class="p-2">
                  <span class="text-sm">Last Name</span> <br />
                  <input
                    type="text"
                    v-model="last_name"
                    class="
                      p-2
                      border border-gray-200
                      rounded-sm
                      lg:w-auto
                      w-full
                    "
                  />
                </div>
              </div>
              <div class="p-2">
                <span class="text-sm">Enter your email</span> <br />
                <input
                  type="text"
                  v-model="email"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
              <div class="p-2">
                <span class="text-sm">Enter your Phone Number</span> <br />
                <input
                  type="number"
                  v-model="phone"
                  class="p-2 border border-gray-200 rounded-sm w-full"
                />
              </div>
              <!-- <div
                @click="updateInfo"
                class="absolute top-3 cursor-pointer right-3"
              >
                <img class="w-4 h-4" src="/edit.png" alt="" />
              </div> -->
            </div>

            <div class="m-2 lg:w-full">
              <div class="lg:flex">
                <div
                  class="
                    border-gray-200 border
                    lg:mr-1
                    justify-evenly
                    p-3
                    flex
                    lg:w-1/2
                  "
                >
                  <div class="font-bold text-base my-auto">Avatar</div>
                  <div class="w-20 rounded-full bg-blue-100 w-20">
                    <img src="/icons/user.svg" class="mx-auto my-8" alt="" />
                  </div>
                  <!-- <input @change="uploadPhoto" type="file" name="" ref="file" /> -->
                </div>
                <div
                  class="
                    lg:w-1/2
                    top
                    border border-gray-200
                    p-2
                    rounded-md
                    relative
                    lg:ml-1
                  "
                >
                  <!-- <div
                    @click="updateDelivery"
                    class="absolute top-3 cursor-pointer right-3"
                  >
                    <img class="w-4 h-4" src="/edit.png" alt="" />
                  </div> -->
                  <textarea
                    class="w-full p-1 bg-gray-200 h-full rounded-md"
                    name=""
                    v-model="delivery_address"
                  ></textarea>
                </div>
              </div>
              <div class="my-4 p-2 border border-gray-200 relative">
                <div class="font-bold text-xs">Bio</div>
                <!-- <div
                  @click="updateBio"
                  class="absolute top-3 cursor-pointer right-3"
                >
                  <img class="w-4 h-4" src="/edit.png" alt="" />
                </div> -->
                <textarea
                  class="w-full border-none h-20 rounded-md"
                  name=""
                  v-model="bio"
                ></textarea>
              </div>
              <div class="relative">
                <div class="absolute top-3 left-2 text-sm font-bold">
                  Location:
                </div>
                <!-- <div
                  @click="updateLocation"
                  class="absolute top-3 cursor-pointer right-3"
                >
                  <img class="w-4 h-4" src="/edit.png" alt="" />
                </div> -->
                <input
                  type="text"
                  class="py-2 border border-gray-200 pl-20 w-full"
                  v-model="location"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-4 p-2">
          <b-tabs type="is-toggle">
            <b-tab-item label="Products">
              <div>
                <Product />
                <Product />
              </div>
            </b-tab-item>
            <b-tab-item label="Services">
              <div class="flex justify-between">
                <div class="mr-2"><ServiceCard /></div>
                <div class="ml-2"><ServiceCard /></div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>