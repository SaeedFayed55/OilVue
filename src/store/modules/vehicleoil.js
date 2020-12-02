import axios from 'axios'
import {crudURL} from '../index.js'
import {getURL} from '../index.js'

  
const state = {

    groupData: [],
    catData: [],
    unitDatta : [],
    unitData: [],
    voTable:[],
    unitVehiclesData:[],
    allUnitsData : [],
    firstCalcData : [],
    firstCalcData1 : [],
    firstCalcData4:[],
    calcTable1Data : [],
    calcTable2Data : [],
    call1:[],
    call3:[],
    call4:[],
    firstPage : [],
    firstTable : [],
    firstCalcData2 : [],
    calc3 : [],
    calcV4 : [],
    unitAllData : [],
};

const getters = {
    voDataGetter: state => {
        return state.voTable
    },
    
  
    tableDataGetter: state => {
        return state.groupData
    },
    combo1DataGetter: state => {
        return state.catData
    },
    combo2DataGetter: state => {
        return state.unitDatta
    },
    combo3DataGetter: state => {
        return state.unitData
    },
    unitVehiclesGetter : state => {
        return state.unitVehiclesData
    }, 
    allUnitsGetter : state => {
        return  state.allUnitsData
    },
    firstCalcGetter : state => {
        return state.firstCalcData
    },
    firstCalcGetter1 : state => {
        return state.firstCalcData1
    }, 
    firstCalcData4:state=>{
        return  state.firstCalcData4
    },
    calcTable1Getter : state => {
        return state.calcTable1Data
    },

    calcTable2Getter : state => {
        return state.calcTable2Data
    },
    call1Getter:state=>{
        return state.call1
    },
    call3Getter:state=>{
        return state.call3
    },
    call4Getter:state=>{
        return state.call4
    },
    firstPageGetter : state => {
        return  state.firstPage
    },
    GetterTable1 : state => {
        return state.firstCalcData2
    },

    calc3Getter : state => {
        return state.calc3
    }, 
    clac4Getter : state => {
        return  state.calcV4
    },

    unitAllDataGetter : state => {
        return  state.unitAllData
    },
    uvGetter : state  => {
        return state.unitVehiclesData
    }
    
    
   
};

const mutations = {
  
    tableDataMutation(state, groupData) {
        state.groupData = []
        console.log("Group Data", groupData)
        for (var i = 0; i < groupData.length; i++) {
            state.groupData.push({
                VEHICLE_OIL_TYPE_ID: groupData[i].VEHICLE_OIL_TYPE_ID,
                VEHICLE_OIL_TYPE_NAME: groupData[i].VEHICLE_OIL_TYPE_NAME,
               

            })
        }
        console.log(state.groupData)
    },
    vehicleOilTableDataMu(state,voTable){
        state.voTable=[]
        for (var i = 0; i < voTable.length; i++) {
            state.voTable.push({
                OIL_ID: voTable[i].OIL_ID,
                OIL_CAPACITY: voTable[i].OIL_CAPACITY,
                VEHICLE_ID: voTable[i].VEHICLE_ID,
                OIL_NAME: voTable[i].OIL_NAME,
                OIL_TYPE_NAME: voTable[i].OIL_TYPE_NAME,
                VEHICLE_OIL_TYPE_ID: voTable[i].VEHICLE_OIL_TYPE_ID,
                VEHICLE_OIL_TYPE_NAME: voTable[i].VEHICLE_OIL_TYPE_NAME,
                VEHICLE_OILS_ID: voTable[i].VEHICLE_OILS_ID,
            })
        }
        console.log(state.voTable)
    },

    combo1DataMutation(state, catData) {
        state.catData = []
        console.log("Cat Data", catData)
        for (var i = 0; i < catData.length; i++) {
            state.catData.push({
                VEHICLE_TYPE_DESC: catData[i].VEHICLE_TYPE_DESC,
                VEHICLE_TYPE_ID: catData[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME: catData[i].VEHICLE_TYPE_NAME,


            })
        }
        console.log(state.catData)
    },
    combo2DataMutation (state , unitDatta){

        state.unitDatta = []
        
        for (var i = 0; i < unitDatta.length; i++) {
            state.unitDatta.push({
                VEHICLE_TYPE_ID: unitDatta[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME: unitDatta[i].VEHICLE_TYPE_NAME,
                VEHICLE_VEHICLE_TYPE_ID: unitDatta[i].VEHICLE_VEHICLE_TYPE_ID,

            })
        }

    },

    combo3DataMutation(state, unitData) {
        state.unitData = []
        
        for (var i = 0; i < unitData.length; i++) {
            state.unitData.push({
                VEHICLE_ID: unitData[i].VEHICLE_ID,
                VEHICLE_NAME: unitData[i].VEHICLE_NAME,
                VEHICLE_TYPE_ID: unitData[i].VEHICLE_TYPE_ID,

            })
        }
        console.log(state.unitData)
    },
    // unitVehiclesMu(state , unitVehiclesData) {
    //     state.unitVehiclesData = []
    //     for (var i = 0 ; i < unitVehiclesData.length ; i++){
    //         state.unitVehiclesData.push({
    //             OIL_ID : unitVehiclesData[i].OIL_ID,
    //             OIL_type_NAME : unitVehiclesData[i].OIL_type_NAME,
    //             OIL_NAME : unitVehiclesData[i].OIL_NAME,
    //             VEHICLE_COUNT : unitVehiclesData[i].VEHICLE_COUNT,
    //             TOTAL_VEHICLE_OIL : unitVehiclesData[i].TOTAL_VEHICLE_OIL,
    //             UNIT_VEHICLE_OIL_ID : unitVehiclesData[i].UNIT_VEHICLE_OIL_ID,
    //             VEHICLE_ID : unitVehiclesData[i].VEHICLE_ID,
    //             OIL_CAPACITY : unitVehiclesData[i].OIL_CAPACITY,
    //             VEHICLE_OIL_TYPE_ID : unitVehiclesData[i].VEHICLE_OIL_TYPE_ID,
    //             VEHICLE_OIL_TYPE_NAME : unitVehiclesData[i].VEHICLE_OIL_TYPE_NAME,
    //             UNIT_ID : unitVehiclesData[i].UNIT_ID,
    //             UNIT_NAME : unitVehiclesData[i].UNIT_NAME,
    //             PERIOD_ID : unitVehiclesData[i].PERIOD_ID,
    //             PERIOD_NAME : unitVehiclesData[i].PERIOD_NAME,
    //             YEAR_NAME : unitVehiclesData[i].YEAR_NAME,
                

    //         })
    //     }
    //     console.log(state.unitVehiclesData)
    // },
    
    allUnitsMu(state , allUnitsData){
        state.allUnitsData = []
        for (var i = 0 ; i < allUnitsData.length ; i++){
            state.allUnitsData.push({
                UNIT_NAME : allUnitsData[i].UNIT_NAME,
                UNIT_ID : allUnitsData[i].UNIT_ID
            })
        }
        console.log(state.allUnitsData)
    },

    addCalc44 (state , calcV4){
        state.calcV4 = []
        for (var i = 0 ; i < calcV4.length ; i++){
            state.calcV4.push({
                VEHICLE_TYPE_DESC : calcV4[i].VEHICLE_TYPE_DESC,
                VEHICLE_TYPE_ID : calcV4[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME : calcV4[i].VEHICLE_TYPE_NAME
            })
        }
        console.log(state.calcV4)

    },

    addCalc1(state , firstCalcData){
        state.firstCalcData = []
        for (var i = 0 ; i < firstCalcData.length ; i++){
            state.firstCalcData.push({
                VEHICLE_TYPE_DESC : firstCalcData[i].VEHICLE_TYPE_DESC,
                VEHICLE_TYPE_ID : firstCalcData[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME : firstCalcData[i].VEHICLE_TYPE_NAME
            })
        }
        console.log(state.firstCalcData)
    },
    addCalc3 (state , calc3){

        state.calc3 = []
        for (var i = 0 ; i < calc3.length ; i++){
            state.calc3.push({
                VEHICLE_TYPE_DESC : calc3[i].VEHICLE_TYPE_DESC,
                VEHICLE_TYPE_ID : calc3[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME : calc3[i].VEHICLE_TYPE_NAME
            })
        }
        console.log(state.calc3)
    },

    addCalc2(state , firstCalcData2){
        state.firstCalcData2 = []
        for (var i = 0 ; i < firstCalcData2.length ; i++){
            state.firstCalcData2.push({
                VEHICLE_TYPE_DESC : firstCalcData2[i].VEHICLE_TYPE_DESC,
                VEHICLE_TYPE_ID : firstCalcData2[i].VEHICLE_TYPE_ID,
                VEHICLE_TYPE_NAME : firstCalcData2[i].VEHICLE_TYPE_NAME
            })
        }
        console.log(state.firstCalcData2)
    },
    
    addCalc11(state , firstCalcData1){
        state.firstCalcData1 = []
        for (var i = 0 ; i < firstCalcData1.length ; i++){
            state.firstCalcData1.push({
                VEHICLE_ID : firstCalcData1[i].VEHICLE_ID,
                VEHICLE_NAME : firstCalcData1[i].VEHICLE_NAME,
                VEHICLE_TYPE_ID : firstCalcData1[i].VEHICLE_TYPE_ID
            })
        }
        console.log(state.firstCalcData1)
    },
    addCalc4(state , firstCalcData4){
        console.log("")
        state.firstCalcData4 = []
        for (var i = 0 ; i < firstCalcData4.length ; i++){
            state.firstCalcData4.push({
                VEHICLE_ID : firstCalcData4[i].VEHICLE_ID,
                VEHICLE_NAME : firstCalcData4[i].VEHICLE_NAME,
                VEHICLE_TYPE_ID : firstCalcData4[i].VEHICLE_TYPE_ID
            })
        }
        console.log(state.firstCalcData4)
    },


    //first Page

    addCalcFirst(state  , firstPage){
        state.firstPage = []
        for ( var i = 0 ; i < firstPage.length ; i++){
            state.firstPage .push({
                VEHICLE_ID : firstPage[i].VEHICLE_ID,
                VEHICLE_NAME : firstPage[i].VEHICLE_NAME,
                VEHICLE_TYPE_ID : firstPage[i].VEHICLE_TYPE_ID

            })
        }
    },

    firstTablePage(state , firstTable){
        state.firstTable = []
        for (var i = 0 ; i < firstTable.length ; i++){
            state.firstTable.push({
                VEHICLE_NAME : firstTable[i].VEHICLE_NAME,
                OIL_NAME : firstTable[i].OIL_NAME,
                OIL_TYPE_NAME : firstTable[i].OIL_TYPE_NAME,
                VEHICLE_OIL_TYPE_NAME : firstTable[i].VEHICLE_OIL_TYPE_NAME,
                TOTAL_OIL_CAPACITY : firstTable[i].TOTAL_OIL_CAPACITY,
                VEHICLE_ID : firstTable[i].VEHICLE_ID,
                OIL_CAPACITY : firstTable[i].OIL_CAPACITY,
                VEHICLE_OIL_TYPE_ID : firstTable[i].VEHICLE_OIL_TYPE_ID,
                PERIOD_ID : firstTable[i].PERIOD_ID,
                FULL_PERIOD_NAME : firstTable[i].FULL_PERIOD_NAME



            })
        }
    },


    calcTable1(state , calcTable1Data){
        console.log(calcTable1Data)
        state.calcTable1Data = []
        for (var i = 0 ; i < calcTable1Data.length ; i++){
            state.calcTable1Data.push({
                VEHICLE_NAME : calcTable1Data[i].VEHICLE_NAME,
                OIL_TYPE_NAME : calcTable1Data[i].OIL_TYPE_NAME,
                VEHICLE_OIL_TYPE_NAME : calcTable1Data[i].VEHICLE_OIL_TYPE_NAME,
                OIL_NAME : calcTable1Data[i].OIL_NAME,
                TOTAL_OIL_CAPACITY : calcTable1Data[i].TOTAL_OIL_CAPACITY,
                VEHICLE_COUNT : calcTable1Data[i].VEHICLE_COUNT,
                TOTAL_VEHICLE_OIL : calcTable1Data[i].TOTAL_VEHICLE_OIL,
                UNIT_VEHICLE_OIL_ID : calcTable1Data[i].UNIT_VEHICLE_OIL_ID,
                OIL_CAPACITY : calcTable1Data[i].OIL_CAPACITY,
                VEHICLE_OIL_TYPE_ID : calcTable1Data[i].VEHICLE_OIL_TYPE_ID,
                PERIOD_ID : calcTable1Data[i].PERIOD_ID,
                PERIOD_NAME : calcTable1Data[i].PERIOD_NAME,
                YEAR_NAME : calcTable1Data[i].YEAR_NAME,
                OIL_CALC_DATE : calcTable1Data[i].OIL_CALC_DATE
                 

            })
        }
    },
   
    calcTable2(state , calcTable2Data){
        console.log(calcTable2Data)
        state.calcTable2Data = []
        for (var i = 0 ; i < calcTable2Data.length ; i++){
            state.calcTable2Data.push({
                VEHICLE_NAME : calcTable2Data[i].VEHICLE_NAME,
                OIL_TYPE_NAME : calcTable2Data[i].OIL_TYPE_NAME,
                VEHICLE_OIL_TYPE_NAME : calcTable2Data[i].VEHICLE_OIL_TYPE_NAME,
                OIL_NAME : calcTable2Data[i].OIL_NAME,
                TOTAL_OIL_CAPACITY : calcTable2Data[i].TOTAL_OIL_CAPACITY,
                VEHICLE_ID : calcTable2Data[i].VEHICLE_ID,
                OIL_CAPACITY : calcTable2Data[i].OIL_CAPACITY,
                VEHICLE_OIL_TYPE_ID : calcTable2Data[i].VEHICLE_OIL_TYPE_ID,
                PERIOD_ID : calcTable2Data[i].PERIOD_ID,
                FULL_PERIOD_NAME : calcTable2Data[i].FULL_PERIOD_NAME



            })
        }
    },

    call1(state , call1){
        console.log(call1)
        state.call1 = []
        for (var i = 0 ; i < call1.length ; i++){
            state.calcTable1Data.push({
                OIL_ID : call1[i].OIL_ID,
                OIL_NAME : call1[i].OIL_NAME,
                OIL_type_NAME : call1[i].OIL_type_NAME,
                VEHICLE_COUNT : call1[i].VEHICLE_COUNT,
                TOTAL_VEHICLE_OIL : call1[i].TOTAL_VEHICLE_OIL,
                UNIT_VEHICLE_OIL_ID : call1[i].UNIT_VEHICLE_OIL_ID,
                VEHICLE_ID : call1[i].VEHICLE_ID,
                OIL_CAPACITY : call1[i].OIL_CAPACITY,
                VEHICLE_OIL_TYPE_ID : call1[i].VEHICLE_OIL_TYPE_ID,
                VEHICLE_OIL_TYPE_NAME : call1[i].VEHICLE_OIL_TYPE_NAME,
                PERIOD_ID : call1[i].PERIOD_ID,
                PERIOD_NAME : call1[i].PERIOD_NAME,
                YEAR_NAME : call1[i].YEAR_NAME,
                OIL_CALC_DATE : call1[i].OIL_CALC_DATE
            })
        }
    },
    calcTable3(state ,  call3){
        console.log(call3)
        state.call3 = []
        for (var i = 0 ; i < call3.length ; i++){
            state.call3.push({
                VEHICLE_NAME : call3[i].VEHICLE_NAME,
                OIL_TYPE_NAME : call3[i].OIL_TYPE_NAME,
                VEHICLE_OIL_TYPE_NAME : call3[i].VEHICLE_OIL_TYPE_NAME,
                OIL_NAME : call3[i].OIL_NAME,
                TOTAL_OIL_CAPACITY : call3[i].TOTAL_OIL_CAPACITY,
                VEHICLE_ID : call3[i].VEHICLE_ID,
                OIL_CAPACITY : call3[i].OIL_CAPACITY,
                VEHICLE_OIL_TYPE_ID : call3[i].VEHICLE_OIL_TYPE_ID,
                PERIOD_ID : call3[i].PERIOD_ID,
                PERIOD_NAME : call3[i].PERIOD_NAME,
                YEAR_NAME : call3[i].YEAR_NAME,
                OIL_CALC_DATE : call3[i].OIL_CALC_DATE
            })
        }
    },
    calcTable4(state ,  call4){
        console.log(call4)
        state.call4 = []
        for (var i = 0 ; i < call4.length ; i++){
            state.call4.push({
                VEHICLE_NAME : call4[i].VEHICLE_NAME,
                OIL_TYPE_NAME : call4[i].OIL_TYPE_NAME,
                VEHICLE_OIL_TYPE_NAME : call4[i].VEHICLE_OIL_TYPE_NAME,
                OIL_NAME : call4[i].OIL_NAME,
                TOTAL_OIL_CAPACITY : call4[i].TOTAL_OIL_CAPACITY,
                OIL_CAPACITY : call4[i].OIL_CAPACITY,
                VEHICLE_OIL_TYPE_ID : call4[i].VEHICLE_OIL_TYPE_ID,
                PERIOD_ID : call4[i].PERIOD_ID,
                PERIOD_NAME : call4[i].PERIOD_NAME,
                YEAR_NAME : call4[i].YEAR_NAME,
                OIL_CALC_DATE : call4[i].OIL_CALC_DATE
            })
        }
    },


    unitVehiclesMu(state , unitVehiclesData) {
        state.unitVehiclesData = []
        for (var i = 0 ; i < unitVehiclesData.length ; i++){
            state.unitVehiclesData.push({
                OIL_ID : unitVehiclesData[i].OIL_ID,
                OIL_NAME : unitVehiclesData[i].OIL_NAME,
                OIL_TYPE_NAME : unitVehiclesData[i].OIL_TYPE_NAME,
                VEHICLE_COUNT : unitVehiclesData[i].VEHICLE_COUNT,
                TOTAL_VEHICLE_OIL : unitVehiclesData[i].TOTAL_VEHICLE_OIL,
                UNIT_VEHICLE_OIL_ID : unitVehiclesData[i].UNIT_VEHICLE_OIL_ID,
                VEHICLE_ID : unitVehiclesData[i].VEHICLE_ID,
                OIL_CAPACITY : unitVehiclesData[i].OIL_CAPACITY,
                VEHICLE_OIL_TYPE_ID : unitVehiclesData[i].VEHICLE_OIL_TYPE_ID,
                VEHICLE_OIL_TYPE_NAME : unitVehiclesData[i].VEHICLE_OIL_TYPE_NAME,
                UNIT_ID : unitVehiclesData[i].UNIT_ID,
                UNIT_NAME : unitVehiclesData[i].UNIT_NAME,
                PERIOD_ID : unitVehiclesData[i].PERIOD_ID,
                PERIOD_NAME : unitVehiclesData[i].PERIOD_NAME,
                YEAR_NAME : unitVehiclesData[i].YEAR_NAME,
                

            })
        }
        console.log(state.unitVehiclesData)
    },
    getAllUnitDataMu(state, unitAllData) {
        state.unitAllData = []
        
        for (var i = 0; i < unitAllData.length; i++) {
            state.unitAllData.push({
                UNIT_NAME: unitAllData[i].UNIT_NAME,
                UNIT_ID: unitAllData[i].UNIT_ID,
               

            })
        }
        console.log(state.unitAllData)
    },
    
};

const actions = {

  // 3 Combo Boxes
    getCombo1Data({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_VEHICLE_TYPES",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log("resssssssssss", res)
                commit("combo1DataMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    
    getCombo2Data({ commit }, cat_id) {
        return axios.post(getURL, {
                fun_name: "FU_VEHICLE_TYPES2",
                param_name: ["P_VEHICLE_TYPE_ID"],
                param_value: [cat_id],
            }).then(res => {
                console.log(res)
                commit("combo2DataMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    getCombo3Data({ commit }, cat_id) {
        return axios.post(getURL, {
                fun_name: "FU_GET_VEHICLES",
                param_name: ["P_VEHICLE_TYPE_ID"],
                param_value: [cat_id],
            }).then(res => {
                console.log(res)
                console.log("it is " + cat_id)
                commit("combo3DataMutation", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
// End of 3 Combo Boxes

//All units combos
fuUnitsCombo({ commit }) {
    return axios.post(getURL, {
            fun_name: "FU_ALL_UNITS",
            param_name: [],
            param_value: [],
        }).then(res => {
            console.log("resssssssssss", res)
            commit("allUnitsMu", res.data.Table)
        })
        .catch((error) => console.log(error));
},

// add veichle calc 1 
//combo1
// second page
addCalcVehicle_4({ commit }) {
    return axios.post(getURL, {
            fun_name: "FU_VEHICLE_TYPES_4",
            param_name: [],
            param_value: [],
        }).then(res => {
            //console.log("resssssssssss", res)
            commit("addCalc44", res.data.Table)
        })
        .catch((error) => console.log(error));
},
addCalcVehicle_3({ commit }) {
    return axios.post(getURL, {
            fun_name: "FU_VEHICLE_TYPES_3",
            param_name: [],
            param_value: [],
        }).then(res => {
            //console.log("resssssssssss", res)
            commit("addCalc3", res.data.Table)
        })
        .catch((error) => console.log(error));
},
addCalcVehicle_2({ commit }) {
    return axios.post(getURL, {
            fun_name: "FU_VEHICLE_TYPES_2",
            param_name: [],
            param_value: [],
        }).then(res => {
            //console.log("resssssssssss", res)
            commit("addCalc1", res.data.Table)
        })
        .catch((error) => console.log(error));
},
addCalcVehicle_1({ commit }) {
    return axios.post(getURL, {
            fun_name: "FU_VEHICLE_TYPES_1",
            param_name: [],
            param_value: [],
        }).then(res => {
            //console.log("resssssssssss", res)
            commit("addCalc2", res.data.Table)
        })
        .catch((error) => console.log(error));
},



//combo2
addCalcVehicle_11({ commit } , cat_id) {
    console.log("cat_id" , cat_id)
    return axios.post(getURL, {
            fun_name: "FU_GET_VEHICLES",
            param_name: ["P_VEHICLE_TYPE_ID"],
            param_value: [cat_id],
        }).then(res => {

            commit("addCalc11", res.data.Table)
        })
        .catch((error) => console.log(error));
},

//table
calcVehicleTable1({ commit } , payload) {
    return axios.post(getURL, {
            fun_name: "FU_CALC_UNITS_OIL_1",
            param_name: ["P_UNIT_ID" ,"P_CALC_DATE"],
            param_value: [payload.unit_id , payload.oil_calc_date],
        }).then(res => {
            console.log("resssssssssss", res)
            commit("calcTable1", res.data.Table)
        })
        .catch((error) => console.log(error));
},


//table
//first page Table 
firstPageTable({ commit } , payload) {
    return axios.post(getURL, {
            fun_name: "FU_CALC_UNITS_OIL_1",
            param_name: ["P_UNIT_ID" ,"P_CALC_DATE"],
            param_value: [payload.unit_id , payload.oil_calc_date],
        }).then(res => {
            console.log("dsadsadasdas", res)
            commit("firstTablePage", res.data.Table)
        })
        .catch((error) => console.log(error));
},






calcVehicleTable2({ commit } , payload) {
    return axios.post(getURL, {
            fun_name: "FU_CALC_UNITS_OIL_2",
            param_name: ["P_UNIT_ID" ,"P_CALC_DATE"],
            param_value: [payload.unit_id , payload.oil_calc_date],
        }).then(res => {
            console.log("dsadsadasdas", res)
            commit("calcTable2", res.data.Table)
        })
        .catch((error) => console.log(error));
},
calcVehicleTable3({ commit } , payload) {
    return axios.post(getURL, {
            fun_name: "FU_CALC_UNITS_OIL_3",
            param_name: ["P_UNIT_ID" ,"P_CALC_DATE"],
            param_value: [payload.unit_id , payload.oil_calc_date],
        }).then(res => {
            console.log("third", res)
            commit("calcTable3", res.data.Table)
        })
        .catch((error) => console.log(error));
},
calcVehicleTable4({ commit } , payload) {
    return axios.post(getURL, {
            fun_name: "FU_CALC_UNITS_OIL_4",
            param_name: ["P_UNIT_ID" ,"P_CALC_DATE"],
            param_value: [payload.unit_id , payload.oil_calc_date],
        }).then(res => {
            console.log("forth", res)
            commit("calcTable4", res.data.Table)
        })
        .catch((error) => console.log(error));
},
call1({ commit } , payload) {
    return axios.post(getURL, {
            fun_name: "FU_CALC_UNITS_OIL_1",
            param_name: ["P_UNIT_ID" ,"P_CALC_DATE"],
            param_value: [payload.unit_id , payload.oil_calc_date],
        }).then(res => {
            console.log("call1", res)
            commit("call1", res.data.Table)
        })
        .catch((error) => console.log(error));
},

insertCalcVehicleTable2(_ , payload) {
    console.log('noooooooooooooo',payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count)
    return axios.post(crudURL, {
            fun_name: "PRO_INSERT_CALC_UNIT_OILS",
            param_name: ["P_VEHICLE_ID" ,"P_OIL_CALC_DATE", "P_UNIT_ID" , "P_VEHICLE_COUNT"],
            param_value: [payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count],
        }).then(res => {
            console.log("eslam", res)
        })
        .catch((error) => console.log(error));
},
insertCalcVehicleTable1(_ , payload) {
    console.log('noooooooooooooo',payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count)
    return axios.post(crudURL, {
            fun_name: "PRO_INSERT_CALC_UNIT_OILS",
            param_name: ["P_VEHICLE_ID" ,"P_OIL_CALC_DATE", "P_UNIT_ID" , "P_VEHICLE_COUNT"],
            param_value: [payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count],
        }).then(res => {
            console.log("mohamed", res)
        })
        .catch((error) => console.log(error));
},
insertCalcVehicleTable3(_ , payload) {
    console.log('noooooooooooooo',payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count)
    return axios.post(crudURL, {
            fun_name: "PRO_INSERT_CALC_UNIT_OILS",
            param_name: ["P_VEHICLE_ID" ,"P_OIL_CALC_DATE", "P_UNIT_ID" , "P_VEHICLE_COUNT"],
            param_value: [payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count],
        }).then(res => {
            console.log("essaam", res)
        })
        .catch((error) => console.log(error));
},
insertCalcVehicleTable4(_ , payload) {
    console.log('noooooooooooooo',payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count)
    return axios.post(crudURL, {
            fun_name: "PRO_INSERT_CALC_UNIT_OILS",
            param_name: ["P_VEHICLE_ID" ,"P_OIL_CALC_DATE", "P_UNIT_ID" , "P_VEHICLE_COUNT"],
            param_value: [payload.vehicle_id , payload.oil_calc_date , payload.unit_id , payload.vehicle_count],
        }).then(res => {
            console.log("essaam", res)
        })
        .catch((error) => console.log(error));
},




// end of 1 
//End of all units Combos


// Vehicles oil Get Data and crud Operattions 
getTableData({ commit }, unit_id) {
    return axios.post(getURL, {
            fun_name: "FU_VEHICLES_OIL_TYPES",
            param_name: ["P_VEHICLE_ID"],
            param_value: [unit_id],
        }).then(res => {
            console.log("id = " + unit_id)
            console.log(res)
            commit("tableDataMutation", res.data.Table)
        })
        .catch((error) => console.log(error));
},

    deleteTable(_, group_id) {
       
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_VEHICLES_OIL_TYPES",
                param_name: ["P_VEHICLE_OIL_TYPE_ID"],
                param_value: [group_id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },
    createTable(_, payload) {
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_VEHICLES_OIL_TYPES",
                param_name: [ "P_VEHICLE_OIL_TYPE_NAME","P_VEHICLE_ID"],
                param_value: [payload.group_name, payload.unit_id],
            })
            .then((res) => {
                console.log("Create", res.data);
            })
            .catch((error) => console.log(error));
    },
    updateTable(_, payload) {
        console.log("Payload", payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_UPDATE_VEHICLES_OIL_TYPES",
                param_name: ["P_VEHICLE_ID", "P_VEHICLE_OIL_TYPE_ID", "P_VEHICLE_OIL_TYPE_NAME"],
                param_value: [payload.group_id,  payload.unit_id, payload.group_name],
            })
            .then((res) => {
                console.log("Update case", res.data);
                console.log(payload.group_id);
                console.log(payload.group_name);
                console.log(payload.unit_id);

            })
            .catch((error) => console.log(error));
    },


    // Unit vehcile Data and CRUD OPERATIONS OF THE UNIT VEHICLE OIL
    unitVehiclesOil({ commit }, unit_id) {
        return axios.post(getURL, {
                fun_name: "FU_UNITS_VEHICLES_OIL",
                param_name: ["P_VEHICLE_ID" ],
                param_value: [unit_id],
            }).then(res => {
                console.log(res)
                commit("unitVehiclesMu", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

    deleteUnitOilTable(_, group_id) {
       
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_UNITS_VEHICLES_OIL",
                param_name: ["P_UNIT_VEHICLE_OIL_ID"],
                param_value: [group_id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },

    createUnitOilTable(_, payload) {
        console.log("Payload", payload)
        return axios
            .post(crudURL, {
                fun_name: "PRO_INSERT_UNITS_VEHICLES_OIL",
                param_name: ["P_VEHICLE_ID", "P_PERIOD_ID", "P_UNIT_ID" , "P_VEHICLE_COUNT","P_TOTAL_VEHICLE_OIL" ,"P_VEHICLE_OIL_TYPE_ID","P_OIL_ID","P_OIL_CAPACITY"],
                param_value: [payload.vehicle_id, payload.period_id, payload.unit_id,payload.vehicle_count, payload.total_vehicle_oil, payload.vehicle_oil_type_id,payload.oil_id , payload.oil_capacity],
            })
            .then((res) => {
                console.log("Update", res.data);
                console.log(payload.group_id);
                console.log(payload.group_name);
            })
            .catch((error) => console.log(error));
    },


    //voTable getData and crud operations

  vehicleOilTableData({ commit },group_id) {
    return axios.post(getURL, {
            fun_name: "FU_VEHICLES_OILS",
            param_name: ["P_VEHICLE_ID"],
            param_value: [group_id],
        }).then(res => {
            console.log(res)
            commit("vehicleOilTableDataMu", res.data.Table)
        })
        .catch((error) => console.log(error));
},

    deletevoTable(_, group_id) {
       
        return axios
            .post(crudURL, {
                fun_name: "PRO_DELETE_VEHICLES_OILS",
                param_name: ["P_VEHICLE_OILS_ID"],
                param_value: [group_id],
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error));
    },



updateVoTable(_, payload) {
    console.log("Payload", payload)
    return axios
        .post(crudURL, {
            fun_name: "PRO_UPDATE_VEHICLES_OILS",
            param_name: ["P_OIL_CAPACITY", "P_VEHICLE_OIL_TYPE_ID", "P_VEHICLE_OILS_ID"],
            param_value: [payload.o_c , payload.o_t , payload.v_o_i ]
        })
        .then((res) => {
            console.log("Update Case 2", res.data);
            console.log(payload.o_c);
            console.log(payload.o_t);
            console.log(payload.v_o_i);

        })
        .catch((error) => console.log(error));
},

createvoTable(_, payload) {
    return axios
        .post(crudURL, {
            fun_name: "PRO_INSERT_VEHICLES_OILS",
            param_name: [ "P_OIL_ID","P_VEHICLE_ID","P_OIL_CAPACITY","P_VEHICLE_OIL_TYPE_ID"],
            param_value: [payload.o_i, payload.v_i,payload.o_c,payload.v_t_i],
        })
        .then((res) => {
            console.log("Create case", res.data);
            console.log("v t i = " + payload.v_t_i)
        })
        .catch((error) => console.log(error));
},


deleteeUnitOilTable(_, group_id) {
       
    return axios
        .post(crudURL, {
            fun_name: "PRO_DELETE_UNITS_VEHICLES_OIL",
            param_name: ["P_UNIT_VEHICLE_OIL_ID"],
            param_value: [group_id],
        })
        .then((res) => {
            console.log(res)
        })
        .catch((error) => console.log(error));
},


    // Unit vehcile Data and CRUD OPERATIONS OF THE UNIT VEHICLE OIL
    unitVehiclesOill({ commit }, unit_id) {
        return axios.post(getURL, {
                fun_name: "FU_UNITS_VEHICLES_OIL",
                param_name: ["P_VEHICLE_ID" ],
                param_value: [unit_id],
            }).then(res => {
                console.log(res)
                commit("unitVehiclesMu", res.data.Table)
            })
            .catch((error) => console.log(error));
    },
    getAllUnitData({ commit }) {
        return axios.post(getURL, {
                fun_name: "FU_ALL_UNITS",
                param_name: [],
                param_value: [],
            }).then(res => {
                console.log(res)
                commit("getAllUnitDataMu", res.data.Table)
            })
            .catch((error) => console.log(error));
    },

createeUnitOilTable(_, payload) {
   
    return axios
        .post(crudURL, {
            fun_name: "PRO_INSERT_UNITS_VEHICLES_OIL",
            param_name: ["P_VEHICLE_ID", "P_PERIOD_ID", "P_UNIT_ID" , "P_VEHICLE_COUNT" ],
           param_value: [payload.vehicle_id, payload.period_id, payload.unit_id,payload.vehicle_count ],
            // param_value: [payload.vehicle_id, payload.period_id, payload.unit_id,payload.vehicle_count , payload.oil_capacity],
        })
        .then((res) => {
            console.log("   Create case", res.data);
            
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