import Ember from 'ember';

//αντί να χρησιμοποιώ το Ember.route και Ember.set
const {Route, set} = Ember;

export default Route.extend({
    model(params){
        return this.store.query('post',{ userId: params.id })
    },

    setupController(controller,model){
        set(controller, 'posts', model)
    }
});
