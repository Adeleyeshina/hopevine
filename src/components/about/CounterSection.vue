<script setup lang="ts">
import { ref } from 'vue';
import CountUp from 'vue-countup-v3'

const start = ref(false)
</script>

<template>
    <section v-intersection-observer="() => start = true" class="bg-gray-100 py-7 md:py-10">
        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            <div>
                <div>
                   <CountUp :end-val="200" suffix="hhh+" :enableScrollSpy="true" />
                </div>
            </div>
        </div>
    </section>
</template>