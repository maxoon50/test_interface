<template>
    <div id="app">
        <template v-for="child in componentList">
                <component :is="child" :key="child"  ref="contents"></component>
</template>
        <!-- <app-header ref="appHeader"></app-header>
        <SubMenu ref="SubMenu"/>
        <app-main ref="appMain"></app-main> -->
    
    </div>
</template>

<script>
    import AppHeader from "./components/Header";
    import SubMenu from "./components/SubMenu";
    import AppMain from "./components/Main";
    import { mixinEletWithChild } from './mixins/mixinEletWithChild';
    import { EventBus } from './main';
    
    export default {
        name: 'app',
        components: {
            AppHeader,
            SubMenu,
            AppMain
        },
        mixins : [mixinEletWithChild],
        data: function() {
            return {
                componentList: ['appHeader', 'SubMenu', 'appMain'],
                focus: 1,
                lastFocused: this,
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                this.initListeners();
                this.lastFocused = this.$refs.contents[1];
                this.lastFocused.isFocus();
/*                EventBus.$on('parentRemoveListener', () => this.removeListener());
                EventBus.$on('parentAddListener', () => {
                    // ici le dernier focus était l'élément ciblé, on veut donc retourner sur l'elt d'avant
                    this.setFocus(-1);
                    this.initListeners();
                })*/
            })
        },
        methods: {
            setFocus: function(pos) {
                if (this.focus <= 0 && pos == -1) {
                    return;
                } else if (this.focus == this.componentList.length - 1 && pos == 1) {
                    return;
                } else {
                    this.focus += pos;
                }
                this.giveFocus();
            },
/*            giveFocus: function() {
                this.lastFocused.removeFocus();
                let eltToFocus = this.$refs.contents[this.focus];
                eltToFocus.isFocus();
                this.lastFocused = eltToFocus;
            },*/
            listener({
                code
            }) {
                switch (code) {
                    case 'ArrowDown':
                        this.setFocus(1); console.log('down app');
                        break;
                    case 'ArrowUp':
                        this.setFocus(-1);console.log('top app');
                        break;
                }
            },
/*            initListener() {
                window.addEventListener('keydown', this.listener);
            },
            removeListener() {
                console.log('app remove listner')
                window.removeEventListener('keydown', this.listener);
            }*/
    
        }
    }
</script>

<style>
    html,
    body {
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
    
    .focus {
        background-color: lime;
    }
    
    .flex {
        display: flex;
    }
</style>
