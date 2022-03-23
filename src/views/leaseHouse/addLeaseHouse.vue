<template>
  <el-dialog :visible.sync="visible" @close="handleClose">
    <template slot="title">
      <div style="font-size: 20px;border-bottom: 1px solid #b4b4b4;padding-bottom: 10px">{{ title }}</div>
    </template>
    <el-form :model="form" label-width="auto" :disabled="disabled">
      <el-form-item prop="city" label="城市：">
        <el-cascader clearable size="small" class="wid100" :props="{value:'label'}" :options="cityOptions"
                     v-model="form.city" />
      </el-form-item>
      <el-form-item prop="area" label="小区或商圈名：">
        <el-input clearable size="small" v-model="form.area" />
      </el-form-item>
      <el-form-item prop="lever" label="楼层：">
        <el-input clearable size="small" v-model="form.lever" />
      </el-form-item>
      <el-form-item prop="address" label="详细地址：">
        <el-input clearable size="small" v-model="form.address" />
      </el-form-item>
      <el-form-item prop="rent" label="租金：">
        <el-input clearable size="small" v-model="form.rent" />
      </el-form-item>
      <el-form-item prop="rental_mode" label="出租方式：">
        <el-select class="wid100" clearable v-model="form.rental_mode" size="small">
          <el-option v-for="(item,index) in rentalMode" :value="item.value" :key="index" :label="item.label" />
        </el-select>
      </el-form-item>
      <el-form-item prop="house_type" label="户型：">
        <el-input clearable size="small" v-model="form.house_type"></el-input>
      </el-form-item>
      <el-form-item prop="area_size" label="面积：">
        <el-input clearable size="small" v-model="form.area_size"></el-input>
      </el-form-item>
      <el-form-item prop="lessor_name" label="联系人姓名：">
        <el-input clearable size="small" v-model="form.lessor_name" />
      </el-form-item>
      <el-form-item prop="lessor_phone" label="联系方式：">
        <el-input clearable size="small" v-model="form.lessor_phone" />
      </el-form-item>
    </el-form>
    <el-row type="flex" justify="center" v-if="!disabled">
      <el-button size="small" @click="visible = false">
        取消
      </el-button>
      <el-button size="small" type="primary" @click="handleSubmit">
        确定
      </el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import { regionData } from '@/cityData/data';
import { getAction, postAction, putAction } from '@/api/methods';

export default {
  name: 'addLeaseHouse',
  data() {
    return {
      url: {
        submit: '/lease'
      },
      title: '',
      disabled: false,
      visible: false,
      cityOptions: regionData,
      rentalMode: [{
        label: '整租',
        value: 1
      }, {
        label: '合租',
        value: 2
      }, {
        label: '转租',
        value: 3
      }],
      form: {}
    };
  },
  methods: {
    add() {
      this.visible = true;
    },
    edit(id) {
      getAction(`${this.url.submit}/${id}`).then((res) => {
        res.result.city = res.result.city.split(',');
        this.form = res.result;
      });
      this.visible = true;
    },
    handleClose() {
      this.form = {};
    },
    handleSubmit() {
      let formData = Object.assign({}, this.form);
      formData.city = formData.city.join(',');
      if (formData.id) {
        putAction(this.url.submit, formData).then((res) => {
          if (res.success) {
            this.$message.success(res.result);
            this.$emit('success');
            this.visible = false;
          } else {
            this.$message.error('修改房源信息失败');
          }
        });
      } else {
        postAction(this.url.submit, formData).then((res) => {
          if (res.success) {
            this.$message.success(res.result);
            this.$emit('success');
            this.visible = false;
          } else {
            this.$message.error('发布房源信息失败');
          }
        });
      }
    }
  }
};
</script>

<style scoped>

</style>
