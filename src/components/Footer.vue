<template>
    <footer id="footer" :class="{focus: focused}">footer</footer>
</template>

<script>
    export default {
        name: "app-footer",
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
#footer{
    height: 250px;
}
</style>