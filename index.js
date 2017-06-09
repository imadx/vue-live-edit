const LiveEdit = {
    install: function(Vue, options) {
        const LiveEditComponent = require('./Component/LiveEdit')
        Vue.component(LiveEditComponent.name, LiveEditComponent)
    }
};

export default LiveEdit;