<template>
    <div id="app">
        <app-header ref="appHeader"></app-header>
        <app-main ref="appMain"></app-main>
        <app-footer ref="appFooter"></app-footer>
    </div>
</template>

<script>

    import AppHeader from "./components/Header";
    import AppFooter from "./components/Footer";
    import AppMain from "./components/Main";

    export default {
        name: 'app',
        components: {
            AppHeader,
            AppFooter,
            AppMain
        },
        data:function(){
            return {
                componentList: ['appHeader', 'appMain', 'appFooter'],
                focus: 0,
                lastFocused: null,
            }
        },
        mounted: function(){

            window.addEventListener('keydown', ({code})=> {
                switch(code){
                    case 'ArrowDown' : this.setFocus(1);
                    break;
                    case 'ArrowUp' : this.setFocus(-1);
                    break;

                }
            });
            this.lastFocused = this.$refs.appHeader;
            this.lastFocused.isFocus();
        },
        methods: {
            setFocus: function(pos){
                if(this.focus <= 0 && pos == -1){
                    return;
                }else if(this.focus == this.componentList.length-1 && pos == 1){
                    this.focus = 0;
                }else{
                    this.focus += pos;
                }
                this.giveFocus();
            },
            giveFocus: function () {
                this.lastFocused.removeFocus();
                let eltToFocus = this.$refs[this.componentList[this.focus]];
                eltToFocus.isFocus();
                this.lastFocused = eltToFocus;
            }

        }
    }


</script>

<style>
    html, body {
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .focus{
        background-color: lime;
    }
    .flex{
        display: flex;
    }
</style>
