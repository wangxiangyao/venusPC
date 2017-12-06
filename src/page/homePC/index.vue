<template>
  <div id='homePC'>
    <header class='nav-wrapper'>
      <div class="logo">
        <img class='logo-img' :src="logoImg" alt="logo">
      </div>
      <div class="nav">
        <router-link class='nav-item' :class="{'active': navActive === key}" :to="item.link" v-for='(item, key) in navList' :key='key'>
          <span>{{item.title}}</span>
        </router-link>
      </div>
    </header>
    <main class='main-wrapper'>
      <transition name="fade" mode='out-in'>
        <router-view class='main-content'/>
      </transition>
      <div class="main-bg">
        <img class='main-bg-img' src="./tu@2x.png" alt="背景图">
      </div>
    </main>
    <footer class='copyright'>
      Copyright © 2006-2015 lu9.com | 上海想星商务服务有限公司版权所有 | 沪ICP备17041663号
    </footer>
  </div>
</template>
<script>
  import logo from './logo@2x.png'

  export default {
    name: 'homePC',
    data () {
      return {
        logoImg: logo,
        navList: {
          home: {
            title: '首页',
            link: {name: 'pcHomeStage'}
          },
          attentionWC: {
            title: '关注微信',
            link: {name: 'attentionWC'}
          },
          ours: {
            title: '我们',
            link: {name: 'ours'}
          }
        }
      }
    },
    computed: {
      navActive () {
        return this.$route.meta.active
      }
    }
  }
</script>
<style scoped>
  #homePC {
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 600px;
    width: 100%;
  }
  #homePC .nav-wrapper {
    display: flex;
    flex: none;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.9);
    height: 100px;
  }
  #homePC .logo {
    display: flex;
    align-items: center;
    margin-left: 5%;
  }
  #homePC .logo-img {
    height: 70px;
    width: auto;
  }
  #homePC .nav {
    display: flex;
    margin-right: 5%;
  }
  #homePC .nav-item {
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: #fff;
  }
  #homePC .nav-item.active {
    color: rgb(161, 23, 21);
    font-weight: bold;
    border-bottom: 2px solid rgb(161, 23, 21);
  }
  #homePC .main-wrapper {
    display: flex;
    flex: auto;
    position: relative;
    overflow-y: hidden;
  }
  #homePC .main-content {
    position: relative;
    z-index: 1;
  }
  #homePC .main-bg {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }
  #homePC .main-bg-img {
    height: 100%;
    width: 100%;
  }
  #homePC .copyright {
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgba(0,0,0,0.9);
    height: 88px;
    font-size: 12px;
  }
  @media screen and (max-width: 1080px) {
    #homePC {
      width: 1080px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
  }
</style>
