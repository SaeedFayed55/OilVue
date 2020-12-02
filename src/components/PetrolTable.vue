<template>
<div style="display:flex ; justify-content:center">

    <vs-table class="myTable">
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                المحــروقات
            </vs-button>
            <div>

                <div class="box" style=" margin-right : -400px; margin-top:20px">
                    <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedData" @change="populateTable()">

                        <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار نوع الوقود</option>

                        <option v-for="(i, key) in getPetrolTypesData" :key="key" :value="i.OIL_TYPE_ID">
                            {{ i.OIL_TYPE_NAME }}

                        </option>

                    </select>
                </div>

                <vs-button style="float : right" success v-if="selectedData" @click="createActive=true, name = '', desc = '' ">
                    إضافة جديد
                </vs-button>
            </div>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>اضافه عنصر جديد</strong>
                </template>
                <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                    <div style="display : flex">
                        <label>اسم الوقود</label>
                        <vs-input style="left : -30px ; width : 70% ;direction : rtl" v-model.lazy="name" placeholder='اسم الوقود' @keypress.enter="createData(name, desc), createActive = false" />
                    </div>
                    <br>
                    <div style="display : flex">
                        <label>وصف الوقود</label>
                        <vs-input style="left : -20px ; width : 70%" v-model.lazy="desc" placeholder='الوصف' @keypress.enter="createData(name, desc), createActive = false" />
                    </div> <br>
                    <vs-button style="left : -120px ; width : 25%" success class="btnSave" @click="createData(name, desc), createActive = false">حفظ</vs-button>
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
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    <span style=""> حذف</span>
                </vs-th>
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    تعديل
                </vs-th>
                <vs-th style="width : 37% ; text-align : center ; margin-left:70px ">
                    وصف الوقود
                </vs-th>
                <vs-th style="width : 37% ; text-align : center ; margin-left:70px ">
                    اسم الوقود
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody v-if="activeTable">
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getPetrolData, search), page, max)" :data="tr">
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    <a @click="deleteActive = true, id = tr.OIL_ID">
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
                            <vs-button danger @click="deleteData(id), deleteActive = false">نعم</vs-button>
                            <vs-button success @click="deleteActive=false">لا</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    <a edit @click="editActive=true, id=tr.OIL_ID, name=tr.OIL_NAME, desc=tr.OIL_DESC, typeID=tr.OIL_TYPE_ID">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg></a>
                    <vs-dialog v-model="editActive">
                        <template #header>
                            <strong>تعديل اسم الوقود</strong>
                        </template>
                        <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="name" @keypress.enter="updateData(id, name, desc, typeID), editActive = false" />
                            <br>
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="desc" @keypress.enter="updateData(id, name, desc, typeID), editActive = false" />
                            <br>
                            <vs-button success style="left : -120px ; width : 25%" class="btnSave" @click="updateData(id, name, desc, typeID), editActive = false">حفظ</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 37% ; text-align : center ; margin-left:70px ">
                    {{tr.OIL_DESC}}
                </vs-td>
                <vs-td style="width : 37% ; text-align : center ; margin-left:70px ">
                    {{ tr.OIL_NAME }}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getPetrolData, search), max)" />
        </template>
    </vs-table>
</div>
</template>

<script>
export default {
    data: () => ({
        id: null,
        name: null,
        desc: null,
        typeID: null,
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: '',
        page: 1,
        max: 5,
        selectedData: "",
        activeTable: false
    }),

    created() {
        this.$store.dispatch("getPetrolTypesData")
    },

    computed: {
        getPetrolTypesData() {
            return this.$store.getters.petrolTypesGetter
        },
        getPetrolData() {
            return this.$store.getters.petrolGetter
        },

    },

    methods: {
        populateTable() {
            console.log("id", this.selectedData)
            this.$store.dispatch("getPetrolData", this.selectedData)
            this.activeTable = true
        },
        deleteData(id) {
            console.log("id", id)
            this.$store.dispatch("deletePetrolRow", id).then(() => {
                this.$vs.notification({
                    color: "success",

                    text: `  تم الحذف بنجاح`,
                });
                this.$store.dispatch("getPetrolData", this.selectedData)
            })
        },

        updateData(id, name, desc, typeID) {

            if (name == "" || desc == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.editActive = true
            } else {
                this.$store.dispatch("updatePetrolRow", {
                        id,
                        name,
                        desc,
                        typeID
                    })
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم التعديل بنجاح`,
                        });

                        this.$store.dispatch("getPetrolData", this.selectedData)
                    })
            }
        },

        createData(name, desc) {

            if (name == "" || desc == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.createActive = true
            } else {
                this.$store.dispatch("createPetrolRow", {
                        name: name,
                        desc: desc,
                        typeID: this.selectedData
                    })
                    .then(() => {

                        this.$vs.notification({
                            color: "success",

                            text: `  تم الاضافه بنجاح`,
                        });
                        this.$store.dispatch("getPetrolData", this.selectedData)
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

.myTable {
    justify-content: center;
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

.box {
    display: flex;
    justify-content: right;
    margin-left: 430px !important;

    transform: translate(-50%, -50%);
}

.box select {
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
