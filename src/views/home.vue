<template>
  <div class="wrap">
    <el-container>
      <el-header>
        <div>ADMIN</div>
        <div>
          欢迎<span>admin</span>
          <el-button @click="loginOut">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#2B2E33"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/index">
              <i class="el-icon-eleme"></i>
              <span slot="title">Home</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span>商品</span>
              </template>

              <el-menu-item index="/good">商品管理</el-menu-item>
              <el-menu-item index="/category">品类管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>订单</span>
              </template>

              <el-menu-item index="/order">订单管理</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="(item, index) in this.$store.state.bread"
              :key="index"
              >
            {{ item.name }}
              </el-breadcrumb-item
            >
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    async loginOut(){
      let {data:res} = await this.$axios.loginOut()

      console.log(res)
      if(res.status == 0) {
        this.$message.success('退出登录')
        this.$router.push('/')
      }
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #ddd;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      background: #ffffff;
      padding: 0 !important;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:nth-of-type(1) {
        box-sizing: border-box;
        padding-left: 5px;
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 26px;
        background: rgb(13, 13, 31);
        color: #ffffff;
      }
    }
    .el-container {
      height: 100%;
      .el-aside {
        height: 100%;
        background: #2b2e33;
      }
      .el-main{
        width: 100%;
        height: 100%; 
        .el-breadcrumb{
          width: 100%;
          height: 40px;
        display: flex;
        align-items: center;
          font-size: 26px;
          color: #000 !important;

          border-bottom: 1px solid rgb(141, 138, 138);
         margin-bottom: 10px;
         .el-breadcrumb-item{
           width: 400px;
         }
       
        }
      }
    }
  }
}
</style>
