import { EventBus } from '../main';
export const mixinEletWithChild = {
    data: function() {
        return {
            focused: false,
            componentList : this.$refs
        }
    },
    methods:{
        isFocus: function () {
            this.focused = true;
            this.getFocus();
           // EventBus.$emit('parentRemoveListener');
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
                this.focus = this.componentList.contents.length-1;
            }else if(this.focus == this.componentList.contents.length-1 && pos == 1){
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
            let eltToFocus = this.$refs.contents[this.focus];
            eltToFocus.isFocus();
            this.lastFocused = eltToFocus;
        },
        initListeners: function () {
            window.addEventListener('keydown', this.listener );
        },
        removeListeners: function() {
            window.removeEventListener('keydown', this.listener);
        },
    }
}