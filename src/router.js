import Vue from 'vue';
import VueRouter from 'vue-router';
import Static from '@/static';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import OnlineTk from './views/OnlineTk.vue';
Vue.use(VueRouter);
const Root = Static.Root;
const routes = [
    { path: Root, name: 'home', meta: { auth: false, title: '个人中心' }, component: Home },
    { path: Root + 'about', name: 'about', meta: { auth: false, title: '关于' }, component: About},
    { path: Root + 'OnlineTk', name: 'OnlineTk', meta: {auth: false, title: '在线刷题'}, component: OnlineTk},
    { path: '*', redirect: Root }
]

const router = new VueRouter({
    routes
})
router.afterEach((to, from) => { 
    window.document.title = to.meta.title + " - 湖北学习社区";
})
export default router;