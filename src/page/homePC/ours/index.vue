<template>
  <div id="ours">
    <div class="content">
      <div class="nav-wrapper">
        <router-link v-for='(item, key) in navList' :key='key' :to='item.link' class="nav-item " :class="{'active': navActive === key}">
          <span class='nav-title'>
            <span class='point'></span>
            {{item.title}}
          </span>
        </router-link>
      </div>
      <div class="article">
        <div class="title">
          {{navList[navActive].title}}
        </div>
        <div class="article-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ours',
    data () {
      return {
        // TODO:可以把导航展示信息抽象出来，以便一处修改，多出复用
        navList: {
          aboutUS: {
            title: '关于我们',
            link: {name: 'aboutUS'}
          },
          connectUS: {
            title: '联系我们',
            link: {name: 'connectUS'}
          }
        }
      }
    },
    computed: {
      navActive () {
        return this.$route.meta.subActive
      }
    }
  }
</script>
<style>
  #ours {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 100%;
  }
  #ours .content {
    display: flex;
    padding: 20px 30px;
    height: 100%;
    width: 90%;
    background-color: #fff;
  }
  #ours .nav-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
  }
  #ours .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    background-color: var(--背景灰);
    width: 80%;
  }
  #ours .nav-title {
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
  }
  #ours .nav-item .point {
    position: absolute;
    left: -15px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--背景灰);
  }
  #ours .nav-item.active {
    color: #fff;
    background-color: #000;
  }
  #ours .nav-item.active .point {
    background-color: #fff;
  }
  #ours .article {
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 1px 10px 0 #ccc;
  }
  #ours .article .title {
    padding: 20px 30px;
    width: 100%;
    background-color: var(--背景灰);
  }
  #ours .article-content {
    flex: 1;
    overflow-y: auto;
  }
  #ours .article-content::-webkit-scrollbar{
    width:5px;
    height:5px;
  }
  #ours .article-content::-webkit-scrollbar-track-piece{/*内层轨道，滚动条中间部分（位置4）*/
    background: var(--背景灰);
  }
  #ours .article-content::-webkit-scrollbar-button{
    display: none;
  }
  #ours .article-content::-webkit-scrollbar-thumb{
    background: #555;
    border-radius:100px;
  }
  #ours .article-content{
    scrollbar-arrow-color: #f4ae21;
    scrollbar-face-color: #333;
    scrollbar-3dlight-color: #666;
    scrollbar-highlight-color: #666;
    scrollbar-shadow-color: #999;
    scrollbar-darkshadow-color: #666;
    scrollbar-track-color: #666;
    scrollbar-base-color:#f8f8f8;
  }
</style>
