<script setup lang="ts">
import { easeInOut, motion } from 'motion-v';
import type { Value } from '../../types';

defineProps<Value>()

const items = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: .3, delayChildren: .5, ease: easeInOut } }
}
</script>

<template>
    <motion.article :style="{ '--card-color': color }" :variants="items">
        <div class="bg-white border-2 border-gray-200  h-full p-5 rounded-xl">
            <div class="inline-flex p-2 md:p-3 bg-(--card-color)/20 rounded-full">
                <component :is="icon" :size="20" class="text-(--card-color)" />
            </div>
            <h3 class="text-deep-blue text-xl md:text-xl font-semibold mt-2">{{ title }}</h3>
            <p class="text-base leading-5 md:text-lg font-medium md:leading-6 tracking-wide">{{ desc }}</p>
        </div>
    </motion.article>
</template>