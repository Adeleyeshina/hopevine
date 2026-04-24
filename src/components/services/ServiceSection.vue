<script setup lang="ts">
import { serviceData } from '../../data';
import ServiceCard from './ServiceCard.vue';

</script>

<template>
    <section class="bg-white">
        <div class="px-5 md:px-7 2xl:px-18 container mx-auto">
            <ServiceCard v-for="(service, index) in serviceData" :key="service.name" v-bind="service" :reverse="index === 1"/>
        </div>
    </section>
</template>