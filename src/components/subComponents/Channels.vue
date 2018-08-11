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
        console.log('is focus bb')
            },
            removeFocus: function() {
                console.log('reove focus bb')
                this.focused = false;
                // this.removeListeners();
                // this.lastFocused.removeFocus();
                //remove tous les focus des enfants
            },
    
        }
    }
</script>

<style scoped>
    .channel {
        border: 1px solid grey;
        height: 100px;
        width: 100%;
    }
</style>