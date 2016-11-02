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

</style>
