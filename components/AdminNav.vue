<template>
  <div class="flex py-4 px-20 nav justify-between bg-white">
    <div class="flex justify-between w-96">
      <div>
        <img class="my-auto" src="/logo.svg" alt="" />
      </div>
      <div>
        <div class="text-xl">Good Morning</div>
        <div class="text-sm">Welcome back, Admin</div>
      </div>
    </div>
    <div class="flex w-1/2 justify-end">
      <div>
        <input
          type="text"
          class="p-3 rounded-md border w-96"
          placeholder="Search"
        />
      </div>
      <div class="flex">
        <div class="my-auto">
          <img src="/icons/Chat.svg" alt="" class="w-6 h-6 my-auto mx-4" />
        </div>
        <div class="my-auto">
          <img
            src="/icons/notifications.svg"
            class="w-6 h-6 my-auto mx-4"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>