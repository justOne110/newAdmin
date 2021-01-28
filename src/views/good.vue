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
          <el-button>查询</el-button>
      </el-form-item>
      <el-form-item >
           <el-button type="primary" >添加商品</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="id" width="180"> </el-table-column>
      <el-table-column prop="name" label="信息" width="180"> </el-table-column>
      <el-table-column prop="address" label="价格"> </el-table-column>
      <el-table-column prop="address" label="状态"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 1,
       options: [{
          value: '1',
          label: '按商品ID查询'
        }, {
          value: '2',
          label: '按商品名称查询'
        }],
        selectValue:"1",// 下拉列表双向绑定
        serachValue:"",//查询关键字
    };
  },
  created() {},
  mounted() {
    this.goodList();
  },
  methods: {
    async goodList() {
      let { data: res } = await this.$axios.goodList(this.pageNum);
      console.log(res);
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>
