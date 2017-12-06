<template>
  <div class="homePhone">
    <div class="bg-img-wrapper">
      <img class='bg-img' src="./homePhone-bg.png" alt="背景图">
    </div>
    <div class="content">
      <div class="logo">
        <img src="./logo@2x.png" alt="logo图片">
      </div>
      <div class="title">
        全球奢侈品共享平台
      </div>
      <div class="action">
        <a class="button-download" :href='downLoadLink'>
          下载APP
        </a>
      </div>
      <div class="copyright">
        <span>沪ICP备17041663号</span>
        <span>上海想星商务服务有限公司版权所有</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'homePhone',
    data () {
      return {
        downLoadLink: 'https://itunes.apple.com/cn/app/%E6%98%9F%E6%B4%9E/id1299589728?mt=8'
      }
    }
  }
</script>
<style scoped>
  .homePhone {
    position: relative;
    width: 100%;
    height: 100vh;
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
    padding-top: 25%;
    height: 100%;
  }
  .homePhone .title {
    letter-spacing: 10px;
    padding-left: 10px;
    margin-top: 20px;
    font-size: 16px;
    color: #fff;
  }
  .homePhone .action {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    width: 100%;
  }
  .homePhone .button-download {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30%;
    padding: 15px 20px 15px 30px;
    border-radius: 100px;
    width: 70%;
    font-size: 20px;
    letter-spacing: 10px;
    color: #fff;
    background-color: #f64163;
  }
  .homePhone .copyright {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #aaa;
    font-size: 12px;
    letter-spacing: 3px;
  }
</style>
