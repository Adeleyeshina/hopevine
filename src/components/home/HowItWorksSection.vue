<script setup lang="ts">
import SectionHeading from '../SectionHeading.vue';
import img1 from '../../assets/images/img-1.webp'
import img2 from '../../assets/images/img-2.webp'
import img3 from '../../assets/images/img-3.webp'
import { easeInOut, motion } from 'motion-v';

const images = [img1, img2, img3]
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: .2, delayChildren: .5 } }
}
const item = {
    hidden: { opacity: 0, scale: 0.4 },
    show: { opacity: 1, scale: 1, transition: { ease: easeInOut, duration : .2 } }
}
</script>

<template>
    <section class="bg-primary py-7 md:py-10">
        <div class="container mx-auto px-5 md:px-7">
            <SectionHeading subtitle="our work" mode="dark"/>

            <motion.div :variants="container" initial="hidden" whileInView="show" :viewport="{ once: true, amount: .9 }"
                class="grid md:grid-cols-4 gap-3 mt-4">
                <motion.div :variants="item" v-for="(img, i) in images"
                    :class="['rounded-lg overflow-hidden  h-50 md:h-100 2xl:h-120', i === 0 && 'col-span-2']">
                    <img :key="i" loading="lazy" :src="img" :alt="`work-${i + 1}`" class="h-full w-full object-cover object-center">
                </motion.div>
            </motion.div>
        </div>
    </section>
</template>