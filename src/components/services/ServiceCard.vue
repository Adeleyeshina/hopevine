<script setup lang="ts">
import type { Service } from '../../types';

interface ServiceTypes extends Service {
    reverse?: boolean
}

defineProps<ServiceTypes>()
</script>

<template>
    <article class="">
        <div :style="{ '--card-color': color }" class="mt-5 md:mt-0 flex items-center flex-col md:flex-row " :class="reverse ? 'md:flex-row-reverse' : ''">
            <!-- content -->
            <div class="flex-1/2" :class="reverse ? 'md:pl-10' : 'md:pr-10'">
                <div class="inline-flex p-2 md:p-3 bg-(--card-color)/20 rounded-lg">
                    <component :is="icon" :size="25" class="text-(--card-color)" />
                </div>

                <h3 class="text-deep-blue text-lg md:text-2xl font-semibold mt-2">{{ name }}</h3>
                <p class="text-base lg:text-lg font-medium">{{ desc }}</p>

                <div class="text-base lg:text-lg font-medium text-(--card-color) mt-1">
                    <p>What's included:</p>
                    <ul >
                        <li class="text-base lg:text-lg font-medium list-disc list-inside marker:text-(--card-color)"
                            v-for="attr in attrs" :key="attr">{{ attr }}</li>
                    </ul>
                </div>

            </div>

            <!-- img -->
            <div class="h-50 md:h-100 2xl:h-150 overflow-hidden flex-1/2 mt-3 rounded-md md:mt-0 md:rounded-none">
                <img :src="img" alt="service img" class="object-cover w-full h-full">
            </div>
        </div>
    </article>
</template>