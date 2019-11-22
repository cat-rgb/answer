import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../App"),
      children: [
        {
          path: "",
          component: () => import("../page/home.vue")
        },
        {
          path: "answer",
          component: () => import("../page/answer.vue")
        },
        {
          path: "defen",
          component: () => import("../page/defen.vue")
        }
      ]
    }
  ]
});
