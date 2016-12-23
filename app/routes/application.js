import Ember from 'ember';
import db from '../utils/db';

export default Ember.Route.extend({
  model() {
    return db.tasks();
  },

  actions: {

    addTask(task) {
      db.addTask(task);
      this.refresh();
    },
    removeTask(task) {
      db.removeTask(task);
      this.refresh();
    }

  }
});
