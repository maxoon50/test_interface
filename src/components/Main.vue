<template>
    <main id="main" class="flex">
        <Modal/>
        <template v-for="(child, index) in eltsName">
            <component :is="'contents'" :key="child" :categorie="'contents'" ref="contents" :index="index"></component>
        </template>
    </main>
</template>

<script>
    import Contents from './subComponents/Contents';
    import {EventBus} from '../main';
    import {mixinEletWithChild} from '../mixins/mixinEletWithChild';
    import Modal from './Modal'

    export default {
        name: "app-main",
        components: {
            Contents,
            Modal
        },
        mixins: [mixinEletWithChild],
        data: function () {
            return {
                eltsName: ['channels', 'contents', 'apps', 'films', 'extras'],
                focused: false,
                focus: 0,
                lastFocused: null
            }
        },
        methods: {
            getFocus: function () {
                this.initListeners();
                this.giveFocus();
                this.$parent.removeListeners();
            },
            listener: function ({code}) {
                {
                    switch (code) {
                        case 'ArrowRight' :
                            this.setFocus(1);
                            break;
                        case 'ArrowLeft' :
                            this.setFocus(-1);
                    }
                }
            }

        },
        mounted() {
            EventBus.$on('subMenuSelected', (index) => this.focus = index);
        }
    }
</script>

<style scoped>
    #main {
        flex-grow: 1;
        position: relative;
    }

    .grow {
        flex-grow: 1;
    }

    .border {
        border: 1px solid grey;
    }
</style>