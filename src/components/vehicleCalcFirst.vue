<template>
<div>

    <div>
        <v-app-bar color="light">
            <v-spacer>
            </v-spacer>
            <h3 style="margin-right : 10%">اضافه مركبه<i class='bx bx-car'></i> </h3>
            <vs-button to='/allUnits' danger style="margin-left : 10% ;position : absolute ; float : right"> عوده<i class='bx bx-exit'></i></vs-button>

            <vs-button to='/' danger style="position : absolute ; float : right">تسجيل خروج<i class='bx bx-exit'></i></vs-button>

        </v-app-bar>
    </div>

    <div style="display: flex; justify-content:center ; margin-top:10px">
        <p> <span style="color:rgb(25, 91, 255) ; margin-right:20px">اسم الوحده</span> : {{info.name}} </p>

        <p> <span style="color:rgb(25, 91, 255)">التاريخ</span> : {{date}} </p>
    </div>
    <div style="display : flex ;  justify-content:center ; margin-right:20px; margin-top:20px">
        <div style="display : flex ; justify-content : center;align-items:center ; margin-right:100px ;">
            <vs-button style="margin-top:-10px" gradient @click="createData">
                اضافه
            </vs-button>
            <vs-input style="margin-right:10px ; margin-top:-15px" type="text" v-model="countV" />
            <label style="margin-right: 200px;margin-top:-15px">عدد المركبات</label>

        </div>

        <div class="box" style=" margin-right : -400px; margin-top:20px">

            <select style="border:1px solid gray; border-radius : 2px solid red ; margin-right:10px" v-model="selectedUnit" @change="populateUnitTable()">

                <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                <option v-for="(i, key) in getUnitData" :key="key" :value="i.VEHICLE_ID">
                    {{ i.VEHICLE_NAME }}

                </option>

            </select>

            <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedCat" @change="populateCatTable()">

                <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                <option v-for="(i, key) in getCatData" :key="key" :value="i.VEHICLE_TYPE_ID">
                    {{ i.VEHICLE_TYPE_NAME }}

                </option>

            </select>
        </div>

    </div>
    <section class="centerd">
        <vs-table style="margin-top:50px">
            <template #header>

                <template>
                    <vs-input class="theinputsearch" style="width : 100% ;text-align:center; color : green; direction:rtl; text-align : center" v-model="search" border placeholder=" بحث.... ">
                        <template #icon>
                            <i class='bx bx-search'></i>
                        </template>
                    </vs-input>
                </template>
            </template>
            <template #thead style="text-align:center">
                <vs-tr class="headder" style="text-align:center ; direction : rtl ; justify-content : center">

                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        TOTAL_OIL_CAPACITY
                    </vs-th>

                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        OIL_NAME
                    </vs-th>
                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        VEHICLE_OIL_TYPE_NAME
                    </vs-th>
                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        OIL_TYPE_NAME
                    </vs-th>
                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        VEHICLE_NAME
                    </vs-th>

                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr style="direction : rtl" :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getCalc1Data, search), page, max)" :data="tr">

                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.TOTAL_OIL_CAPACITY }}
                    </vs-td>

                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.OIL_NAME}}
                    </vs-td>

                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.VEHICLE_OIL_TYPE_NAME}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.OIL_TYPE_NAME}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{ tr.VEHICLE_NAME }}
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getCalc1Data, search), max)" />
            </template>
        </vs-table>
    </section>
</div>
</template>

<script>
export default {
    data: () => ({
        date: localStorage.getItem("mydate"),
        info: JSON.parse(localStorage.getItem("myid")),
        group_id: null,
        group_name: null,
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: '',
        page: 1,
        max: 5,
        selectedCat: '',
        countV: "",
        activeTable: false,
        selectedUnit: ""
    }),

    created() {
        this.$store.dispatch("addCalcVehicle_2");
        this.populateUnitTable()
    },

    computed: {
        getCatData() {
            return this.$store.getters.firstCalcGetter
        },
        getUnitData() {
            return this.$store.getters.firstCalcGetter1
        },
        getGroupData() {
            return this.$store.getters.groupDataGetter
        },
        getCalc1Data() {
            return this.$store.getters.calcTable2Getter
        }
    },

    methods: {
        populateCatTable() {
            console.log("id", this.selectedCat)
            this.$store.dispatch("addCalcVehicle_11", this.selectedCat);
        },

        populateUnitTable() {
            console.log("id", this.date)
            this.$store.dispatch("calcVehicleTable2", {
                unit_id: this.info.id,
                oil_calc_date: this.date
            })
            this.activeTable = true
        },

        deleteData(group_id) {
            this.$store.dispatch("deleteGroup", group_id).then(() => {
                this.$store.dispatch("getGroupData", this.selectedUnit)
            })
        },

        updateData(group_id, group_name) {
            this.$store.dispatch("updateGroup", {
                    group_id,
                    group_name,
                    unit_id: this.selectedUnit
                })
                .then(() => {
                    this.$store.dispatch("getGroupData", this.selectedUnit)
                })
        },

        createData() {
            if (this.selectedCat && this.date && this.info.id && this.countV) {
                this.$store.dispatch("insertCalcVehicleTable2", {
                        vehicle_id: this.selectedUnit,
                        oil_calc_date: this.date,
                        unit_id: this.info.id,
                        vehicle_count: this.countV

                    })
                    .then(() => {
                        this.populateUnitTable()
                    })
            } else {
                this.$vs.notification({
                    color: "danger",
                    text: `برجاء ادخال قيم`,
                });
            }

        },

    },

}
</script>

<style>
.theinputsearch {
    width: 1000px
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
    padding: 10px 11px 0 !important
}

.vs-input-content {
    background-color: #F4F7F8;
}

.center {
    width: 70%;
    margin-top: 25px;
}

.home {
    width: 80%;

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

.vs-table-content {
    margin: 0 !important;
    width: 67% !important;
}

.centerd {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
}
</style>
