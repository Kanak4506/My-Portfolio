import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         redirect: 'portfolio'
      },
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "portfolio",
               name: "portfolio",
               component: () => import("@/pages/Portfolio/portfolio.vue"),
            },
            // {
            //    path: "content",
            //    name: "content",
            //    component: () => import("@/pages/Home/Content.vue"),
            // },
            {
               path: "test",
               name: "test",
               component: () => import("@/pages/Test/test.vue"),
            },
            
         ],
      },
   ],
});

export default router;
