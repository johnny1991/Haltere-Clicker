import Ember from 'ember';
import Game from 'haltere/models/game';
import Exercice from 'haltere/models/exercice';

export default Ember.Route.extend({
    model: function() {
        Game.level = Game.levels[0];
        return Ember.RSVP.hash({
            game: Game,
            exercice: Exercice
        });
    }
});