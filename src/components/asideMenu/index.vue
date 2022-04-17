<template>
  <div class="menu-container">
    <el-scrollbar style="height: 100%">
      <el-menu
        :default-active="menuList[0].path"
        class="el-menu"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        router
        active-text-color="#ffd04b">
        <template v-for="(item,index) in menuList">
          <!--        若没有children属性，则直接渲染menu-item-->
          <template v-if="!item.children">
            <el-menu-item :index="item.path">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
          <template v-else>
            <el-submenu :index="String(index)">
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="(item2,index2) in item.children">
                <template v-if="!item2.children">
                  <el-menu-item :index="item2.path">
                    <i :class="item2.meta.icon"></i>
                    <span slot="title">{{ item2.title }}</span>
                  </el-menu-item>
                </template>
                <template v-else>
                  <el-submenu :index="String(index2)">
                    <template slot="title">
                      <i :class="item2.meta.icon"></i>
                      <span slot="title">{{ item2.title }}</span>
                    </template>
                    <template v-for="(item3,index3) in item2.children">
                      <el-menu-item :index="item3.padding">
                        {{ item3.title }}
                      </el-menu-item>
                    </template>
                  </el-submenu>
                </template>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  name: 'asideMenu',
  data() {
    return {
      menuList: [
        {
          title: '首页',
          path: '/dashboard',
          meta: {
            icon: 'el-icon-s-home'
          }
        },
        {
          title: '房源管理',
          meta: {},
          children: [{
            title: '房源列表',
            meta: {},
            path: '/leaseHouse'
          }, {
            title: '房源审核',
            meta: {},
            path: '/leaseReview'
          }]
        },
        {
          title: '用户管理',
          meta: {},
          children: [{
            title: '用户列表',
            meta: {},
            path:'/userList'
          }, {
            title: '认证房东审核',
            meta: {},
            path:'/landlordList'
          }]
        },
        {
          title: '操作日志',
          meta: {}
        },
        {
          title: '管理员列表',
          meta: {}
        }
      ]
    };
  },
  methods: {
    ...mapMutations(['changeMenuCollapse']),
    toggleCollapse() {
      this.changeMenuCollapse();
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.menuIsCollapse;
    }
  }
};
</script>

<style scoped>
.el-menu {
  height: 100%;
}

.el-menu:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.menu-container {
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
}

.collapse-button {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.el-submenu__title > .el-menu-item {
  text-align: center;
}
</style>
<style>
.el-scrollbar__view {
  height: 100%;
}
</style>
