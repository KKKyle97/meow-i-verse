import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DevIndexPage from "@/views/DevIndexPage.vue";

// All routes outlined now are temporary for development
// Future will sort the routes for the project
const routes: Array<RouteRecordRaw> = [
  // Dev index: Program initial sitemap
  {
    path: "/",
    name: "devindex",
    component: DevIndexPage,
  },
  // Landing page: The page where user first landed
  {
    path: "/landing",
    name: "landing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "landing" */ "../views/LandingPage.vue"),
  },
  // Home page: Page where user logged in landed
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomePage.vue"),
  },
  // Profile page: Page showing user details and posts
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfilePage.vue"),
  },
  // Settings page: Page for logged in users to manage their settings
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/SettingsPage.vue"),
  },
  // Search result page: Page showing search results
  {
    path: "/searchresult",
    name: "searchresult",
    component: () =>
      import(
        /* webpackChunkName: "searchresult" */ "../views/SearchResultPage.vue"
      ),
  },
  // Register page: Page showing registration form
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
