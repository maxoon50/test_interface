<template>
    <div id="cont">
        <ItemMenu id="submenu" v-for="item in  subMenuElements"  class="inside" :title="item" ref="contents"/>
    </div>
</template>

<script>
    import ItemMenu from './subComponents/ItemMenu';
    import { mixinEletWithChild } from '../mixins/mixinEletWithChild';
    export default {
        components:{
          ItemMenu
        },
        mixins : [mixinEletWithChild],
        data: function() {
            return {
                focused: false,
                subMenuElements : ['menu1','menu2', 'menu3','menu4', 'menu5'],
                focus: 0,
                lastFocused: null
            }
        },
        methods:{
  /*          isFocus: function(){
                this.focused = true;
            },
            removeFocus: function(){
                this.focused = false;
            }*/
            listener: function ({code}) {
                {
                    switch(code){
                        case 'ArrowRight' : this.setFocus(1); console.log('right');
                            break;
                        case 'ArrowLeft' : this.setFocus(-1);
                    }
                }
            }

        }
    }
</script>

<style scoped>
    #cont{
        display: flex;
        height: 70px;
        width: 100%;
    }
    .inside{
        width: 20%;
    }

</style>