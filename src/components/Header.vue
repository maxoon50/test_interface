<template>
    <header id="header" :class="{focus: focused}">
        header
    </header>
</template>

<script>
    export default {
        name: "app-header",
        data: function () {
            return {
                focused: false
            }
        },
        methods: {
            isFocus: function () {
                this.focused = true;
            },
            removeFocus: function () {
                this.focused = false;
            }
        }
    }
</script>

<style scoped>
    #header {
        height: 250px;
    }
</style>