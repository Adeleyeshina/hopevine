<script setup lang="ts">
import { Star } from '@lucide/vue';
import type { Testimonial } from '../types';
import { getInitials } from '../utils/utils';
import { motion } from 'motion-v';


defineProps<{
    testimony: Testimonial
}>()

const item = {
    hidden: { opacity: 0, y : 20 },
    show: { opacity: 1, y : 0, }
}
</script>

<template>
    <motion.article :variants="item" class="space-y-5 border-2 border-gray-200 p-5 rounded-xl">
        <div class="flex gap-1">
            <span v-for="_ in testimony.rating"><Star :size='16' color="#fbbf24" fill="#fbbf24"/></span>
        </div>
        <p class="italic text-base md:text-lg">"{{ testimony.message }}"</p>

        <div class="flex items-center gap-x-3">
            <div class="h-12 w-12 flex items-center justify-center font-semibold rounded-full bg-primary text-white">
                {{ getInitials(testimony.name) }}
            </div>
            <div class="m-0">
                <p class="text-sm md:text-base font-semibold">{{ testimony.name }}</p>
                <p class="text-base -mt-1">{{ testimony.event }}</p>
            </div>
        </div>
    </motion.article>
</template>

