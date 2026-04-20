<script setup lang="ts">
import { motion } from 'motion-v';
import Button from './Button.vue';
import { Phone } from '@lucide/vue';


withDefaults(defineProps<{
    title: string,
    desc: string,
    buttonText?: string,
    buttonUrl?: string,
    whatsapp?: boolean,
    callButton?: boolean,
}>(), {
    buttonText: "Contact Us",
    buttonUrl: "/contact"
}
)

const number = import.meta.env.VITE_PHONENUMBER;
const message = "Hi Hopevine Events! I came across your website and I’d love to know more about your services."
</script>

<template>
    <div class="bg-deep-blue text-white w-full p-7 rounded-xl flex items-center justify-between">
        <div class="flex-1">
            <h2>{{ title }}</h2>
            <p>{{ desc }}</p>
        </div>

        <!-- buttons -->
        <motion.div class="space-x-4">
            <Button :to="`tel:${number}`" class="bg-primary rounded-full text-white hover:bg-accent">
                <Phone :size="20" class="inline-block mr-1 " />
                Call Us
            </Button>
            <Button :to="`https://wa.me/${number}?text=${encodeURIComponent(message)}`" rel="nofollow noreferrer noopener"
                target="_blank"
                class="py-2 pb-2.5 px-5 text-white rounded-full bg-primary border-primary hover:bg-accent hover:border-accent">

                Chat on WhatsApp
            </Button>
            <Button :to="buttonUrl"
                class="text-white rounded-full bg-accent border-accent hover:bg-primary hover:border-primary">
                {{ buttonText }}
            </Button>
        </motion.div>
    </div>
</template>