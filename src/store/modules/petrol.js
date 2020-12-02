import axios from 'axios'
import {crudURL} from '../index.js'
import {getURL} from '../index.js'
const state = {
    petrolTypesData: [],
    petrolData: [],
};

const getters = {
    petrolTypesGetter: state => {
        return state.petrolTypesData
    },
    petrolGetter: state => {
        return state.petrolData
    },
};

const mutations = {
    petrolTypesMutation(state, petrolTypesData) {
        state.petrolTypesData = []
        console.log("PetrolTypes Data", petrolTypesData)
        for (var i = 0; i < petrolTypesData.length; i++) {
            state.petrolTypesData.push({
                OIL_TYPE_ID: petrolTypesData[i].OIL_TYPE_ID,
                OIL_TYPE_NAME: petrolTypesData[i].OIL_TYPE_NAME,
            })
        }
        console.log(state.petrolTypesData)
    },
    petrolMutation(state, petrolData) {
        state.petrolData = []
        console.log("Petrol Data", petrolData)
        for (var i = 0; i < petrolData.length; i++) {
            state.petrolData.push({
                OIL_ID: petrolData[i].OIL_ID,
                OIL_NAME: petrolData[i].OIL_NAME,
                OIL_DESC: petrolData[i].OIL_DESC,
                OIL_TYPE_ID: petrolData[i].OIL_TYPE_ID
            })
        }
        console.log(state.petrolData)
    },
};

const actions = {
    getPetrolTypesData({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_OIL_TYPES",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("petrolTypesMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getPetrolData({ commit }, id) {
        return axios.post(getURL, {
                fun_name: "FU_GET_OILS",
                param_name: ["P_OIL_TYPE_ID"],
                param_value: [id],
            }).then(res => {
                console.log("resssssssssss", res)
                commit("petrolMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    deletePetrolTypesRow(_, id) {
        console.log("ID", id)
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_OIL_TYPES",
                param_name: ["P_OIL_TYPE_ID"],
                param_value: [id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },
    deletePetrolRow(_, id) {
        console.log("ID", id)
        return axios
            .post(crudURL, {
                fun_name: " PRO_DELETE_OILS",
                param_name: ["P_OIL_ID"],
                param_value: [id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },
    createPetrolTypesRow(_, name) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_OIL_TYPES",
                param_name: ["P_OIL_TYPE_NAME"],
                param_value: [name],
            })
            .then((res) => {
                console.log("Create", res.data);
                console.log("Name", name);
            })
            .catch((error) => console.log(error));
    },
    createPetrolRow(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_OILS",
                param_name: ["P_OIL_NAME", "P_OIL_DESC", "P_OIL_TYPE_ID"],
                param_value: [payload.name, payload.desc, payload.typeID],
            })
            .then((res) => {
                console.log("Create", res.data);
                console.log("Name", name);
            })
            .catch((error) => console.log(error));
    },
    updatePetrolTypesRow(_, payload) {
        console.log(payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_OIL_TYPES",
                param_name: ["P_OIL_TYPE_ID", "P_OIL_TYPE_NAME"],
                param_value: [payload.id, payload.name],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.id);
                console.log(payload.name);
            })
            .catch((error) => console.log(error));
    },
    updatePetrolRow(_, payload) {
        console.log("ssssssssssssssssssss", payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_OILS",
                param_name: ["P_OIL_ID", "P_OIL_NAME", "P_OIL_DESC", "P_OIL_TYPE_ID"],
                param_value: [payload.id, payload.name, payload.desc, payload.typeID],
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