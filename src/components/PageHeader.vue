<script setup lang="ts">
import { easeIn, motion } from 'motion-v';

defineProps<{
    subtitle: string,
    desc: string
}>()

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: .2, delayChildren: 0.2, ease: easeIn } }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}
</script>

<template>
    <motion.div :variants="container" initial="hidden" animate="show"
        class="page-header text-center max-w-5xl w-full mx-auto space-y-1 md:space-y-3">

        <motion.p :variants="item" class="font-semibold uppercase text-sm md:text-base text-white">
            {{ subtitle }}
        </motion.p>

        <motion.h2 :variants="item"
            class="text-white text-center leading-10 text-3xl xl:text-[2.7rem] font-extrabold xl:leading-14">
            <slot name="title" />
        </motion.h2>

        <motion.p :variants="item" class="text-white text-base xl:text-2xl font-medium text-center md:leading-9">
            {{ desc }}
        </motion.p>
    </motion.div>
</template>