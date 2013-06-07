$(function() {
    var pulserStart = null,
        glowerImages = ['bacon.jpg', 'beer.jpg', 'coffee.jpg', 'elephpant.jpg', 'zombie.jpg'],
        score;

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function stopGlower()
    {
        var endTime = new Date().getTime(),
            scoreEl = $('#score'),
            pulser  = $('#glower');

        score   = endTime - pulserStart;

        if (pulserStart === null) {
            return;
        }

        if ('vibrate' in navigator) {
            navigator.vibrate(0);
        }


        if ('notification' in navigator) {
            navigator.notification.vibrate(0);
        }

        pulserStart = null;

        pulser.removeClass('pulse');
        pulser.click(stopGlower);
        scoreEl.find('#time').text(score.toString() + " ms");
        scoreEl.show();
        loadHighScores();
        startGame();
    }

    function startGlower()
    {
        var pulser = $('#glower');

        pulser.addClass('pulse');
        pulserStart = new Date().getTime();

        if ('vibrate' in navigator) {
            navigator.vibrate(10000);
        }

        if ('notification' in navigator) {
            navigator.notification.vibrate(10000);
        }

        pulser.click(stopGlower);
    }

    function startGame()
    {
        var startPulse = getRandomInt(3, 10);

        $("#glower").attr('src', 'images/' + glowerImages[getRandomInt(0,4)]);
        setTimeout(startGlower, (startPulse*1000));
    }

    function loadHighScores() {
        $.getJSON('/mocks/hiscores.json', function(data) {
            console.log('fds');
            if (data.scores.length > 0) {
                for (var i; i < data.scores.length; i++) {
                    var dataItem = data.scores[i];
                    $('<li>').html(dataItem.name + ": " + dataItem.score).appendTo('#highscoreslist');
                }
            }
        });
    }

    function submitHighScore() {
        alert('submit score: ' + score);
        $('#highscoreslist').append('<li>' + score + '</li>')
        $('#score').hide();
        startGame();
    }

    $('#submit').click(submitHighScore);

    loadHighScores();
    startGame();
});