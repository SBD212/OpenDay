import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("../views/HomeView.vue") },
    {
      path: "/event/:id",
      name: "event-details",
      component: () => import("../views/EventDetails.vue"),
    },
  ],
});

export default router;
