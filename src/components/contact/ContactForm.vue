<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import emailjs from "@emailjs/browser"

const initialState = {
    name: '',
    phone: '',
    event: '',
    date: '',
    info: '',
}

const contactForm = reactive({ ...initialState })
const other = ref('')
const loading = ref(false)

const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

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
const resetForm = () => {
    Object.assign(contactForm, initialState)
    other.value = ''
}

const sendMessage = async (data: any) => {
    loading.value = true
    try {
        await emailjs.send(serviceId, templateId, data, publicKey)
        toast.success("Message sent!")
        resetForm()
    } catch (error) {
        loading.value = false
        toast.error(error instanceof Error ? error.message : 'An error occured')
        console.log(error)
    } finally {
        loading.value= false
    }
}

const handleContactForm = () => {
    let payload;
    if (contactForm.event === "other") {
        payload = { ...contactForm, event: other.value }
    } else {
       payload = {...contactForm}
    }
    sendMessage(payload)
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
                <input required type="tel" placeholder="e.g. 0802 0000 000" v-model="contactForm.phone"
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

            <button type="submit" :disabled="loading"
                class="bg-deep-blue disabled:opacity-50 disabled:cursor-not-allowed  text-white w-full py-2 pb-2.5 rounded-md text-base lg:text-lg font-semibold disabled:cursor-disabled cursor-pointer hover:bg-primary transition-colors duration-300"> {{ loading ? 'Sending message...'  : 'Send message'}}
            </button>
        </form>
    </aside>
</template>