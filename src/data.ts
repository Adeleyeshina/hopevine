
import { CalendarDays, ChefHat, Sparkles } from '@lucide/vue';
import type { HomeService } from './types';

export const navLinks = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/gallery", name: "Gallery" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
]

export const homeServiceContent: HomeService[] = [
    {
        icon: Sparkles,
        title: 'Decoration',
        desc: 'Floaral arrangements, table settings, ballon art, backdrops, and themed decor for any occasion.',
        color:  '#B07A4A'
    },
    {
        icon: ChefHat,
        title: 'Catering',
        desc: 'Delicious Nigerian and continental cuisine for weddings, birthdays, corporate events, and more.',
        color: '#5C7A3A'
    },
    {
        icon: CalendarDays,
        title: 'Event Plaining',
        desc: 'End-to-end coordination from concept to execution so your event runs smoothly and beautifully.',
        color: '#5B7FA3'
    },
]