<script setup lang="ts">
import { Mail, MapPin, Phone } from '@lucide/vue';

</script>


<template>
    <aside class="p-5 px-6 lg:px-10 border border-gray-200 rounded-lg">
        <h3 class="text-deep-blue text-xl lg:text-2xl font-bold">Find us directly</h3>

        <div class="mt-5 space-y-5">
            <div class="flex gap-x-2.5 items-center">
                <div class="p-3 bg-primary/20 inline-flex items-center rounded-full">
                    <Mail :size="20" class="text-primary"/>
                </div>
                <div class="-space-y-1">
                    <p>Email</p>
                    <a href="mailto:estherhopevine@gmail.com">estherhopevine@gmail.com</a>
                </div>
            </div>

            <div class="flex gap-x-2.5 items-center">
                <div class="p-3 bg-vine-green/20 inline-flex items-center rounded-full">
                    <Phone :size="20" class="text-vine-green" />
                </div>
                <div class="-space-y-1">
                    <p>WhatsApp & Phone</p>
                    <a href="tel:+2348 0338 44460">+234(0) 803 384 4460</a>
                </div>
            </div>

            <div class="flex gap-x-2.5 items-center">
                <div class="p-3 bg-[#5B7FA3]/20 inline-flex items-center rounded-full">
                    <MapPin :size="20" class="text-[#5B7FA3]" />
                </div>
                <div class="-space-y-1">
                    <p class="text-base">Office Address</p>
                    <p>House 12 Akinwunmi street idito poly road sango</p>
                </div>
            </div>

            <hr class="border-gray-300 mt-7 mb-5">

            <div>
                <p class="text-lg ">Business hours</p>

             <div class="mt-3 space-y-1.5">
                   <div class="flex justify-between">
                        <p>Monday - Friday</p>
                        <p>8:00am - 6:00pm</p>
                    </div>
                   <div class="flex justify-between">
                        <p>Saturday</p>
                        <p>9:00am - 5:00pm</p>
                    </div>
                   <div class="flex justify-between">
                        <p>Sunday</p>
                        <p class="text-primary">By appointment</p>
                    </div>
             </div>
            </div>
        </div>
    </aside>
</template>