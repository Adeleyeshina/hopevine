<script setup lang="ts">
import { motion } from 'motion-v';
import SectionHeading from '../SectionHeading.vue';
import { homeServiceContent } from '../../data';
import { RouterLink } from 'vue-router';
import {  MoveRight } from '@lucide/vue';

</script>

<template>
    <motion.section class="bg-white py-7 ">
        <div class="container mx-auto px-5 md:px-7">
            <SectionHeading subtitle="what we offer" title="Our services" desc
                description="Tailored to your vision, delivered with care" />

            <div class="grid grid-cols-3 gap-x-7 mt-5">
                <article v-for="({ icon, title, desc, color }, idx) in homeServiceContent" :key="idx"
                :style ="{'--card-color' :  color}"
                    class="shadow hover:shadow-xl border-t-5 rounded-md space-y-2 border-t-(--card-color) px-7 py-7" >

                   <div class="inline-flex p-3 bg-(--card-color)/20 rounded-lg">
                        <component :is="icon" :size="25" class="text-(--card-color)" />
                    </div>
                    <h3>{{ title }}</h3>
                    <p>{{ desc }}</p>

                    <RouterLink to="/services" class="group">Learn more
                        <MoveRight :size="18" class="inline-block ml-0.5 group-hover:ml-2 transition-all duration-200" />
                    </RouterLink>
                </article>
            </div>
        </div>
    </motion.section>
</template>