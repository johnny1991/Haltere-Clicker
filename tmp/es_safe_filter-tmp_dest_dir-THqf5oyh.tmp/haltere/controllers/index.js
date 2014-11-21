import Ember from 'ember';

var controller = Ember.ObjectController.extend({
    //INIT
    init : function(){
        $( document ).ready(function() {
            var height = $(window).height();

            //LEFT
            var left = $('.left');
            left.height(height);

            //CENTER
            var center = $('.center');
            var center_content = center.find('.content');
            var center_bodybuilder = center.find('.bodybuilder');
            var center_evolution = center.find('.evolution');

            center.height(height);
            center_content.height(height);
            center_bodybuilder.height(height - center_evolution.outerHeight(true));

            //RIGHT
            var right = $('.right');
            right.height(height);

        });
    },
    //ACTIONS
    actions:{
        incrementPoint : function(game){
//            $.cookie('score', model.score);

            //UPDATE SCORE AND TOTAL GAME
            game.set('score', game.score + game.hpc);
            game.set('total', game.total + game.hpc);

            //ANIMATE HALTERE
            $('.haltere_image').animate({top:'5px'},40);
            $('.haltere_image').animate({top:'0px'},40);

            this.updateLevels(); //UPDATE LEVELS
            this.updateExercices(); //UPDATE EXERCICES
        },
        addExercice : function(exercice){
            var game = this.get('model.game');

            //IF WE CAN'T BUY EXERCICE
            if(game.score < exercice.points){
                return false;
            }

            //UPDATE QUANTITY EXERCICE
            exercice.set('quantity', exercice.quantity + 1);

            //UPDATE SCORE AND HPC GAME
            game.set('hpc', game.hpc + exercice.hpc);
            game.set('score', game.score - exercice.points);

            this.updateExercices();

            //UPDATE POINT EXERCICE
            var newPoint = Math.round(exercice.points * 1.15 * 1) / 1;
            exercice.set('points', newPoint);

        },
    },

    // FUNCTIONS
    updateLevels: function(){
        var game = this.get('model.game');
        var levels = game.levels;
        var parent = this;

        //FOR EACH LEVELS
        for(var i = 0; i < levels.length; i++){
            var level = levels[i];
            var firstInterval = (i > 0) ? levels[i - 1].points : 0;
            var secondInterval = level.points;
            var total = game.total;

            //INCREASE THE PROGRESS-BAR
            if((total >= firstInterval) && (total < secondInterval)){
                var progressInPercent = (total - firstInterval) / (secondInterval-firstInterval) * 100;
                this.set('progress-width',"width: " + progressInPercent + "%");
            }
            // CHANGE THE BODYBUILDER CLASS IF LEVEL UPGRADE
            if((total >= secondInterval)){
                parent.set('bodybuilder', 'bodybuilder_'+level.id);
            }
        }
    },
    updateExercices : function(){
        var game = this.get('model.game');
        var exercices = this.get('model.exercice');

        $.each(exercices, function(index, exercice){

            //DISPLAY TITLE IF NEEDED
            if(game.total >= (exercice.points * game.coefficientDisplay)){
                exercice.set('displayTitle', true);
            }

            //SHOW EXERCICE IN FRONT
            this.set('canbuy', (game.score >= exercice.points));

        });
    }
});

export default controller;