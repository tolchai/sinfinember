import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('book');
    },
    actions: {
        openForm: function() {
            this.controllerFor('books').set('isOpenForm', true);
            return false;
        }
    }    
});
