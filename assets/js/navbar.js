
// Snow from https://codepen.io/radum/pen/xICAB
var couleur="#FFF";
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

    Snowflake.prototype.reset = function() {
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
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    onResize();
    window.addEventListener('resize', onResize, false);

    masthead.appendChild(canvas);
})();

//    coce Js gestion body louche

// url('img/village.jpg')
var i = 0;
var images = ["village.jpg", "village_rouge2.png"];

$(document).ready(function () {
    //
    // Set effect on body
    $( "body" ).click(function (){
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

        if (randomnumber === 0) {
            for (var iter = 0; iter < (times + 1) ; iter++) {
                $(div).animate({
                    top: ((iter % 2 === 0 ? distance : distance * -1))
                }, interval);
            }
            $(div).animate({ top: 0 }, interval);
        } else if (randomnumber ===1 ) {
            for (var iter = 0; iter < (times + 1) ; iter++) {
                $(div).animate({
                    left: ((iter % 2 === 0 ? distance : distance * -1))
                }, interval);
            }
            $(div).animate({ left: 0 }, interval);
        } else {
            var randomnumber2 = Math.floor(Math.random() * (500 + 1) + 100);

            var setBlur = function(ele, radius) {
                    $(ele).css({
                        "-webkit-filter": "blur("+radius+"px)",
                        "filter": "blur("+radius+"px)"
                    });
                },

                // Generic function to tween blur radius
                tweenBlur = function(ele, startRadius, endRadius) {
                    $({blurRadius: startRadius}).animate({blurRadius: endRadius}, {
                        duration: randomnumber2,
                        easing: 'swing', // or "linear"
                                         // use jQuery UI or Easing plugin for more options
                        step: function() {
                            setBlur(ele, this.blurRadius);
                        },
                        complete: function() {
                            // Final callback to set the target blur radius
                            // jQuery might not reach the end value
                            setBlur(ele, endRadius);
                        }
                    });
                };



            // Start tweening towards blurred image
            window.setTimeout(function() {
                tweenBlur('body', 0, 8);
            }, randomnumber2);

            // Reverse tweening after 3 seconds
            window.setTimeout(function() {
                tweenBlur('body', 8, 0);
            }, randomnumber2);
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
            $('.bloodyChris').css("display","block");
            $('.whiteTextNav').css("display","none");
            });
        } else {
            $('.sky').css("background-image", "url(img/village_rouge2.png)");
            $('.sky').fadeOut("slow", function () {
                $(this).css("background-image", "url(img/village.jpg)");
                $(this).fadeIn("slow");
                couleur = '#FFF';
                $('.bloodyChris').css("display","none");
                $('.whiteTextNav').css("display","block");
            });
        }
    })
// faire apparaitre les paragraphe au clic de l'icone
    $("#avion").click(function () {
        // $(this:first-child).css('box-shadow', '10px 10px 5px #888')
        $('.paraAvion').toggle()
    })
    $("#avion").click(function () {
        $( "#avion > img" ).css('drop-shadow', '30px 10px 4px #4444dd');
        // $('.paraAvion').toggle()
    })


    $("#velo").click(function () {
        $('.paraVelo').toggle()
    })
    $("#voiture").click(function () {
        $('.paraVoiture').toggle()
    })
    $("#iphone").click(function () {
        $('.paraIphone').toggle()
    })
    $("#ourson").click(function () {
        $('.paraOurson').toggle()
    })
    $("#domino").click(function () {
        $('.paraDomino').toggle()
    })
    $("#canard").click(function () {
        $('.paraCanard').toggle()
    })
    $("#fish").click(function () {
        $('.paraFish').toggle()
    })
    $("#vegetables").click(function () {
        $('.paraVegetables').toggle()
    })
    $("#feuille").click(function () {
        $('.paraFeuille').toggle()
    })
    $("#guirlande").click(function () {
        $('.paraGuirlande').toggle()
    })
    $("#sapin").click(function () {
        $('.paraSapin').toggle()
    })
});
