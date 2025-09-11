$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(250, 610, 200, 20, "black"); //first platform
    createPlatform(150, 540, 50, 20, "black"); //step 1
    createPlatform(100, 460, 50, 20, "black"); //step 2
    createPlatform(250, 360, 80, 20, "black"); //first collectable platform
    createPlatform(400, -75, 20, 200, "black"); //vertical top
    createPlatform(400, 350, 20, 200, "black"); //vertical bottom
    createPlatform(600, 300, 100, 20, "black"); //side cannon top platform
    createPlatform(500, 380, 100, 20, "black"); // side cannon bottom platform
    createPlatform(450, 610, 20, 150, "black");
    createPlatform(100, 225, 20, 145, "black");
    createPlatform(0, 350, 100, 20, "black");

    // TODO 3 - Create Collectables
    createCollectable("coin", 270, 330, .125, .7);
    createCollectable("coin", 50, 320);
    createCollectable("coin", 630, 270);


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 425, 1000);
    createCannon("right", 400, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
