<template>
  <div class="wrap">
    <header>
      <p>当前商品分类ID：<span>0</span></p>
      <el-button type="primary">添加分类</el-button>
    </header>

    <!-- 表格 -->
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="品类ID" width="200" align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="品类名称"
          width="600"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" width="600" align="center">
          <template slot-scope="drl">
            <div>
              <el-button>修改名称</el-button>
              <el-button @click="look(drl.row.id)">查看子类</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>



<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {},
  mounted() {
    this.getList();
  },
  methods: {
    // 获取列表数据
    async getList() {
      let res = await this.$axios.category();
      console.log(res.data);
      this.tableData = res.data.data;
    },

    // 查看子类
    look(val){
        console.log(val)
        this.$router.push('/category/' + val)
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  header {
    align-items: center;
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
  }
}
</style>
