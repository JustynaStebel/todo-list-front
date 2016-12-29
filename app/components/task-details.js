import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    open() {
      this.set('isShowingModal', true);
    },

    close() {
      this.set('isShowingModal', false);
    }
  }
});
