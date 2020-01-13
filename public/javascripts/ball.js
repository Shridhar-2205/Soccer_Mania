        const CANVAS_W = 1600;
        const CANVAS_H = 100;
        const IMAGE_W  = 150;
        const IMAGE_H  = 110;
        const RIGHT    = CANVAS_W - IMAGE_W;
        const BOTTOM   = CANVAS_H - IMAGE_H;

        var con;
        var image;
        0.
        var x  = 0;
        var y  = 0;
        var dx = 10;
        var dy = 7;

        function init()
        {
            con = document.getElementById("canvas")
                          .getContext("2d");
            con.strokeStyle = "black";
            con.fillStyle = "white";

            image = new Image();
            image.src = "images/football.jpg";

            setInterval(draw, 70);
        }

        function draw()
        {
            con.fillRect(0, 0, CANVAS_W, CANVAS_H);

            con.drawImage(image, x, y, IMAGE_W, IMAGE_H);

            x += dx;
            y += dy;

            // Bounce off a wall
            if ((x < 0) || (x > RIGHT))  dx = -dx;
            if ((y < 0) || (y > BOTTOM)) dy = -dy;
        }