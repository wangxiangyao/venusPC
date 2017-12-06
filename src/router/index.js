import Vue from 'vue'
import Router from 'vue-router'
import homePC from '@/page/homePC'
import homePhone from '@/page/homePhone'
import pcHomeStage from '@/page/homePC/home'
import attentionWC from '@/page/homePC/attentionWC'
import ours from '@/page/homePC/ours'
import aboutUS from '@/page/homePC/ours/aboutUS'
import connectUS from '@/page/homePC/ours/connectUS'

Vue.use(Router)
const ua = navigator.userAgent
const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
const UCversion = ua.match(/U3\/((\d+|\.){5,})/i)
const isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80
const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to, from, next) => {
        if (!isIos && !matches && !isUCHd) {
          // 如果非iOS, 非Android, 非UC内核, 跳转至pc主页;
          next('homePC')
        } else {
          next('homePhone')
        }
      }
    },
    {
      path: '/homePC',
      name: 'homePC',
      component: homePC,
      redirect: '/homePC/home',
      children: [
        {
          path: 'home',
          name: 'pcHomeStage',
          meta: {
            active: 'home'
          },
          component: pcHomeStage
        },
        {
          path: 'ours',
          name: 'ours',
          component: ours,
          redirect: {name: 'aboutUS'},
          meta: {
            active: 'ours'
          },
          children: [
            {
              path: 'aboutUS',
              name: 'aboutUS',
              meta: {
                active: 'ours',
                subActive: 'aboutUS'
              },
              component: aboutUS
            },
            {
              path: 'connectUS',
              name: 'connectUS',
              meta: {
                active: 'ours',
                subActive: 'connectUS'
              },
              component: connectUS
            }
          ]
        },
        {
          path: 'attentionWC',
          name: 'attentionWC',
          meta: {
            active: 'attentionWC'
          },
          component: attentionWC
        }
      ]
    },
    {
      path: '/homePhone',
      name: 'homePhone',
      component: homePhone
    }
  ]
})
