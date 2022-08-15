import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
    address: [],
    orderInfo: {}
};
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    }
};
const actions = {
    //获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo();
        console.log("获取用户地址信息", result);
        if (result.code == 200) {
            commit("GETUSERADDRESS", result.data)

            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户结算订单信息
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        console.log("获取订单商品信息", result);
        if (result.code == 200) {
            commit("GETORDERINFO", result.data)

            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}