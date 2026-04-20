
import { CalendarDays, ChefHat, Sparkles } from '@lucide/vue';
import type { HomeService, Testimonial } from './types';

export const navLinks = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/gallery", name: "Gallery" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
]

export const homeServiceContent: HomeService[] = [
    {
        id: 1,
        icon: Sparkles,
        title: 'Decoration',
        desc: 'Floaral arrangements, table settings, ballon art, backdrops, and themed decor for any occasion.',
        color: '#0882B1'
    },
    {
        id: 2,
        icon: ChefHat,
        title: 'Catering',
        desc: 'Delicious Nigerian and continental cuisine for weddings, birthdays, corporate events, and more.',
        color: '#5C7A3A'
    },
    {
        id: 3,
        icon: CalendarDays,
        title: 'Event Plaining',
        desc: 'End-to-end coordination from concept to execution so your event runs smoothly and beautifully.',
        color: '#5B7FA3'
    },
]

export const testimonials : Testimonial[] = [
    {
        rating: 5,
        message: "Hopevine handled everything from catering to decor flawlessly. The setup was elegant, the food was delicious, and we didn’t have to worry about a thing all day.",
        name: 'Chinedu & Amaka',
        event: 'Traditional wedding, Abuja'
    },
    {
        rating: 4.5,
        message: "Hopevine turned our reception hall into something straight out of a dream. Every guest kept asking who did the decor!",
        name: 'Adaeze & Femi',
        event : 'Wedding receptiong, Lagos'       
        
    },
    {
        rating: 5,
        message: 'The food was absolutely amazing everyone kept going back for seconds. Professional, punctual and stress-free',
        name: 'Adaeze & Femi',
        event : 'Wedding receptiong, Lagos'       
        
    },
]