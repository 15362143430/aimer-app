<template>
    <div style="position:relative">
       <img id="recovery1" src="../img/recovery1.jpg" alt="">
       <img id="recovery2" src="../img/recovery2.jpg" alt="">
       <div id="shuoming">
           <img id="recovery3" src="../img/recovery3.jpg" alt="">
           <span @click="openDialog">邮寄地址<img src="../img/wenhao.jpg" alt=""></span>
       </div>
       <img id="recovery4" src="../img/recovery4.jpg" alt="">
       <p id="p-bottom">*线下门店不设旧内衣回收点，顾客需将旧内衣寄到指定地址，每月仅限前100个名额</p>
       <van-button @click="toApply" style="margin-bottom:1.45rem;background:#45c68d;color:white" size="large">申请回收</van-button>
       <div id="dialog" v-if="open">
           <div id="dialog-m">
               <van-icon @click="closeDialog" style="position: absolute;right:0.2rem;top:0.27rem" name="cross" size="0.3rem" />
               <ul>
                   <li style="margin-bottom:0.13rem">收货地址：<span>北京市顺义区聚源西路18号爱慕时尚工厂物流中心四楼 以旧换新</span></li>
                   <li style="margin-bottom:0.13rem">收货人：<span>刘洪振收</span></li>
                   <li>手机地址：<span>010-81405120</span></li>
               </ul>
               <van-button @click="closeDialog" style="background:#f2f2f2;color:#45c68d" size="large">确定</van-button>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
           open:false 
        }
    },
    methods: {
        openDialog(){
            this.open = true;
        },
        closeDialog(){
            this.open = false;
        },
        toApply(){
            this.$router.push('/recovery/recoveryApply')
        }
    }
}
</script>

<style scoped>
#recovery1,#recovery2,#recovery4{
    width: 100%;
    height: auto;
}
#recovery3{
    width: 1.4rem;
    height: 0.35rem;
}
#recovery1{
    margin-top: 1.08rem;
    margin-bottom: 0.56rem;
}
#recovery4{
    margin-bottom: 0.6rem;
}
#p-bottom{
  /* margin-bottom: 1.45rem; */
  font-size: 0.2rem;
  color: #d0d0d0;
}
#shuoming{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.7rem;
    margin-bottom: 0.54rem;
}
#shuoming span{
    display: flex;
    align-items: center;
    font-size: 0.25rem;
    color: #45c68d;
}
#shuoming span img{
    width: 0.26rem;
    height: auto;
}
#dialog{
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
#dialog-m{
    position: relative;
    width: 6.47rem;
    height: 4.25rem;
    background: #f2f2f2;
    border-radius: 0.1rem;
}
#dialog-m ul{
    width: 100%;
    height: 2.8rem;
    box-sizing: border-box;
    padding-top:0.86rem;
    padding-left:0.55rem;
    padding-right: 0.55rem;
}
#dialog-m ul li{
    line-height: 0.42rem;
    font-size: 0.25rem;
}
</style>