<script setup lang="ts">
import { ref } from 'vue';


const buttons = ['All events', 'Weddings', 'Birthday', 'Corporate', 'Naming']

const activeButton = ref("All events")
</script>

<template>
    <section class=" ">
        <div class=" bg-deep-blue  py-4 border-t-2 border-b-2 border-primary">

            <div class="px-5 md:px-7 2xl:px-18 container mx-auto">
                <div class="flex gap-x-10 overflow-auto">
                    <button v-for="button in buttons" :key="button" 
                    class="bg-primary text-nowrap no-scrollbar py-1 px-3" 
                    :class="activeButton === button && 'text-white'">
                        {{ button }}
                    </button>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            sss
        </div>
    </section>
</template>