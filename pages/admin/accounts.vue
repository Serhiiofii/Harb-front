<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="lg:mx-20 flex mt-4 container">
      <AdminSidebar />
      <div class="lg:ml-4 w-full">
        <div class="my-4">
          <input
            type="text"
            class="p-3 border w-1/2 rounded-md bg-transparent"
            placeholder="Search"
          />
        </div>
        <div class="flex justify-between">
          <div
            class="
              flex
              justify-between
              w-1/2
              border
              p-4
              rounded-md
              bg-white
              lg:mr-3
            "
          >
            <div>
              <div class="text-gray-400 my-4 text-lg uppercase">
                View top accounts
              </div>
              <div class="text-base my-4">Top 10 Accounts on Harbour Hub</div>
            </div>
            <div class="mt-auto">
              <button
                class="
                  my-4
                  flex
                  justify-between
                  bg-blue-200
                  p-3
                  rounded-md
                  text-blue-900
                "
              >
                View All
                <img
                  class="w-3 h-3 my-auto ml-3"
                  src="/icons/Vector.svg"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div
            class="
              flex
              justify-between
              w-1/2
              border
              p-4
              rounded-md
              bg-white
              lg:ml-3
            "
          >
            <div>
              <div class="text-gray-400 my-4 text-lg uppercase">
                deleted accounts
              </div>
              <div class="text-base my-4">Deleted Accounts on Harbour Hub</div>
            </div>
            <div class="mt-auto">
              <button
                class="
                  my-4
                  flex
                  justify-between
                  bg-blue-200
                  p-3
                  rounded-md
                  text-blue-900
                "
              >
                View All
                <img
                  class="w-3 h-3 my-auto ml-3"
                  src="/icons/Vector.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div class="my-4 border bg-white rounded-md p-3">
          <div class="flex justify-between">
            <div class="uppercase text-sm text-gray-400">All accounts</div>
            <div class="text-green-800 text-sm">See all</div>
          </div>
          <div class="bg-gray-300 h-1 w-full my-3"></div>
          <div>
            <div class="flex justify-between">
              <div>
                <div class="text-sm">Peter Obi</div>
                <div class="text-xs text-gray-300">
                  Date Created 9 - Sep - 2022, 13:02
                </div>
              </div>
              <div class="flex justify-between w-96">
                <div>
                  <button
                    class="bg-blue-200 p-2 rounded-md text-sm text-blue-800"
                  >
                    View Account
                  </button>
                </div>
                <div>
                  <button
                    class="bg-blue-200 p-2 rounded-md text-sm text-blue-800"
                  >
                    Send a message
                  </button>
                </div>
                <div>
                  <button
                    class="bg-red-200 p-2 rounded-md text-sm text-red-800"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-gray-300 h-1 w-full my-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>