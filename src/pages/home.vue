<template>
  <div >


    <div class="leftnav">
      <left></left>
    </div>
    <div class="content">
      <div class="c-header">
        <my-header ></my-header>
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
  html{
    margin: 0;
    padding: 0;
  }
  body{
    margin: 0;
    padding: 0;
    background: #f4f4f4;
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.42857143;
    color: #58666e;
  }
  .leftnav{
    width: 210px;
    float: left;

    position: fixed;
    top: 0;
    bottom: 0;
  }
  .content{
    position: relative;
    margin-left: 210px;
    .c-header{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
    }
  }
  ul{
    margin-top: 0;
  }

</style>
