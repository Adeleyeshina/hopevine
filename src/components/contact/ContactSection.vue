<script setup lang="ts">
import { easeInOut, motion } from 'motion-v';
import ContactForm from './ContactForm.vue';
import ContactInfo from './ContactInfo.vue';

</script>


<template>
    <section class="py-7 md:py-10">
        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            <div class="flex flex-col md:flex-row items-start gap-y-3 md:gap-7">

                <motion.div :initial="{ opacity: 0, x: -80 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.7, ease: easeInOut }" :viewport="{ once: true, amount: .3 }"
                    class="flex-1 md:flex-1/2 order-2 md:order-1 w-full">
                    <ContactForm />
                </motion.div>

                <motion.div 
                :initial="{ opacity: 0, x: 80 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ duration: 0.7, ease: easeInOut, delay : 0.3 }" :viewport="{ once: true, amount: .3 }"
  
                class="flex-1 md:flex-1/2 md:order-2 w-full">
                    <ContactInfo />
                </motion.div>
            </div>
        </div>
    </section>
</template>