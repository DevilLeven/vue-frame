<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import until from "./until"
export default {
  name: 'app',
  created(){
    //console.log(this);
  },
  mounted(){
   // console.log(this);
    until.onuserSetCallback(function (data) {
      console.log(data);
    })
  }
}
</script>

<style>
  a:-webkit-any-link {
    color: #fff;
    text-decoration: none;
    cursor: auto;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
