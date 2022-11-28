const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
let isPlaying = true;
let indexSong = 0;
const nextBtn = document.querySelector(".playforward");
const prevBtn = document.querySelector(".playback");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
//const musics = ["Pano.mp3", "273C.mp3", "anhDaQuenVoiCoDon.mp3", "anhDechcanGiNhieuNgoaiEm.mp3", "anotherLove.mp3", "buonThiCuKhocDi.mp3", "doEmBietAnhDangNghiGi.mp3", "gioNoiRoi.mp3", "headInTheClouds.mp3", "iAintWorried.mp3", "ifIAntGotYou.mp3", "ngheNhuTinhYeu.mp3", "nightDancer.mp3", "phiDieuVaVeSau.mp3", "pyscho.mp3", "querry.mp3", "somebodyThatIUseToKnow.mp3", "thisIsAmerica.mp3", "tuEmMaRa.mp3", "whistle.mp3", "whyNotMe.mp3", "worldSmallestViolin.mp3"];
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-names");
const loveBtn = document.querySelector("lovebtn");
const musicList = document.querySelector(".playlist-musics");
const ulTag = document.querySelector("li");

let musics = [
  {
    id: 1,
    name: "Astronaut In The Ocean",
    src: "astronautintheocean.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 2,
    name: "Beggin",
    src: "beggin.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 3,
    name: "Counting Stars",
    src: "countingstars.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 4,
    name: "Dont Let Me Down",
    src: "dontletmedown.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 5,
    name: "Driver Slicense x Take Me To The Church",
    src: "anotherLove.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 6,
    name: "Hymm For The Weekend",
    src: "hymmfortheweekend.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 7,
    name: "Im An Albatraoz",
    src: "imanaalbatraoz.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 8,
    name: "Moon Light",
    src: "moonlight.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 9,
    name: "Radioactive",
    src: "radioactive.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 10,
    name: "Salt",
    src: "salt.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 11,
    name: "See You Again",
    src: "seeyouagain.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 12,
    name: "Sold Out",
    src: "soldout.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 13,
    name: "Stay",
    src: "stay.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 14,
    name: "Sugar",
    src: "sugar.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 15,
    name: "Teeth",
    src: "teeth.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 16,
    name: "The Nights",
    src: "thenights.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 17,
    name: "Unstoppable",
    src: "unstoppable.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 18,
    name: "Waiting For Love",
    src: "waitingforlove.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  },
  {
    id: 19,
    name: "What Make You Beautiful",
    src: "tuEmMaRa.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27388708a1b387d1d712b33c551.jfif?v=1668678993782"
  }
];

//controls
song.setAttribute("src", musics[indexSong].src);
nextBtn.addEventListener("click", function(){
  changeSong(1);
});
prevBtn.addEventListener("click", function() {
  changeSong(-1);
});
function changeSong(dir) {
  if(dir == 1) {
    indexSong++;
    if(indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if(dir == -1){
      indexSong--;
      if (indexSong < 0){
        indexSong = musics.length -1;
      }
      isPlaying = true;
  }
 // song.setAttribute("src", musics[indexSong].src);
  init(indexSong);
  playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if(isPlaying) {
    song.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = false;
  } else {
    song.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = true;
  }
}
//auto next
function playSong(index) {
  song.src = musics[index].src;
  song.play();
  
}
song.addEventListener("ended", function playNextS() {
  indexSong++;
  if (indexSong == musics.length) {
    indexSong = 0;
    playSong(indexSong);
    init(indexSong);
  } else {
    playSong(indexSong);
    init(indexSong);
  }
})
//thoi gian chay
function displayTimer() {
  const {duration, currentTime} = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
}
displayTimer();
setInterval(displayTimer, 1000);
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
//doi tieu de 
function init(indexSong) {
  song.setAttribute("src", musics[indexSong].src);
  musicName.textContent = musics[indexSong].name;
  playSong(indexSong);
}
init(indexSong);
//chon playlist
const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const m3 = document.querySelector("#m3");
const m4 = document.querySelector("#m4");
const m5 = document.querySelector("#m5");
const m6 = document.querySelector("#m6");
const m7 = document.querySelector("#m7");
const m8 = document.querySelector("#m8");
const m9 = document.querySelector("#m9");
const m10 = document.querySelector("#m10");
const m11 = document.querySelector("#m11");
const m12 = document.querySelector("#m12");
const m13 = document.querySelector("#m13");
const m14 = document.querySelector("#m14");
const m15 = document.querySelector("#m15");
const m16 = document.querySelector("#m16");
const m17 = document.querySelector("#m17");
const m18 = document.querySelector("#m18");
const m19 = document.querySelector("#m19");
const m20 = document.querySelector("#m20");
const m21 = document.querySelector("#m21");
const m22 = document.querySelector("#m22");

m1.addEventListener("click", playM0);
function playM0() {
  indexSong =0;
  song.setAttribute("src", musics[0].src);
  playPause(0);
 musicName.innerHTML = 'Astronaut In The Ocean';
}
m2.addEventListener("click", playM1);
function playM1() {
 indexSong = 1;
  song.setAttribute("src", musics[1].src);
  playPause(1);
  musicName.innerHTML = 'Beggin';
}
m3.addEventListener("click", playM2);
function playM2() {
  indexSong =2;
  song.setAttribute("src", musics[2].src);
  playPause(2);
  musicName.innerHTML = 'Counting Stars';
}
m4.addEventListener("click", playM3);
function playM3() {
 indexSong = 3;
  song.setAttribute("src", musics[3].src);
  playPause(3);
  musicName.innerHTML = 'Dont Let Me Down';
}
m5.addEventListener("click", playM4);
function playM4() {
 indexSong = 4;
  song.setAttribute("src", musics[4].src);
  playPause(4);
  musicName.innerHTML = 'Driver Slicense x Take Me To The Church';
}
m6.addEventListener("click", playM5);
function playM5() {
 indexSong = 5;
  song.setAttribute("src", musics[5].src);
  playPause(5);
  musicName.innerHTML = 'Hymm For The Weekend';
}
m7.addEventListener("click", playM6);
function playM6() {
 indexSong = 6;
  song.setAttribute("src", musics[6].src);
  playPause(6);
  musicName.innerHTML = 'Im An Albatraoz';
}
m8.addEventListener("click", playM7);
function playM7() {
 indexSong = 7;
  song.setAttribute("src", musics[7].src);
  playPause(7);
  musicName.innerHTML = 'Moon Light';
}
m9.addEventListener("click", playM8);
function playM8() {
 indexSong = 8;
  song.setAttribute("src", musics[8].src);
  playPause(8);
  musicName.innerHTML = 'Radioactive';
}
m10.addEventListener("click", playM9);
function playM9() {
 indexSong = 9;
  song.setAttribute("src", musics[9].src);
  playPause(9);
  musicName.innerHTML = 'Salt';
}
m11.addEventListener("click", playM10);
function playM10() {
 indexSong = 10;
  song.setAttribute("src", musics[10].src);
  playPause(10);
  musicName.innerHTML = 'See You Again';
}
m12.addEventListener("click", playM11);
function playM11() {
 indexSong = 11;
  song.setAttribute("src", musics[11].src);
  playPause(11);
  musicName.innerHTML = 'Sold Out';
}
m13.addEventListener("click", playM12);
function playM12() {
 indexSong = 12;
  song.setAttribute("src", musics[12].src);
  playPause(12);
  musicName.innerHTML = 'Stay';
}
m14.addEventListener("click", playM13);
function playM13() {
 indexSong = 13;
  song.setAttribute("src", musics[13].src);
  playPause(13);
  musicName.innerHTML = 'Sugar';
}
m15.addEventListener("click", playM14);
function playM14() {
 indexSong = 14;
  song.setAttribute("src", musics[14].src);
  playPause(14);
  musicName.innerHTML = 'Teeth';
}
m16.addEventListener("click", playM15);
function playM15() {
 indexSong = 15;
  song.setAttribute("src", musics[15].src);
  playPause(15);
  musicName.innerHTML = 'The Nights';
}
m17.addEventListener("click", playM16);
function playM16() {
 indexSong = 16;
  song.setAttribute("src", musics[16].src);
  playPause(16);
  musicName.innerHTML = 'Unstoppable';
}
m18.addEventListener("click", playM17);
function playM17() {
 indexSong = 17;
  song.setAttribute("src", musics[17].src);
  playPause(17);
  musicName.innerHTML = 'Waiting For Love';
}
m19.addEventListener("click", playM18);
function playM18() {
 indexSong = 18;
  song.setAttribute("src", musics[18].src);
  playPause(18);
  musicName.innerHTML = 'What Make You Beautiful';
}

