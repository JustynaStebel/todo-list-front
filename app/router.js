import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', {path: '/'});
  this.route('task', {path: '/task/:task_id'});
});

export default Router;
