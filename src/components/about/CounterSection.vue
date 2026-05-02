<script setup lang="ts">
import CountUp from 'vue-countup-v3'

</script>

<template>
    <section class="bg-gray-100 py-7 md:py-10">
        <div class="container mx-auto px-5 md:px-7 2xl:px-18">
            <div class="grid gap-y-5 place-items-center md:grid-cols-4 text-center">
                <div>
                    <h3 class="text-deep-blue font-semibold text-2xl md:text-3xl">
                        <CountUp :end-val="200" :options="{ suffix: '+', enableScrollSpy: true }" enable-scroll-spy />
                    </h3>
                    <span class="text-base md:text-lg font-medium text-black">Events Completed</span>
                </div>
                <div>
                    <h3 class="text-deep-blue font-semibold text-2xl md:text-3xl">
                        <CountUp :end-val="10" :options="{ suffix: '+', enableScrollSpy: true }" enable-scroll-spy />
                    </h3>
                    <span class="text-base md:text-lg font-medium text-black">Years experience</span>
                </div>
                <div>
                    <h3 class="text-deep-blue font-semibold text-2xl md:text-3xl">
                        Lagos
                    </h3>
                    <span class="text-base md:text-lg font-medium text-black">&beyond</span>
                </div>
                <div>
                    <h3 class="text-deep-blue font-semibold text-2xl md:text-3xl">
                        <CountUp :end-val="100" :options="{ suffix: '%', enableScrollSpy: true }" enable-scroll-spy />
                    </h3>
                    <span class="text-base md:text-lg font-medium text-black">Client Satisfaction</span>
                </div>
            </div>

        </div>
    </section>
</template>