<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed, useAttrs } from 'vue';
import { cn } from '../lib/utils';
import { motion } from 'motion-v';

const attrs = useAttrs();

defineProps<{
  to: string;
}>();

const mergedClass = computed(() => {
  return cn(
    'text-nowrap border font-medium text-primary border-primary shadow-soft-cream rounded-lg py-2 pb-2.5 px-5 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300',
    attrs.class as string
  );
});
</script>

<template>
  <RouterLink :to="to" custom v-slot="{ navigate, href }">
    <motion.a :href="href" @click="navigate" :class="mergedClass" :whileHover="{ scale: 1.1 }"
      :whileTap="{ scale: 0.9 }">
      <slot />
    </motion.a>
  </RouterLink>
</template>