<template>
    <div class="channel" :class="{focus: focused}">
        {{ nom }}
    </div>
</template>

<script>
    export default {
        components: {
    
        },
        props: ['nom'],
        data: function() {
            return {
                componentList: [],
                focused: false,
                focus: 0,
                lastFocused: null
            }
        },
        methods: {
    
            isFocus: function() {
                this.focused = true;
            },
            removeFocus: function() {
                this.focused = false;
            },
    
        }
    }
</script>

<style scoped>
    .channel {
        border: 1px solid grey;
        height: 70px;
        width: 100%;
    }
</style>