import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import HelloWorld from "@/components/HelloWorld";
import A from "@/components/A";
import B from "@/components/B";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
    children:[
      {
        path: "/a",
        name: "A",
        component: A,
      },
      {
        path: "/b",
        name: "B",
        component: B,
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
