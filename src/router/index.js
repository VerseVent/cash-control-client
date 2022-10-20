import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import Stats from "../components/Dashboard/Stats.vue";
import Support from "../components/Dashboard/Support.vue";
import SignupView from "../views/SignupView.vue";
import Dashboard from "../components/Dashboard/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
      {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      children: [
      {
       path: "",
       name: "home",
       component: Dashboard,
      },
      {
       path: "/stats",
       name: "stats",
       component: Stats,
      },
      {
      path: "/support",
      name: "support",
      component: Support,
      },
    ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
