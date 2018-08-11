<template>
    <div :class="{focus: focused}">{{title}}</div>
</template>

<script>
    import { EventBus } from '../../main';
    import   source  from "../../source/globalSource";

    export default {
        name: "ItemMenu",
        props:['title', 'index'],
        data: function() {
            return {
                focused: false,
                focus: 0,
                lastFocused: null
            }
        },
        methods: {

            isFocus: function () {
                source.indexSubMenu = this.index;
                this.$parent.focus = this.index;
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