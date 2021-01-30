<template>
  <div>
    <el-form :inline="true">
      <el-form-item>
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="serachValue" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">添加商品</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column label="信息" width="180">
        <template slot-scope="drl">
          <p>{{ drl.row.name }}</p>
          <p>{{ drl.row.subtitle }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="address" label="状态">
        <template slot-scope="drl">
          <span v-if="drl.row.status == 1">在售</span>
          <span v-else>已下架</span>
          <el-button
            @click="soldOut(drl.row.status, drl.row.id)"
            v-if="drl.row.status == 1"
            type="warning"
            size="mini"
            >下架</el-button
          >
          <el-button
            @click="soldOut(drl.row.status, drl.row.id)"
            v-else
            type="warning"
            size="mini"
            >上架</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="drl">
          <span @click="goDetail(drl.row.id)">查看</span>
          &nbsp;
          <span @click="goComplice(drl.row.id)">编辑</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 1,
      options: [
        {
          value: "productId",
          label: "按商品ID查询",
        },
        {
          value: "productName",
          label: "按商品名称查询",
        },
      ],
      selectValue: "productId", // 下拉列表双向绑定
      serachValue: "", //查询关键字
      tableData: [], // 表格数据
      total: 0, // 总条数
      pageNum: 1, // 页码
      //   pageSize: 0, // 每页条数
    };
  },
  created() {},
  mounted() {
    this.goodList();
  },
  methods: {
    async goodList() {
      let { data: res } = await this.$axios.goodList({ pageNum: this.pageNum });
      console.log(res);
      this.tableData = res.data.list;
      this.total = res.data.total;
      this.pageNum = res.data.pageNum;
      this.pageSize = res.data.pageSize;
    },

    // 分页事件
    handleCurrentChange(val) {
      console.log(val);
      this.pageNum = val;
      this.goodList();
    },
    // 查询
    async search() {
      let selectValue = this.selectValue;
      if (selectValue == "productId") {
        let { data: res } = await this.$axios.search({
          productId: this.serachValue,
        });
        this.tableData = res.data.list;
      } else {
        let { data: res } = await this.$axios.search({
          productName: this.serachValue,
        });
        this.tableData = res.data.list;
      }
    },

    // 上下架
    async soldOut(val, id) {
      let msg = await this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).catch(err=>err)

      console.log(msg)

      if(msg == "cancel") return this.$message.info('已取消更改')

      let status;
      val == 1 ? (status = 2) : (status = 1);
      let data = {
        productId: id,
        status: status,
      };
      let { data: res } = await this.$axios.soldOut(data);
      console.log(res);
      if(res.status != 0) return this.$message.error(res.data)

      this.$message.success(res.data)
      this.goodList()
    },

    // 进入详情 查看
    goDetail(id){

        this.$router.push(`/good/detail?id=${id}`)
    },
    // 进入编辑
    goComplice(id){
        this.$router.push(`/good/complice?id=${id}`)
    }
  },
  computed: {},
};
</script>

<style scoped>
</style>
