
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

//    coce Js pour gestion clic

// url('img/village.jpg')
var i = 0;
var images = ["village.jpg", "village_rouge2.png"];

$(document).ready(function () {
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
        $('.paraAvion').toggle()
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
    //changement de couleur des images
    $('#imageCanard').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/canard.png')
                ? '/img/icone/redCanard.png'
                : '/img/icone/canard.png';
            $(this).attr('src', src);
        }
    });
    $('#imageFish').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/fish.png')
                ? '/img/icone/yellowFish.png'
                : '/img/icone/fish.png';
            $(this).attr('src', src);
        }
    });
    $('#imageVegetables').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/vegetables.png')
                ? '/img/icone/greenVegetable.png'
                : '/img/icone/vegetables.png';
            $(this).attr('src', src);
        }
    });
    $('#feuilleImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/feuille.png')
                ? '/img/icone/greenFeuille.png'
                : '/img/icone/feuille.png';
            $(this).attr('src', src);
        }
    });
    $('#sapinImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/sapin.png')
                ? '/img/icone/redSapin.png'
                : '/img/icone/sapin.png';
            $(this).attr('src', src);
        }
    });
    $('#guirlandeImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/guirlande.png')
                ? '/img/icone/yellowGuirlande.png'
                : '/img/icone/guirlande.png';
            $(this).attr('src', src);
        }
    });
    $('#iphoneImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/iphone.png')
                ? '/img/icone/redIphone.png'
                : '/img/icone/iphone.png';
            $(this).attr('src', src);
        }
    });
    $('#oursonImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/ourson.png')
                ? '/img/icone/yellowOurson.png'
                : '/img/icone/ourson.png';
            $(this).attr('src', src);
        }
    });
    $('#dominoImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/domino.png')
                ? '/img/icone/greenDomino.png'
                : '/img/icone/domino.png';
            $(this).attr('src', src);
        }
    });
    $('#veloImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/icons8-cyclisme-sur-route-100.png')
                ? '/img/icone/greenBike.png'
                : '/img/icone/icons8-cyclisme-sur-route-100.png';
            $(this).attr('src', src);
        }
    });
    $('#avionImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/icons8-aéroport-100.png')
                ? '/img/icone/redAvion.png'
                : '/img/icone/icons8-aéroport-100.png';
            $(this).attr('src', src);
        }
    });
    $('#voitureImage').on({
        'click': function() {
            var src = ($(this).attr('src') === '/img/icone/icons8-voiture-100.png')
                ? '/img/icone/yellowCar.png'
                : '/img/icone/icons8-voiture-100.png';
            $(this).attr('src', src);
        }
    });

});
