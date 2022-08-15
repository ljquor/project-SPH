//配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';

import routes from './routes'
//使用插件
Vue.use(VueRouter);

//把人家原型对象的push方法进行保存
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//VueRouter.prototype原型对象添加一个方法
//location:路由跳转相关的信息
VueRouter.prototype.push = function (location, resolve, reject) {
    //当前函数this：即为VueRouter类的实例
    //相当于push方法里面this，是windows【完犊子了】
    //利用人家push方法实现路由跳转，保证push里面this,应该vueRouter类的实例

    //面试:函数apply与call区别?
    //相同的地方:都可以篡改函数里面this
    //不同的地方:apply传递参数 数组  call传递参数 逗号分割

    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}


let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})

//全局前置守卫
router.beforeEach(async (to, from, next) => {

    let token = store.state.user.token;
    let userName = store.state.user.userInfo.name;
    if (token) {//登录了
        if (to.path == '/login' || to.path == '/regist') {//去登录界面
            next('/');
        } else {//登录了，去其他页面
            if (userName) {//如果有用户信息
                next();
            } else {
                try {
                    // 获取用户信息
                    // console.log("路由，获取用户信息，放行");
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    console.log("获取用户信息失败？token过期？");
                    //可能的情况是token过期
                    //清除数据
                    //跳转到登录
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    } else {
        //没登录
        let toPath = to.path;
        // console.log(toPath);
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login?redirect=' + toPath);
        } else {
            next();
        }

    }
})


export default router;

