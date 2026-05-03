<script setup lang="ts">
import { computed, reactive, ref } from 'vue';


const contactForm = reactive({
    name: '',
    phone: '',
    event: '',
    date: '',
    info: '',
})
const other = ref('')
const today = computed(() => {
    const d = new Date()
    return d.toISOString().split('T')[0] // format: YYYY-MM-DD
})
const openDatePicker = (e: Event) => {
    const input = e.target as HTMLInputElement
    if (input.showPicker) {
        input.showPicker()
    }

}

const handleContactForm = () => {
    if (contactForm.event === "other") {
        alert(JSON.stringify(({ ...contactForm, event: other.value })))
    } else {
        alert(JSON.stringify(contactForm))
    }
}
</script>


<template>
    <aside class="p-5 px-6 lg:px-10 border border-gray-200 rounded-lg">
        <h3 class="text-deep-blue text-xl lg:text-2xl font-bold">Send us a message</h3>
        <form class="mt-4 space-y-4 pb-3" @submit.prevent="handleContactForm">
            <div class="flex flex-col ">
                <label for="name" class="mb-1.5 ml-1 text-base ">Your name</label>
                <input required type="text" placeholder="e.g. John Doe" v-model="contactForm.name"
                    class="border-0 outline-0 ring-2 ring-gray-200/80 py-2 px-5 focus:ring-primary rounded-md">
            </div>
            <div class="flex flex-col">
                <label for="name" class="mb-1.5 ml-1  text-base">Phone/ WhatsApp number</label>
                <input required type="tel" pattern="[0-9]{11}" placeholder="e.g. 0802 0000 000" v-model="contactForm.phone"
                    class="border-0 outline-0 ring-2 ring-gray-200/80 py-2 px-5 focus:ring-primary rounded-md">
            </div>
            <div class="flex flex-col">
                <label for="name" class="mb-1.5 ml-1  text-base">Type of Event</label>
                <select required v-model="contactForm.event"
                    class="border-0 outline-0 ring-2 ring-gray-200/80 py-2 px-5 focus:ring-primary rounded-md">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corportate">Corporate</option>
                    <option value="naming">Naming</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div v-if="contactForm.event === 'other'" class="flex flex-col">
                <label for="name" class="mb-1.5 ml-1  text-base">Tell us the type</label>
                <input required type="text" placeholder="e.g. Wedding" v-model="other"
                    class="border-0 outline-0 ring-2 ring-gray-200/80 py-2 px-5 focus:ring-primary rounded-md">
            </div>
            <div class="flex flex-col">
                <label for="name" class="mb-1.5 ml-1  text-base">Event Date</label>
                <input required @click="openDatePicker" :min="today" type="date" v-model="contactForm.date"
                    class="border-0 outline-0 ring-2 w-full ring-gray-200/80 py-2 px-5 focus:ring-primary rounded-md">
            </div>
            <div class="flex flex-col">
                <label for="name" class="mb-1.5 ml-1  text-base">Tell us about your event</label>
                <textarea v-model="contactForm.info"
                    class="border-0 outline-0 ring-2 resize-none ring-gray-200/80 py-2 px-5 focus:ring-primary rounded-md"
                    cols="30" rows="3" placeholder="Describe your vision, guest count, location"></textarea>
            </div>

            <button type="submit"
                class="bg-deep-blue text-white w-full py-2 pb-2.5 rounded-md text-base lg:text-lg font-semibold cursor-pointer hover:bg-primary transition-colors duration-300">Send
                message
            </button>
        </form>
    </aside>
</template>