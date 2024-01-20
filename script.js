//countdown

simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 2, // required
  day: 28, // required
  hours: 8, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

// mengatasi masalah navbar oof caaaaanvas

const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});


//disable scrolling
const rootElement = document.querySelector(':root');
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;

function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function(){
    window.scrollTo(scrollLeft,scrollTop);
  }
rootElement.style.scrollBehavior = "auto";
}

function enableScroll(){

  window.onscroll = function(){}
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem('open','true');
 
  playAudio();


}
function playAudio(){
 
  song.volume = 0.5;
  audioIconWrapper.style.display = 'flex';
  song.play();
  isPlaying = true;

}

audioIconWrapper.onclick= function(){
if (isPlaying==true){
song.pause();
audioIcon.classList.remove ('bi-disc');
audioIcon.classList.add ('bi-pause-circle');
}
else{ song.play()
  
  audioIcon.classList.add ('bi-disc');
  audioIcon.classList.remove ('bi-pause-circle');

};

isPlaying = !isPlaying;
}
// if (!localStorage .getItem('open')){
//   disableScroll();
// }
if (localStorage .getItem('open')){
  disableScroll();
}


// script html form google sheet github

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Konfirmasi kehadiran telah berhasil dikirim!");
    })
  });
});


// nama  undangan pada URL sedrhana

// const urlParams = new URLSearchParams(window.location.search);
// const nama = urlParams.get('nama');

 

//  const namaContainer = document.querySelector('.hero h4 span');
//  namaContainer.innerText = nama;

// nama undangan lengkap dengan pronoun
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || ``;
const pronoun = urlParams.get('p')||`Bapak/Ibu/Saudara/i,` ;

 

 const namaContainer = document.querySelector('.hero h4 span');
//  namaContainer.innerText = pronoun +' '+ nama;
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, `,`);

document.querySelector('#nama').value = nama;




