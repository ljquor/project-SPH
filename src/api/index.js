//API统一管理
import requests from "./request";
import mockRequests from './mockAjax';

//  三级联动接口
//  /api/product/getBaseCategoryList  get   无参数


//axios.get('url')---------axios({})

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqBannerList = () => mockRequests.get('/banner');
export const reqFloorList = () => mockRequests.get('/floor');

//获取搜索数据

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })//params至少是一个空对象！！！

//获取商品详情
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

//获取购物车
export const reqCartList = () => requests({ url: `/cart/cartList`, method: 'get' })


//7. 添加到购物车(对已有物品进行数量改动)
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//删除购物车里的商品
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//修改购物车里的商品选中是否
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

//获取验证码  /user/passport/sendCode/{phone}
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })


//注册接口/user/passport/register 16.2请求方式POST
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, data, method: 'post' })

//登录接口/user/passport/login  请求方式POST
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, data, method: 'post' })

//提供token获取用户信息/user/passport/auth/getUserInfo  请求方式POST
export const reqUserInfo = () => requests({ url: `/user/passport/auth/getUserInfo`, method: 'get' })

//退出登录/user/passport/logout  请求方式get
export const reqUserLogout = () => requests({ url: `/user/passport/logout`, method: 'get' })


//获取用户地址/user/userAddress/auth/findUserAddressList  请求方式get
export const reqAddressInfo = () => requests({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' })

//获取结算页面商品信息/order/auth/trade  请求方式get
export const reqOrderInfo = () => requests({ url: `/order/auth/trade`, method: 'get' })

//获取结算页面商品信息/order/auth/submitOrder?tradeNo={tradeNo}  请求方式post
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

//获取支付信息/payment/weixin/createNative/{orderId}  请求方式get
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

//获取支付状态/payment/weixin/queryPayStatus/{orderId}  请求方式get
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })


//获取我的订单/order/auth/{page}/{limit}  请求方式get
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })




