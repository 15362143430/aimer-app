<template>
  <div>
    <van-nav-bar title="AIMER以旧换新" fixed />
    <div style="text-align:center" class="w">
      <img id="img1" src="../img/home1.jpg" alt />
      <img id="img2" src="../img/home2.jpg" alt />
      <img id="img3" src="../img/home3.jpg" alt />
      <div id="rank">
        <div id="title">
          <div id="left">
            <img src="../img/month.jpg" alt />
            <span style="font-size:0.36rem;color:#6bc390">12</span>
            <span style="font-size:0.25rem">本月排名</span>
          </div>
          <div id="right">
            <img src="../img/count.jpg" alt />
            <span style="font-size:0.36rem;color:#6bc390">10</span>
            <span style="font-size:0.25rem">捐衣数量</span>
          </div>
        </div>
        <ul>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank1.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank2.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank3.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank4.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank4.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank4.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank4.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
          <li style="display:flex;align-items: center;justify-content: space-between;margin-bottom:0.45rem;">
            <span style="display:flex;align-items: center;">
              <img src="../img/rank4.jpg" alt />
              <span style="font-size:0.19rem">15362143421</span>
            </span>
            <p style="font-size:0.19rem">
              捐寄<span style="color:#6bc390">16</span>件
            </p>
          </li>
        </ul>
      </div>
       <router-link to="/recovery"><img id="img4" src="../img/bottom1.jpg" alt=""></router-link>
      <router-link to="/s"><img id="img5" src="../img/bottom2.jpg" alt=""></router-link>
      <router-link to="/s"><img id="img6" src="../img/bottom3.jpg" alt=""></router-link>
      <p id="p-bottom">活动最终解释权归爱慕所有</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#img1 {
  margin-top: 1.08rem;
  width: 100%;
  height: auto;
}
#img2 {
  margin-top: 1.05rem;
  width: 100%;
  height: auto;
}
#img3 {
  margin-top: 0.54rem;
  width: 100%;
  height: auto;
}
#rank {
  width: 100%;
  margin-top: 0.01rem;
  background: #f6fbf8;
  height: 5.26rem;
  margin-bottom:0.45rem;
}
#title {
  position: relative;
  /* display: flex; */
  width: 100%;
  height: 1.42rem;
  /* margin-top:1rem; */
  background: white;
  border: 0.1rem solid #f6fbf8;
}
#title img {
  width: 0.52rem;
  height: 0.52rem;
}
#left,
#right {
  position: absolute;
  display: flex;
  align-items: center;
}
#left {
  left: 0.64rem;
  top: 0.47rem;
}
#right {
  left: 4.23rem;
  top: 0.47rem;
}
#rank ul{
  padding-top: 0.48rem;
  box-sizing: border-box;
  width: 6.7rem;
  height: 3.79rem;
  margin: 0 auto;
  overflow-y: scroll;
}
#rank ul img {
  width: 1.13rem;
  height: 0.38rem;
}
#img4{
  width: 100%;
  height: auto;
}
#img5{
  margin-right: 0.24rem;
  margin-bottom:0.3rem;
  width: 3.43rem;
  height: auto;
}
#img6{
  margin-bottom:0.3rem;
  width: 3.43rem;
  height: auto;
}
#p-bottom{
  margin-bottom: 1.45rem;
  font-size: 0.2rem;
  color: #d0d0d0;
}
</style>