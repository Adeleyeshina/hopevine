<script setup lang="ts">
import type { HomeService } from '../../types';
import { RouterLink } from 'vue-router';
import { MoveRight } from '@lucide/vue';
import { motion } from 'motion-v';
defineProps<HomeService>()
const item = {
    hidden: { opacity: 0, y: 20},
    show: { opacity: 1, y: 0, }
}
</script>

<template>
    <motion.article :variants="item" :style="{ '--card-color': color }"
        class="shadow hover:shadow-xl border-t-5 rounded-md space-y-2 border-t-(--card-color) px-7 py-7">

        <div class="inline-flex p-2 md:p-3 bg-(--card-color)/20 rounded-lg">
            <component :is="icon" :size="25" class="text-(--card-color)" />
        </div>
        <h3 class="text-deep-brown text-lg md:text-2xl font-semibold mt-2">{{ title }}</h3>
        <p class="text-base lg:text-lg font-medium">{{ desc }}</p>

        <RouterLink to="/services" class="group text-base font-medium text-accent font-semibold">Learn more
            <MoveRight :size="18" class="inline-block ml-0.5 group-hover:ml-2 transition-all duration-200" />
        </RouterLink>
    </motion.article>
</template>