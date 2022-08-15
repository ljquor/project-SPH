//axios二次封装
import axios from "axios";

//引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//引入vuex仓库
import store from "@/store";

//1：利用axios对象的方法create，去创建一个axios实例
//2：request就是axios，只不过稍微配置一下
const requests = axios.create({
    baseURL: "/api",//基础路径，发送请求时，路径都带api
    timeout: 5000,//五秒超时

})


//请求拦截器
requests.interceptors.request.use((config) => {
    //游客登录判断
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    };
    //携带token给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    };


    nprogress.start(); //进度条开始动

    //config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
    nprogress.done();
    return res.data;
}, () => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
});


export default requests;