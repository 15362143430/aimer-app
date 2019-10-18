<template>
  <div style="background:#f7f7f7;">
    <van-nav-bar title="我的订单" fixed />
    <div class="w">
      <van-tabs
        sticky
        title-active-color="#45c68d"
        color="#45c68d"
        style="margin-top:0.92rem"
        v-model="active"
        animated
      >
        <van-tab title="全部订单" name="a">
          <allOrder v-on:aa="aaa"></allOrder>
        </van-tab>
        <van-tab title="待邮寄" name="b">
          <noMail></noMail>
        </van-tab>
        <van-tab title="邮寄中" name="c">
          <inMail></inMail>
        </van-tab>
        <van-tab title="已完成" name="d">
          <finishOrder></finishOrder>
        </van-tab>
      </van-tabs>
    </div>
    <div id="dialog" v-if="open">
      <div id="dialog-m">
        <van-icon
          @click="open=false"
          style="position: absolute;right:0.2rem;top:0.27rem"
          name="cross"
          size="0.3rem"
        />
        <van-field
          style="margin-top:0.8rem;margin-bottom:0.45rem;margin-left:0.36rem;width:5.77rem"
          v-model="company"
          clearable
          label="快递公司"
          placeholder="请填写快递公司名称"
        />

        <van-field
          style="margin-bottom:0.3rem;margin-left:0.36rem;width:5.77rem"
          v-model="order"
          type="tel"
          label="快递单号"
          placeholder="请填写快递单号"
        />
        <van-button @click="closeDialog" style="background:#ffffff;color:#45c68d" size="large">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import allOrder from "./allOrder";
import noMail from "./noMail";
import inMail from "./inMail";
import finishOrder from "./finishOrder";
export default {
  data() {
    return {
      active: "a",
      open: false,
      company:"",
      order:""
    };
  },
  methods: {
    closeDialog() {
      this.open = false;
    },
    aaa(data){
      this.open = true;
      console.log(data)
    }
  },
  components: {
    allOrder,
    noMail,
    inMail,
    finishOrder
  }
};
</script>

<style>
#dialog {
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
#dialog-m {
  position: relative;
  width: 6.47rem;
  height: 4.25rem;
  background: #ffffff;
  border-radius: 0.1rem;
  /* overflow-x: hidden; */
}
</style>