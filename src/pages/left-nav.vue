<template>
  <div class="navi bg-dark" >

    <div class="c-logo">
    <img src="../assets/a0.jpg" style="width: 75px;margin-top: 20px;border-radius: 50%">
    </div>
    <div class="line dk"></div>
    <el-menu theme="dark" router="router">
      <div v-for="nav  in navdata">

        <el-submenu v-bind:index.prop="nav.path" v-if="nav.children">
          <template  slot="title">{{nav.name}}</template>
          <el-menu-item v-bind:index.prop="cnav.path" v-for="cnav in nav.children" > {{cnav.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-bind:index.prop="nav.path"  v-else>{{nav.name}}</el-menu-item>
      </div>

    </el-menu>
  </div>
</template>
<script>
  import navdata from "./left-nav.json";
  export default {
    name: "",
    data(){
      return {
        router:true,
        navdata: navdata
      }
    }

  }
</script>
<style lang="less">
  .bg-dark {
    color: #a6a8b1 !important;
    background-color: #3a3f51;
  }
  .el-menu--dark{
    background: #2e3344 !important;
  }
  .navi {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: #2e3344;
  }
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
    color: #fff !important;
    background: #212327;
  }
  .c-logo {
    text-align: center;
  }

  .line {
    width: 100%;
    height: 2px;
    margin: 10px 0 0px;
    overflow: hidden;
    font-size: 0;
  }

  .bg-dark .dk {
    background-color: #212327;
  }

</style>
