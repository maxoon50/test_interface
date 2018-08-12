<template>
    <div id="app">
        <template v-for="child in componentList">
            <component :is="child" :key="child" ref="contents"></component>
        </template>
    </div>
</template>

<script>
    import AppHeader from "./components/Header";
    import SubMenu from "./components/SubMenu";
    import AppMain from "./components/Main";
    import {mixinEletWithChild} from './mixins/mixinEletWithChild';

    export default {
        name: 'app',
        components: {
            AppHeader,
            SubMenu,
            AppMain
        },
        mixins: [mixinEletWithChild],
        data: function () {
            return {
                componentList: ['appHeader', 'SubMenu', 'appMain'],
                focus: 0,
                lastFocused: null,
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.initListeners();
                this.lastFocused = this.$refs.contents[0];
                this.lastFocused.isFocus();
            })
        },
        methods: {
            isFocus: function () {
                this.focused = true;
                this.focus = 1;
                this.getFocus(1);
            },
            setFocus: function (pos) {
                if (this.focus <= 0 && pos == -1) {
                    return;
                } else if (this.focus == this.componentList.length - 1 && pos == 1) {
                    return;
                } else {
                    this.focus += pos;
                }
                this.giveFocus();
            },
            listener({ code }) {
                switch (code) {
                    case 'ArrowDown':
                        this.setFocus(1);
                        console.log('down app');
                        break;
                    case 'ArrowUp':
                        this.setFocus(-1);
                        console.log('top app');
                        break;
                }
            },
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
