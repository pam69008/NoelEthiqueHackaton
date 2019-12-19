function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function () {

// //Position tête poison gauche ou droite
// // document.getElementById("fish")
//     function myMove() {

        var elem = document.getElementById("santa");
        var container = document.body;
        var pos = [0, 0];
        var posMax = [container.offsetWidth - elem.offsetWidth, container.offsetHeight - elem.offsetHeight];
        var position = [getRandomInt(posMax[0]), getRandomInt(posMax[1])];

        var id = setInterval(frame, 100);

        function frame() {

            console.log(pos);
            console.log(position);

            var directionGD = 1;
            if (pos[0] > position[0]) {
                directionGD *= -1; // reverses current direction
                // elem.style.transform = "rotate3d(0.18,1,0,170deg)";
            }
            if (pos[0] < position[0]) {
                directionGD *= 1;
                // vers la droite
                // elem.style.transform = "rotate3d(0,0,1,25deg)";
            }

            var directionHB = 1;
            if (pos[1] > position[1]) {
                directionHB *= -1; // reverses current direction
                // elem.style.transform = "rotate3d(0.18,1,0,170deg)";
            }
            if (pos[1] < position[1]) {
                directionHB *= 1;
                // vers le bas
                // elem.style.transform = "rotate3d(0,0,1,25deg)";
            }

            console.log('prout');
            // posH += hauteur;
            pos[0] += directionGD;
            pos[1] += directionHB;
            elem.style.top = pos[1] + "px";
            elem.style.left = pos[0] + "px";

            if (pos[0] === position[0]) {
                position = [getRandomInt(posMax[0]), getRandomInt(posMax[1])];
            }
        }

    $( "#santa" ).click(function (){
        $("#playerOhOh")[0].play();
    });
})
