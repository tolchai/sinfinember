import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('books', {
      path: '/'
    });
  this.route('books');
});

export default Router;
