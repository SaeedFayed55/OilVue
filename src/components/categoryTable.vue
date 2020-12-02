<template>
<div style="display:flex ;justify-content:center">

    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                تصنيفات الجهات
            </vs-button>

            <template>
                <vs-input class="theinputsearch" style="width : 100% ;text-align:center; color : green; direction:rtl; float : right ; text-align : center" v-model="search" border placeholder=" بحث.... ">
                    <template #icon>
                        <i class='bx bx-search'></i>
                    </template>
                </vs-input>
            </template>
        </template>
        <template #thead>
            <vs-tr>
                <vs-th>
                    التصنيف
                </vs-th>
            </vs-tr>
        </template>
        <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(getCatData, search),page,max)" :data="tr">
                <vs-td style="text-align:center">
                    {{ tr.CAT_NAME }}
                </vs-td>
            </vs-tr>
        </template>
        <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(getCatData, search), max)" />
        </template>
    </vs-table>
</div>
</template>

<script>
export default {
    data: () => ({
        search: "",
        page: 1,
        max: 5,
    }),

    created() {
        this.$store.dispatch("getCatData");
    },

    computed: {
        getCatData() {
            return this.$store.getters.catDataGetter;
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

.myTable {
    justify-content: center;
}
</style>
