import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/Home.vue'
import PetrolTypes from '../views/PetrolTypes.vue'
import Petrol from '../views/Petrol.vue'

//import Vehicles from '../views/Vehicles.vue'
import VehiclesTypes from '../views/VehiclesTypes.vue'

import store from '../store/index'

import Year from '../views/Year.vue'
import Period from '../views/Period.vue'

import Screen_1 from '../views/Vehicle_Screen_1.vue'
import Screen_2 from '../views/Vehicle_Screen_2.vue'
import Screen_3 from '../views/Vehicle_Screen_3.vue'
import Screen_4 from '../views/Vehicle_Screen_4.vue'

import Groups from '../views/Groups.vue'
import Users from '../views/Users.vue'
import Category from '../views/Category.vue'
import Pages from '../views/Pages.vue'
import vehicleoil from '../views/VEHICLE_OIL.vue'
import voTtable from '../views/voTable.vue'
import alert from '../views/alertbutton.vue'
import unitVoils from '../views/unitvehicleoil.vue'
import allTheunits from '../views/allUnitsView.vue'
import calc2v from '../views/vehicleCalc1.vue'
import calc1v from '../views/vehicleCalc2.vue'
import calc3v from '../views/vehicleCalc3.vue'
import calc4v from '../views/vehicleCalc4.vue'
import firstT from '../views/firstPageTable.vue'
import uu from '../views/uniE.vue'
import therep from '../views/mReport.vue'
const ifAuthenticated = (to, from, next) => {
    console.log("store.getters.IF_LOGIN", store.getters.getIfLogin)

    if (store.getters.getIfLogin != 'undefined') {
        next()
        return
    }
    next('/')
}


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    }, 

    {
        path: '/reportts',
        name: 'reports',
        component: therep,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/secondPage',
        name: 'firstPage',
        component: firstT,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/unitV',
        name: 'unit',
        component: uu,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        beforeEnter: ifAuthenticated,
    },

    
    {
        path: '/home',
        name: 'Home',
        component: Home,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/calc2',
        name: 'calc2',
        component: calc2v,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/calc1',
        name: 'calc1',
        component: calc1v,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/calc3',
        name: 'calc3',
        component: calc3v,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/calc4',
        name: 'calc4',
        component: calc4v,
        beforeEnter: ifAuthenticated,
    },

    
    {
        path: '/unitvoil',
        name: 'unitvoil',
        component: unitVoils,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/allUnits',
        name: 'allunits',
        component: allTheunits,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/vehicleoil',
        name: 'vehicleoil',
        component: vehicleoil,
        beforeEnter: ifAuthenticated,
    },
   
    {
        path: '/petrolTypes',
        name: 'PetrolTypes',
        component: PetrolTypes,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/petrol',
        name: 'Petrol',
        component: Petrol,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/vehiclesTypes',
        name: 'vehiclesTypes',
        component: VehiclesTypes,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/vehiclesScreen1',
        name: 'Screen_1',
        component: Screen_1,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/vehiclesScreen2',
        name: 'Screen_2',
        component: Screen_2,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/vehiclesScreen3',
        name: 'Screen_3',
        component: Screen_3,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/vehiclesScreen4',
        name: 'Screen_4',
        component: Screen_4,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/year',
        name: 'Year',
        component: Year,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/period',
        name: 'Period',
        component: Period,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/groups',
        name: 'Groups',
        component: Groups,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/pages',
        name: 'Pages',
        component: Pages,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/voTabllle',
        name: 'votableScreen',
        component: voTtable,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/alert',
        name: 'alert',
        component: alert,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router