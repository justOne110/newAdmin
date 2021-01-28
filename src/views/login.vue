<template>
  <div class="wrap">
    <div class="box">
      <p>欢迎登陆admin后台系统</p>
      <el-form :model="userInfo" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userInfo.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 
      userInfo:{
        username:"admin",
        password:"admin"
      },
      //
      rules:{
        username:[
          {required:true,message:"用户名不能为空",tarrget:"blur"}
        ],
        password:[
          {required:true,message:"密码不能为空",tarrget:"blur"}
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    login(){
      this.$refs.ruleForm.validate(async val=>{
        
        if(!val) return

        let {data:res} = await this.$axios.login(this.userInfo)

        console.log(res)
        if(res.status != 0) return this.$message.error(res.msg)
        
        this.$message.success(res.msg)

        this.$router.push('/home')


      })
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background: #ddd;
  .box {
    background: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    padding: 20px 40px;
    box-sizing: border-box;
    box-shadow: 10px 10px 5px #888888;
    border-radius: 10px;
    & > p {
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
      font-size: 22px;
      height: 30px;
      line-height: 30px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
