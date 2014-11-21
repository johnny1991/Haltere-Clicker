import Ember from 'ember';
import Haltere from 'haltere/models/haltere';

var route = Ember.Route.extend({
    model: function() {
        Haltere.get(0).score = $.cookie('score');
        return Haltere;
    },
    renderTemplate: function() {
        this.render({ outlet: 'left' });
    },
});

export default route; 