<template>
    <div id="modal" :class="{hide: !source.modalOpened}">
        <template v-for="(child, index) in nbrElements">
            <component :is="'contentsModal'" :key="child" :categorie="'contents'" ref="contents" :index="index"></component>
        </template>
    </div>
</template>

<script>
    import source from '../source/globalSource';
    import ContentsModal from './subComponents/ContentsModal';
    import {mixinEletWithChild} from '../mixins/mixinEletWithChild';
    import {EventBus} from "../main";

    export default {
        name: "Modal",
        components: {
            ContentsModal
        },
        mixins: [mixinEletWithChild],
        data: function () {
            return {
                nbrElements: 5,
                source,
                focused: false,
                focus: 0,
                lastFocused: null
            }
        },
        methods: {
            getFocus: function () {
                this.focus = 0;
                this.initListeners();
                this.giveFocus();
            },
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
    }

    .hide {
        display: none !important;
    }
</style>