import axios from 'axios'
import {crudURL} from '../index.js'
import {getURL} from '../index.js'
const state = {
    vehiclesTypesData: [],
    vehiclesData: [],
    vehiclesTypesData_1: [],
    vehiclesTypesData_2: [],
    vehiclesTypesData_3: [],
    vehiclesTypesData_4: [],
};

const getters = {
    vehiclesTypesGetter: state => {
        return state.vehiclesTypesData
    },
    vehiclesGetter: state => {
        return state.vehiclesData
    },
    vehiclesTypesGetter_1: state => {
        return state.vehiclesTypesData_1
    },
    vehiclesTypesGetter_2: state => {
        return state.vehiclesTypesData_2
    },
    vehiclesTypesGetter_3: state => {
        return state.vehiclesTypesData_3
    },
    vehiclesTypesGetter_4: state => {
        return state.vehiclesTypesData_4
    },
};

const mutations = {
    vehiclesTypesMutation(state, vehiclesTypesData) {
        state.vehiclesTypesData = []
        console.log("vehiclesTypes Data", vehiclesTypesData)
        for (var i = 0; i < vehiclesTypesData.length; i++) {
            state.vehiclesTypesData.push({
                VEHICLE_TYPE_ID: vehiclesTypesData[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME: vehiclesTypesData[i].VEHICLE_TYPE_NAME,
                VEHICLE_TYPE_DESC: vehiclesTypesData[i].VEHICLE_TYPE_DESC
            })
        }
        console.log(state.vehiclesTypesData)
    },
    vehiclesMutation(state, vehiclesData) {
        state.vehiclesData = []
        console.log("vehicles Data", vehiclesData)
        for (var i = 0; i < vehiclesData.length; i++) {
            state.vehiclesData.push({
                VEHICLE_ID: vehiclesData[i].VEHICLE_ID,
                VEHICLE_NAME: vehiclesData[i].VEHICLE_NAME,
                VEHICLE_TYPE_ID: vehiclesData[i].VEHICLE_TYPE_ID
            })
        }
        console.log(state.vehiclesData)
    },
    vehiclesTypesMutation_1(state, vehiclesTypesData_1) {
        state.vehiclesTypesData_1 = []
        console.log("vehiclesTypes Data 1", vehiclesTypesData_1)
        for (var i = 0; i < vehiclesTypesData_1.length; i++) {
            state.vehiclesTypesData_1.push({
                VEHICLE_TYPE_ID: vehiclesTypesData_1[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME: vehiclesTypesData_1[i].VEHICLE_TYPE_NAME,
                VEHICLE_TYPE_DESC: vehiclesTypesData_1[i].VEHICLE_TYPE_DESC
            })
        }
        console.log(state.vehiclesTypesData_1)
    },
    vehiclesTypesMutation_2(state, vehiclesTypesData_2) {
        state.vehiclesTypesData_2 = []
        console.log("vehiclesTypes Data 2", vehiclesTypesData_2)
        for (var i = 0; i < vehiclesTypesData_2.length; i++) {
            state.vehiclesTypesData_2.push({
                VEHICLE_TYPE_ID: vehiclesTypesData_2[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME: vehiclesTypesData_2[i].VEHICLE_TYPE_NAME,
                VEHICLE_TYPE_DESC: vehiclesTypesData_2[i].VEHICLE_TYPE_DESC
            })
        }
        console.log(state.vehiclesTypesData_2)
    },
    vehiclesTypesMutation_3(state, vehiclesTypesData_3) {
        state.vehiclesTypesData_3 = []
        console.log("vehiclesTypes Data 3", vehiclesTypesData_3)
        for (var i = 0; i < vehiclesTypesData_3.length; i++) {
            state.vehiclesTypesData_3.push({
                VEHICLE_TYPE_ID: vehiclesTypesData_3[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME: vehiclesTypesData_3[i].VEHICLE_TYPE_NAME,
                VEHICLE_TYPE_DESC: vehiclesTypesData_3[i].VEHICLE_TYPE_DESC
            })
        }
        console.log(state.vehiclesTypesData_3)
    },
    vehiclesTypesMutation_4(state, vehiclesTypesData_4) {
        state.vehiclesTypesData_4 = []
        console.log("vehiclesTypes Data 4", vehiclesTypesData_4)
        for (var i = 0; i < vehiclesTypesData_4.length; i++) {
            state.vehiclesTypesData_4.push({
                VEHICLE_TYPE_ID: vehiclesTypesData_4[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME: vehiclesTypesData_4[i].VEHICLE_TYPE_NAME,
                VEHICLE_TYPE_DESC: vehiclesTypesData_4[i].VEHICLE_TYPE_DESC
            })
        }
        console.log(state.vehiclesTypesData_4)
    },
};

const actions = {
    getvehiclesTypesData({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_VEHICLE_TYPES",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("vehiclesTypesMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getvehiclesData({ commit }, id) {
        return axios.post(getURL, {
                fun_name: "FU_GET_VEHICLES",
                param_name: ["P_VEHICLE_TYPE_ID"],
                param_value: [id],
            }).then(res => {
                console.log("resssssssssss", res)
                commit("vehiclesMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getvehiclesTypesData_1({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_VEHICLE_TYPES_1",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("vehiclesTypesMutation_1", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getvehiclesTypesData_2({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_VEHICLE_TYPES_2",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("vehiclesTypesMutation_2", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getvehiclesTypesData_3({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_VEHICLE_TYPES_3",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("vehiclesTypesMutation_3", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getvehiclesTypesData_4({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_VEHICLE_TYPES_4",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("vehiclesTypesMutation_4", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    deletevehiclesTypesRow(_, id) {
        console.log("ID", id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_VEHICLE_TYPES",
                param_name: ["P_VEHICLE_TYPE_ID"],
                param_value: [id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },
    deletevehiclesRow(_, id) {
        console.log("ID", id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_VEHICLES",
                param_name: ["P_VEHICLE_ID"],
                param_value: [id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },
    createvehiclesTypesRow(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_VEHICLE_TYPES",
                param_name: ["P_VEHICLE_TYPE_NAME", "P_VEHICLE_TYPE_DESC"],
                param_value: [payload.name, payload.desc],
            })
            .then((res) => {
                console.log("Create", res.data);
                console.log("Name", name);
            })
            .catch((error) => console.log(error));
    },
    createvehiclesRow(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_VEHICLES",
                param_name: ["P_VEHICLE_NAME", "P_VEHICLE_TYPE_ID"],
                param_value: [payload.name, payload.typeID],
            })
            .then((res) => {
                console.log("Create", res.data);
                console.log("Name", name);
            })
            .catch((error) => console.log(error));
    },
    updatevehiclesTypesRow(_, payload) {
        console.log(payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_VEHICLE_TYPES",
                param_name: ["P_VEHICLE_TYPE_ID", "P_VEHICLE_TYPE_NAME", "P_VEHICLE_TYPE_DESC"],
                param_value: [payload.id, payload.name, payload.desc],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.id);
                console.log(payload.name);
            })
            .catch((error) => console.log(error));
    },
    updatevehiclesRow(_, payload) {
        console.log("ssssssssssssssssssss", payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_VEHICLES",
                param_name: ["P_VEHICLE_ID", "P_VEHICLE_NAME", "P_VEHICLE_TYPE_ID"],
                param_value: [payload.id, payload.name, payload.typeID],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.id);
                console.log(payload.name);
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