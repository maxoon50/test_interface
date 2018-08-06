<template>
    <div class="grow border">
        <Channels v-for="(channel,i) in channels" :nom="channel.nom" ref="channels" />
    </div>
</template>

<script>
    import Channels from './Channels.vue';
    import { EventBus } from '../../main';

    export default {
        name: "main-little",
        components: {
            Channels
        },
        props: ['categorie'],
        data: function() {
            return {
                focused: false,
                channels: []
            }
        },
        methods: {
    
            setChannels() {
                for (var i = 0; i < 5; i++) {
                    this.channels.push({
                        nom: 'channel ' + i
                    });
                }
            },    
            isFocus: function() {
                this.focused = true;
                this.getFocus();                    
            },
            removeFocus: function() {
                this.focused = false;
                this.removeListeners();
                this.lastFocused.removeFocus();
                //remove tous les focus des enfants
            },
            getFocus: function() {
                this.focus = 0;
                this.initListeners();
                this.giveFocus();
            },
            setFocus: function(pos) {
                if (this.focus <= 0 && pos == -1) {
                    EventBus.$emit('parentAddListener');   
                    this.removeListeners();                 
                    return;//this.focus = this.$refs.channels.length - 1;
                } else if (this.focus == this.$refs.channels.length - 1 && pos == 1) {
                    this.focus = 0;
                } else {
                    this.focus += pos;
                }
                this.giveFocus();
            },
            giveFocus: function() {
                if (this.lastFocused != null) {
                    this.lastFocused.removeFocus();
                }
                let eltToFocus = this.$refs.channels[this.focus];
                eltToFocus.isFocus();
                this.lastFocused = eltToFocus;
            },
            initListeners: function() {
                window.addEventListener('keydown', this.listener);
            },
            removeListeners: function() {
                window.removeEventListener('keydown', this.listener);
            },
            listener: function({
                code
            }) {
                {
                    switch (code) {
                        case 'ArrowDown':
                            this.setFocus(1);
                            break;
                        case 'ArrowUp':
                            this.setFocus(-1);
                    }
                }
            }
    
    
    
    
        },
        created() {
            this.setChannels();
        }
    }
</script>

<style scoped>
    .little {
        flex-grow: 1;
    }
</style>