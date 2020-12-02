<template>
<div class="home">
    <drawer />
    <home />
</div>
</template>

<script>
import home from '../components/home'
import drawer from '../components/navigationDrawer'

export default {
    computed: {

    },
    components: {
        home,
        drawer
    }
}
</script>
