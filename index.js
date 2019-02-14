var smusic = new Audio ('src/smusic.mp3');
$('.button').mousedown(function(e){
    if (e.which == 1) {
        var target = $(this).attr('target') + '/';
        var include = "<script type='text/javascript' src='" + target + "js/phaser.js'></script><script src='" + target + "js/states/BootState.js'></script><script src='" + target + "js/states/LoadingState.js'></script><script src='" + target + "js/states/TiledState.js'></script><script src='" + target + "js/prefabs/Prefab.js'></script><script src='" + target + "js/prefabs/Player.js'></script><script src='" + target + "js/prefabs/Enemy.js'></script><script src='" + target + "js/prefabs/GroundEnemy.js'></script><script src='" + target + "js/prefabs/FlyingEnemy.js'></script><script src='" + target + "js/prefabs/RunningEnemy.js'></script><script src='" + target + "js/prefabs/StoneEnemy.js'></script><script src='" + target + "js/prefabs/Goal.js'></script><script src='" + target + "js/prefabs/Checkpoint.js'></script><script src='" + target + "js/prefabs/Coin.js'></script><script src='" + target + "js/prefabs/Score.js'></script><script src='" + target + "js/prefabs/Lives.js'></script><script src='" + target + "js/prefabs/Item.js'></script><script src='" + target + "js/prefabs/LifeItem.js'></script><script src='" + target + "js/prefabs/FireballItem.js'></script><script src='" + target + "js/prefabs/Fireball.js'></script><script src='" + target + "js/prefabs/Boss.js'></script><script type='text/javascript' src='" + target + "js/main.js'></script>";
        smusic.volume = 0.1;
        if (target == 'Trump/') {
            $('#load').attr('src', 'src/wall.gif');
            var trump = new Audio ('src/trump.mp3');
            var music = new Audio ('src/trump theme.mp3');
            music.volume = 0.1;
            trump.play();
            trump.volume = 0.8;
        }
        else if (target == 'Luffy/') {
            $('#load').attr('src', 'src/charge.gif');
            var luffy = new Audio ('src/luffy.mp3');
            var music = new Audio ('src/luffy theme.mp3');
            music.volume = 0.3;
            luffy.play();
            luffy.volume = 0.5;
        }
        else if (target == 'Goku/') {
            $('#load').attr('src', 'src/smoke.gif');
            var goku = new Audio ('src/goku.mp3');
            var music = new Audio ('src/goku theme.mp3');
            music.volume = 0.2;
            goku.play();
            goku.volume = 0.5;
        }
        $('.loading').fadeIn();
        setTimeout(function(){
            $('.trumpette').hide();
            $('.button').hide();
            $('body').append(include);
            setTimeout(function(){
                $('.loading').fadeOut();
                music.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
                smusic.pause();
                music.play();
            }, 1200)
        }, 500);
    }
});

$('.button').mouseenter(function(){
    $(this).next().fadeIn();
});

$('.button').mouseleave(function(){
    $(this).next().fadeOut();
});

setTimeout(function(){
    smusic.volume = 0.2;
    smusic.play();
}, 200);