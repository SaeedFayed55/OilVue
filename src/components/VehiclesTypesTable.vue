<template>
<div style="display : flex ; justify-content : center">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                انواع المركبات
            </vs-button>
            <vs-button style="float : right" success @click="createActive = true, name = '', desc = ''">
                إضـافة جديد
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة اسم جديد</strong>
                </template>
                <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                    <div style="display : flex">
                        <label>اسم المركبة</label>
                        <vs-input style="left : -20px ; width : 70% ;direction : rtl" v-model.lazy="name" @keypress.enter="createData(name, desc), createActive = false" />
                    </div>
                    <br>
                    <div style="display : flex">
                        <label>وصف المركبة</label>
                        <vs-input style="left : -10px ; width : 70%" v-model.lazy="desc" @keypress.enter="createData(name, desc), createActive = false" />
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
            <vs-tr class="headder" style="text-align:center ; direction : rtl ; justify-content : center">
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    <span style=""> حذف</span>
                </vs-th>
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    تعديل
                </vs-th>
                <vs-th style="width : 37% ; text-align : center ; margin-left:70px ">
                    وصف المركبة
                </vs-th>
                <vs-th style="width : 37% ; text-align : center ; margin-left:70px ">
                    اسم المركبة
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody>
            <vs-tr style="direction : rtl" :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getVehiclesData, search), page, max)" :data="tr">
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    <a @click="deleteActive = true, id = tr.VEHICLE_TYPE_ID">
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
                            <Strong>تأكيد عملية المسح</strong>
                        </template>
                        <div class="btnDelete" style="display: flex; justify-content: center">
                            <vs-button danger @click="removeData(id), deleteActive = false">نعم</vs-button>
                            <vs-button success @click="deleteActive=false">لا</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    <a edit @click="editActive = true, id = tr.VEHICLE_TYPE_ID, name = tr.VEHICLE_TYPE_NAME, desc = tr.VEHICLE_TYPE_DESC">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg></a>
                    <vs-dialog v-model="editActive">
                        <template #header>
                            <strong>تعديل اسم المركبة</strong>
                        </template>
                        <div class="dialog" style="display : block ; direction : rtl ; justify-content: center ; left : -20px">
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="name" placeholder="اسم المركبة" @keypress.enter="updateData(id, name, desc), editActive = false" />
                            <br>
                            <vs-input style="width:70% ; left : -50px" v-model.lazy="desc" placeholder="وصف المركبة" @keypress.enter="updateData(id, name, desc), editActive = false" />
                            <br>
                            <vs-button success style="left : -120px ; width : 25%" class="btnSave" @click="updateData(id, name, desc), editActive = false">حفظ</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 37% ; text-align : center ; margin-left:70px ">
                    {{ tr.VEHICLE_TYPE_DESC }}
                </vs-td>
                <vs-td style="width : 37% ; text-align : center ; margin-left:70px ">
                    {{ tr.VEHICLE_TYPE_NAME }}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getVehiclesData, search), max)" />
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
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: '',
        page: 1,
        max: 5,
    }),

    created() {
        this.$store.dispatch("getvehiclesTypesData")
    },

    computed: {
        getVehiclesData() {
            return this.$store.getters.vehiclesTypesGetter
        }
    },

    methods: {
        removeData(id) {
            console.log('id is  =', id)
            this.$store.dispatch("deletevehiclesTypesRow", id)
                .then(() => {

                    this.$vs.notification({
                        color: "success",

                        text: `  تم الحذف بنجاح`,
                    });
                    this.$store.dispatch("getvehiclesTypesData")
                })

        },
        updateData(id, name, desc) {
            if (name == "" || desc == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.editActive = true
            } else {
                this.$store.dispatch("updatevehiclesTypesRow", {
                        id,
                        name,
                        desc
                    })
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم التعديل بنجاح`,
                        });

                        this.$store.dispatch("getvehiclesTypesData")
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
                this.$store.dispatch("createvehiclesTypesRow", {
                        name,
                        desc
                    })
                    .then(() => {

                        this.$vs.notification({
                            color: "success",

                            text: `  تم الاضافه بنجاح`,
                        });

                        this.$store.dispatch("getvehiclesTypesData")
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

    background: transparent !important;
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
    left: -425px !important;

}

#vs-input--26 {
    width: 100% !important;
}

#vs-input--32 {
    width: 100% !important;
}

.myTable {
    justify-content: center;
}
</style>
