var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        var circle; 
        var circles = []; 

        // Creates a single random circle and gives it random velocity
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }

        // Use a loop to create multiple circles
        for (var i = 0; i < 25; i++) {
            drawCircle();
        }

        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        function update() {
            // Update the position of each circle
            for (var i = 0; i < circles.length; i++) {
                var eachCircle = circles[i];
                physikz.updatePosition(eachCircle);
                game.checkCirclePosition(eachCircle);
            }
        }

        // Move circles back to the opposite side when off-screen
        game.checkCirclePosition = function(circle) {

            if (circle.x > canvas.width) {
                circle.x = 0;
            } else if (circle.x < 0) {
                circle.x = canvas.width;
            }

            if (circle.y > canvas.height) {
                circle.y = 0;
            } else if (circle.y < 0) {
                circle.y = canvas.height;
            }
        }
        
        /////////////////////////////////////////////////////////////
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') && 
    (typeof process.versions.node !== 'undefined')) {
    module.exports = init;
}
