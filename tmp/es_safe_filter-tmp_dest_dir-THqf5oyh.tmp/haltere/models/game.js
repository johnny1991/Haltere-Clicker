import Ember from 'ember';
import Level from 'haltere/models/level';

var game = Ember.Object.extend({
    title: null,
    score : 0,
    total : null,
    levels : Level,
    hpc : 1,
    coefficientDisplay : 0.5,
    showPointPlural : function() {
        return (this.get('score') > 1) ? true : false;
    }.property('score'),
    showHpcPlural : function() {
        return (this.get('hpc') > 1) ? true : false;
    }.property('hpc')
});

export default game.create({
    title: 'Haltère Clicker',
});