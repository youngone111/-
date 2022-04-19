import { getAction, postAction, putAction, deleteAction } from "@/api/methods";

export const mixins = {
  data() {
    return {
      loading: false,
      total: 0,
      queryParams: {
        page: 1,
        pageSize: 10
      },
      dataSource: [],
      batchId: []
    };
  },
  methods: {
    loadData(arg) {
      if (!this.url || !this.url.list) {
        this.$message.error("请设置url的list属性!");
        return;
      }
      if (arg === 1) {
        this.queryParams.page = 1;
      }
      let param = this.getQueryParam();
      this.loading = true;
      getAction(this.url.list, param).then((res) => {
        if (res.success) {
          this.dataSource = res.result.records;
          this.queryParams.page = res.result.page;
          this.queryParams.pageSize = res.result.pageSize;
          this.total = res.result.total;
        } else {
          this.$message.error("查询数据失败");
        }
        this.loading = false;
      });
    },
    handleCurrentChange(page) {
      this.queryParams.page = page;
      this.loadData();
    },
    handleSizeChange(size) {
      this.queryParams.pageSize = size;
      this.loadData();
    },
    handleSuccess() {
      this.loadData();
    },
    handleAdd() {
      this.$refs.addForm.add();
      this.$refs.addForm.disabled = false;
      this.$refs.addForm.title = "新增";
    },
    handleEdit(id) {
      this.$refs.addForm.edit(id);
      this.$refs.addForm.disabled = false;
      this.$refs.addForm.title = "编辑";
    },
    handleSelectionChange(e) {
      this.batchId = e.map((item) => {
        return (item = item.id);
      });
    },
    handleBatchDelete() {
      if (this.batchId.length !== 0) {
        deleteAction(this.url.list, { id: this.batchId.join(",") }).then(
          (res) => {
            console.log(res);
          }
        );
      }
    },
    handleDetail(id) {
      this.$refs.addForm.edit(id);
      this.$refs.addForm.disabled = true;
      this.$refs.addForm.title = "详情";
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.loading = true;
        deleteAction(this.url.list, { id }).then((res) => {
          if (res.success) {
            this.loadData();
            this.$message.success(res.result);
          } else {
            this.$message.error(res.result);
          }
          this.loading = false;
        });
      });
    },
    getQueryParam() {
      return Object.assign({}, this.queryParams);
    }
  },
  mounted() {
    this.loadData(1);
  }
};
