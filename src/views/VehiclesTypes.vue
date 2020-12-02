<template>
<div class="vehicleTypes">
    <drawer />
    <VehiclesTypesTable />
</div>
</template>

<script>
import VehiclesTypesTable from '../components/VehiclesTypesTable'
import drawer from '../components/navigationDrawer'

export default {
    components: {
        VehiclesTypesTable,
        drawer
    }
}
</script>>
