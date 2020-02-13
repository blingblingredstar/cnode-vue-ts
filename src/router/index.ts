import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Topic from "@/views/Topic.vue";
import User from "@/views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/topic/:id&name=:name",
    name: "Topic",
    component: Topic
  },
  {
    path: "/user/:name",
    name: "User",
    component: User
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
