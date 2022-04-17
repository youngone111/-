<template>
  <el-card>
    <div>
      <div>
        <el-button size="small" type="primary" @click="handleAdd">
          新增
        </el-button>
        <el-button size="small" type="danger" @click="handleBatchDelete">
          删除
        </el-button>
      </div>
      <div class="mt20">
        <el-table border row-key="id" v-loading="loading" :data="dataSource" @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column prop="id" label="ID">
          </el-table-column>
          <el-table-column prop="city" label="城市">
          </el-table-column>
          <el-table-column prop="address" label="详细地址">
          </el-table-column>
          <el-table-column prop="rent" label="租金">
          </el-table-column>
          <el-table-column prop="rental_mode" label="出租方式">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.rental_mode==1">整租</el-tag>
              <el-tag v-else-if="scope.row.rental_mode==2">合租</el-tag>
              <el-tag v-else-if="scope.row.rental_mode==3">转租</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="lessor_name" label="联系人姓名">
          </el-table-column>
          <el-table-column prop="lessor_phone" label="联系方式">
          </el-table-column>
          <el-table-column label="操作" width="280">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
              <el-button size="small" @click="handleDetail(scope.row.id)">详情</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="mt20">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="40"
            layout="sizes, prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
    <add-lease-house @success="handleSuccess" ref="addForm"></add-lease-house>
  </el-card>
</template>

<script>
import { regionData } from '@/cityData/data';
import { mixins } from '@/mixins';
import AddLeaseHouse from '@/views/leaseHouse/addLeaseHouse';

export default {
  name: 'leaseHouse',
  components: { AddLeaseHouse },
  mixins: [mixins],
  data() {
    return {
      cityOptions: regionData,
      url: {
        list: '/lease'
      }
    };
  }
};
</script>

<style scoped>

</style>
