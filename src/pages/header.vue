<template>
  <div class="o-header">
  <ul class="henav">
    <li>
      <a class="user" :class="{open:showusrset}">
        <span class="username">Develeven</span>
        <span style="display: inline-block;width: 40px;"><img src="../assets/a0.jpg" width="100%" style="border-radius: 50%;margin-top: 4px"> </span>
      </a>
      <transition name="fadeInRight">
      <ul class="dropdown-menu" v-show="showusrset">
        <li>
          <a><i class="el-icon-setting"></i>设置</a>
        </li>
        <li>
          <a> <i class="el-icon-information"></i>帮助</a>
        </li>
        <li>
          <a><i class="el-icon-circle-close"></i>退出</a>
        </li>
      </ul>
        </transition>
    </li>
  </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import { on, off } from 'wind-dom/src/event';
  export default {
    name:"MyHeader",
    mounted() {
      let userbutton=this.$el.getElementsByClassName("user")[0];
      let usersetingbox=this.$el.getElementsByClassName("dropdown-menu")[0];
      on(userbutton,"click",(e) => {
      this.showusrset=!this.showusrset;
      });
      on(document,"click",(e) => {
        if (!userbutton.contains(e.target)&&!usersetingbox.contains(e.target)){
          this.showusrset=false;
        }
      })
    },
    data(){
      return{
        showusrset:false
      }
    },
    destroyed() {
      let userbutton=this.$el.getElementsByClassName("user")[0];
      off(document,"click");
      off(userbutton,"click");
    }
  }
</script>
<style lang="less">
.o-header{
  background-color: #fff;
  height: 50px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
}
  .henav{
    float: right;
    li {
      float: left;
      position: relative;
      display: block;
      a{
        padding: 0.5px 10px;
        position: relative;
        display: block;
      }
    }
.user{

  .username{
    display: block;
    float: left;
    padding: 16px 8px;
  }
}
.user:hover{
  background: #f6f8f8;
  cursor: pointer;
}
.user.open{
  background: #f6f8f8;
}

  }
.dropdown-menu{

  position: absolute;
  top:51px;
  background: #fff;
  right: 0;
  padding: 10px 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  li {
    float: none;
    width: 150px;
    a{
      padding: 10px 15px;
      i{
        padding-right: 10px;
      }
    }
    a:hover{
      background: #f4f4f4;
      cursor: pointer;
    }
  }
}
  ul{
    -webkit-padding-start: 0px;
  }
.fadeInRight-enter-active {
  animation: fadeInRight .3s;
}
.fadeInRight-leave-active {
  animation: fadeOutRight .3s;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
