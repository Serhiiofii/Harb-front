<template>
  <div class="bg-gray-50">
    <AdminNav />
    <div class="max-w-screen-2xl mx-auto px-3 flex mt-4 container">
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
            <div class="text-sm my-2">Total Payments</div>
            <div
              class="rounded-md bg-blue-200 text-sm font-bold text-blue-900 p-2"
            >
              50,758 NGN
            </div>
          </div>
          <div class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4">
            <div class="text-sm my-2">Received Payments</div>
            <div
              class="
                rounded-md
                bg-purple-200
                text-sm
                font-bold
                text-purple-900
                p-2
              "
            >
              50,758 NGN
            </div>
          </div>
          <div class="border bg-white rounded-md p-4 w-1/2 text-center lg:mr-4">
            <div class="text-sm my-2">Sent Payments</div>
            <div
              class="
                rounded-md
                bg-yellow-50
                text-sm
                font-bold
                text-yellow-900
                p-2
              "
            >
              50,758 NGN
            </div>
          </div>
          <div class="border bg-white rounded-md p-4 w-1/2 text-center">
            <div class="text-sm my-2">Pending Payments</div>
            <div
              class="
                rounded-md
                bg-green-200
                text-sm
                font-bold
                text-green-900
                p-2
              "
            >
              50,758 NGN
            </div>
          </div>
        </div>
        <div class="my-4 border bg-white rounded-md p-3">
          <div class="flex justify-between">
            <div class="uppercase text-sm text-gray-400">Recent payments</div>
            <div class="flex">
              <div class="text-sm">Filter</div>
              <div>
                <select
                  class="bg-red-200 text-sm rounded-sm mx-1"
                  name=""
                  id=""
                >
                  <option value="All">All</option>
                </select>
              </div>
            </div>
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
              <div class="text-sm my-auto">N200 000</div>
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
                    class="bg-green-100 p-2 w-20 rounded-md text-sm text-green-800"
                  >
                    Received
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-gray-300 h-1 w-full my-3"></div>
          </div>
          <div>
            <div class="flex justify-between">
              <div>
                <div class="text-sm">Peter Obi</div>
                <div class="text-xs text-gray-300">
                  Date Created 9 - Sep - 2022, 13:02
                </div>
              </div>
              <div class="text-sm my-auto">N200 000</div>
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
                    class="bg-yellow-100 w-20 p-2 rounded-md text-sm text-yellow-800"
                  >
                    Sent
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-gray-300 h-1 w-full my-3"></div>
          </div>
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>