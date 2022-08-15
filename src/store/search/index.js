import { reqGetSearchInfo } from "@/api";
//search模块的小仓库
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        //第二个参数叫载荷？
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }

};
//getters相当于计算属性，作用是 简化 仓库中的 数据
const getters = {
    //state是当前仓库的
    attrsList(state) {
        //state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
        //假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
        //计算新的属性的属性值至少给人家来一个数组
        return state.searchList.attrsList || [];
    },
    goodsList(state) {
        return state.searchList.goodsList;
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
};



export default {
    state,
    mutations,
    actions,
    getters
}