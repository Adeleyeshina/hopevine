<script setup lang="ts">
import { testimonials } from '../../data';
import SectionHeading from '../SectionHeading.vue';
import TestimonialCard from '../TestimonialCard.vue';

</script>

<template>
    <section class="bg-white py-7 md:py-10">
        <div class="px-5 md:px-7 container mx-auto">
            <SectionHeading subtitle="Kind Words" title="What our clients say" />

            <div class="grid grid-cols-1 md:grid-cols-3">
                <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :testimony="testimonial" />
            </div>
        </div>
    </section>
</template>