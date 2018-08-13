<template>
    <div id="modal" :class="{hide: !source.modalOpened}">
        <div class="flex">
            <template v-for="(child, index) in nbrElements">
                <component :is="'contentsModal'" :key="child" :categorie="'contents'" ref="contents"
                           :index="index"></component>
            </template>
        </div>
        <div>
            <ModalButtons ref="buttons"/>
        </div>
    </div>
</template>

<script>
    import source from '../source/globalSource';
    import ContentsModal from './subComponents/ContentsModal';
    import ModalButtons from './subComponents/ModalButtons';
    import {mixinEletWithChild} from '../mixins/mixinEletWithChild';
    import {EventBus} from "../main";

    export default {
        name: "Modal",
        components: {
            ContentsModal,
            ModalButtons
        },
        mixins: [mixinEletWithChild],
        data: function () {
            return {
                nbrElements: 5,
                source,
                focused: false,
                lastFocused: null
            }
        },
        methods: {
            isFocus: function () {
                this.focused = true;
                this.getFocus(this.source.modalX);
            },
            setFocus: function (pos) {
                if (this.focus <= 0 && pos == -1) {
                    this.focus = this.componentList.contents.length - 1;
                    this.source.modalX = this.componentList.contents.length - 1;
                } else if (this.focus == this.componentList.contents.length - 1 && pos == 1) {
                    this.focus = 0;
                    this.source.modalX = 0;
                } else if(this.focus >= -1 && this.focus <= this.$refs.contents.length - 1 ) {
                    this.focus += pos;
                    this.source.modalX += pos;
                } else {
                    return
                }
                this.giveFocus();
            },
            /*        getFocus: function (index) {
                        this.focus = index || 0;
                        this.initListeners();
                        this.giveFocus();
                    },*/
            listener: function ({code}) {
                {
                    switch (code) {
                        case 'ArrowRight' :
                            this.setFocus(1);
                            break;
                        case 'ArrowLeft' :
                            this.setFocus(-1);
                            break;
                        case 'Escape' :
                            this.removeFocus();
                            this.source.modalOpened = false;
                            this.source.modalY = 0;
                            break;
                    }
                }
            }
        },
        mounted() {
            EventBus.$on('ModalOpened', (menuDde) => {
                this.isFocus();
            })
        }

    }
</script>

<style scoped>
    #modal {
        display: flex;
        position: absolute;
        top: 0px;
        height: 100%;
        width: 100%;
        background-color: greenyellow;
        flex-direction: column;
    }

    .hide {
        display: none !important;
    }

    .flex {
        display: flex;
    }
</style>