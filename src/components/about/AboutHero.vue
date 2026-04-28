<script setup lang="ts">
import { easeInOut, motion } from 'motion-v';
import Hero from '../../assets/images/hero.webp'
</script>


<template>
    <header class="bg-primary py-7 md:py-10">
        <main class="container mx-auto px-5 md:px-7 2xl:px-18 grid md:grid-cols-2 gap-x-15 gap-y-5 items-center">
            <!-- left -->
            <motion.div :initial="{ opacity: 0, x: -500 }" :animate="{ opacity: 1, x: 0 }"
                :transition="{ ease: easeInOut, duration: 1 }" class="space-y-3 md:space-y-7">
                <p class="font-medium text-white text-center md:text-left"> OUR STORY</p>

                <h1
                    class="text-white text-center leading-10 text-[2rem] xl:text-5xl font-extrabold md:text-left xl:leading-14">
                    Built on <span class="text-accent italic">love, passion, and attention to detail</span>
                </h1>

                <div class="space-y-2 md:space-y-4">
                    <p class="text-white text-lg leading-7 xl:text-[1.3rem] font-medium text-center md:text-left">
                        Hopevine Decoration and Catering Services was founded with one simple belief: every celebration
                        deserves to be beautiful and memorable regardless of size or budget.
                    </p>
                    <p class="text-white text-lg leading-7 xl:text-[1.3rem] font-medium text-center md:text-left">
                        What started as a passion for making spaces come alive has grown into a trusted name across
                        Lagos, serving weddings, birthdays, corporate events, naming ceremonies, and more.
                    </p>
                    <p class="text-white text-lg leading-7 xl:text-[1.3rem] font-medium text-center md:text-left">
                        We pour our hearts into every event we touch because to us, it's never just a job. It's
                        someone's special day.
                    </p>
                </div>


            </motion.div>

            <!-- right -->
            <motion.div :initial="{ opacity: 0, x: 500 }" :animate="{ opacity: 1, x: 0 }"
                :transition="{ ease: easeInOut, duration: 1, delay: .4 }"
                class="relative h-90 xl:h-120 2xl:h-130 rounded-lg overflow-hidden">
                <img loading="eager" :src="Hero" alt="hero" class=" w-full h-full object-cover object-top">
                <div class="absolute inset-0 bg-black/40 mix-bend-overlay "></div>
            </motion.div>
        </main>
    </header>
</template>