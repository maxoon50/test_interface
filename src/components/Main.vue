<template>
    <main id="main"  class="flex">
        <div class="grow border">
            <main-little ref="channels" :categorie="'channels'"></main-little>
        </div>
        <div class="grow border">
            <main-little ref="contents" :categorie="'contents'"></main-little>
        </div>
        <div class="grow border">
            <main-little ref="apps" :categorie="'apps'"></main-little>
        </div>
        <div class="grow border">
            <main-little ref="films" :categorie="'films'"></main-little>
        </div>
        <div class="grow border">
            <main-little ref="extras" :categorie="'extras'"></main-little>
        </div>

    </main>
</template>

<script>
    import MainLittle from './subComponents/MainLittle';

    export default {
        name: "app-main",
        components: {
            MainLittle
        },
        data:function(){
            return {
                componentList: ['channels', 'contents', 'apps', 'films', 'extras'],
                focused: false,
                focus: 0,
                lastFocused: null
            }
        },
        methods: {
            isFocus: function () {
                this.focused = true;
                this.getFocus();
            },
            removeFocus: function () {
                this.focused = false;
                this.removeListeners();
                this.lastFocused.removeFocus();
                //remove tous les focus des enfants
            },
            getFocus: function () {
                this.focus = 0;
                this.initListeners();
                this.giveFocus();
            },
            setFocus: function (pos) {
                if(this.focus <= 0 && pos == -1){
                    this.focus = this.componentList.length-1;
                }else if(this.focus == this.componentList.length-1 && pos == 1){
                    this.focus = 0;
                }else{
                    this.focus += pos;
                }
                this.giveFocus();
            },
            giveFocus: function () {
                if(this.lastFocused != null){
                    this.lastFocused.removeFocus();
                }
                let eltToFocus = this.$refs[this.componentList[this.focus]];
                eltToFocus.isFocus();
                this.lastFocused = eltToFocus;
            },
            initListeners: function () {
                window.addEventListener('keydown', this.listener );
            },
            removeListeners: function() {
                window.removeEventListener('keydown', this.listener);
            },
            listener: function ({code}) {
             {
                    switch(code){
                        case 'ArrowRight' : this.setFocus(1);
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