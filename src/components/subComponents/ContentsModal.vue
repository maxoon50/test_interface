<template>
    <div class="grow border contents">
        <Channels v-for="(channel,i) in channels" :nom="channel" ref="contents"/>
    </div>
</template>

<script>
    import Channels from './Channels.vue';
    import {mixinEletWithChild} from '../../mixins/mixinEletWithChild';
    import source from '../../source/globalSource';

    export default {
        name: "ContentsModal",
        components: {
            Channels
        },
        mixins: [mixinEletWithChild],
        props: ['categorie', 'index'],
        data: function () {
            return {
                focused: false,
                channels: [1, 2, 3, 4, 5],
                source
            }
        },
        methods: {
            isFocus: function () {
                this.focused = true;
                console.log(this.source.modalY)
                this.getFocus(this.source.modalY);
            },
            setFocus: function (pos) {
                /* si on arrive en haut /*/
                if (this.focus <= 0 && pos == -1) {
                    /*         this.removeFocus();
                             this.$parent.removeFocus();
                             this.$parent.$parent.isFocus();*/
                    this.focus = this.$refs.contents.length - 1;
                    this.source.modalY += this.$refs.contents.length - 1;
                } else if (this.focus == this.$refs.contents.length - 1 && pos == 1) {
                    this.$parent.removeFocus();
                    // on set le button du parent a focus
                    this.$parent.$refs.buttons.isFocus();
                    return;
                } else if(this.focus >= -1 && this.focus <= this.$refs.contents.length - 1 ) {
                    this.focus += pos;
                    this.source.modalY += pos;
                }else{
                    return;
                }
                this.giveFocus();
            },
            listener: function ({
                                    code
                                }) {
                {
                    switch (code) {
                        case 'ArrowDown':
                            this.setFocus(1);
                            break;
                        case 'ArrowUp':
                            this.setFocus(-1);
                            break;
                    }
                }
            }


        },
        created() {

        }
    }
</script>

<style scoped>
    .contents {
        width: 25%;
    }

    .little {
        flex-grow: 1;
    }
</style>