const $play1 = document.querySelector('.video-card.-card1 > .play');

const $play2 = document.querySelector('.video-card.-card2 > .play');

const $video1 = document.querySelector('.video-card.-card1 > .video');

const $video2 = document.querySelector('.video-card.-card2 > .video');

$play1.addEventListener('click', () => {
    $play1.style.display = 'none';
    $video1.setAttribute('controls', 'enable');
    $video1.play();
});

$play2.addEventListener('click', () => {
    $play2.style.display = 'none';
    $video2.setAttribute('controls', 'enable');
    $video2.play();
});

