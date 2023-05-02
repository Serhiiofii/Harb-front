<template>
    <section>
        <b-carousel :indicator="true" :indicator-background="true" :indicator-inside="true"
            indicator-mode="click" indicator-position="is-bottom" indicator-style="is-lines">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <img :src="carousel.img" class="absolute h-full w-full" />
                    <div class="p-5 relative z-[0]">
                        <div class="lg:w-2/3 lg:m-10 m-4">
                            <div class="lg:text-3xl text-xl font-bold text-white">
                                Get offshore <br />
                                equipment on demand
                            </div>
                            <div class="my-3 text-white text-sm">
                                Find marine equipment, equipment for industrial use, and
                                industrial spare parts. Whether you're looking to buy or sell
                                you'll find the best deals here
                            </div>
                            <div v-if="user === null || user.user_role === 'user'">
                                <NuxtLink to="/becomeaseller">
                                    <button class="
                                        bg-transparent
                                        border border-white
                                        w-44
                                        rounded-md
                                        text-white
                                        p-3
                                        ">
                                        Become a Seller
                                    </button>
                                </NuxtLink>
                            </div>
                            <div v-else>
                                <NuxtLink to="/equipmentupload">
                                    <button class="
                                        bg-transparent
                                        border border-white
                                        w-44
                                        rounded-md
                                        text-white
                                        p-3
                                        ">
                                        Sell an Item
                                    </button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </section>
</template>

<script>
export default {
    props: {
        user: Object
    },
    data() {
        return {
            carousels: [
                { img: '/hero/hero-1.png', color: 'info' },
                { img: '/hero/pipe.jpg', color: 'success' },
                { img: '/hero/hero-1.png', color: 'info' },
                { img: '/hero/vessel.png', color: 'success' }
            ]
        }
    }
}
</script>