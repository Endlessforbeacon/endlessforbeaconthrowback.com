// Dapatkan elemen-elemen dari HTML
const radioPlayer = document.getElementById('radio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const statusText = document.getElementById('status-text');
const volumeSlider = document.getElementById('volume-slider');

// Kontrol Putar/Jeda
playPauseBtn.addEventListener('click', () => {
    if (radioPlayer.paused) {
        radioPlayer.play();
        playPauseBtn.textContent = 'Jeda';
    } else {
        radioPlayer.pause();
        playPauseBtn.textContent = 'Putar';
    }
});

// Kontrol Volume
radioPlayer.volume = volumeSlider.value;
volumeSlider.addEventListener('input', () => {
    radioPlayer.volume = volumeSlider.value;
});

// Update status pemutaran
radioPlayer.addEventListener('play', () => {
    statusText.textContent = 'Memutar';
});

radioPlayer.addEventListener('pause', () => {
    statusText.textContent = 'Dijeda';
});

radioPlayer.addEventListener('waiting', () => {
    statusText.textContent = 'Memuat...';
});

radioPlayer.addEventListener('error', () => {
    statusText.textContent = 'Tidak Terhubung';
});