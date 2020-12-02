import Vue from 'vue'
import Vuex from 'vuex'
import Petrol from './modules/petrol'
import Vehicles from './modules/vehicles'
import Year from './modules/year'
import Login from './modules/login'
import Groups from './modules/groups'
import VehicleOil from './modules/vehicleoil'

var crudURL = "http://172.16.1.102:7061/api/v1/crud"
var getURL = "http://172.16.1.102:7061/api/v1/getdata"
export {crudURL , getURL}
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        storeMyData:""
    },
    getters: {
        getStoreData: state => {
            return state.storeMyData
        },
    },
    mutations: {
        saveData(state, payload){
            state.storeMyData = payload;
        }
    },
    actions: {
       
    },
    modules: {
        Petrol,
        Vehicles,
        Year,
        Login,
        Groups,
        VehicleOil,
        
    }
})