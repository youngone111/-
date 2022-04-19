import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login", //登录界面
    component: () => import("@/views/logo/login")
  },
  {
    path: "/dashboard",
    component: layout,
    // redirect: "/dashboard",
    children: [
      {
        path: "test",
        meta: {
          title: "测试"
        }
      },
      {
        path: "/dashboard",
        meta: {
          title: "首页"
        },
        component: () => import("@/views/dashboard")
      },
      {
        path: "/leaseHouse",
        meta: {
          title: "出租房源"
        },
        component: () => import("@/views/leaseHouse/leaseHouse")
      },
      {
        path: "/leaseReview",
        meta: {
          title: "房源审核"
        },
        component: () => import("@/views/leaseReview/leaseReview")
      },
      {
        path: "/userList",
        meta: {
          title: "用户列表"
        },
        component: () => import("@/views/userList/userList")
      },
      {
        path: "/landlordList",
        meta: {
          title: "认证房东审核"
        },
        component: () => import("@/views/landlordList/landlordList")
      },
      {
        path: "/adminList",
        meta: {
          title: "管理员列表"
        },
        component: () => import("@/views/adminList/adminList")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// console.log(routes);
export default router;
