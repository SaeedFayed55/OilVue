<template>
<div class="category">
    <drawer />
    <vehicleoil />
    <pagesTable />
</div>
</template>

<script>
import drawer from '../components/navigationDrawer'
import vehicleoil from "../components/vehicleoil.vue"


export default {
    components: {
        drawer,
        vehicleoil
    }
}
</script>>
