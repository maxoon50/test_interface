<template>
    <div :class="{focus: focused}">{{title}}</div>
</template>

<script>
    export default {
        name: "ItemMenu",
        props:['title'],
        data: function() {
            return {
                focused: false,
                focus: 0,
                lastFocused: null
            }
        },
        methods: {

            isFocus: function () {
                this.focused = true;
            },
            removeFocus: function () {
                this.focused = false;
            },
        }
        }
</script>

<style scoped>

</style>