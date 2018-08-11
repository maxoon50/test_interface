<template>
    <div class="grow border">
        <Channels v-for="(channel,i) in channels" :nom="channel" ref="contents"/>
    </div>
</template>

<script>
    import Channels from './Channels.vue';
    import source from '../../source/globalSource'
    import {mixinEletWithChild} from '../../mixins/mixinEletWithChild';

    export default {
        name: "main-little",
        components: {
            Channels
        },
        mixins: [mixinEletWithChild],
        props: ['categorie', 'index'],
        data: function () {
            return {
                focused: false,
                channels: [1, 2, 3, 4, 5],
            }
        },
        methods: {
            isFocus: function () {
                source.indexSubMenu = this.index;
                this.focused = true;
                this.getFocus();
            },
            setFocus: function (pos) {
                /* si on arrive en haut /*/
                if (this.focus <= 0 && pos == -1) {
                    this.removeFocus();
                    this.$parent.removeFocus();
                    this.$parent.$parent.isFocus();
                    return;
                } else if (this.focus == this.$refs.contents.length - 1 && pos == 1) {
                    this.focus = 0;
                } else {
                    this.focus += pos;
                }
                this.giveFocus();
            },
            listener: function ({
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