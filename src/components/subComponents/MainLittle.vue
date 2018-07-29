<template>
    <div :class="{focus: focused}">little</div>
</template>

<script>
    export default {
        name: "main-little",
        data: function(){
            return {
                focused: false
            }
        }
        ,methods:{
            isFocus: function () {
                this.focused = true;
            },
            removeFocus: function(){
                this.focused = false;
            }
        }
    }
</script>

<style scoped>
.little{
    flex-grow: 1;
}
</style>