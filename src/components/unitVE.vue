<template>
<div style="display : flex ; justify-content : center">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                وحدات زيوت المركبات
            </vs-button>
            <div class="box nbox" style="display : flex ; justify-content : center;">

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedVehicleType1" @change="populateCatTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo1Data" :key="key" :value="i.VEHICLE_TYPE_ID">
                        {{ i.VEHICLE_TYPE_NAME }}

                    </option>
                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedVehicleType2" @change="populateViechleTypeCombo()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo2Data" :key="key" :value="i.VEHICLE_TYPE_ID">
                        {{ i.VEHICLE_TYPE_NAME }}

                    </option>
                </select>
                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedYear" @change="populateYearTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo3Data" :key="key" :value="i.VEHICLE_ID">
                        {{ i.VEHICLE_NAME }}

                    </option>
                </select>
                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedPeriod" @change="populatePeriodTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getYear" :key="key" :value="i.YEAR_ID">
                        {{ i.YEAR_NAME }}

                    </option>
                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedAllU" @change="populateAllUnits()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getPeriod" :key="key" :value="i.PERIOD_ID">
                        {{ i.PERIOD_NAME }}

                    </option>
                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedUnitData" @change="populateUnitTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getAllUnit" :key="key" :value="i.UNIT_ID">
                        {{ i.UNIT_NAME }}

                    </option>
                </select>

            </div>
            <vs-button success v-if="activeTable" @click="(createActive = true),(vehicle_id=''),( period_id=''),(unit_id=''), (vehicle_count = '')">
                إضافة جديد
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة </strong>
                </template>
                <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                    <div style="display : flex">
                        <label>رقم المركبه </label>

                        <vs-input style="left : -20px ; width : 70% ;direction : rtl" v-model.lazy="vehicle_id" @keypress.enter="createTable(vehicle_id, period_id, unit_id, vehicle_count),(createActive = false)" />

                    </div><br>
                    <div style="display : flex">
                        <label> رقم الفتره </label>

                        <vs-input style="left : -20px ; width : 70% ;direction : rtl" v-model.lazy="period_id" @keypress.enter="createTable(vehicle_id, period_id, unit_id, vehicle_count),(createActive = false)" />

                    </div>
                    <br>
                    <div style="display : flex">
                        <label>رقم الوحده </label>

                        <vs-input style="left : -20px ; width : 70% ;direction : rtl" v-model.lazy="unit_id" @keypress.enter="createTable(vehicle_id, period_id, unit_id, vehicle_count),(createActive = false)" />

                    </div>
                    <br>
                    <div style="display : flex">
                        <label>عدد المركبات </label>

                        <vs-input style="left : -20px ; width : 70% ;direction : rtl" v-model.lazy="vehicle_count" @keypress.enter="createTable(vehicle_id, period_id, unit_id, vehicle_count),(createActive = false)" />

                    </div>

                    <br />
                    <vs-button style="left : -120px ; width : 25%" success class="btnSave" @click="
                createTable( period_id, unit_id, vehicle_count), (createActive = false)
              ">حفظ</vs-button>
                </div>
            </vs-dialog>
            <vs-input class="theinputsearch" style="width : 100% ;text-align:center; color : green; direction:rtl; float : right ; text-align : center" v-model="search" border placeholder=" بحث.... ">
                <template #icon>
                    <i class="bx bx-search"></i>
                </template>
            </vs-input>
        </template>
        <template #thead style="text-align:center">
            <vs-tr class="headder" style="text-align:center">
                <vs-th style="width : 25%">
                    حذف
                </vs-th>

                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    YEAR_NAME
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    PERIOD_NAME
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    UNIT_NAME
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    VEHICLE_OIL_TYPE_NAME
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    OIL_CAPACITY
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    TOTAL_VEHICLE_OIL
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    VEHICLE_COUNT
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    OIL_type_NAME
                </vs-th>
                <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                    OIL_NAME
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody v-if="activeTable">
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(
            $vs.getSearch(unitVehiclesOil, search),
            page,
            max
          )" :data="tr">
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    <a @click="
                (deleteActive = true), (unit_vehicle_oil_id = tr.UNIT_VEHICLE_OIL_ID)
              ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash " width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg></a>
                    <vs-dialog v-model="deleteActive">
                        <template #header>
                            <Strong>إتمام عملية المسح</Strong>
                        </template>
                        <div class="btnDelete" style="display: flex; justify-content: center">
                            <vs-button danger @click="deleteTable(unit_vehicle_oil_id), (deleteActive = false)">نعم</vs-button>
                            <vs-button success @click="deleteActive = false">لا</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>

                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.YEAR_NAME }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.PERIOD_NAME }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.UNIT_NAME }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.VEHICLE_OIL_TYPE_NAME }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.OIL_CAPACITY }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.TOTAL_VEHICLE_OIL }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.VEHICLE_COUNT }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.OIL_TYPE_NAME }}
                </vs-td>
                <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                    {{ tr.OIL_NAME }}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(unitVehiclesOil, search), max)" />
        </template>
    </vs-table>
</div>
</template>

<script>
export default {
    data: () => ({
        unit_vehicle_oil_id: null,
        unit_vehicle_oil_name: null,
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: "",
        page: 1,
        max: 5,
        selectedVehicleType1: "",
        selectedVehicleType2: "",
        selectedUnit: "",
        activeTable: false,
        selectedData: "",
        selectedDataa: "",
        selectedUnitData: "",
        selectedYear: "",
        selectedPeriod: "",
        selectedAllU: "",
        period_id: null,
        unit_id: null,
        vehicle_count: null,
        oil_capacity: null,
        vehicle_id: null,
    }),

    created() {
        this.$store.dispatch("getCombo1Data");
        this.$store.dispatch("getYear");
        // this.$store.dispatch("getAllUnitData");
    },

    computed: {
        getCombo1Data() {
            return this.$store.getters.combo1DataGetter;
        },
        getCombo2Data() {
            return this.$store.getters.combo2DataGetter;
        },
        getCombo3Data() {
            return this.$store.getters.combo3DataGetter;
        },

        getYear() {
            return this.$store.getters.yearGetter;
        },
        getPeriod() {
            return this.$store.getters.periodGetter;
        },
        getAllUnit() {
            return this.$store.getters.unitAllDataGetter;
        },

        unitVehiclesOil() {
            return this.$store.getters.uvGetter;
        },
    },

    methods: {
        populateCatTable() {
            console.log("id", this.selectedVehicleType1);
            this.$store.dispatch("getCombo2Data", this.selectedVehicleType1);
        },
        populateViechleTypeCombo() {
            console.log("id", this.selectedVehicleType2);
            this.$store.dispatch("getCombo3Data", this.selectedVehicleType2);
        },

        ////////
        populateYearTable() {
            this.$store.dispatch("getYear", this.selectedYear);
        },
        populateAllUnits() {
            this.$store.dispatch("getAllUnitData", this.selectedAllU);
        },
        ///////

        populatePeriodTable() {
            this.$store.dispatch("getPeriod", this.selectedPeriod);
        },
        populateUnitTable() {
            console.log("id", this.selectedUnitData);
            this.$store.dispatch("unitVehiclesOill", this.selectedUnitData);
            this.activeTable = true;
        },
        createTable(period_id, unit_id, vehicle_count) {

            this.$store.dispatch("createeUnitOilTable", {
                    period_id,
                    unit_id,
                    vehicle_count,
                    vehicle_id: this.selectedUnit

                })
                .then(() => {
                    this.$store.dispatch("unitVehiclesOill", this.selectedUnitData)
                })
        },

        deleteTable(unit_vehicle_oil_id) {
            this.$store.dispatch("deleteeUnitOilTable", unit_vehicle_oil_id).then(() => {
                this.$store.dispatch("unitVehiclesOill", this.selectedUnit);
            });
        },
        //     callUrl(){document.getElementById("demo").innerHTML = 
        // "The full URL of this page is:<br>" + window.location.href;},

    },
};
</script>

<style>
.theinputsearch {
    width: 1000px;
}

.vs-input-parent.theinputsearch.vs-input-parent--state-null.vs-input-parent--border.vs-component--primary {
    right: -10px;
    width: 100px;
}

#vs-input--8 {
    width: 100%;
}

.vs-input-content {
    width: 102%;
}

.vs-table__header {
    background-color: transparent;
    direction: rtl !important;
}

.vs-input-content {
    background-color: #f4f7f8;
}

.center {
    width: 70%;
}

.home {
    width: 80%;
    float: right;
}

.vs-input__label {
    width: 500px;
}

#vs-input--32 {
    width: 100% !important;
}

.vs-table__tbody {
    direction: rtl;
}

.vs-table__tr {
    direction: rtl !important;
}

.nbox {
    margin-left: 50%;
    margin-top: 30px
}

.box {

    transform: translate(-50%, -50%);

}

.box select {
    margin-right: 10px;
    margin-top: 20px;
    background-color: #F4F7F8;

    color: gray;
    padding: 5px;
    width: 250px;
    border: none;
    font-size: 12px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
}

.box::before {
    content: "\f13a";
    font-family: FontAwesome;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
}

.box:hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
    padding: 30px;
}
</style>
