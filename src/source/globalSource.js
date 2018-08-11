import Vue from 'vue'
export const globalSource = new Vue({
    data: function(){
        return {
            lastEltFocused : null,
            eltFocused : null,
        }
    }
});