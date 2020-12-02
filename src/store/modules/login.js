import axios from 'axios'
import {getURL} from '../index.js'
const state = {
    user: [],
    ifLogin: localStorage.getItem('userId'),
};

const getters = {
    // loginGetter: state => {
    //     return state.user
    // },
    getUser: state => {
        return state.user[0] ? state.user[0].SEC_STATUS : ''
    },
    getIfLogin: state => {
        return state.ifLogin
    }
};

const mutations = {

    loginMutation(state, loginData) {
        state.user = [];
        console.log("Login Data", loginData)
        state.user.push(loginData)
    }
};

const actions = {
    getLoginData({ commit }, paylod) {
        return axios.post(getURL, {
                fun_name: "FU_SEC_USER",
                param_name: ['P_USER_NAME', 'P_USER_PASSWORD'],
                param_value: [paylod.username, paylod.password],
            }).then(res => {
                localStorage.setItem("userId", res.data.Table[0].USER_ID);
                commit("loginMutation", res.data.Table[0])
            })
            .catch((error) => console.log(error));
    },

};

export default {
    state,
    getters,
    mutations,
    actions
}