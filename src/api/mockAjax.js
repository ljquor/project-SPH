//axios二次封装
import axios from "axios";

//引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//1：利用axios对象的方法create，去创建一个axios实例
//2：request就是axios，只不过稍微配置一下
const requests = axios.create({
    baseURL: "/mock",//基础路径，发送请求时，路径都带api
    timeout: 5000,//五秒超时

})

requests.interceptors.request.use((config) => {
    //进度条开始动
    nprogress.start();
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})

//相应拦截器
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