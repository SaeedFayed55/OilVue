<template>
<div style="display:flex ; justify-content : center">

    <vs-table>
        <template #header>

            <vs-button disabled style="width:100%" danger flat>
                أنواع زيوت المركبات
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
                <select style="border:1px solid gray; border-radius : 2px solid red ; margin-right:10px" v-model="selectedUnit" @change="populateUnitTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo3Data" :key="key" :value="i.VEHICLE_ID">
                        {{ i.VEHICLE_NAME }}

                    </option>

                </select>

            </div>

            <vs-button style="float : right" success v-if="activeTable" @click="createActive=true, group_name = ''">
                إضافة جديد
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة </strong>
                </template>
                <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                    <div style="display : flex">
                        <label> النوع</label>
                        <vs-input style="left : -50px ; width : 70% ;direction : rtl" v-model.lazy="group_name" placeholder='اسم المجموعة' @keypress.enter="createTable(group_name), createActive = false" />
                    </div>
                    <br>
                    <vs-button style="left : -120px ; width : 25%" success class="btnSave" @click="createTable(group_name), createActive = false">حفظ</vs-button>
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
                <vs-th style="width : 25%">
                    حذف
                </vs-th>
                <vs-th style="width : 25%">
                    تعديل
                </vs-th>

                <vs-th style="width : 25% ; text-align : center ; margin-left:70px ">
                    الاسم </vs-th>
            </vs-tr>
        </template>
        <template #tbody v-if="activeTable">
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getTableData, search), page, max)" :data="tr">
                <vs-td style="width : 25% ; text-align : center ; margin-left:70px ">
                    <a @click="deleteActive = true, group_id = tr. VEHICLE_OIL_TYPE_ID">
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
                <vs-td style="width : 25% ; text-align : center ; margin-left:70px ">
                    <a edit @click="editActive=true, group_id = tr.VEHICLE_ID, unit_id = tr.VEHICLE_OIL_TYPE_ID ,group_name = tr.VEHICLE_OIL_TYPE_NAME ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg></a>
                    <vs-dialog v-model="editActive">
                        <template #header>
                            <strong>تعديل الاسم </strong>
                        </template>
                        <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="group_name" @keypress.enter="updateTable(group_id,  unit_id,group_name ), editActive = false" />
                            <br>
                            <vs-button success style="left : -120px ; width : 25%" class="btnSave" @click="updateTable(group_id,unit_id,  group_name), editActive = false">حفظ</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 25% ; text-align : center ; margin-left:70px ">
                    {{tr.VEHICLE_OIL_TYPE_NAME}}
                </vs-td>

            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getTableData, search), max)" />
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
        selectedUnit: '',
        activeTable: false,
        selectedCatt: ''
    }),

    created() {
        this.$store.dispatch("getCombo1Data")
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
            this.$store.dispatch("getTableData", this.selectedUnit)
            this.activeTable = true
        },

        deleteTable(group_id) {
            this.$store.dispatch("deleteTable", group_id).then(() => {
                this.$vs.notification({
                    color: "success",

                    text: `  تم الحذف بنجاح`,
                });
                this.$store.dispatch("getTableData", this.selectedUnit)
            })
        },

        updateTable(group_id, unit_id, group_name) {
            if (group_name == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.editActive = true
            } else {

                this.$store.dispatch("updateTable", {
                        unit_id: unit_id,
                        group_name: group_name,
                        group_id: this.selectedUnit,

                    })
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم التعديل بنجاح`,
                        });

                        this.$store.dispatch("getTableData", this.selectedUnit)
                    })
            }
        },

        createTable(group_name) {

            if (group_name == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.createActive = true
            } else {
                this.$store.dispatch("createTable", {
                        group_name: group_name,
                        unit_id: this.selectedUnit
                    })
                    .then(() => {

                        this.$vs.notification({
                            color: "success",

                            text: `  تم الاضافه بنجاح`,
                        });

                        this.$store.dispatch("getTableData", this.selectedUnit)
                    })
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
