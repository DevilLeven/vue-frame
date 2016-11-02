<template>
  <div>
    <p>Im faster</p>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    name:"user",
    mounted(){
      console.log(this.$route);
    }
  }
</script>
