<template>
  <div>
    <div class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-indigo">
        <a
          href="javascript:;"
          class="mdui-btn mdui-btn-icon"
          mdui-drawer="{target: '#drawer', swipe: true}"
        >
          <i class="mdui-icon material-icons">menu</i>
        </a>
        <a href="javascript:;" class="mdui-typo-title">{{this.$route.meta.title}}</a>
        <div class="mdui-toolbar-spacer"></div>
        <a href="javascript:;" class="mdui-btn mdui-btn-icon">
          <i class="mdui-icon material-icons">more_vert</i>
        </a>
      </div>
    </div>
    <div class="mdui-drawer" id="drawer">
      <ul class="mdui-list">
        <li class="mdui-list-item mdui-ripple">
          <div class="mdui-list-item-avatar">
            <img src="@/assets/head.png" />
          </div>
          <router-link class="mdui-list-item-content" to="/">
            <div class="mdui-list-item-title">你好! {{ isLogin?  UserNickname:"请登录" }}</div>
            <div class="mdui-list-item-text mdui-list-item-one-line" v-if="isLogin">
              <span class="mdui-text-color-theme-text">排名: {{ UserRank }}</span> 
            </div>
          </router-link>
        </li>
        <li class="mdui-subheader">题库</li>
        <li class="mdui-list-item mdui-ripple" v-if="isLogin">
          <i class="mdui-list-item-icon mdui-icon material-icons">star</i>
          <div class="mdui-list-item-content">收藏的题目</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
          
          <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
          <router-link class="mdui-list-item-content" to="/OnlineTk">在线刷题</router-link>
        </li>
        <li class="mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons">fiber_new</i>
          <div class="mdui-list-item-content">官方考试</div>
        </li>
        <li class="mdui-subheader">关于</li>
        <li class="mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons">feedback</i>
          <div class="mdui-list-item-content">反馈问题</div>
        </li>
        <li class="mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons">info</i>
          <div class="mdui-list-item-content">关于我们</div>
        </li>
      </ul>
    </div>
    <div class="mdui-container">
      <router-view />
    </div>
     <div class="mdui-color-red mdui-m-t-2 mdui-p-a-2 mdui-text-center">LiusCraft 所有权,免费为计算机专业开放的学习库.</div>
  </div>
</template>

<script>
import {getCookie} from './staticfun';

export default {
  data(){
    return{
      isLogin: getCookie('User_Token',true),
      UserNickname: getCookie('User_NickName',true),
      UserRank: getCookie('User_Rank',true)
    }
  },
  methods:{
  }
}
</script>
