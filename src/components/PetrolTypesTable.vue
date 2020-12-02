<template>
<div style="display:flex;justify-content:center;">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                انواع المحروقات
            </vs-button>

            <vs-button style="float : right" success @click="createActive = true, name = ''">
                إضـافة جديد
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة اسم جديد</strong>
                </template>
                <div class="dialog" style="display : flex ; justify-content : center">
                    <vs-button style="margin-right : 60px" success class="btnSave" @click="createData(name), createActive = false">حفظ</vs-button>
                    <vs-input style="direction : rtl" v-model.lazy="name" placeholder='الاسم' @keypress.enter="createData(name), createActive = false" />
                    <br>
                </div>
            </vs-dialog>
            <template>
                <vs-input class="theinputsearch" style="width : 100% ;text-align:center; color : green; direction:rtl; float : right ; text-align : center" v-model="search" border placeholder=" بحث.... ">
                    <template #icon>
                        <i class='bx bx-search'></i>
                    </template>
                </vs-input>
            </template>
        </template>
        <template #thead style="text-align:center">
            <vs-tr class="headder" style="text-align:center ; direction : rtl ; justify-content : center">
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    <span style=""> حذف</span>
                </vs-th>
                <vs-th style="width : 12% ; text-align : center ; margin-left:70px ">
                    تعديل
                </vs-th>
                <vs-th style="width : 75% ; text-align : center ; margin-left:70px ">
                    اسم الوقود
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody>
            <vs-tr style="direction : rtl" :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getPetrolData, search), page, max)" :data="tr">
                <vs-td style="width : 12% ; text-align : center ; margin-left:70px ">
                    <a @click="deleteActive = true, id = tr.OIL_TYPE_ID">
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
                    <a edit @click="editActive = true, id = tr.OIL_TYPE_ID, name = tr.OIL_TYPE_NAME">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg></a>
                    <vs-dialog v-model="editActive">
                        <template #header>
                            <strong>تعديل الاسم</strong>
                        </template>
                        <div class="dialog" style="display: flex ; justify-content : center">
                            <vs-button success class="btnSave" style="margin-right : 60px" @click="updateData(id, name), editActive = false">حفظ</vs-button>
                            <vs-input style="direction : rtl" v-model.lazy="name" @keypress.enter="updateData(id, name), editActive = false" />
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="width : 75% ; text-align : center ; margin-left:70px ">
                    {{ tr.OIL_TYPE_NAME }}
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
        editActive: false,
        createActive: false,
        deleteActive: false,
        search: '',
        page: 1,
        max: 5,
    }),

    created() {
        this.$store.dispatch("getPetrolTypesData")
    },

    computed: {
        getPetrolData() {
            return this.$store.getters.petrolTypesGetter
        }
    },

    methods: {
        removeData(id) {
            console.log('id is  =', id)
            this.$store.dispatch("deletePetrolTypesRow", id)
                .then(() => {

                    this.$vs.notification({
                        color: "success",

                        text: `  تم الحذف بنجاح`,
                    });

                    this.$store.dispatch("getPetrolTypesData")
                })

        },
        updateData(id, name) {

            if (name == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.editActive = true
            } else {
                this.$store.dispatch("updatePetrolTypesRow", {
                        id,
                        name
                    })
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم التعديل بنجاح`,
                        });

                        this.$store.dispatch("getPetrolTypesData")
                    })
            }
        },
        createData(name) {
            if (name == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيمه`,
                });
                this.createActive = true
            } else {

                this.$store.dispatch("createPetrolTypesRow", name)
                    .then(() => {
                        this.$vs.notification({
                            color: "success",

                            text: `  تم الاضافه بنجاح`,
                        });

                        this.$store.dispatch("getPetrolTypesData")
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

.vs-input {
    width: 100% !important
}

.myTable {
    justify-content: center;
}
</style>
