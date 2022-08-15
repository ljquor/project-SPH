import { reqCategoryList, reqBannerList,reqFloorList } from '@/api';

//home模块的小仓库
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
const actions = {

    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    },



};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}