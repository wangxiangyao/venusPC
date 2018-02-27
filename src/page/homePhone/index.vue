<template>
  <div class="homePhone">
    <div class="bg-img-wrapper">
      <img class='bg-img' src="http://venus-resource.oss-cn-shanghai.aliyuncs.com/static/pc/pc-phone-bg.png" alt="背景图">
    </div>
    <div class="content">
      <div class="title">
        全球奢侈品共享平台
      </div>
      <div class="empty">

      </div>
      <div class="action">
        <a class="button-download ios-download" :href='downLoadLink'>
          <img class="icon icon-system" src="./ico_ios.png" alt="ios-icon">
          <div class="button-text">
            iPhone版下载
          </div>
        </a>
        <a class="button-download android-download" :href="androidDownload">
          <img class="icon icon-system" src="./ico_android.png" alt="android-icon">
          <div class="button-text">
            Android版下载
          </div>
        </a>
      </div>
      <div class="logo">
        <img class="logo-img" src="./logo.png" alt="logo图片">
      </div>
    </div>
  </div>
</template>
<script>
  // TODO: 添加微信分享的功能

  export default {
    name: 'homePhone',
    data () {
      return {
        downLoadLink: 'https://itunes.apple.com/cn/app/%E6%98%9F%E6%B4%9E/id1299589728?mt=8',
        androidDownload: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.android.star'
      }
    }
  }
</script>
<style scoped>
  .homePhone {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .homePhone .bg-img {
    height: 100%;
    width: 100%;
  }
  .homePhone .bg-img-wrapper {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .homePhone .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .homePhone .empty {
    flex: 1;
  }
  .homePhone .title {
    letter-spacing: 10px;
    padding-left: 10px;
    margin-top: 40px;
    font-size: 13px;
    color: #fff;
  }
  .homePhone .action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: none;
    width: 100%;
  }
  .homePhone .button-download {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px 10px 30px;
    margin-top: 20px;
    border-radius: 100px;
    width: 55%;
    font-size: 15px;
    color: #fff;
    border: 1px solid #fff;
  }
  .homePhone .icon-system {
    width: 19px;
    height: 22px;
  }
  .homePhone .logo {
    padding: 20px;
  }
  .homePhone .logo .logo-img {
    width: 132px;
  }
</style>
