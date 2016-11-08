<template>
  <div >


    <div class="leftnav">
      <left></left>
    </div>
    <div class="content">
      <div class="c-header">
        <my-header ></my-header>
      </div>
      <div class="content-bottom">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import left from "./left-nav.vue";
  import Myheader from "./header.vue";

  export default {
    name: 'home',
    components: {
      left,
      "my-header":Myheader
    },
    created(){

    }
  }
</script>

<style lang="less">
@import "../css/home.scss";
</style>
