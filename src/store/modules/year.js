import axios from 'axios'
import {crudURL} from '../index.js'
import {getURL} from '../index.js'
const state = {
    yearData: [],
    periodData: []
};

const getters = {
    yearGetter: state => {
        return state.yearData
    },
    periodGetter: state => {
        return state.periodData
    }
};

const mutations = {
    getYearMutation(state, yearData) {
        state.yearData = []
        console.log("year  Data", yearData)
        for (var i = 0; i < yearData.length; i++) {
            state.yearData.push({
                YEAR_ID: yearData[i].YEAR_ID,
                YEAR_NAME: yearData[i].YEAR_NAME,
            })
        }
        console.log(state.yearData)
    },
    getPeriodMutation(state, periodData) {
        state.periodData = []
        console.log("period Data", periodData)
        for (var i = 0; i < periodData.length; i++) {
            state.periodData.push({
                PERIOD_ID: periodData[i].PERIOD_ID,
                PERIOD_NAME: periodData[i].PERIOD_NAME,
                YEAR_ID: periodData[i].YEAR_ID
            })
        }
        console.log(state.periodData)
    }
};

const actions = {
    getYear({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_GET_YEARS",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("getYearMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getPeriod({ commit }, id) {
        return axios.post(getURL, {
                fun_name: "FU_GET_PERIOD",
                param_name: ["P_YEAR_ID"],
                param_value: [id],
            }).then(res => {
                console.log("resssssssssss", res)
                commit("getPeriodMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    deleteYear(_, id) {
        console.log("ID", id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_YEARS",
                param_name: ["P_YEAR_ID"],
                param_value: [id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },
    deletePeriod(_, id) {
        console.log("ID", id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_PERIOD",
                param_name: ["P_PERIOD_ID"],
                param_value: [id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },
    createYear(_, name) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_YEARS",
                param_name: ["P_YEAR_NAME"],
                param_value: [name],
            })
            .then((res) => {
                console.log("Create", res.data);
                console.log("Name", name);
            })
            .catch((error) => console.log(error));
    },
    createPeriod(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_PERIOD",
                param_name: ["P_PERIOD_NAME", "P_YEAR_ID"],
                param_value: [payload.name, payload.typeID],
            })
            .then((res) => {
                console.log("Create", res.data);
                console.log("Name", name);
            })
            .catch((error) => console.log(error));
    },
    updateYear(_, payload) {
        console.log(payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_YEARS",
                param_name: ["P_YEAR_ID", "P_YEAR_NAME"],
                param_value: [payload.id, payload.name],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.id);
                console.log(payload.name);
            })
            .catch((error) => console.log(error));
    },
    updatePeriod(_, payload) {
        console.log("ssssssssssssssssssss", payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_PERIOD",
                param_name: ["P_PERIOD_ID", "P_PERIOD_NAME", "P_YEAR_ID"],
                param_value: [payload.id, payload.name, payload.typeID],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.id);
                console.log(payload.name);
            })
            .catch((error) => console.log(error));
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}