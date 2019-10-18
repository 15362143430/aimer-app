<template>
  <div>
    <transition :name="transitionName">
    <router-view></router-view>
    </transition>
    <van-tabbar route v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item to="/">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="shouye"></van-icon>

        <span style="font-size:0.22rem">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/myOrder">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="dingdan"></van-icon>

        <span style="font-size:0.22rem">我的订单</span>
      </van-tabbar-item>
      <van-tabbar-item to="/recovery">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="thin-_bin_trash_"></van-icon>

        <span style="font-size:0.22rem">申请回收</span>
      </van-tabbar-item>
      <van-tabbar-item to="">
        <van-icon class="iconfont" class-prefix="icon" slot="icon" name="youhuiquan"></van-icon>

        <span style="font-size:0.22rem">我的优惠券</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      transitionName:''
    };
  },
  methods: {},
  // watch: {
  //   // 使用watch 监听$router的变化
  //   $route(to,from) {
  //     if(from.path == "/"){
  //       this.transitionName = "slide-left";
  //     }else if(from.path == "/myOrder"){
  //         if(to.path == "/"){
  //           this.transitionName = "slide-right";
  //         }else{
  //           this.transitionName = "slide-left";
  //         }
  //       }else if(from.path == "/recovery"){
  //         if(to.path == "/" || to.path == "/myOrder"){
  //           this.transitionName = "slide-right";
  //         }else{
  //           this.transitionName = "slide-left";
  //         }
  //       }
  //     // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
  //     // if (to.meta.index >= from.meta.index) {
  //     //   // 设置动画名称
  //     //   this.transitionName = "slide-left";
  //     // } else {
  //     //   this.transitionName = "slide-right";
  //     // }
  //     // console.log(to);
  //     // console.log(from)
  //   }
  // }
};
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>