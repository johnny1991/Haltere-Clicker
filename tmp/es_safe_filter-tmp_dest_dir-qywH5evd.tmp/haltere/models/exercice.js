import Ember from 'ember';

var exercice = Ember.Object.extend({
    id : null,
    title : null,
    points : null,
    hpc: null,
    quantity : 0,
    displayTitle: false
});

export default [
    exercice.create({
        id : 1,
        title : 'Développé couché',
        points : 30, //Available with 30 halteres
        hpc : 1 // Add 1 haltere per click,
    }),
    exercice.create({
        id : 2,
        title : 'Soulevé de terre',
        points: 500,
        hpc : 5
    }),
    exercice.create({
        id : 3,
        title : 'Squat',
        points: 3000,
        hpc : 30
    }),
    exercice.create({
        id : 4,
        title : 'Développé nuque',
        points: 10000,
        hpc : 100
    })
];