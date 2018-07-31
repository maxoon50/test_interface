<template>
    <div id="submenu" :class="{focus: focused}">sous menu</div>
</template>

<script>
    export default {
        data: function() {
            return {
                focused: false
            }
        },
        methods:{
            isFocus: function(){
                this.focused = true;
            },
            removeFocus: function(){
                this.focused = false;
            }
        }
    }
</script>

<style scoped>
#submenu{
    height: 250px;
}
</style>