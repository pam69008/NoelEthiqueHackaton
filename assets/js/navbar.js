// Snow from https://codepen.io/radum/pen/xICAB
var couleur = "#FFF";
(function () {

    var COUNT = 1000;
    var masthead = document.querySelector('.sky');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;

    function onResize() {
        width = masthead.clientWidth;
        height = masthead.clientHeight;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = couleur;
        // '#8a0303';

        var wasActive = active;
        active = width > 100;

        if (!wasActive && active)
            requestAnimFrame(update);
    }

    var Snowflake = function () {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.r = 0;

        this.reset();
    }

    Snowflake.prototype.reset = function () {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.vy = 1 + Math.random() * 3;
        this.vx = 0.5 - Math.random();
        this.r = 1 + Math.random() * 2;
        this.o = 0.5 + Math.random() * 0.5;
    }

    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';

    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
        snowflake = new Snowflake();
        snowflake.reset();
        snowflakes.push(snowflake);
    }

    function update() {

        ctx.clearRect(0, 0, width, height);

        if (!active)
            return;

        for (i = 0; i < COUNT; i++) {
            snowflake = snowflakes[i];
            snowflake.y += snowflake.vy;
            snowflake.x += snowflake.vx;

            ctx.globalAlpha = snowflake.o;
            ctx.beginPath();
            ctx.fillStyle = couleur;
            ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();

            if (snowflake.y > height) {
                snowflake.reset();
            }
        }

        requestAnimFrame(update);
    }

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    onResize();
    window.addEventListener('resize', onResize, false);
    masthead.appendChild(canvas);
})();


// url('img/village.jpg')
var i = 0;
var images = ["village.jpg", "village_rouge2.png"];

$(document).ready(function () {


    // Set effect on body
    $("body").click(function () {
        // $("#player")[0].play();
        shake();
        return false;
    });

    //fct shake my booty
    function shake() {
        console.log('pppp');
        var div = $('body');
        var interval = 1;
        var distance = 2;
        var times = 20;

        $(div).css('position', 'relative');

        // mvt alea haut ou gauche
        var randomnumber = Math.floor(Math.random() * (2 + 1) + 0);
        // Math.floor(Math.random() * (2 + 1) + 0);

        if (randomnumber === 0) {
            for (var iter = 0; iter < (times + 1); iter++) {
                $(div).animate({
                    top: ((iter % 2 === 0 ? distance : distance * -1))
                }, interval);
            }
            $(div).animate({top: 0}, interval);
        } else if (randomnumber === 1) {
            for (var iter = 0; iter < (times + 1); iter++) {
                $(div).animate({
                    left: ((iter % 2 === 0 ? distance : distance * -1))
                }, interval);
            }
            $(div).animate({left: 0}, interval);
        } else {
            var randomnumber2 = Math.floor(Math.random() * (1000 + 1) + 400);

            var setBlur = function (ele, radius) {
                    $(ele).css({
                        "-webkit-filter": "blur(" + radius + "px)",
                        "filter": "blur(" + radius + "px)"
                    });
                },

                // Generic function to tween blur radius
                tweenBlur = function (ele, startRadius, endRadius) {
                    $({blurRadius: startRadius}).animate({blurRadius: endRadius}, {
                        duration: randomnumber2,
                        easing: 'swing', // or "linear"
                                         // use jQuery UI or Easing plugin for more options
                        step: function () {
                            setBlur(ele, this.blurRadius);
                        },
                        complete: function () {
                            // Final callback to set the target blur radius
                            // jQuery might not reach the end value
                            setBlur(ele, endRadius);
                        }
                    });
                };


            // Start tweening towards blurred image
            window.setTimeout(function () {
                tweenBlur('body', 0, 8);
            }, 0);


            // Reverse tweening after 3 seconds
            window.setTimeout(function () {
                tweenBlur('body', 8, 0);
            }, 0);

            window.setTimeout(function () {
                $("#playerFlou")[0].play();
            }, 1000);

        }

    }

    // si clic sur div class .sky
    $(".sky").click(function () {
        i++;
        if (i % 2 === 1) {
            $('.sky').css("background-image", "url(img/village.jpg)");
            $('.sky').fadeOut("slow", function () {
                $(this).css("background-image", "url(img/village_rouge2.png)");
                $(this).fadeIn("slow");
                couleur = '#8a0303';
                $('.bloodyChris').css("display", "block");
                $('.whiteTextNav').css("display", "none");
                $("#playerBell")[0].pause();
                $("#playerFlou")[0].pause();
                $("#playerNohell")[0].play();
            });
        } else {
            $("#playerNohell")[0].pause();
            $("#playerFlou")[0].pause();
            $("#playerBell")[0].play();
            $("#playerBell")[0].loop = true;

            $('.sky').css("background-image", "url(img/village_rouge2.png)");
            $('.sky').fadeOut("slow", function () {
                $(this).css("background-image", "url(img/village.jpg)");
                $(this).fadeIn("slow");
                couleur = '#FFF';
                $('.bloodyChris').css("display", "none");

                $('.whiteTextNav').css("display", "block");
            });
        }
    })
// faire apparaitre les paragraphe au clic de l'icone
    $('#avionImage').on({
        'click': function () {
            $('.paraAvion').toggle();
            $('#avionImage').attr('src', '/img/icone/redAvion.png');
            document.getElementById("transport-txt").innerHTML = "285 g de CO2/passager/km pour un avion";
            // : '/img/icone/icons8-aéroport-100.png';
            window.setTimeout(function () {
                $('.paraAvion').toggle();
                $('#avionImage').attr('src', '/img/icone/icons8-aéroport-100.png');
            }, 4000);
        }
    });
    $('#veloImage').on({
        'click': function () {
            $('.paraVelo').toggle();
            $('#veloImage').attr('src', '/img/icone/greenBike.png');
            window.setTimeout(function () {
                $('.paraVelo').toggle();
                $('#veloImage').attr('src', '/img/icone/icons8-cyclisme-sur-route-100.png');
            }, 4000);
        }
    });
    $('#voitureImage').on({
        'click': function () {
            $('.paraVoiture').toggle();
            $('#voitureImage').attr('src', '/img/icone/yellowCar.png');
            window.setTimeout(function () {
                $('.paraVoiture').toggle();
                $('#voitureImage').attr('src', '/img/icone/icons8-voiture-100.png');
            }, 4000);
        }
    });

    $('#iphoneImage').on({
        'click': function () {
            $('.paraIphone').toggle();
            $('#iphoneImage').attr('src', '/img/icone/redIphone.png');
            window.setTimeout(function () {
                $('.paraIphone').toggle();
                $('#iphoneImage').attr('src', '/img/icone/iphone.png');
            }, 4000);
        }
    });

    $('#oursonImage').on({
        'click': function () {
            $('.paraOurson').toggle();
            $('#oursonImage').attr('src', '/img/icone/yellowOurson.png');
            window.setTimeout(function () {
                $('.paraOurson').toggle();
                $('#oursonImage').attr('src', '/img/icone/ourson.png');
            }, 4000);
        }
    });

    $('#dominoImage').on({
        'click': function () {
            $('.paraDomino').toggle();
            $('#dominoImage').attr('src', '/img/icone/greenDomino.png');
            window.setTimeout(function () {
                $('.paraDomino').toggle();
                $('#dominoImage').attr('src', '/img/icone/domino.png');
            }, 4000);
        }
    });

    $('#imageCanard').on({
        'click': function () {
            $('.paraCanard').toggle();
            $('#imageCanard').attr('src', '/img/icone/redCanard.png');
            window.setTimeout(function () {
                $('.paraCanard').toggle();
                $('#imageCanard').attr('src', '/img/icone/canard.png');
            }, 4000);
        }
    });

    $('#imageFish').on({
        'click': function () {
            $('.paraFish').toggle();
            $('#imageFish').attr('src', '/img/icone/yellowFish.png');
            window.setTimeout(function () {
                $('.paraFish').toggle();
                $('#imageFish').attr('src', '/img/icone/fish.png');
            }, 4000);
        }
    });

    $('#imageVegetables').on({
        'click': function () {
            $('.paraVegetables').toggle();
            $('#imageVegetables').attr('src', '/img/icone/greenVegetable.png');
            window.setTimeout(function () {
                $('.paraVegetables').toggle();
                $('#imageVegetables').attr('src', '/img/icone/vegetables.png');
            }, 4000);
        }
    });

    $('#feuilleImage').on({
        'click': function () {
            $('.paraFeuille').toggle();
            $('#feuilleImage').attr('src', '/img/icone/greenFeuille.png');
            window.setTimeout(function () {
                $('.paraFeuille').toggle();
                $('#feuilleImage').attr('src', '/img/icone/feuille.png');
            }, 4000);
        }
    });

    $('#guirlandeImage').on({
        'click': function () {
            $('.paraGuirlande').toggle();
            $('#guirlandeImage').attr('src', '/img/icone/yellowGuirlande.png');
            window.setTimeout(function () {
                $('.paraGuirlande').toggle();
                $('#guirlandeImage').attr('src', '/img/icone/guirlande.png');
            }, 4000);
        }
    });
    $('#sapinImage').on({
        'click': function () {
            $('.paraSapin').toggle();
            $('#sapinImage').attr('src', '/img/icone/redSapin.png');
            window.setTimeout(function () {
                $('.paraSapin').toggle();
                $('#sapinImage').attr('src', '/img/icone/sapin.png');
            }, 4000);
        }
    });
});


//section transport

    document.getElementById("avion").addEventListener("click", function(){
    document.getElementById("transport-img").src="img/icone/icons8-aéroport-100.png";
    document.getElementById("transport-bg").style="background-color:red";
    document.getElementById("value-t").innerHTML = '3';
    document.getElementById("transport-title").innerHTML = "Avion";
    document.getElementById("transport-li").style = "display:block";
    document.getElementById("transport-txt").innerHTML = "285 g de CO2/passager/km pour un avion";
});

    document.getElementById("velo").addEventListener("click", function(){
    document.getElementById("transport-img").src="img/icone/icons8-cyclisme-sur-route-100.png";
    document.getElementById("transport-bg").style="background-color:green";
    document.getElementById("value-t").innerHTML = '1';
    document.getElementById("transport-title").innerHTML = "Vélo";
    document.getElementById("transport-li").style = "display:block";
    document.getElementById("transport-txt").innerHTML = "Bonne initiative, tu ne perdras pas ton permis";

});

    document.getElementById("voiture").addEventListener("click", function(){
    document.getElementById("transport-img").src="img/icone/icons8-voiture-100.png";
    document.getElementById("transport-bg").style="background-color:orange";
    document.getElementById("value-t").innerHTML = '2';
    document.getElementById("transport-title").innerHTML = "Voiture";
    document.getElementById("transport-li").style = "display:block";
    document.getElementById("transport-txt").innerHTML = "55 g de CO2/passager/km pour une voiture moyenne";

});


    document.getElementById("iphone").addEventListener("click", function(){
    document.getElementById("cadeaux-img").src="img/icone/iphone.png";
    document.getElementById("cadeaux-bg").style="background-color:red";
    document.getElementById("value-c").innerHTML = '3';

    document.getElementById("cadeaux-title").innerHTML = "Iphone";
    document.getElementById("cadeaux-li").style = "display:block";
    document.getElementById("cadeaux-txt").innerHTML = "On le sait tous que le lithium est bon pour la santée!";
});

    document.getElementById("ourson").addEventListener("click", function(){
    document.getElementById("cadeaux-img").src="img/icone/ourson.png";
    document.getElementById("cadeaux-bg").style="background-color:orange";
    document.getElementById("value-c").innerHTML = '2';
 
    document.getElementById("cadeaux-title").innerHTML = "Ourson";
    document.getElementById("cadeaux-li").style = "display:block";
    document.getElementById("cadeaux-txt").innerHTML = "Un ourson chinois? Fabriqué par des petites mains encore plus petites que celle de ton gamin?";

});

    document.getElementById("domino").addEventListener("click", function(){
    document.getElementById("cadeaux-img").src="img/icone/domino.png";
    document.getElementById("cadeaux-bg").style="background-color:green";
    document.getElementById("value-c").innerHTML = '1';
    document.getElementById("cadeaux-title").innerHTML = "Domino";
    document.getElementById("cadeaux-li").style = "display:block";
    document.getElementById("cadeaux-txt").innerHTML = "Tu apprends la logique, tu deviendras développeur pour être encore plus ethique !";

});

//section nourriture

    document.getElementById("canard").addEventListener("click", function(){
    document.getElementById("nourriture-img").src="img/icone/canard.png";
    document.getElementById("nourriture-bg").style="background-color:red";
    document.getElementById("value-n").innerHTML = '3';

    document.getElementById("nourriture-title").innerHTML = "Canard";
    document.getElementById("nourriture-li").style = "display:block";
    document.getElementById("nourriture-txt").innerHTML = "37 millions de canards et 700.000 oies sont gavées en France pour produire du foie gras.";
});

document.getElementById("fish").addEventListener("click", function(){
    document.getElementById("nourriture-img").src="img/icone/fish.png";
    document.getElementById("nourriture-bg").style="background-color:orange";
    document.getElementById("value-n").innerHTML = '2';
    document.getElementById("nourriture-title").innerHTML = "Poisson";
    document.getElementById("nourriture-li").style="display:block";
    document.getElementById("nourriture-txt").innerHTML = "Les polluants retrouvés dans le saumon d'élevage ont une mauvaise influence sur le développement du cerveau, et sont associés à l'autisme, à l'hyperactivité et à la baisse de QI.";
});
    document.getElementById("vegetables").addEventListener("click", function(){
    document.getElementById("nourriture-img").src="img/icone/vegetables.png";
    document.getElementById("nourriture-bg").style="background-color:green";
    document.getElementById("value-n").innerHTML = '1';

    document.getElementById("nourriture-title").innerHTML = "Légumes";
    document.getElementById("nourriture-li").style = "display:block";
    document.getElementById("nourriture-txt").innerHTML = "Bon choix, il faut manger 5 fruits et légumes par jour";
});

//section deco

    document.getElementById("feuille").addEventListener("click", function(){
    document.getElementById("deco-img").src="img/icone/feuille.png";
    document.getElementById("deco-bg").style="background-color:green";
    document.getElementById("value-d").innerHTML = '1';

    document.getElementById("deco-title").innerHTML = "Feuilles";
    document.getElementById("deco-li").style = "display:block";
    document.getElementById("deco-txt").innerHTML = "Une belle promenade en forêt, un moment passé en famille, quelques feuilles devant la cheminée. ";
});

    document.getElementById("guirlande").addEventListener("click", function(){
    document.getElementById("deco-img").src="img/icone/guirlande.png";
    document.getElementById("deco-bg").style="background-color:orange";
    document.getElementById("value-d").innerHTML = '2';
    document.getElementById("deco-title").innerHTML = "Guirlandes";
    document.getElementById("deco-li").style = "display:block";
    document.getElementById("deco-txt").innerHTML = "Un bien beau morceau de ficelle";

});

    document.getElementById("sapin").addEventListener("click", function(){
    document.getElementById("deco-img").src="img/icone/sapin.png";
    document.getElementById("deco-bg").style="background-color:red";
    document.getElementById("value-d").innerHTML = '3';
    document.getElementById("deco-title").innerHTML = "Sapins";
    document.getElementById("deco-li").style = "display:block";
    document.getElementById("deco-txt").innerHTML = "Deux ans à pousser.... 1 mois à pourrir devant ta cheminée ou ton radiateur...";

});

