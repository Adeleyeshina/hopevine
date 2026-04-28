
import { CalendarDays, ChefHat, Clock, MapPin, Sparkles, Star } from '@lucide/vue';
import type { HomeService, Service, Testimonial, Value } from './types';
import Img1 from '../src/assets/images/img-1.webp'

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
        title: 'Event Planning',
        desc: 'End-to-end coordination from concept to execution — so your event runs smoothly and beautifully.',
        color: '#5B7FA3'
    },
]

export const testimonials: Testimonial[] = [
    {
        rating: 5,
        message: "Hopevine handled everything from catering to decor flawlessly. The setup was elegant, and the food was delicious.",
        name: 'Chinedu & Amaka',
        event: 'Traditional wedding, Abuja'
    },
    {
        rating: 5,
        message: "Hopevine turned our reception hall into something straight out of a dream. Every guest kept asking who did the decor!",
        name: 'Adaeze & Femi',
        event: 'Wedding receptiong, Lagos'

    },
    {
        rating: 5,
        message: 'The food was absolutely amazing everyone kept going back for seconds. Professional, punctual and stress-free',
        name: 'Tunde Kehinde',
        event: 'Birthday, Ibadan'

    },
]

export const serviceData: Service[] = [
    {
        icon: Sparkles,
        name: 'Decoration',
        desc: 'We transform any space into something beautiful. Whether you want a lush floral theme, elegant ballon art, or a custom colur-coordinated setup, we bring your vision to life with care and precision.',
        attrs: ['Floral arrangements & centrepieces', 'Ballon art & backdrops', 'Table settings & chair covers ', 'Themed & custom setups'],
        color: '#0882B1',
        img: Img1
    },
    {
        icon: ChefHat,
        name: 'Catering',
        desc: 'Delicious food is at the heart of every great event. We serve authentic Nigerian and continental cuisine — freshly prepared, beautifully presented, and generous in portion',
        attrs: ['Nigerian & continental menus', 'small chops & cocktail bites', 'Buffet & sit-down service', 'Drinks & refreshments'],
        color: '#5C7A3A',
        img: Img1
    },
    {
        icon: CalendarDays,
        name: 'Event Planning',
        desc: "Don't stress the details — that's our job. We plan and coordinate your entire event from start to finish, so you can show up and enjoy every moment.",
        attrs: ['Concept & theme development', 'Vendor coordination', 'Day-of management & logistics', 'Weddings, birthdays & corporate'],
        color: '#5B7FA3',
        img: Img1
    },
]

export const values: Value[] = [
    {
        icon: Star,
        title: "Excellence",
        desc: "We don't cut corners. Every detail, big or small, gets our full attention.",
        color: '#0882B1'
    },
    {
        icon: Clock,
        title: "Reliability",
        desc: "We show up on time, every time. Your event runs smoothly because we plan it that way.",
        color: '#5C7A3A'
    },
    {
        icon: MapPin,
        title: "Care",
        desc: "We treat your event like it's our own family celebration. That's the Hopevine difference.",
        color: '#5B7FA3'
    }
];