/* 
  用户信息，需要用户登录才可在首页呈现。
  否则是进入随机抽题考试界面。
 */

<template>
  <div>
    <h1>用户信息统计</h1>
    <p>这里记录着您的做题数据...数据在未经允许下其他人无法查看.</p>
    <h3>做题数量:</h3>
    <div class="mdui-m-a-2">
      <p>您的总答题数量:</p>
      <div class="mdui-progress">
        <div class="mdui-progress-determinate" style="width: 30%;"></div>
      </div>
      <p>您的答对题数量:</p>
      <div class="mdui-progress">
        <div class="mdui-progress-determinate" style="width: 30%;"></div>
      </div>
      <p>您的答错题数量:</p>
      <div class="mdui-progress">
        <div class="mdui-progress-determinate" style="width: 30%;"></div>
      </div>
    </div>
    <h3>笔记</h3>
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple">
        <div class="mdui-list-item-content">
          <div class="mdui-list-item-title">Brunch this weekend?</div>
          <div class="mdui-list-item-text mdui-list-item-one-line">
            <span class="mdui-text-color-theme-text">All Connors</span> - I'll be in your neighborhood ...
          </div>
        </div>
      </li>
      <li class="mdui-divider mdui-m-y-0"></li>
      <li class="mdui-list-item mdui-ripple">
        <div class="mdui-list-item-content">
          <div class="mdui-list-item-title">Summer BBQ</div>
          <div class="mdui-list-item-text mdui-list-item-one-line">
            <span class="mdui-text-color-theme-text">to Alex, Scott, Jennifer</span> - Wish I could ...
          </div>
        </div>
      </li>
      <li class="mdui-divider mdui-m-y-0"></li>
      <li class="mdui-list-item mdui-ripple">
        <div class="mdui-list-item-content">
          <div class="mdui-list-item-title">Oui oui</div>
          <div class="mdui-list-item-text mdui-list-item-one-line">
            <span class="mdui-text-color-theme-text">Sandra Adams</span> - Do you have Paris reco ...
          </div>
        </div>
      </li>
    </ul>
    <div class="mdui-fab-wrapper" id="exampleFab">
      <button class="mdui-fab mdui-ripple mdui-color-theme-accent">
        <!-- 默认显示的图标 -->
        <i class="mdui-icon material-icons">add</i>

        <!-- 在拨号菜单开始打开时，平滑切换到该图标，若不需要切换图标，则可以省略该元素 -->
        <i class="mdui-icon mdui-fab-opened material-icons">add</i>
      </button>
      <div class="mdui-fab-dial">
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-pink">
          <i class="mdui-icon material-icons">backup</i>
        </button>
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-red">
          <i class="mdui-icon material-icons">bookmark</i>
        </button>
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-orange">
          <i class="mdui-icon material-icons">access_alarms</i>
        </button>
        <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-blue">
          <i class="mdui-icon material-icons">touch_app</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from '../staticfun';
export default {
  name: "UserInfo",
  data(){
    return{
      
    }
  }
};
</script>
