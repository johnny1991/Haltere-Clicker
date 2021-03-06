import Ember from 'ember';

var controller = Ember.ArrayController.extend({
    actions:{
        click: function(object){
            var model = this.get('model').get(0);
            model.score++;
            $.cookie('score', model.score);
            $('.score').text(model.score);
        }
    }
});

export default controller;