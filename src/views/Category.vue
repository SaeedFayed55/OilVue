<template>
<div class="category">
    <drawer />
    <categoryTable />
</div>
</template>

<script>
import categoryTable from '../components/categoryTable'
import drawer from '../components/navigationDrawer'

export default {
    components: {
        categoryTable,
        drawer
    }
}
</script>>
