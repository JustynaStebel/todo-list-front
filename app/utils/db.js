import Ember from 'ember';

export default Ember.Object.create({

  _records: [
    { name: "Bring soy milk for Dad" },
    { name: "Go to the gym with Matt" },
    { name: "Eat veggies two times a day" }
  ],

  tasks() {
    return Ember.copy(this._records);
  },

  addTask(task) {
    this._records.push(task);
  },

  removeTask(task) {
    const index = this._records.indexOf(task);
    this._records.splice(index, 1);
  }

});
