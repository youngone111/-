<template>
  <div class="nav-bar">
    <div class="shrink-btn">
      <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" @click="toggleCollapse" />
    </div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'navBar',
  computed:{
    isCollapse() {
      return this.$store.state.menuIsCollapse;
    }
  },
  methods: {
    ...mapMutations(['changeMenuCollapse']),
    toggleCollapse() {
      this.changeMenuCollapse();
    }
  }
};
</script>

<style scoped>
.shrink-btn {
  padding: 0 15px;
  float: left;
  line-height: 60px;
  font-size: 32px;
  cursor: pointer;
}

.shrink-btn:hover {
  background: #e7e7e7;
  transition: 0.5s all;
}

.breadcrumb {
  line-height: 60px;
}
</style>
