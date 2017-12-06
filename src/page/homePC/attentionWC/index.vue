<template>
  <div id="attentionWC">
    <div class="WeChatQRCode-wrapper">
      <img class='qr-img' src="./WeChatQRCode.jpg" alt="关注微信二维码">
      <span class='qr-text'>微信扫码关注星洞官方公众号</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'attentionWC'
  }
</script>
<style>
  #attentionWC {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  #attentionWC .WeChatQRCode-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 300px;
  }
  #attentionWC .qr-img {
    width: 100%;
  }
  #attentionWC .qr-text {
    margin-top: 10px;
    color: #fff;
  }
</style>
