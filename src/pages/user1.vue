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
          url:'http://211.149.193.19:8080/api/customers',
          body:{'websiteId':2,'pageSize':20,'pageNo':1,'isTop':0}
        }).then(function (data) {
          //console.log(data)
        },function (error) {
        //  console.log(error)
        })
      }
    }
  }
</script>
