<template>
<div style="display : flex ; justify-content : center">
    <vs-table>
        <template #header>
            <vs-button disabled style="width:100%" danger flat>
                التقارير
            </vs-button>
            <div class="box nbox" style="display : flex ; justify-content : center;">

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedCat" @change="populateCatTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo1Data" :key="key" :value="i.VEHICLE_TYPE_ID">
                        {{ i.VEHICLE_TYPE_NAME }}

                    </option>
                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedCatt" @change="populateViechleTypeCombo()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo2Data" :key="key" :value="i.VEHICLE_TYPE_ID">
                        {{ i.VEHICLE_TYPE_NAME }}

                    </option>
                </select>

                <select style="border:1px solid gray; border-radius : 2px solid red ; " v-model="selectedUnit" @change="populateUnitTable()">

                    <option value="" selected disabled hidden><i class='bx bx-home'></i> من فضلك اختار </option>

                    <option v-for="(i, key) in getCombo3Data" :key="key" :value="i.VEHICLE_ID">
                        {{ i.VEHICLE_NAME }}

                    </option>
                </select>

            </div>
            <vs-button success @click="callUrl2">طباعة التقرير </vs-button>
        </template>

    </vs-table>
    <div>

    </div>
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
        search: "",
        page: 1,
        max: 5,
        selectedCat: "",
        selectedUnit: "",
        activeTable: false,
        selectedCatt: "",

    }),

    created() {
        this.$store.dispatch("getCombo1Data");
    },

    computed: {
        getCombo1Data() {
            return this.$store.getters.combo1DataGetter;
        },
        getCombo2Data() {
            return this.$store.getters.combo2DataGetter;
        },
        getCombo3Data() {
            return this.$store.getters.combo3DataGetter;
        },
        getTableData() {
            return this.$store.getters.tableDataGetter;
        },
    },

    methods: {
        populateCatTable() {
            console.log("id", this.selectedCat);
            this.$store.dispatch("getCombo2Data", this.selectedCat);
        },
        populateViechleTypeCombo() {
            console.log("id", this.selectedCatt);
            this.$store.dispatch("getCombo3Data", this.selectedCatt);
        },

        populateUnitTable() {
            console.log("id", this.selectedUnit);
            this.$store.dispatch("getTableData", this.selectedUnit);
            this.activeTable = true;
        },

        callUrl2() {
            window.open("https://www.google.com/?hl=ar", "_blank");
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
