<template>
<div class="allP" style="display: flex ; justify-content:center">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                مجموعات الجهات
            </vs-button>
            <div class="box" style=" margin-right : -500px; margin-top:20px">

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedCat" @change="populateCatTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار اسم الجهه</option>

                    <option v-for="(i, key) in getCatData" :key="key" :value="i.CAT_ID">
                        {{ i.CAT_NAME }}

                    </option>

                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ; margin-right:10px " v-model="selectedUnit" @change="populateUnitTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار اسم المجموعه </option>

                    <option v-for="(i, key) in getUnitData" :key="key" :value="i.UNIT_ID">
                        {{ i.UNIT_NAME }}

                    </option>

                </select>
            </div>

            <vs-button style="float : right" success v-if="activeTable" @click="createActive=true, group_name = ''">
                إضافة جديد
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة مجموعة جديدة</strong>
                </template>
                <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                    <div style="display : flex">
                        <label>اسم المجموعة</label>
                        <vs-input style="left : -10px ; width : 70% ;direction : rtl" v-model.lazy="group_name" placeholder='اسم المجموعة' @keypress.enter="createData(group_name), createActive = false" />
                    </div>
                    <br>
                    <vs-button style="left : -120px ; width : 25%" success class="btnSave" @click="createData(group_name), createActive = false">حفظ</vs-button>
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
                    نوع المجموعة
                </vs-th>
                <vs-th style="width : 25% ; text-align : center ; margin-left:70px ">
                    اسم المجموعة
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody v-if="activeTable">
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getGroupData, search), page, max)" :data="tr">
                <vs-td style="width : 25% ; text-align : center ; margin-left:70px ">
                    <a @click="deleteActive = true, group_id = tr.GROUP_ID">
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
                            <vs-button danger @click="deleteData(group_id), deleteActive = false">نعم</vs-button>
                            <vs-button success @click="deleteActive=false">لا</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 25% ; text-align : center ; margin-left:70px ">
                    <a edit @click="editActive=true, group_id = tr.GROUP_ID, group_name = tr.GROUP_NAME">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg></a>
                    <vs-dialog v-model="editActive">
                        <template #header>
                            <strong>تعديل اسم المجموعة</strong>
                        </template>
                        <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="group_name" @keypress.enter="updateData(group_id, group_name), editActive = false" />
                            <br>
                            <vs-button success style="left : -120px ; width : 25%" class="btnSave" @click="updateData(group_id, group_name), editActive = false">حفظ</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 25% ; text-align : center ; margin-left:70px ">
                    {{tr.GROUP_TYPE}}
                </vs-td>
                <vs-td style="width : 25% ; text-align : center ; margin-left:70px ">
                    {{ tr.GROUP_NAME }}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getGroupData, search), max)" />
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
        activeTable: false
    }),

    created() {
        this.$store.dispatch("getCatData")
    },

    computed: {
        getCatData() {
            return this.$store.getters.catDataGetter
        },
        getUnitData() {
            return this.$store.getters.unitDataGetter
        },
        getGroupData() {
            return this.$store.getters.groupDataGetter
        },
    },

    methods: {
        populateCatTable() {
            console.log("id", this.selectedCat)
            this.$store.dispatch("getUnitData", this.selectedCat)
        },

        populateUnitTable() {
            console.log("id", this.selectedUnit)
            this.$store.dispatch("getGroupData", this.selectedUnit)
            this.activeTable = true
        },

        deleteData(group_id) {

            this.$store.dispatch("deleteGroup", group_id).then(() => {
                this.$vs.notification({
                    color: "success",

                    text: `  تم الحذف بنجاح`,
                });
                this.$store.dispatch("getGroupData", this.selectedUnit)
            })
        },

        updateData(group_id, group_name) {
            if (group_name == "") {
                this.editActive = true
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
            } else {

                this.$store.dispatch("updateGroup", {
                        group_id,
                        group_name,
                        unit_id: this.selectedUnit
                    })
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم التعديل بنجاح`,
                        });
                        this.$store.dispatch("getGroupData", this.selectedUnit)
                    })
            }
        },

        createData(group_name) {
            if (group_name == "") {
                this.createActive = false

                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });

            } else {
                this.createActive = false

                this.$store.dispatch("createGroup", {
                        group_name: group_name,
                        unit_id: this.selectedUnit
                    })
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم الاضافه بنجاح`,
                        });
                        this.$store.dispatch("getGroupData", this.selectedUnit)
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

.vs-table__tr {
    direction: rtl !important;
}

.myTable {
    justify-content: center;
}

.ppetrol {
    background-image: url("../assets/new.png") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
</style>
