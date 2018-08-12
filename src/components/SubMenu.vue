<template>
    <div id="cont">
        <ItemMenu id="submenu"
                  class="inside"
                  v-for="(item, index) in  subMenuElements"
                  :title="item"
                  :index="index"
                  ref="contents"/>
    </div>
</template>

<script>
    import ItemMenu from './subComponents/ItemMenu';
    import {mixinEletWithChild} from '../mixins/mixinEletWithChild';
    import {EventBus} from "../main";
    import source from '../source/globalSource';

    export default {
        components: {
            ItemMenu
        },
        mixins: [mixinEletWithChild],
        data: function () {
            return {
                focused: false,
                subMenuElements: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],
                focus: 0,
                lastFocused: null,
                source
            }
        },
        methods: {

            isFocus: function () {
                this.focused = true;
                // on doit setter le focus sur le content qui était focus en dernier
                this.getFocus(this.focus);
            },
            giveFocusToModal(){
                this.removeListeners(this.listener);
                this.$parent.removeListeners();
                this.source.modalOpened = true;
            },
            listener: function ({code}) {
                {
                    //comme ce component n'a qu'une ligne on remove les listeners directement au up & down
                    switch (code) {
                        case 'ArrowRight' :
                            this.setFocus(1);
                            break;
                        case 'ArrowLeft' :
                            this.setFocus(-1);
                            break;
                        case 'ArrowUp' :
                            this.removeListeners(this.listener);
                            break;
                        case 'ArrowDown' :
                            this.removeListeners(this.listener);
                            break;
                        case 'Enter' :
                            this.giveFocusToModal();
                            break;
                    }
                }
            }

        },
        mounted() {
            EventBus.$on('subMenuSelected', (index) => {
                this.focus = index;
            });
            EventBus.$on('ModalClosed', (index)=>{
                this.isFocus();
                this.$parent.initListeners();
            })
        }
    }
</script>

<style scoped>
    #cont {
        display: flex;
        height: 70px;
        width: 100%;
    }

    .inside {
        width: 20%;
    }

</style>