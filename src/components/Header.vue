<template>
    <header id="header" :class="{focus: focused}">
        header
    </header>
</template>

<script>
    import mixinEletWithoutChild from '../mixins/mixiEltWithoutChild';
    export default {
        name: "app-header",
        mixins: [mixinEletWithoutChild],
    }
</script>

<style scoped>
    #header {
        height: 250px;
    }
</style>