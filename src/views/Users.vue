<template>
<div class="users">
    <drawer />
    <usersTable />
    <notifications group="foo" />

</div>
</template>

<script>
import usersTable from '../components/usersTable'
import drawer from '../components/navigationDrawer'

export default {
    components: {
        usersTable,
        drawer
    }
}
</script>>
