import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['book-item'],
  tagName: 'li',

  doubleClick: function() {
    this.set('isEditing',true)
  },

  actions: {
    save: function() {
      this.set('isEditing',false);
      this.get('book').save()
      return false;
    }
  }
});
