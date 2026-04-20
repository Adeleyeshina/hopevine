<script setup lang="ts">
import { easeInOut, motion } from 'motion-v';



withDefaults(defineProps<{
    subtitle?: string,
    title?: string,
    description?: string,
    mode?: "dark" | "white",
}>(), {
    mode : 'white'
})
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: .2, ease: easeInOut, delayChildren: .5, } }
}
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, }
}

</script>


<template>
    <motion.main :variants="container" initial="hidden" whileInView="show" :viewport="{ once: true, amount: 0.5, }"
        class="text-center md:text-left">
        <motion.p :variants="item" class="text-gray-700 font-semibold uppercase text-sm md:text-base "
            :class="[subtitle && 'mb-2 md:mb-5', mode === 'dark' ? 'text-white' : 'text-gray-700']">
            {{ subtitle }}
        </motion.p>
        <motion.h2 :variants="item" class="text-2xl md:text-3xl text-deep-blue font-bold">{{ title }}</motion.h2>
        <motion.p :variants="item" class="text-black  mt-1 text-base md:text-lg ">{{ description }}</motion.p>
    </motion.main>
</template>