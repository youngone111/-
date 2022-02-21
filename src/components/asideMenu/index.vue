<template>
  <div class="menu-container">
    <el-menu
      default-active="2"
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
    <div class="collapse-button" @click="isCollapse=!isCollapse">></div>
  </div>
</template>

<script>
export default {
  name: 'asideMenu',
  data() {
    return {
      isCollapse: false,
      menuList: [
        {
          title: '首页',
          path: '/dashboard',
          meta: {}
        },
        {
          title: '管理房源',
          meta: {},
          children: [{
            title: '需求房源',
            meta: {}
          }, {
            title: '出售房源',
            meta: {}
          }, {
            title: '出租房源',
            meta: {}
          }, {
            title: '房源地区',
            meta: {}
          }]
        }, {
          title: '管理新楼',
          meta: {}
        }
      ]
    };
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
