import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue"
import SinglePost from "@/views/SinglePost.vue"

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/anime/:id",
    name: "anime", 
    component: SinglePost
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;

