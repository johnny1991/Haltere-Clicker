import Ember from 'ember';

var level = Ember.Object.extend({
    id : null,
    points : null
});

export default [
    level.create({
        id : 1,
        points : 100
    }),
    level.create({
        id : 2,
        points: 1000
    }),
    level.create({
        id : 3,
        points: 10000
    }),
    level.create({
        id : 4,
        points: 100000
    })
];