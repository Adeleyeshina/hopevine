<script setup lang="ts">
import { easeInOut, motion } from 'motion-v';
import Button from './Button.vue';
import { Phone } from '@lucide/vue';
import WhatsappIcon from '../assets/WhatsappIcon.vue';


withDefaults(defineProps<{
    title: string,
    desc: string,
    buttonText?: string,
    buttonUrl?: string,
    whatsappButton?: boolean,
    callButton?: boolean,
}>(), {
    buttonText: "Contact Us",
    buttonUrl: "/contact",
    whatsappButton: false,
    callButton: false
}
)

const number = import.meta.env.VITE_PHONENUMBER;
const message = "Hi Hopevine Events! I came across your website and I’d love to know more about your services."

const container = {
    hidden: { opacity: 0 },
    show : {opacity : 1, transition : {staggerChildren : .3, delayChildren : .5}}
}

const item = {
    hidden: { opacity: 0, y : 20 },
    show: { opacity: 1, y : 0,  transition: { ease : easeInOut } }
}
</script>

<template>
    <motion.div :variants="container" initial="hidden" whileInView="show"  :viewport="{once : true, amount : .5}"
    class="bg-deep-blue text-white w-full p-4 py-7 md:p-8 rounded-xl flex flex-col lg:flex-row space-y-3 justify-center items-center lg:justify-between text-center lg:text-left">
        <div class="lg:flex-1">
            <motion.h2 :variants="item" class="text-2xl md:text-4xl font-bold">{{ title }}</motion.h2>
            <motion.p :variants="item" class="mt-2 lg:mt-1 font-semibold text-base md:text-lg">{{ desc }}</motion.p>
        </div>

        <!-- buttons -->
        <motion.div :variants="item" class="flex gap-x-3 items-center justify-center gap-y-3 md:flex-row md:space-x-5">
            <a :href="`tel:${number}`"
                class=" py-2 pb-2.5 px-5 transition-colors w-fit border border-primary hover:border-accent duration-300 bg-primary rounded-full text-white hover:bg-accent"
                :class="callButton ? 'inline-block' : 'hidden'">
                <Phone :size="20" class="inline-block mr-1 " />
                Call Us
            </a>
            <a :href="`https://wa.me/${number}?text=${encodeURIComponent(message)}`" rel="nofollow noreferrer noopener"
                target="_blank"
                class="py-2 pb-2.5 px-5 border w-fit transition-colors flex gap-3 items-center duration-300 text-white rounded-full bg-primary border-primary hover:bg-accent hover:border-accent"
                :class="whatsappButton ? 'inline-block' : 'hidden'">
                <WhatsappIcon class="w-6  inline-block mr-1.5"/>
                <span class="hidden md:inline-block">Chat on WhatsApp</span>
                <span class="inline-block md:hidden">WhatsApp</span>
            </a>
            <Button :to="buttonUrl"
                class="text-white rounded-full w-fit bg-accent border-accent hover:bg-primary hover:border-primary">
                {{ buttonText }}
            </Button>
        </motion.div>
    </motion.div>
</template>