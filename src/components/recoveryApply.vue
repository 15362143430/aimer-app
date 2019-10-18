<template>
  <div style="position:relative">
    <img style="margin-top:1.3rem" src="../img/recovery5.jpg" alt />
    <van-field
      style="margin-bottom:0.3rem"
      v-model="username"
      clearable
      label="寄件人"
      placeholder="请填写您的姓名"
    />

    <van-field
      style="margin-bottom:0.3rem"
      v-model="phone"
      type="tel"
      label="联系电话"
      placeholder="请填写您的联系电话"
    />
    <van-field
      readonly
      clickable
      label="所在地区"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
      style="margin-bottom:0.65rem"
    />

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <img src="../img/recovery6.jpg" alt />
    <van-field
      style="margin-bottom:0.3rem"
      v-model="cloths"
      clearable
      label="捐衣数量"
      placeholder="请填写件数"
    />

    <van-field
      readonly
      clickable
      label="所在地区"
      :value="valueType"
      placeholder="请选择品类"
      @click="showPickerType = true"
      style="margin-bottom:0.65rem"
    />

    <van-popup v-model="showPickerType" position="bottom">
      <van-picker
        show-toolbar
        :columns="columnsType"
        @cancel="showPickerType = false"
        @confirm="onConfirmType"
      />
    </van-popup>
    <van-button
      @click="tijiao"
      style="margin-bottom:1.45rem;background:#45c68d;color:white"
      size="large"
    >确定</van-button>
    <div ref="error" id="error">请填写正确的{{errorMsg}}！</div>
    <div id="dialog" v-if="open">
      <div id="dialog-m">
        <van-icon
          @click="closeDialog"
          style="position: absolute;right:0.2rem;top:0.27rem"
          name="cross"
          size="0.3rem"
        />
        <h1 style="font-size:0.35rem">申请成功！</h1>
        <p style="font-size:0.25rem;line-height: 0.42rem;">你是本月第<span style="color:#45c68d"></span>位参与环保的小伙伴，快告诉你的朋友吧！</p>
        <p style="font-size:0.25rem;line-height: 0.42rem;">请在5天内寄出旧衣，在“<span style="color:#45c68d">我的订单</span>”填写正确单号，否则将视为无效订单哦。我们会将邮寄地址发至你的手机，请注意查收！</p>
        <van-button @click="closeDialog" style="background:#f2f2f2;color:#45c68d" size="large">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
const citys = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"]
};
export default {
  data() {
    return {
      open: false,
      errorMsg: "",
      username: "",
      phone: "",
      value: "",
      valueType: "",
      cloths: "",
      showPicker: false,
      showPickerType: false,
      columns: [
        {
          values: Object.keys(citys),
          className: "column1"
        },
        {
          values: citys["浙江"],
          className: "column2",
          defaultIndex: 2
        }
      ],
      columnsType: [
        "内裤",
        "文胸",
        "泳衣",
        "家居",
        "运动",
        "美体",
        "保暖",
        "其他"
      ]
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onConfirmType(value) {
      this.valueType = value;
      this.showPickerType = false;
    },
    tijiao() {
      let that = this;
      if (this.username == "") {
        this.$refs.error.style.opacity = 1;
        setTimeout(function() {
          that.$refs.error.style.opacity = 0;
        }, 2000);
        this.errorMsg = "姓名";
      } else if (this.phone == "") {
           this.$refs.error.style.opacity = 1;
        setTimeout(function() {
          that.$refs.error.style.opacity = 0;
        }, 2000);
        this.errorMsg = "联系电话";
      } else if (this.value == "") {
           this.$refs.error.style.opacity = 1;
        setTimeout(function() {
          that.$refs.error.style.opacity = 0;
        }, 2000);
        this.errorMsg = "城市";
      } else if (this.cloths == "") {
           this.$refs.error.style.opacity = 1;
        setTimeout(function() {
          that.$refs.error.style.opacity = 0;
        }, 2000);
        this.errorMsg = "捐衣数量";
      } else if (this.valueType == "") {
           this.$refs.error.style.opacity = 1;
        setTimeout(function() {
          that.$refs.error.style.opacity = 0;
        }, 2000);
        this.errorMsg = "品类";
      } else {
        this.open = true;
      }
    },
    closeDialog() {
      this.open = false;
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  width: 1.39rem;
  height: auto;
  margin-bottom: 0.35rem;
}
#error {
  opacity: 0;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 0.6rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.25rem;
  line-height: 0.6rem;
  padding: 0 0.25rem;
  border-radius: 0.1rem;
  transition: all 0.3s;
}
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
  height: 4.89rem;
  background: #f2f2f2;
  border-radius: 0.1rem;
  text-align: center;
  padding: 0 0.45rem;
  padding-top: 0.64rem;
  box-sizing: border-box;
}
</style>