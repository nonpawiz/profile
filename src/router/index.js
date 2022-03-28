import { createRouter, createWebHistory } from "vue-router";
import profile from "../components/profile.vue";
import skills from "../components/skills.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "profile",
      component: profile,
    },
    {
      path: "/table",
      name: "skills",
      component: skills,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
