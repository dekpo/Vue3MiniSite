import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/Vue3MiniSite/",
            name: "Home",
            component: Home
        },
        {
            path: "/Vue3MiniSite/shop",
            name: "Shop",
            component: Shop
        },
        {
            path: "/Vue3MiniSite/contact",
            name: "Contact",
            component: Contact
        }
    ]
})

export default router