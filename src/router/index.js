import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import Stats from "../components/Dashboard/Stats.vue";
import Support from "../components/Dashboard/Support.vue";
import SignupView from "../views/SignupView.vue";
import Dashboard from "../components/Dashboard/Dashboard.vue";
import BankActions from "../components/Dashboard/Bank/BankActions.vue";
import { useUserStore } from "@/stores/user.js";

const protectedRoutes = ["dashboard", "home", "bankActions", "stats", "support"];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
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
       path: "/bank",
       name: "bankActions",
       component: BankActions,
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
router.beforeEach(async(to, from, next) => {
  if (protectedRoutes.includes(to.name)) {
    try {
      const userStore = useUserStore();
      await userStore.checkAuth();
    } catch (e) {
      localStorage.clear();
      next({name:'login'});
    }
  }
  next();

})

export default router;
