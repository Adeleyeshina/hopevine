<script setup lang="ts">
import { motion } from 'motion-v';
import { values } from '../../data';
import SectionHeading from '../SectionHeading.vue';
import ValuesCard from './ValuesCard.vue';

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: .3, delayChildren: .5 } }
}

</script>

<template>
    <section class="py-7 md:py-10 bg-white text-center">
        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            <SectionHeading subtitle="what drives us" title="Our values" text-center />

            <motion.div :variants="container" initial="hidden" whileInView="show" :viewport="{ once: true, amount: .8 }"
                class="grid grid-cols-1 md:grid-cols-3 mt-7 gap-x-4 items-stretch gap-y-3">
                <ValuesCard v-for="value in values" :key="value.title" v-bind="value" />
            </motion.div>
        </div>
    </section>
</template>