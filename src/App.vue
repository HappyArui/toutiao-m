<template>
  <div id="app">
    <h1>黑马头条</h1>
    <div>
      <i class="toutiao toutiao-yanzhengma"></i>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <router-view />
    <div class="box">hellow</div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box {
  width: 555px;
  height: 84px;
  background-color: #ccc;
}
</style>
