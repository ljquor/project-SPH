//引入路由组件
// import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'


// 引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'




export default [
    {
        path: '/center',
        component: Center,
        meta: { showFooter: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'grouporder',
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myorder',
            },

        ]
    },
    {
        path: '/home',
        component: () => import("@/pages/Home"),//路由懒加载
        meta: { showFooter: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { showFooter: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { showFooter: false }
    },
    {
        path: '/detail/:skuId?',
        component: Detail,
        meta: { showFooter: true }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { showFooter: true }
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart,
        meta: { showFooter: true }
    },
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        meta: { showFooter: true },
        beforeEnter: (to, from, next) => {
            if (from.path == "/shopcart") {
                next();
            } else {
                next(false);
            }
        }
    },
    {
        path: '/pay',
        name: 'pay',
        component: Pay,
        meta: { showFooter: true },
        beforeEnter: (to, from, next) => {
            if (from.path == "/trade") {
                next();
            } else {
                next(false);
            }
        }
    },
    {
        path: '/paysuccess',
        name: 'paysuccess',
        component: PaySuccess,
        meta: { showFooter: true },

    },
    {
        name: 'search',
        path: '/search/:keyword?',//?：params参数可传可不传
        component: Search,
        meta: { showFooter: true },
        //路由组件传递props数据
        //函数写法：
        // props:($route)=>{
        //     return{propsPKW:$route.params.keyword,propsQKW:$route.query.queryKeyword}
        // }
        // 函数简写：
        props: ($route) => ({ propsPKW: $route.params.keyword, propsQKW: $route.query.queryKeyword })
    },
    {
        path: '*',
        redirect: '/home'//重定向
    }
]