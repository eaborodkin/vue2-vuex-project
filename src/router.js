import Vue from "vue"
import VueRouter from "vue-router"
import Main from "@/pages/Main.vue"
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/photo',
        component: () => import('@/pages/PhotoGallery.vue'),
    },
]

export default new VueRouter({
    mode: 'history',
    routes,
})
