<template>
<div id="app">
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            login: false
        }
    },

};
</script>

<style>
td.vs-table__td {
    text-align: initial;

}

body * {
    font-family: 'Cairo', sans-serif;

}

body {
    overflow-x: auto !important;
    overflow-y: auto !important;
}

.center {
    width: 100% !important
}

.vs-table-content {
    margin-left: 17% !important
}

.vs-sidebar {
    background-image: url('./assets/service3.jpg') !important;
    background-size: inherit;
    background-repeat: no-repeat;
    opacity: .5px !important;
}

.vs-sidebar__item {
    background-image: url('./assets/service3.jpg') !important;

}

.vs-sidebar__item__icon {
    background-color: #D6D6D6 !important
}

.vs-sidebar__group__content {
    background-color: #D6D6D6 !important;
}

.vs-sidebar-content {
    height: 100% !important;
}

.vs-sidebar__item {
    background-color: #D6D6D6 !important;

}
</style>
