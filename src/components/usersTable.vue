<template>
<div class="myTable">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                المستخدمين
            </vs-button>

            <div class="box" style=" margin-right : -800px; margin-top:20px">

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedCat" @change="populateCatTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار اسم الجهه</option>

                    <option v-for="(i, key) in getCatData" :key="key" :value="i.CAT_ID">
                        {{ i.CAT_NAME }}

                    </option>

                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ; margin-right :10px" v-model="selectedUnit" @change="populateUnitTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار اسم الوحدات</option>

                    <option v-for="(i, key) in getUnitData" :key="key" :value="i.UNIT_ID">
                        {{ i.UNIT_NAME }}

                    </option>

                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ;margin-right :10px " v-model="selectedGroup" @change="populateGroupTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار اسم المجموعه</option>

                    <option v-for="(i, key) in getGroupData" :key="key" :value="i.GROUP_ID">
                        {{ i.GROUP_NAME }}

                    </option>

                </select>
            </div>

            <vs-button style="float : right" success v-if="activeTable" @click="
              (createActive = true),
                (user_name = ''),
                (user_password = ''),
                (user_desc = '')
            ">
                إضافة جديد
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة مجموعة جديدة</strong>
                </template>
                <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                    <div style="display : block">
                        <label>اسم المستخدم</label>
                        <vs-input style="left : -50px ; width : 70% ;direction : rtl" v-model.lazy="user_name" placeholder="اسم المستخدم" @keypress.enter="
                  createData(user_name, user_password, user_desc),
                    (createActive = false)
                "> <template #message-danger>
                                لابد من ادخال قيمه
                            </template>
                        </vs-input>
                        <br />
                        <label>كلمة المرور</label>
                        <vs-input style="left : -50px ; width : 70% ;direction : rtl" v-model.lazy="user_password" placeholder="كلمة المرور" @keypress.enter="
                  createData(user_name, user_password, user_desc),
                    (createActive = false)
                "><template #message-danger>
                                لابد من ادخال قيمه
                            </template></vs-input>
                        <br />
                        <label>وصف المستخدم</label>
                        <vs-input style="left : -50px ; width : 70% ;direction : rtl" v-model.lazy="user_desc" placeholder="وصف المستخدم" @keypress.enter="
                  createData(user_name, user_password, user_desc),
                    (createActive = false)
                "><template #message-danger>
                                لابد من ادخال قيمه
                            </template></vs-input>
                        <br />
                        <vs-button style="left : -120px ; width : 25%" success class="btnSave" @click="
                  createData(user_name, user_password, user_desc)

                ">حفظ</vs-button>
                    </div>
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
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    حذف
                </vs-th>
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    تعديل
                </vs-th>
                <vs-th style="width : 28% ; text-align : center ; margin-left:70px ">
                    وصف المستخدم
                </vs-th>
                <vs-th style="width : 28% ; text-align : center ; margin-left:70px ">
                    كلمة المرور
                </vs-th>
                <vs-th style="width : 20% ; text-align : center ; margin-left:70px ">
                    اسم المستخدم
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody v-if="activeTable">
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(
            $vs.getSearch(getUserData, search),
            page,
            max
          )" :data="tr">
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    <a @click="(deleteActive = true), (user_id = tr.USER_ID)">
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
                            <vs-button danger @click="deleteData(user_id), (deleteActive = false)">نعم</vs-button>
                            <vs-button success @click="deleteActive = false">لا</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    <a edit @click="
                (editActive = true),
                  (user_id = tr.USER_ID),
                  (user_name = tr.USER_NAME),
                  (user_password = tr.USER_PASSWORD),
                  (user_desc = tr.USER_DESC)
              ">
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
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="user_name" @keypress.enter="
                    updateData(user_id, user_name, user_password, user_desc),
                      (editActive = false)
                  " />
                            <br />
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="user_password" @keypress.enter="
                    updateData(user_id, user_name, user_password, user_desc),
                      (editActive = false)
                  " />
                            <br />
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="user_desc" @keypress.enter="
                    updateData(user_id, user_name, user_password, user_desc),
                      (editActive = false)
                  " />
                            <br />
                            <vs-button success style="left : -120px ; width : 25%" class="btnSave" @click="
                    updateData(user_id, user_name, user_password, user_desc),
                      (editActive = false)
                  ">حفظ</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 28% ; text-align : center ; margin-left:70px ">
                    {{ tr.USER_DESC }}
                </vs-td>
                <vs-td style="width : 28% ; text-align : center ; margin-left:70px ">
                    {{ tr.USER_PASSWORD }}
                </vs-td>
                <vs-td style="width : 20% ; text-align : center ; margin-left:70px ">
                    {{ tr.USER_NAME }}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getUserData, search), max)" />
        </template>
    </vs-table>
</div>
</template>

<script>
export default {
    data: () => ({
        user_id: null,
        user_name: null,
        user_password: null,
        user_desc: null,
        group_id: null,
        group_name: null,
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: "",
        page: 1,
        max: 5,
        selectedCat: "",
        selectedUnit: "",
        selectedGroup: "",
        activeTable: false,
    }),

    created() {
        this.$store.dispatch("getCatData");
    },

    computed: {
        getCatData() {
            return this.$store.getters.catDataGetter;
        },
        getUnitData() {
            return this.$store.getters.unitDataGetter;
        },
        getGroupData() {
            return this.$store.getters.groupDataGetter;
        },
        getUserData() {
            return this.$store.getters.userDataGetter;
        },
    },

    methods: {
        populateCatTable() {
            console.log("id", this.selectedCat);
            this.$store.dispatch("getUnitData", this.selectedCat);
        },

        populateUnitTable() {
            console.log("id", this.selectedUnit);
            this.$store.dispatch("getGroupData", this.selectedUnit);
        },

        populateGroupTable() {
            console.log("id", this.selectedGroup);
            this.$store.dispatch("getUserData", this.selectedGroup);
            this.activeTable = true;
        },

        deleteData(user_id) {

            this.$vs.notification({
                color: "success",

                text: `  تم الحذف بنجاح`,
            });
            this.$store.dispatch("deleteUser", user_id).then(() => {
                this.$store.dispatch("getUserData", this.selectedGroup);
            });
        },

        updateData(user_id, user_name, user_password, user_desc) {
            if (user_name == "" || user_password == "" || user_desc == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.editActive = true
            } else {
                this.$store
                    .dispatch("updateUser", {
                        user_id: user_id,
                        user_name: user_name,
                        user_password: user_password,
                        group_id: this.selectedGroup,
                        user_desc: user_desc,
                    })
                    .then(() => {

                        this.createActive = false
                        this.$vs.notification({
                            color: "success",

                            text: `  تم التعديل بنجاح`,
                        });
                        this.$store.dispatch("getUserData", this.selectedGroup);
                    });
            }
        },

        createData(user_name, user_password, user_desc) {
            if (user_name == "" || user_password == "" || user_desc == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.createActive = true
            } else {

                this.$store
                    .dispatch("createUser", {
                        user_name: user_name,
                        user_password: user_password,
                        group_id: this.selectedGroup,
                        user_desc: user_desc,
                    })
                    .then(() => {

                        this.createActive = false
                        this.$vs.notification({
                            color: "success",

                            text: `  تم الحفظ بنجاح`,
                        });
                        this.$store.dispatch("getUserData", this.selectedGroup);

                    });
            }
        },
    },
};
</script>

<style>
.myTable {
    justify-content: center;
}

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
</style>
