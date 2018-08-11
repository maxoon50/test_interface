<template>
    <main id="main"  class="flex">
        <!-- <div class="grow border">
            <Contents ref="channels" :categorie="'channels'"/>
        </div>
        <div class="grow border">
            <Contents ref="contents" :categorie="'contents'"/>
        </div>
        <div class="grow border">
            <Contents ref="apps" :categorie="'apps'"/>
        </div>
        <div class="grow border">
            <Contents ref="films" :categorie="'films'"/>
        </div>
        <div class="grow border">
            <Contents ref="extras" :categorie="'extras'"/>
        </div> -->
      <template v-for="child in eltsName">
            <component :is="'contents'" :key="child" :categorie="'contents'" ref="contents"></component>
        </template>
    </main>
</template>

<script>
    import Contents from './subComponents/Contents';
    import { EventBus } from '../main';
    import { mixinEletWithChild } from '../mixins/mixinEletWithChild';
    export default {
        name: "app-main",
        components: {
            Contents
        },
        mixins : [mixinEletWithChild],
        data:function(){
            return {
                eltsName: ['channels', 'contents', 'apps', 'films', 'extras'],
                focused: false,
                focus: 0,
                lastFocused: null
            }
        },
        methods: {

            // removeFocus: function () {
            //     this.focused = false;
            //     this.removeListeners();
            //     this.lastFocused.removeFocus();
            //     //remove tous les focus des enfants
            // },
            // getFocus: function () {
            //     this.focus = 0;
            //     this.initListeners();
            //     this.giveFocus();
            // },
            // setFocus: function (pos) {
               
            //     if(this.focus <= 0 && pos == -1){
            //         this.focus = this.componentList.length-1;
            //     }else if(this.focus == this.componentList.length-1 && pos == 1){
            //         this.focus = 0;
            //     }else{
            //         this.focus += pos;
            //     }
            //     this.giveFocus();
            // },
            // giveFocus: function () {
            //     if(this.lastFocused != null){
            //         this.lastFocused.removeFocus();
            //     }
            //     let eltToFocus = this.$refs.contents[this.focus];
            //     eltToFocus.isFocus();
            //     this.lastFocused = eltToFocus;
            // },
            // initListeners: function () {
            //     window.addEventListener('keydown', this.listener );
            // },
            // removeListeners: function() {
            //     window.removeEventListener('keydown', this.listener);
            // },
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
    #main {
        flex-grow: 1;
    }
    .grow {
        flex-grow: 1;
    }
    .border{
        border: 1px solid grey;
    }
</style>