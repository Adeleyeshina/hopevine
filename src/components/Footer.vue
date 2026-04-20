<script setup lang="ts">
import { navLinks } from '../data';

const date = new Date()
</script>

<template>
    <footer class="py-3 bg-primary text-white">
        <div class="container mx-auto px-5 md:px-7 ">
            <div class="flex flex-col text-center gap-y-2 items-center lg:flex-row justify-between">
                <RouterLink to="/" class="text-nowrap text-2xl font-bold">
                    Hopevine Event
                </RouterLink>

                <ul class="flex gap-x-5">
                    <li v-for="({ path, name }) in navLinks" :key="name" class="text-base md:text-lg font-medium hover:text-accent transition-colors duration-300">
                        <RouterLink :to="path">
                            {{ name }}
                        </RouterLink>
                    </li>
                </ul>

                <div class="text-base md:text-lg font-medium">
                    <p>&copy; {{ date.getFullYear() }} Hopevine Services</p>
                </div>
            </div>
        </div>
    </footer>
</template>