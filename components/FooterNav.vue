<template>
  <div class="mt-20 border-t border-black">
    <div class="lg:flex p-4 justify-between">
      <div class="w-72">
        <img src="/logo.svg" alt="" />
        <div>
          Harbour Hub is a marketplace for buying and selling marine and other
          industrial equipment.
        </div>
        <div class="flex">
          <div class="m-1">
            <a href="https://facebook.com/harbourhubs" target="extend">
              <img src="/socials/Vector-3.svg" alt="" />
            </a>
          </div>
          <div class="m-1">
            <a href="https://www.instagram.com/harbourhubs/" target="extend">
              <img src="/socials/Vector.svg" alt="" />
            </a>
          </div>
          <div class="m-1">
            <a href="https://twitter.com/harbourhubs" target="extend">
              <img src="/socials/Vector-2.svg" alt="" />
            </a>
          </div>
          <div class="m-1">
            <a href="tel:+2347065382326">
              <img src="/socials/Vector-1.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-40">
        <div class="font-bold mb-4">Company</div>
        <NuxtLink to="/"> <div class="my-1">Home</div> </NuxtLink>
        <NuxtLink to="/becomeaseller">
          <div class="my-1">Become a seller</div>
        </NuxtLink>
        <NuxtLink to="/"> <div class="my-1">Terms</div> </NuxtLink>
        <NuxtLink to="/"> <div class="my-1">Privacy Policy</div> </NuxtLink>
      </div>
      <div class="w-40">
        <div class="font-bold mb-4">Quick Links</div>
        <NuxtLink to="/login"> <div class="my-1">Login</div> </NuxtLink>
        <NuxtLink to="/signup"> <div class="my-1">Sign Up</div> </NuxtLink>
        <NuxtLink to="/my-orders"> <div class="my-1">Cart</div> </NuxtLink>
        <NuxtLink to="/help-support"> <div class="my-1">Help/Support</div> </NuxtLink>
        <a href="mailto:info@harbourhubs.com">
          <div class="my-1">Contact Us</div>
        </a>
      </div>
      <div>
        <div class="font-bold mb-4">Join Our Newsletter</div>
        <div class="flex">
          <input
            type="text"
            class="rounded-l-full p-3 border border-black w-52"
            placeholder="Your email address"
          />
          <input
            type="button"
            class="rounded-r-full p-3 bg-blue-600 text-white w-32"
            value="Subscribe"
          />
        </div>
        <div class="text-xs mt-1">
          * Subscribe for exclusive offers and deals.
        </div>
      </div>
    </div>
    <div class="p-4 text-center font-bold text-sm">
      Copyright @ HarbourHub {{ date }}. All Rights Reserved.
    </div>
  </div>
</template>
<style>
input:focus {
  outline: none;
}
</style>

<script>
export default {
  data() {
    return {
      date: "",
    };
  },
  mounted() {
    const d = new Date();
    this.date = d.getFullYear();
  },
};
</script>
