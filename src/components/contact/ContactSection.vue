<script setup lang="ts">
import ContactForm from './ContactForm.vue';
import ContactInfo from './ContactInfo.vue';

</script>


<template>
    <section class="py-7 md:py-10">
        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            <div class="flex flex-col md:flex-row items-start gap-y-3 md:gap-5">
                <ContactForm class="flex-1/2 order-2 md:order-1"/>
                <ContactInfo class="flex-1/2 md:order-2"/>
            </div>
        </div>
    </section>
</template>