<template>
  <el-container>
    <div>
      <aside-menu></aside-menu>
    </div>
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { asideMenu } from '@/components';
import { regionData } from '@/cityData/data';
import NavBar from '@/components/navBar';

export default {
  name: 'layout',
  data() {
    return {};
  },
  methods: {},
  mounted() {
  },
  components: {
    NavBar,
    asideMenu
  }
};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 100%;
}

.el-main {
  background-color: rgb(245, 245, 245);
  color: #333;
}

#app > .el-container {
  margin-bottom: 40px;
  height: 100%;
  overflow: hidden;
}
</style>
