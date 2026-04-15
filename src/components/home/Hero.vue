<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import Hero from '../../assets/images/hero.webp'
import Button from '../Button.vue';
import { easeInOut, motion } from 'motion-v';

</script>


<template>
    <header class="bg-warm-white py-7">
        <main class="container mx-auto px-5 md:px-7 grid md:grid-cols-2 gap-x-15 gap-y-7 items-center">
            <!-- left -->
            <motion.div :initial="{ opacity: 0, x: -500 }" :animate="{ opacity: 1, x: 0 }"
                :transition="{ ease: easeInOut, duration: 1 }" class="space-y-3 md:space-y-7">
                <div class="flex item-center justify-center md:justify-start gap-x-10 lg:gap-x-15 text-accent">
                    <p>DECORATION</p>
                    <p>CATERING</p>
                    <p>EVENTS</p>
                </div>

                <h1 class="text-primary text-center leading-10 text-[2rem] xl:text-5xl font-extrabold md:text-left xl:leading-14">
                    Making every moment <span class="text-accent italic">unforgettable</span>
                </h1>

                <p class="text-primary text-lg leading-7 xl:text-[1.7rem] font-medium text-center md:text-left md:leading-9">
                    From intimate dinners to grand celebrations, we handle every details so you can simply
                    enjoy the moment
                </p>

                <div class="flex flex-wrap gap-x-5 gap-y-7 justify-center md:justify-start mt-7">
                    <Button to="/services" class="bg-accent text-white border-accent">
                        See our services
                    </Button>
                    <Button to="/gallery">
                        View gallery
                        <ArrowRight :size="20" class="inline-block" />
                    </Button>
                </div>
            </motion.div>

            <!-- right -->
            <motion.div :initial="{ opacity: 0, x: 500 }" :animate="{ opacity: 1, x: 0 }"
                :transition="{ ease: easeInOut, duration: 1, delay: .4 }"
                class="relative h-90 lg:h-120 rounded-lg overflow-hidden">
                <img loading="eager" :src="Hero" alt="hero" class=" w-full h-full object-cover object-top">
                <div class="absolute inset-0 bg-black/40 mix-bend-overlay "></div>

                <div class="absolute right-5 bottom-5 bg-warm-white p-3 rounded-xl">
                    <p class="text-primary text-3xl font-bold">
                        200+
                    </p>
                    <span class="text-accent text-base">Events decorated</span>
                </div>
            </motion.div>
        </main>
    </header>
</template>