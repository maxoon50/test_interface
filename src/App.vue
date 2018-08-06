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
    import { 
        EventBus
    } from './main';
    
    export default {
        name: 'app',
        components: {
            AppHeader,
            SubMenu,
            AppMain
        },
        data: function() {
            return {
                componentList: ['appHeader', 'SubMenu', 'appMain'],
                focus: 1,
                lastFocused: null,
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                this.initListener();
                this.lastFocused = this.$refs.contents[1];
                this.lastFocused.isFocus();
                EventBus.$on('parentRemoveListener', () => this.removeListener());
                EventBus.$on('parentAddListener', () => {
                    // ici le dernier focus était l'élément ciblé, on veut donc retourner sur l'elt d'avant
                    this.setFocus(-1);
                    this.initListener();
                })
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
            giveFocus: function() {
                this.lastFocused.removeFocus();
                let eltToFocus = this.$refs.contents[this.focus];
                eltToFocus.isFocus();
                this.lastFocused = eltToFocus;
            },
            listener({
                code
            }) {
                switch (code) {
                    case 'ArrowDown':
                        this.setFocus(1);
                        break;
                    case 'ArrowUp':
                        this.setFocus(-1);
                        break;
                }
            },
            initListener() {
                window.addEventListener('keydown', this.listener);
            },
            removeListener() {
                window.removeEventListener('keydown', this.listener);
            }
    
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
