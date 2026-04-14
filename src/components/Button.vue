<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed, useAttrs } from 'vue';
import { cn } from '../lib/utils';
import { motion } from 'motion-v';
const attrs = useAttrs()
defineProps < {
    to: string,
}>()

const mergedClass = computed(() => {
    return cn('text-nowrap border font-medium border-soft-cream shadow-soft-cream rounded-lg py-2 pb-2.5 px-5 hover:bg-primary hover:text-warm-white hover:border-primary transition-color duration-300',  attrs.class as string)
})
</script>

<template>
  <motion.a
  :whileHover="{scale : 1.1}"
  :whileTap="{scale : 0.9}"
  >
      <RouterLink :to="to" :class="mergedClass">
        <slot />
    </RouterLink>
  </motion.a>
</template>