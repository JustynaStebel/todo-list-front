import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },
  actions: {
    addTask() {
      let name = this.get('newName');
      let newTask = this.store.createRecord('task', { name: name });
      newTask.save();
    },
    removeTask(task) {
      let todo = this.get('model');
      todo.deleteRecord();
      todo.save();
      // this.store.destroyRecord(task);
    }
  }
});
