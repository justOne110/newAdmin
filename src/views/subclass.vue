<template>
  <div class="wrap">
    <header>
      <p>
        当前商品分类ID：<span>{{ id }}</span>
      </p>
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
              <el-button @click="rename(drl.row.name, drl.row.id)"
                >修改名称</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!-- 修改名称对话框 -->
    <el-dialog title="修改名称" :visible.sync="dialogVisible" width="30%">
      {{ setid }}
      <el-form>
        <el-form-item>
          <el-input v-model="setname"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      id: "", //id
      setname: "", // 修改名称的双向绑定
      setid: "", // 修改名称的id
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 获取列表数据
    async getList() {
      let res = await this.$axios.category({ categoryId: this.id });
      console.log(res.data);
      this.tableData = res.data.data;
    },

    // 点击修改
    rename(val, id) {
      this.dialogVisible = true; // 打开对话框
      this.setname = val; // 修改名称回填
      this.setid = id; // 修改id
    },

    // 修改确定
    async confirm() {
      this.dialogVisible = false; // 关闭对话框
      let { data: res } = await this.$axios.rename({
        categoryId: this.setid,
        categoryName: this.setname,
      });
      console.log(res);
      if(res.status != 0 ) return this.$message.error('输入参数有误')
    this.getList();

    },
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
