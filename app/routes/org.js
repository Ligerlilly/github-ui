import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {


    return $.get(`http://api.github.com/orgs/${params.id}/repos`).then( raw => {
      raw.forEach(r => {
        r.oldId = r.id;
        r.id = r.name;
        return r;
      });
      return raw;
    });
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'))
  }
});
