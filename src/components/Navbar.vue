<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { navLinks } from '../data';
import Button from './Button.vue';
import { Menu, X } from '@lucide/vue';
import { ref, watch } from 'vue';
import { easeInOut, motion } from 'motion-v';

const isMenuOpen = ref(false)

const route = useRoute()
watch(() => route.path, () => {
    isMenuOpen.value ? isMenuOpen.value = false : ''
})

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: .1, ease: easeInOut } }

}

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
    transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
    }
}
</script>

<template>
    <motion.nav :initial="{ opacity: 0, y: -50 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.7 }">
        <nav class="bg-warm-white/20 shadow relative">
            <div class="container mx-auto px-5 py-3 relative">

                <!-- Nav view -->
                <div class="display flex justify-between items-center">
                    <!-- Logo -->
                    <RouterLink to="/"
                        class="font-black font-prata text-lg lg:text-[1.8rem] text-nowrap text-primary-color">
                        Hopevine <span class="text-accent italic font-prat ">& Co.</span>
                    </RouterLink>

                    <div class="flex items-center space-x-5">
                        <ul class="md:flex gap-5 items-center hidden">
                            <li v-for="({ path, name }) in navLinks" :key="name">
                                <RouterLink :to="path" class="text-primary font-medium text-lg hover:text-deep-brown"
                                    v-slot="{ isActive }">
                                    <span :class="isActive && 'text-accent'">
                                        {{ name }}
                                    </span>
                                </RouterLink>
                            </li>
                        </ul>
                        <Button to="/contact" class="font-medium text-nowrap">
                            <span class="hidden lg:inline">Book a Consultation</span>
                            <span class="inline lg:hidden">Book Now</span>
                        </Button>

                        <!-- toggle menu -->
                        <button class="bg-soft-cream p-2 rounded cursor-pointer md:hidden"
                            @click="isMenuOpen = !isMenuOpen">
                            <X v-if="isMenuOpen" :size="20" class="text-deep-brown" />
                            <Menu v-else :size="20" class="text-deep-brown" />
                        </button>
                    </div>
                </div>
            </div>
            <!-- mobile menu -->
            <motion.div :variants="container" initial="hidden" :animate="isMenuOpen ? 'show' : 'hidden'" :class="['md:hidden border-t absolute left-0 w-full z-50 bg-warm-white border-soft-cream shadow mt-0 pt-3 pb-3.5 animate-in fade-in duration-700 transition-all',
                isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            ]">
                <ul class="grid place-items-center gap-3">
                    <motion.li v-for="({ name, path }) in navLinks" :key="name" :variants="item">
                        <RouterLink :to="path" v-slot="{ isActive }"
                            class="text-primary font-medium text-lg hover:text-deep-brown">
                            <span :class="isActive && 'text-accent'">
                                {{ name }}
                            </span>
                        </RouterLink>
                    </motion.li>
                </ul>
            </motion.div>
        </nav>

    </motion.nav>
</template>