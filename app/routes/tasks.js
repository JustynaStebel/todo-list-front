import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },
  actions: {
    addTask(task) {
      const newTask = this.store.createRecord('task', task);
      return newTask.save();
    },
    removeTask() {
      const todo = this.get('model');
      todo.deleteRecord();
      todo.save();
      // this.store.destroyRecord(task);
    }
  }
});
