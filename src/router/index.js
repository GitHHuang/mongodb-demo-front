import { createRouter, createWebHashHistory } from "vue-router";
import HelloWord from '../components/HelloWorld.vue'
import ContentList from '@/components/content/ContentList.vue'

export const routes = [
    {
        path: "/",
        component:HelloWord
    },
    {
        path:"/ContentList",
        name:"ContentList",
        component:ContentList
    }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
