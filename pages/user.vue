<template>
  <div class="bg-gray-50">
    <MainNav />
    <div class="mx-20 my-8">
      <div>
        <div class="text-2xl my-3 font-bold">Equipments for sale/rent</div>
        <div class="flex justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div class="mt-4">
        <div class="text-2xl my-3 font-bold">Services</div>
        <div class="flex justify-between">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>

    <FooterNav />
  </div>
</template>