<template>
<div>
    <vs-button disabled style="width:100%" danger flat>
        حساب الوحدات
    </vs-button>
    <div style="display : flex ; justify-content : center;">
        <div class="box" style=" margin-right : -400px; margin-top:20px">

            <input style="margin-right:10px" type="date" v-model="myDate" @input="fillTable" />

            <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedCat" @change="fillTable()">

                <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                <option v-for="(i, key) in getAllUnitsData" :key="key" :value='[{id:i.UNIT_ID , name:i.UNIT_NAME}]'>
                    {{ i.UNIT_NAME }}

                </option>

            </select>
        </div>

    </div>

    <div style="float-right ; display: flex ; justify-content: center ; margin-top : 20px ; ">
        <vs-button gradient to="/calc4">
            اضافه حساب م ع
        </vs-button>
        <vs-button gradient to="/calc3">
            اضافه حساب اشاره

        </vs-button>

        <vs-button gradient to="/calc2">
            اضافه حساب مركبات
        </vs-button>
        <vs-button gradient to="/secondPage">
            اضافه حساب المدرعات
        </vs-button>

    </div>
    <div style="display:flex ; justify-content:center">
        <vs-table>
            <template #thead style="text-align:center">

                <vs-tr class="headder" style="text-align:center">
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        تاريخ حساب الزيت
                    </vs-th>

                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        اسم السنه
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        اسم الفتره
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        اسم الوحده
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        اسم نوع زيوت المركبات
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        حجم الزيوت
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        مجموع زيوت المركبات
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        مجموع المركبات
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        اسم نوع الزيوت
                    </vs-th>
                    <vs-th style="width : 10% ; text-align : center ; margin-left:70px ">
                        اسم الزيوت </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getCalc1Data, search), page, max)" :data="tr">
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.OIL_CALC_DATE}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.YEAR_NAME}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.PERIOD_NAME}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.UNIT_NAME}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.VEHICLE_OIL_TYPE_NAME}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.OIL_CAPACITY}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.TOTAL_VEHICLE_OIL}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.VEHICLE_COUNT}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{tr.OIL_TYPE_NAME}}
                    </vs-td>
                    <vs-td style="width : 10% ; text-align : center ; margin-left:70px ">
                        {{ tr.OIL_NAME }}
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getCalc1Data, search), max)" />
            </template>
        </vs-table>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        myDate: "",
        selectedCat: '',
        group_id: null,
        group_name: null,
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: '',
        page: 1,
        max: 5,
        selectedUnit: '',
        activeTable: false,
    }),

    created() {
        this.$store.dispatch("fuUnitsCombo")
    },

    computed: {
        getAllUnitsData() {
            return this.$store.getters.allUnitsGetter
        },
        getCalc1Data() {
            return this.$store.getters.calcTable1Getter
        }

    },

    methods: {
        fillTable() {
            localStorage.setItem("mydate", this.myDate)
            localStorage.setItem("myid", JSON.stringify(this.selectedCat[0]))
            if (this.myDate && this.selectedCat.id) {
                this.$store.dispatch('calcVehicleTable1', {
                    oil_calc_date: this.myDate,
                    unit_id: this.selectedCat[0].id
                })
            }
        }
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
    margin-left: 100px !important;
    width: 100% !important;
}

.centerd {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
}

.myTable {
    margin-left: 20% !important;
    margin-top: 10px !important
}
</style>
