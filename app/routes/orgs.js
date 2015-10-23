import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'facebook' },
      { id: 'emberjs' },
      { id: 'netflix'
    }];
  },
  favorites: Ember.inject.service(),
  setupController(controller) {
    this._super(...arguments);
    controller.set('items', this.get('favorites.items'));
  },

  actions: {
    favorite(orgName) {

      this.get('favorites.items').addObject({id: orgName});

    }
  }
});
