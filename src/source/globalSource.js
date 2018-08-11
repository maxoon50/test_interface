import Vue from 'vue'
import {EventBus} from "../main";

let source = new Vue({
    data: {
        indexSubMenu: 0,
    },
    watch: {
        indexSubMenu: function () {
            EventBus.$emit('subMenuSelected', this.indexSubMenu);
        },


    }
})

export default source;
