<template>
  <div>
  <el-button
    plain
    @click.native="open3">
    成功
  </el-button>
  <el-button
    plain
    @click.native="open4">
    警告
  </el-button>
  <el-button
    plain
    @click.native="open5">
    消息
  </el-button>
  <el-button
    plain
    @click.native="open6">
    错误
  </el-button>
    <div style="width: 100%;height: 300px;" v-loading.body="loading"></div>

    <el-upload
      action="//jsonplaceholder.typicode.com/posts/"
      type="drag"
      :multiple="true"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-upload"></i>
      <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    data(){
     return{
       loading:false
     }
    },
    methods: {
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息',
          duration: 0
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
  </script>
<style>

</style>
