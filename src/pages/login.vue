<template>
  <div>
  <div>
    <my-header ></my-header>
  </div>
  <div style="margin-top: 100px">
    <el-card class="box-card" style="width: 450px;margin: 0 auto;">
      <div slot="header" class="clearfix" style="text-align: center; ">
        <span style="line-height: 36px;font-size: 23px">登录</span>
      </div>
      <div style="text-align: center">
        <el-form :model="from" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="from.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="from.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="from.Verifycode" style="width: 62%;float: left"></el-input>
            <img src="http://192.168.1.102:8080/SIMS/Verify_code.html">
          </el-form-item>
          <el-form-item style="margin-left: -40px">
            <el-button @click="login" type="success" style="width: 90%;margin: 0 auto">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
  </div>
</template>
<style>
  .el-input__inner{
    font-size: 14px;
  }
</style>
<script>
  import Myheader from "./header.vue";
  import route from "../route.config";
  export default{
    components: {
      "my-header":Myheader
    },
    data(){
      return{
        from:{
          username:"",
          password:"",
          Verifycode:"",
          logintype:"PC"
        }
      }
    },
    methods:{
      login(){

        this.$auth.user({
          userid:"1233",email:"wwww",
          roles:["admin","chart","about"]
        });
       // console.log(this.$route)
        //route.push({ path: '/chart' })

        if(this.$auth.check(["chart"])){
          route.replace({ path: '/chart' })
        }

      }
    }
  }

</script>
