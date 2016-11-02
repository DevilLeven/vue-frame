<template>
  <div >
    <img src="../assets/logo.png">
    <hello></hello>
    <textarea name="content" style="width:800px;height:400px;visibility:hidden;">KindEditor</textarea>
  </div>
</template>

<script>
  import Hello from './../components/Hello'
  import KD from "kindeditor";
  import css from "kindeditor/themes/default/default.css"
  export default {
    name: 'app',
    components: {
      Hello
    },
    created(){
      KindEditor.ready(function(K) {
        var editor = K.create('textarea[name="content"]', {
          allowFileManager : true,
          uploadJson:"json/json.jsp"
        });
      });

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
