$(function() {
    var pulserStart = null,
        glowerImages = ['bacon.jpg', 'beer.jpg', 'coffee.jpg', 'elephpant.jpg', 'zombie.jpg'];

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function stopGlower()
    {
        var endTime = new Date().getTime(),
            score   = endTime - pulserStart,
            scoreEl = $('#time'),
            pulser  = $('#glower');

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

        pulser.setAttribute('class', '');
        pulser.removeEventListener('click', stopGlower, false);
        scoreEl.innerHTML = (score.toString() + " ms");

        startGame();
    }

    function startGlower()
    {
        var pulser = document.getElementById('glower');

        pulser.setAttribute('class', 'pulse');
        pulserStart = new Date().getTime();

        if ('vibrate' in navigator) {
            navigator.vibrate(10000);
        }

        if ('notification' in navigator) {
            navigator.notification.vibrate(10000);
        }

        pulser.addEventListener('click', stopGlower, false);
    }

    function startGame()
    {
        var startPulse = getRandomInt(3, 10);

        $("#glower").attr('src', 'images/' + glowerImages[getRandomInt(0,4)]);
        setTimeout(startGlower, (startPulse*1000));
    }

    startGame();
});