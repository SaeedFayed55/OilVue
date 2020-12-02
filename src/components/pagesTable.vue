<template>
<div style="display :flex ;justify-content:center;">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                الصفحــات
            </vs-button>

            <vs-button style="float : right" success @click="createActive = true, name = '', url = '', icon = '', desc = ''">
                إضـافة صفحة
            </vs-button>
            <vs-dialog v-model="createActive">
                <template #header>
                    <strong>إضافة صفحة جديدة </strong>
                </template>
                <div class="dialog" style="display : block ; justify-content : right">
                    <div>
                        <div style="display:flex ; justify-content:right">
                            <vs-input style="direction: rtl; margin-right:5px; width:70%" v-model.lazy="name" placeholder="الاسم" @keypress.enter="createData(name, url, icon, desc), createActive = false" />
                            <label for=""> اسم الصفحه</label>
                        </div>
                        <br>
                        <div style="display:flex ; justify-content:right">
                            <vs-input style="direction: rtl;margin-right:20px; width:70%" v-model.lazy="url" placeholder="الرابط" @keypress.enter="createData(name, url, icon, desc), createActive = false" />
                            <label>الرابط</label>
                        </div>
                        <br>
                        <div style="display:flex ; justify-content:right">
                            <vs-input style="direction: rtl;margin-right:20px; width:70%" v-model.lazy="icon" placeholder="الأيقونة" @keypress.enter="createData(name, url, icon, desc), createActive = false" />
                            <label>الايقونه</label>
                        </div>
                        <br>
                        <div style="display:flex ; justify-content:right">
                            <vs-input style="direction: rtl;margin-right:20px; width:70%" v-model.lazy="desc" placeholder="الوصف" @keypress.enter="createData(name, url, icon, desc), createActive = false" />
                            <label>الوصف</label>
                        </div>
                        <br>
                        <vs-button style="margin-left : 100px; width : 30%" success class="btnSave" @click="createData(name, url, icon, desc), createActive = false">حفظ</vs-button>
                    </div>
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
            <vs-tr class="headder" style="text-align:center; justify-content : center">
                <vs-th style="width : 20%">
                    حذف
                </vs-th>
                <vs-th style="width : 20% ; text-align : center ; margin-left:70px ">
                    الوصف
                </vs-th>
                <vs-th style="width : 20% ; text-align : center ; margin-left:70px ">
                    الأيقونة
                </vs-th>
                <vs-th style="width : 20% ; text-align : center ; margin-left:70px ">
                    الرابط
                </vs-th>
                <vs-th style="width : 20% ; text-align : center ; margin-left:70px ">
                    اسم الصفحة
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getPagesData, search),page,max)" :data="tr">
                <vs-td style="text-align: center;">
                    <a @click="deleteActive = true, id = tr.PAGE_ID">
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
                            <Strong>تأكيد عملية المسح</Strong>
                        </template>
                        <div class="btnDelete" style="display:flex ; justify-content:center">
                            <vs-button success @click="deleteActive = false">لا</vs-button>

                            <vs-button danger @click="removeData(id), deleteActive = false">نعم</vs-button>
                        </div>
                    </vs-dialog>
                </vs-td>
                <vs-td style="text-align: center;">
                    {{ tr.PAGE_DESC }}
                </vs-td>
                <vs-td style="text-align: center;">
                    {{ tr.PAGE_ICON }}
                </vs-td>
                <vs-td style="text-align: center;">
                    {{ tr.PAGE_URL }}
                </vs-td>
                <vs-td style="text-align: center;">
                    {{ tr.PAGE_NAME }}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getPagesData, search), max)" />
        </template>
    </vs-table>
</div>
</template>

<script>
export default {
    data: () => ({
        id: null,
        name: null,
        url: null,
        icon: null,
        desc: null,
        createActive: false,
        deleteActive: false,
        search: "",
        page: 1,
        max: 5,
    }),

    created() {
        this.$store.dispatch("getPagesData");
    },

    computed: {
        getPagesData() {
            return this.$store.getters.pagesGetter;
        },
    },

    methods: {
        removeData(id) {
            console.log("id is  =", id);
            this.$store.dispatch("deletePages", id).then(() => {
                this.$vs.notification({
                    color: "success",

                    text: `  تم الحذف بنجاح`,
                });
                this.$store.dispatch("getPagesData");
            });
        },

        createData(name, url, icon, desc) {
            if (name == "" || url == "" || icon == "" || desc == "") {
                this.$vs.notification({
                    color: "danger",

                    text: `برجاء ادخال قيم`,
                });
                this.editActive = true
            } else {

                this.$store
                    .dispatch("createPages", {
                        name: name,
                        url: url,
                        icon: icon,
                        desc: desc,
                    })
                    .then(() => {
                        this.createActive = false
                        this.$vs.notification({
                            color: "success",

                            text: `  تم الاضافه بنجاح`,
                        });
                        this.$store.dispatch("getPagesData");
                    });
            }
        },
    },
};
</script>

<style>
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
    background: transparent !important;
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
    left: -425px !important;
}

.vs-input {
    width: 100% !important;
}

.vs-table__th__content {
    justify-content: center !important;
}

.myTable {
    justify-content: center;
}
</style>
