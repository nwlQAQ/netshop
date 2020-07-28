import vue from "vue"
import vuex from "vuex"
vue.use(vuex)

const state = {
    shopping:[],//保存购物车数据
}

const mutations = {
    addShop(state,detail){
        state.shopping.unshift(detail);
    },
    
}

const actions = {
    //添加购物车
    addShopAction(context,detail){
        context.commit("addShop",detail)
    }
}

const getters = {
    shopping(state){
        return state.shopping;
    }
}

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters
})