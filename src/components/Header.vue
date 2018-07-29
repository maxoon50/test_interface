<template>
    <header id="header" :class="{focus: focused}">header {{nom}}</header>
</template>

<script>
    export default {
        name: "app-header",
        data: function(){
            return {
                nom: 'test',
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
        },
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                console.log(this)
            })
        }
    }
</script>

<style scoped>
#header{
    height: 250px;
}
</style>