<template>
  <div id="allOrder">
      <div class="order">
          <div><p>订单编号：<span>123123123123</span></p><span>2016-10-10 14:23:12</span></div>
          <div>
              <ul>
                  <p style="line-height:0.56rem">快递单号：<span>1231231312</span></p>
                  <p>快递公司：<span>12312312312</span></p>
              </ul>
              <ul>
              <p style="line-height:0.56rem">已完成</p>
              <van-button @click="dialog" type="primary" size="mini">填写单号</van-button>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        open:true,
        company:"",
        order:""
    };
  },
  methods: {
      closeDialog() {
      this.open = false;
    },
    dialog(){
        this.$emit('aa',this.open);
    }
  }
};
</script>

<style scoped>
.order{
    box-sizing: border-box;
    width: 7.13rem;
    height: 2.54rem;
    background: white;
    margin-top: 0.3rem;
    padding-left: 0.36rem;
    padding-right: 0.36rem;
    /* border: 1px solid black; */
}
.order div:first-child{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0.92rem;
    line-height: 0.92rem;
    border-bottom: 0.02rem solid #f2f2f2;
    font-size:0.25rem;
}
.order div:nth-child(2){
    font-size: 0.25rem;
    width: 100%;
    height: 1.6rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
    padding-bottom: 0.55rem;
}
</style>