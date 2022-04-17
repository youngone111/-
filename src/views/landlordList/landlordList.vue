<template>
  <el-card>
  </el-card>
</template>

<script>
import { mixins } from '@/mixins';

export default {
  name: 'landlordList',
  mixins: [mixins],
  data() {
    return {
      url: {
        list: '/landlord'
      }
    };
  }
};
</script>

<style scoped>

</style>
