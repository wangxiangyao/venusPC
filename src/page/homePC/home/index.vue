<template>
  <div class="pcHomeStage">
    <div class="title">
      全球奢侈品共享平台
    </div>
    <div class="message">
      <span class='msg-text'>一触星洞</span>
      <span class='msg-text'>怦然心动</span>
    </div>
    <div class="QRCode">
      <VueQRCode :config='qrConfig'/>
    </div>
    <div class="QRCode-desc">
      扫码进入appleStore
    </div>
  </div>
</template>
<script>
  import VueQRCode from 'vue-qart'
  import qrImg from './white.png'

  export default {
    name: 'pcHomeStage',
    components: {
      VueQRCode
    },
    data () {
      return {
        qrConfig: {
          value: 'https://itunes.apple.com/cn/app/%E6%98%9F%E6%B4%9E/id1299589728?mt=8',
          imagePath: qrImg,
          filter: 'color',
          size: 400
        }
      }
    }
  }
</script>
<style scoped>
  .pcHomeStage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .pcHomeStage .title {
    margin-bottom: 20px;
    padding-left: 10px;
    letter-spacing: 10px;
    font-size: 52px;
    color: #fff;
  }
  .pcHomeStage .message {
    display: flex;
  }
  .pcHomeStage .msg-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    padding-left: 40px;
    padding-right: 10px;
    color: #fff;
    letter-spacing: 30px;
  }
  .pcHomeStage .QRCode {
    margin-top: 30px;
    background-color: #fff;
  }
  .pcHomeStage .QRCode-desc {
    color: #fff;
  }

</style>
