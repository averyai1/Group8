document.getElementById('mysteryButton').addEventListener('click', function() {
    // Show hidden content
    document.getElementById('hiddenContent').style.display = 'block';
    document.getElementById('backgroundVideo').style.display = 'block';

    // Start playing the music
    var music = document.getElementById('backgroundMusic');
    music.volume = 0.1;  // Start at low volume
    music.play().catch(function(error) {
        console.log('Failed to play music: ' + error);
    });
});

window.onscroll = function() {
    var scrolled = window.scrollY;
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var bottomDistance = totalHeight - scrolled;

    // Calculate volume based on scroll position
    var volume = 1 - bottomDistance / totalHeight;
    if (volume < 0.1) volume = 0.1; // Keep it very quiet initially
    if (volume > 1) volume = 1;     // Cap at 1 to prevent it from getting too loud

    document.getElementById('backgroundMusic').volume = volume;

    // Distortion effect (this part requires Web Audio API setup not shown here)
    // You would need to set up an AudioContext and connect it to a BiquadFilter or WaveShaper
};
