<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="lg:mx-20 flex mt-4">
      <Sidebar />
      <div class="w-full container bg-white lg:ml-4">
        <div class="lg:w-96 mx-auto p-3 shadow-md mt-8">
          <div class="my-3">
            <div class="text-sm my-1">Enter Current Password</div>
            <input
              type="password"
              class="
                p-3
                rounded-sm
                border border-gray-200
                w-full
                rounded-sm
                text-sm
              "
              placeholder="****************"
            />
          </div>
          <div class="my-3">
            <div class="text-sm my-1">Enter NEW Password</div>
            <input
              type="password"
              class="
                p-3
                rounded-sm
                border border-gray-200
                w-full
                rounded-sm
                text-sm
              "
              placeholder="****************"
            />
          </div>
          <div class="my-3">
            <div class="text-sm my-1">Re-Enter NEW Password</div>
            <input
              type="password"
              class="
                p-3
                rounded-sm
                border border-gray-200
                w-full
                rounded-sm
                text-sm
              "
              placeholder="****************"
            />
          </div>
          <div class="mt-6">
            <button
              class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm"
            >
             Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>