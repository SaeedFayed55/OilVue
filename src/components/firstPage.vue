<template>
<div>
    <div style="display: flex; justify-content:center ; margin-top:10px">
        <p> <span style="color:rgb(25, 91, 255) ; margin-right:20px">اسم الوحده</span> : {{info.name}} </p>

        <p> <span style="color:rgb(25, 91, 255)">التاريخ</span> : {{date}} </p>
    </div>
    <div style="display : flex ;  justify-content:center ; margin-right:20px; margin-top:20px">
        <div style="display : flex ; justify-content : center;align-items:center ; margin-right:100px ;">
            <vs-button gradient @click="createData">
                اضافه
            </vs-button>
            <vs-input type="text" v-model="countV" />
            <label style="margin-left: 20px">عدد المدرعات</label>

        </div>
        <vs-select filter style="justify-content:center ; text-align : center ; direction : ltr ; margin-right : 10px" v-model="selectedUnit" color="danger" placeholder="من فضلك اختار  نوع العربه " @change="populateUnitTable()">
            <vs-option v-for="(i, key) in getUnitData" :key="key" :label="i.VEHICLE_NAME" :value="i.VEHICLE_ID">
                {{ i.VEHICLE_NAME }}
            </vs-option>
        </vs-select>

        <vs-select filter style="justify-content:center ; text-align : center ; direction : ltr" v-model="selectedCat" color="danger" placeholder="من فضلك اختار  نوع العربه " @change="populateCatTable()">
            <vs-option v-for="(i, key) in getCatData" :key="key" :label="i.VEHICLE_TYPE_NAME" :value="i.VEHICLE_TYPE_ID">
                {{ i.VEHICLE_TYPE_NAME }}
            </vs-option>
        </vs-select>

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
                        اجمالي الكمية
                    </vs-th>

                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        الزيت
                    </vs-th>
                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        التصنيف
                    </vs-th>
                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        النوع
                    </vs-th>
                    <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                        اسم المدرعه
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
            return this.$store.getters.firstTableGetter
        }
    },

    methods: {
        populateCatTable() {
            console.log("id", this.selectedCat)
            this.$store.dispatch("addCalcVehicle_11", this.selectedCat);
        },
        populateUnitTable() {
            console.log("id", this.date)
            this.$store.dispatch("firstPageTable", {
                unit_id: this.info.id,
                oil_calc_date: this.date
            })
            this.activeTable = true
        },
        // createData() {
        //     if (this.selectedCat && this.date && this.info.id && this.countV) {
        //         this.$store.dispatch("insertCalcVehicleTable1", {
        //                 vehicle_id: this.selectedUnit,
        //                 oil_calc_date: this.date,
        //                 unit_id: this.info.id,
        //                 vehicle_count: this.countV

        //             })
        //             .then(() => {
        //                 this.populateUnitTable()
        //             })
        //     } else {
        //         this.$vs.notification({
        //             color: "danger",
        //             text: `برجاء ادخال قيم`,
        //         });
        //     }

        // },

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
