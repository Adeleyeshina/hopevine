<script setup lang="ts">
import { motion } from 'motion-v';
import SectionHeading from '../SectionHeading.vue';
import { homeServiceContent } from '../../data';
import HomeServiceCard from './HomeServiceCard.vue';

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
}
</script>


<template>
    <motion.section class="bg-white py-7 md:py-10">
        <div class="container mx-auto px-5 md:px-7">
            <SectionHeading subtitle="what we offer" title="Our services" desc
                description="Tailored to your vision, delivered with care" />

            <motion.div :variants="container" initial="hidden" whileInView="show" :viewport="{ once: true, amount: .5 }"
                class="grid md:grid-cols-3 gap-x-7 mt-5 gap-y-5">
                <HomeServiceCard v-for="service in homeServiceContent" :key="service.id" v-bind="service" />
            </motion.div>
        </div>
    </motion.section>
</template>