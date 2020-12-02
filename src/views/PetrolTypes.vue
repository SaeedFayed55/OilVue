<template>
<div class="petrol">
    <drawer />
    <petrolTypesTable />
</div>
</template>

<script>
import petrolTypesTable from '../components/PetrolTypesTable'
import drawer from '../components/navigationDrawer'

export default {
    components: {
        petrolTypesTable,
        drawer
    }
}
</script>>
