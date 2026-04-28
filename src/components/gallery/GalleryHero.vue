<script setup lang="ts">
import PageHeader from '../PageHeader.vue';

</script>

<template>
    <header class="bg-deep-blue py-7 md:py-10">
        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            <PageHeader subtitle="Our Work"
                desc="Every event is unique. Here's a glimpse of what we've had the honour of being part of.">
                <template #title>
                    Moments we've <span>helped create</span>
                </template>
            </PageHeader>
        </div>
    </header>
</template>