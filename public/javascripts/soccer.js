window.onload = function() {
    var cx = Math.random() * window.innerWidth
    cy = Math.random() * window.innerHeight / 2,
        vx = Math.random() * 40,
        vy = Math.random() * 20,
        radius = 60,
        gravity = 5,
        damping = 1,
        traction = 0.95;
    canvas = document.getElementById("home_canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var CW = canvas.width;
    var CH = canvas.height;
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, CW, CH)
    img = new Image;
    // img.onload = start;
    img.src = '/images/pic1.jpg';
    ball = new Image;
    ball.src = "/images/soccer.png"
    ball.onload = start
    function start() {
        ctx.clearRect(0, 0, CW, CH);
        // ctx.drawImage(img, 0, 0, CW, CH);
        // requestAnimationFrame(start);

        if (cx + radius >= canvas.width) {
            vx = -vx * damping;
            cx = canvas.width - radius;
        } else if (cx - radius <= 0) {
            vx = -vx * damping;
            cx = radius;
        }
        if (cy + radius >= canvas.height) {
            vy = -vy * damping;
            if (Math.abs(vy) < 10) {
                vy = 0
            }
            cy = canvas.height - radius;
            // traction here
            vx *= traction;

        } else if (cy - radius <= 0) {
            vy = -vy * damping;

            cy = radius;
        }
        vy += gravity;
        cx += vx;
        cy += vy;
        // ctx.drawImage(ball, cx - radius, cy - radius, radius * 2, radius * 2)
    }
}