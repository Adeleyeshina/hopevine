<script setup lang="ts">
import { ref } from 'vue';
import { galleryImage } from '../../data';

const buttons = [
    { key: 'allEvents', label: 'All events' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'birthday', label: 'Birthday' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'naming', label: 'Naming' }
]

const activeButton = ref("allEvents")
const images = ref(galleryImage.allEvents)

const handleButtonClick = (key: string) => {
    activeButton.value = key
    images.value = galleryImage[key]
}
</script>

<template>
    <section class=" ">
        <div class=" bg-deep-blue  py-4 border-t-2 border-b-2 border-primary">

            <div class="px-5 md:px-7 2xl:px-18 container mx-auto">
                <div class="flex gap-x-7 overflow-auto">
                    <button v-for="{ key, label } in buttons" :key="key"
                        :class="['text-nowrap no-scrollbar py-1 px-5 pb-1.5 cursor-pointer text-white rounded-full', activeButton === key ? 'bg-accent' : 'bg-primary']"
                        @click="handleButtonClick(key)">
                        {{ label }}
                    </button>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            <div>
                <p class="text-center" v-if="images.length === 0">No images added yet</p>
                <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-3 gap-3">
                    <img v-for="(img, index) in images" :src="img" :alt="`img-${index + 1}`" :key="index"
                        class="w-50 h-50 md:w-200 md:h-80 object-cover">
                </div>
            </div>
        </div>
    </section>
</template>