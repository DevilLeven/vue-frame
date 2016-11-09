<template>
  <div>
    <p>
      im user1
    </p>
    <button @click="click">发送请求</button>
  </div>
</template>
<script>
  export default{
    name:"user1",
    mounted(){
      this.$on("onuser",function (data) {
        console.log(data)
      });
    },
    methods:{
      click(){
        this.$http({
          method:'post',
          url:'SIMS/login.html',
          body:{'username':2,'password':20,'Verifycode':1,'isTop':0}
        }).then(function (data) {
          //console.log(data)
        },function (error) {
        //  console.log(error)
        })
      }
    },
    destroyed(){
      this.$off("onuser");
    }
  }
</script>
