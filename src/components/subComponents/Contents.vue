<template>
    <div class="grow border">
        <Channels v-for="(channel,i) in channels" :nom="channel" ref="contents" />
    </div>
</template>

<script>
    import Channels from './Channels.vue';
    import { EventBus } from '../../main';
    import { mixinEletWithChild } from '../../mixins/mixinEletWithChild';

    export default {
        name: "main-little",
        components: {
            Channels
        },
        mixins: [mixinEletWithChild],
        props: ['categorie'],
        data: function() {
            return {
                focused: false,
                channels: [1,2,3,4,5],
            }
        },
        methods: {
 
            // removeFocus: function() {
            //     this.focused = false;
            //     this.removeListeners();
            //     this.lastFocused.removeFocus();
            //     //remove tous les focus des enfants
            // },
            // getFocus: function() {
            //     this.focus = 0;
            //     this.initListeners();
            //     this.giveFocus();
            // },
             setFocus: function(pos) {
                /* si on arrive en haut /*/
                 if (this.focus <= 0 && pos == -1) {
                     this.removeFocus();
                     this.$parent.removeFocus();
                     this.$parent.$parent.isFocus();
                     return;
                 } else if (this.focus == this.componentList.length - 1 && pos == 1) {
                     this.focus = 0;
                 } else {
                     this.focus += pos;
                 }
                 this.giveFocus();
             },
            // giveFocus: function() {
            //     if (this.lastFocused != null) {
            //         this.lastFocused.removeFocus();
            //     }
            //     let eltToFocus = this.$refs.channels[this.focus];
            //     eltToFocus.isFocus();
            //     this.lastFocused = eltToFocus;
            // },
            // initListeners: function() {
            //     window.addEventListener('keydown', this.listener);
            // },
            // removeListeners: function() {
            //     window.removeEventListener('keydown', this.listener);
            // },
            listener: function({
                code
            }) {
                {
                    switch (code) {
                        case 'ArrowDown':
                            console.log('down contents');
                            this.setFocus(1);
                            break;
                        case 'ArrowUp':
                            console.log('up contents');
                            this.setFocus(-1);
                    }
                }
            }
    
    
    
    
        },
        created() {
            
        }
    }
</script>

<style scoped>
    .little {
        flex-grow: 1;
    }
</style>