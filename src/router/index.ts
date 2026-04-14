import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Gallery from "../views/Gallery.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Services from "../views/Services.vue";

const routes = [
   {
      path: '/',
      name: "Home",
      component: Home
   },
   {
      path: '/services',
      name: "Services",
      component: Services
   },
   {
      path: '/gallery',
      name: "Gallery",
      component: Gallery
   },
   {
      path: '/about',
      name: "About",
      component: About
   },
   {
      path: '/contact',
      name: "Contact",
      component: Contact
   },
   {
      path: '/:pathMatch(.*)',
      name: "NotFound",
      component: NotFound,
      meta : {hideNavbar : true}
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router