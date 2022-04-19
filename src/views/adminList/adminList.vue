<template>
  <el-card :style="{ height: '100%' }">
    <el-table :data="dataSource">
      <el-table-column label="id" prop="id" />
      <el-table-column label="昵称" prop="nickName" />
      <el-table-column label="头像">
        <template slot-scope="scope">
          <el-image
            style="height: 50px; width: 50px"
            :src="scope.row.avatarUrl"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="所在城市"></el-table-column>
      <el-table-column label="性别" prop="gender">
        <template slot-scope="scope">
          <i v-if="scope.row.gender === 1" class="iconfont icon-man"></i>
          <i v-else-if="scope.row.gender === 2" class="iconfont icon-man"></i>
        </template>
      </el-table-column>
      <el-table-column label="身份" prop="identity">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.identity === 0">租客</el-tag>
          <el-tag type="success" v-else-if="scope.row.identity === 1"
            >房东</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop="realName" />
      <el-table-column label="联系方式" prop="phone" />
    </el-table>
  </el-card>
</template>

<script>
import { mixins } from "@/mixins";

export default {
  name: "userList",
  mixins: [mixins],
  data() {
    return {
      url: {
        list: "/user"
      }
    };
  }
};
</script>

<style scoped></style>
