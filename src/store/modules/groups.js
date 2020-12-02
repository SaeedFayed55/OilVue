import axios from 'axios'
import {crudURL} from '../index.js'
import {getURL} from '../index.js'
const state = {
    pagesData: [],
    userData: [],
    groupData: [],
    catData: [],
    unitData: []
};

const getters = {
    pagesGetter: state => {
        return state.pagesData
    },
    userDataGetter: state => {
        return state.userData
    },
    groupDataGetter: state => {
        return state.groupData
    },
    catDataGetter: state => {
        return state.catData
    },
    unitDataGetter: state => {
        return state.unitData
    }
};

const mutations = {
    pagesMutation(state, pagesData) {
        state.pagesData = []
        for (var i = 0; i < pagesData.length; i++) {
            state.pagesData.push({
                PAGE_ID: pagesData[i].PAGE_ID,
                PAGE_NAME: pagesData[i].PAGE_NAME,
                PAGE_URL: pagesData[i].PAGE_URL,
                PAGE_ICON: pagesData[i].PAGE_ICON,
                PAGE_DESC: pagesData[i].PAGE_DESC,
            })
        }
        console.log(state.pagesData)
    },

    userDataMutation(state, userData) {
        state.userData = []
        console.log("User Data", userData)
        for (var i = 0; i < userData.length; i++) {
            state.userData.push({
                USER_ID: userData[i].USER_ID,
                USER_NAME: userData[i].USER_NAME,
                USER_PASSWORD: userData[i].USER_PASSWORD,
                USER_DESC: userData[i].USER_DESC,
            })
        }
        console.log(state.userData)
    },

    groupDataMutation(state, groupData) {
        state.groupData = []
        console.log("Group Data", groupData)
        for (var i = 0; i < groupData.length; i++) {
            state.groupData.push({
                GROUP_ID: groupData[i].GROUP_ID,
                GROUP_NAME: groupData[i].GROUP_NAME,
                UNIT_ID: groupData[i].UNIT_ID,
                GROUP_TYPE: groupData[i].GROUP_TYPE,
            })
        }
        console.log(state.groupData)
    },

    catDataMutation(state, catData) {
        state.catData = []
        console.log("Cat Data", catData)
        for (var i = 0; i < catData.length; i++) {
            state.catData.push({
                CAT_ID: catData[i].CAT_ID,
                CAT_NAME: catData[i].CAT_NAME,
            })
        }
        console.log(state.catData)
    },

    unitDataMutation(state, unitData) {
        state.unitData = []
        console.log("Unit Data", unitData)
        for (var i = 0; i < unitData.length; i++) {
            state.unitData.push({
                UNIT_ID: unitData[i].UNIT_ID,
                UNIT_NAME: unitData[i].UNIT_NAME,
            })
        }
        console.log(state.unitData)
    },
};

const actions = {
    getPagesData({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_GET_PAGES",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("pagesMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    getUserData({ commit }, group_id) {
        return axios.post(getURL, {
                fun_name: "FU_GET_GROUP_USERS",
                param_name: ["P_GROUP_ID"],
                param_value: [group_id],
            }).then(res => {
                console.log(res)
                commit("userDataMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    getGroupData({ commit }, unit_id) {
        return axios.post(getURL, {
                fun_name: "FU_GET_UNITS_GROUPS",
                param_name: ["P_UNIT_ID"],
                param_value: [unit_id],
            }).then(res => {
                console.log(res)
                commit("groupDataMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    getCatData({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_GET_UNIT_CAT",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log("resssssssssss", res)
                commit("catDataMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    getUnitData({ commit }, cat_id) {
        return axios.post(getURL, {
                fun_name: "FU_GET_UNITS",
                param_name: ["P_UNIT_CAT"],
                param_value: [cat_id],
            }).then(res => {
                console.log(res)
                commit("unitDataMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    deletePages(_, id) {
        console.log("ID", id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_PAGES",
                param_name: ["P_PAGE_ID"],
                param_value: [id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },

    deleteUser(_, user_id) {
        console.log("ID", user_id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DEL_GROUP_USERS",
                param_name: ["P_USER_ID"],
                param_value: [user_id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },

    deleteGroup(_, group_id) {
        console.log("ID", group_id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DEL_UNITS_GROUPS",
                param_name: ["P_GROUP_ID"],
                param_value: [group_id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },

    createPages(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_PAGES",
                param_name: ["P_PAGE_NAME", "P_PAGE_URL", "P_PAGE_ICON", "P_PAGE_DESC"],
                param_value: [payload.name, payload.url, payload.icon, payload.desc],
            })
            .then((res) => {
                console.log("Create", res.data);
            })
            .catch((error) => console.log(error));
    },

    createUser(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_GROUP_USERS",
                param_name: ["P_USER_NAME", "P_USER_PASSWORD", "P_GROUP_ID", "P_USER_DESC"],
                param_value: [payload.user_name, payload.user_password, payload.group_id, payload.user_desc],
            })
            .then((res) => {
                console.log("Create", res.data);
            })
            .catch((error) => console.log(error));
    },

    createGroup(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_UNITS_GROUPS",
                param_name: ["P_GROUP_NAME", "P_UNIT_ID"],
                param_value: [payload.group_name, payload.unit_id],
            })
            .then((res) => {
                console.log("Create", res.data);
            })
            .catch((error) => console.log(error));
    },

    updateUser(_, payload) {
        console.log("Payload", payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_GROUP_USERS",
                param_name: ["P_USER_ID", "P_USER_NAME", "P_USER_PASSWORD", "P_GROUP_ID", "P_USER_DESC"],
                param_value: [payload.user_id, payload.user_name, payload.user_password, payload.group_id, payload.user_desc],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.group_id);
                console.log(payload.user_id);
                console.log(payload.user_name);
            })
            .catch((error) => console.log(error));
    },

    updateGroup(_, payload) {
        console.log("Payload", payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_UNITS_GROUPS",
                param_name: ["P_GROUP_ID", "P_GROUP_NAME", "P_UNIT_ID"],
                param_value: [payload.group_id, payload.group_name, payload.unit_id],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.group_id);
                console.log(payload.group_name);
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