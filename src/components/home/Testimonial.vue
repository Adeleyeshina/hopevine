<script setup lang="ts">
import { motion } from 'motion-v';
import { testimonials } from '../../data';
import SectionHeading from '../SectionHeading.vue';
import TestimonialCard from '../TestimonialCard.vue';

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
}
</script>

<template>
    <section class="bg-white py-7 md:py-10">
        <div class="px-5 md:px-7 container mx-auto">
            <SectionHeading subtitle="Kind Words" title="What our clients say" />

            <motion.div :variants="container" initial="hidden" whileInView="show"
                :viewport="{ once: true, amount: 0.8 }" class="grid grid-cols-1 md:grid-cols-3 gap-x-3 mt-7 gap-y-3">
                <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :testimony="testimonial" />
            </motion.div>
        </div>
    </section>
</template>