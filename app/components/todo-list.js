import Ember from 'ember';

export default Ember.Component.extend({
  value: "",
  actions: {
    onEnter(name) {
      if (name) {
        this.get('addTask')({ name });
      }
      this.set('value', "");
    }
  }
});
