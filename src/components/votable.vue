<template>
<div style="display : flex ; justify-content : center">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                زيوت المركبات
            </vs-button>

            <div class="box" style=" margin-right : -700px; margin-top:20px">

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedCat" @change="populateCatTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo1Data" :key="key" :value="i.VEHICLE_TYPE_ID">
                        {{ i.VEHICLE_TYPE_NAME }}

                    </option>

                </select>
                <select style="border:1px solid gray; border-radius : 2px solid red ;margin-right:10px " v-model="selectedCatt" @change="populateViechleTypeCombo()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> فضلك اختار </option>

                    <option v-for="(i, key) in getCombo2Data" :key="key" :value="i.VEHICLE_TYPE_ID">
                        {{ i.VEHICLE_TYPE_NAME }}

                    </option>

                </select>
                <div>
                    <select style="border:1px solid gray; border-radius : 2px solid red ; margin-right:10px" v-model="selectedUnit" @change="populateUnitTable(),populateoilTable()">

                        <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                        <option v-for="(i, key) in getCombo3Data" :key="key" :value="i.VEHICLE_ID">
                            {{ i.VEHICLE_NAME }}

                        </option>

                    </select>
                </div>

            </div>

            <vs-button style="float : right" success v-if="activeTable" @click="

            (createActive=true),
            (o_i=''),
            (v_i=''),
             (o_c=''),
             (v_t_i='')             ">
                إضافة جديد
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة </strong>
                </template>
                <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ;">
                    <div style="display : flex">
                        <label> كميه الزيت </label>
                        <vs-input style="left : -20px ; width : 70% ;direction : rtl" v-model.lazy="o_c" @keypress.enter="createTable(o_c), createActive = false" />
                    </div>
                    <br>
                    <div style="display : flex">
                        <label> النوع </label>
                        <div class="box" style="margin-right:-200px !important">
                            <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedO" @keypress.enter="createTable(o_c), createActive = false" @change="populatetypeTable()">

                                <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار نوع الوقود</option>

                                <option v-for="(i, key) in getPetrolTypesData" :key="key" :value="i.OIL_TYPE_ID">
                                    {{ i.OIL_TYPE_NAME }}

                                </option>

                            </select>

                            <select style="border:1px solid gray; border-radius : 2px solid red ; " @keypress.enter="createTable(o_c), createActive = false">

                                <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار نوع الوقود</option>

                                <option v-for="(i, key) in getPetrolData" :key="key" :value="i.OIL_ID">
                                    {{ i.OIL_NAME }}

                                </option>

                            </select>
                            <br>

                        </div>

                    </div>
                    <br>
                    <div class="box" style="display : flex">
                        <label> نوع الزيت </label>

                        <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedT" @keypress.enter="createTable(o_i,v_i,o_c,v_t_i), createActive = false">

                            <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار نوع زيت المركبه</option>

                            <option v-for="(i, key) in getTableData" :key="key" :value="i.VEHICLE_OIL_TYPE_ID">
                                {{ i.VEHICLE_OIL_TYPE_NAME }}

                            </option>

                        </select>
                    </div>
                    <br>

                    <vs-button style="left : -120px ; width : 25%" success class="btnSave" @click="  createTable(o_c ), createActive = false">حفظ</vs-button>
                </div>

            </vs-dialog>
            <vs-input class="theinputsearch" style="width : 100% ;text-align:center; color : green; direction:rtl; float : right ; text-align : center" v-model="search" border placeholder=" بحث.... ">
                <template #icon>
                    <i class='bx bx-search'></i>
                </template>
            </vs-input>
        </template>
        <template #thead style="text-align:center">
            <vs-tr class="headder" style="text-align:center">
                <vs-th style="width : 8%">
                    حذف
                </vs-th>
                <vs-th style="width : 8%">
                    تعديل
                </vs-th>

                <vs-th style="width : 25% ; text-align : center ; margin-left:70px ">
                    اسم نوع العربة
                </vs-th>

                <vs-th style="width : 25% ; text-align : center ; margin-left:70px ">
                    نوع الزيت
                </vs-th>
                <vs-th style="width : 25% ; text-align : center ; margin-left:70px ">
                    اسم الزيت
                </vs-th>
                <vs-th style="width : 25% ; text-align : center ; margin-left:70px ">
                    كميه الزيت </vs-th>

            </vs-tr>
        </template>
        <template #tbody v-if="activeTable">
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(voTableData, search), page, max)" :data="tr">
                <vs-td style="width : 8% ; text-align : center ; margin-left:70px ">
                    <a @click="deleteActive = true, group_id = tr.VEHICLE_OILS_ID">
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
                            <Strong>إتمام عملية المسح</strong>
                        </template>
                        <div class="btnDelete" style="display: flex; justify-content: center">
                            <vs-button danger @click="deleteTable(group_id), deleteActive = false">نعم</vs-button>
                            <vs-button success @click="deleteActive=false">لا</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 8% ; text-align : center ; margin-left:70px ">
                    <a edit @click="editActive=true, o_c = tr.OIL_CAPACITY, o_t = tr.VEHICLE_OIL_TYPE_ID , v_o_i = tr.VEHICLE_OILS_ID">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg></a>
                    <vs-dialog v-model="editActive">
                        <template #header>
                            <strong>تعديل الكثافه </strong>
                        </template>
                        <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="o_c" @keypress.enter="updateTable(o_c, o_t, v_o_i), editActive = false" />
                            <br>
                            <vs-button success style="left : -120px ; width : 25%" class="btnSave" @click="updateTable(o_c, o_t, v_o_i), editActive = false">حفظ</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>

                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    {{tr.VEHICLE_OIL_TYPE_NAME}}
                </vs-td>

                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    {{tr.OIL_TYPE_NAME}}
                </vs-td>
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    {{tr.OIL_NAME}}
                </vs-td>
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    {{tr.OIL_CAPACITY}}
                </vs-td>

            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(voTableData, search), max)" />
        </template>
    </vs-table>
</div>
</template>

<script>
export default {
    data: () => ({
        group_id: null,
        group_name: null,
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: '',
        page: 1,
        max: 5,
        selectedCat: '',
        selectedCatt: '',
        selectedUnit: '',
        activeTable: false,
        id: "",
        pid: "",
        vodd: "",
        vid: "",
        OIL_ID: null,
        OIL_CAPACITY: null,
        VEHICLE_TYPE: null,
        VEHICLE_ID: null,
        oil_cap: null,

        vehicle_oil_type_id: null,
        vehicle_oil_id: null,
        v_t_i: null,
        selectedT: '',
        selectedO: ''

    }),

    created() {
        this.$store.dispatch("getCombo1Data")
        this.$store.dispatch("getPetrolTypesData")

    },

    computed: {
        getCombo1Data() {
            return this.$store.getters.combo1DataGetter
        },
        getCombo2Data() {
            return this.$store.getters.combo2DataGetter
        },
        getCombo3Data() {
            return this.$store.getters.combo3DataGetter
        },
        voTableData() {
            return this.$store.getters.voDataGetter
        },

        getPetrolTypesData() {
            return this.$store.getters.petrolTypesGetter
        },

        getPetrolData() {
            return this.$store.getters.petrolGetter
        },

        getTableData() {
            return this.$store.getters.tableDataGetter
        },
    },

    methods: {
        populateCatTable() {
            console.log("id", this.selectedCat)
            this.$store.dispatch("getCombo2Data", this.selectedCat)
        },
        populateViechleTypeCombo() {
            console.log("id", this.selectedCatt)
            this.$store.dispatch("getCombo3Data", this.selectedCatt)
        },

        populateUnitTable() {
            console.log("id", this.selectedUnit)
            this.$store.dispatch("vehicleOilTableData", this.selectedUnit)
            this.activeTable = true
        },

        populatetypeTable() {
            this.$store.dispatch("getPetrolData", this.selectedO)
        },
        populateoilTable() {

            this.$store.dispatch("getTableData", this.selectedUnit)

        },

        deleteTable(group_id) {
            this.$store.dispatch("deletevoTable", group_id).then(() => {
                this.$vs.notification({
                    color: "success",

                    text: `  تم الحذف بنجاح`,
                });

                this.$store.dispatch("vehicleOilTableData", this.selectedUnit)
            })
        },
        populateTable() {
            console.log("id", this.selectedData)
            this.$store.dispatch("getPetrolData", this.selectedData)
            this.activeTable = true
        },

        updateTable(o_c, o_t, v_o_i) {

            if (o_c == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.editActive = true
            } else {

                this.$store.dispatch("updateVoTable", {
                        o_c: o_c,
                        v_o_i: v_o_i,

                        o_t: this.selectedUnit
                    })
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم التعديل بنجاح`,
                        });

                        this.$store.dispatch("vehicleOilTableData", this.selectedUnit)
                    })
            }
        },

        createTable(o_c) {

            this.createActive = true

            this.$store.dispatch("createvoTable", {

                    o_i: this.selectedO,

                    o_c,
                    v_i: this.selectedUnit,
                    v_t_i: this.selectedT,

                })
                .then(() => {

                    this.$store.dispatch("vehicleOilTableData", this.selectedUnit)
                })

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
}

.vs-input-content {
    background-color: #F4F7F8;
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

.myTable {
    justify-content: center;
}

.vs-table__tr {
    direction: rtl !important;
}
</style>
