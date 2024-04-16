console.log("Welcome To Spotify");
// Initialize the variables
let audioElement = new Audio('khamoshiya.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Kya_loge", filePath: "kya_loge.mp3", coverpath: "music.jpg" },
    { songName: "Khamoshiya", filePath: 'khamoshiya.mp3', coverpath: "music.jpg" },
    { songName: "jugjug", filePath: "jugjug.mp3", coverpath: "music.jpg" },
    { songName: "KeThodaPyar", filePath: "KeThodaPyar.mp3", coverpath: "music.jpg" },
    { songName: "ParamSundari", filePath: "ParamSundari.mp3", coverpath: "music.jpg" },
    { songName: "baptobap", filePath: "baptobap.mp3", coverpath: "music.jpg" },
    { songName: "manjarhainaya", filePath: "manjarhainaya.mp3", coverpath: "music.jpg" },
    { songName: "MereGharram", filePath: "MereGharram.mp3", coverpath: "music.jpg" },
    { songName: "terevasate", filePath: "terevasate.mp3", coverpath: "music.jpg" },
    { songName: "tumtodhokebaz", filePath: "tumtodhokebaz.mp3", coverpath: "music.jpg" }
];

// Function to set up the audio element with a given song
function setSong(songIndex) {
    audioElement.src = songs[songIndex].filePath;
}

// Function to play or pause the audio
function togglePlay() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1; // Show GIF
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0; // Hide GIF
    }
}

// Play/pause click event
masterplay.addEventListener('click', togglePlay);

// Listen to timeupdate event
audioElement.addEventListener('timeupdate', () => {
    // Update progress bar
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myprogressbar.value = progress;
});

// Update play/pause icon when audio ends
audioElement.addEventListener('ended', () => {
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0; // Hide GIF when music ends
});

// Progress bar click event
myprogressbar.addEventListener('click', (e) => {
    const clickX = e.clientX - myprogressbar.getBoundingClientRect().left;
    const percent = (clickX / myprogressbar.offsetWidth);
    audioElement.currentTime = audioElement.duration * percent;
});

// Cursor pointer on progress bar
myprogressbar.style.cursor = 'pointer';

// Function to handle playing all songs
const makeAllPlays = () => {
    songs.forEach((song, index) => {
        setTimeout(() => {
            setSong(index);
            audioElement.play();
        }, index * 1000); // Delay each song by 1 second
    });
}

// Attach click event to all play buttons
songitem.forEach((item, index) => {
    item.addEventListener('click', () => {
        setSong(index);
        togglePlay();
    });
});


