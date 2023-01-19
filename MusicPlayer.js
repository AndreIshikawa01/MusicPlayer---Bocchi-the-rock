const audio = document.querySelector('audio');
let playPause = document.getElementById('play-pause');

playPause.addEventListener('click', function() {
  if (audio.paused) {
    audio.play()
    playPause.innerHTML = "Pause";
  
  } else {
    audio.pause()
    playPause.innerHTML = "Play_arrow";
  }
});


let progressBar = document.querySelector('#progress-bar');


audio.addEventListener('timeupdate', function() {
  let porcentagem = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = porcentagem + '%';
});



let musicas = [
    {
        "imagem": "imagens/capa2.png",
        "nomeMusica": "Karakara",
        "musica": "music/Karakara.mp3"
    },
    {
        "imagem": "imagens/capa3.png",
        "nomeMusica": "Never forget",
        "musica": "music/Never forget.mp3"
    },
    {
        "imagem": "imagens/capa1.png",
        "nomeMusica": "Distortion!!",
        "musica": "music/Distortion!!.mp3"
    },
    {
        "imagem": "imagens/capa4.png",
        "nomeMusica": "Guitar, Loneliness and Blue Planet",
        "musica":"music/Guitar, Loneliness and Blue Planet.mp3" 
    },
    {
        "imagem": "imagens/capa5.png",
        "nomeMusica": "Rockn' Roll, Morning Light Falls on You",
        "musica":"music/Rockn' Roll, Morning Light Falls on You.mp3"
    },
  
]


let musica = 0

function updateMusica(){
    document.getElementById("audio").src = musicas[musica].musica;
    document.getElementById("nomeMusica").innerHTML = musicas[musica].nomeMusica;
    document.getElementById("imagem").src = musicas[musica].imagem;

  }
  
  
  document.getElementById("proxima").onclick = function() {
    musica++;
    if (musica=== musicas.length) {
      musica = 0;
    }
    updateMusica();
    progressBar.style.width = '0%';
    playPause.innerHTML = "Play_arrow";
  }
  
  
  
  
  document.getElementById("anterior").onclick = function() {
    musica--;
    if(musica < 0){
        musica = musicas.length - 1;
    }
    updateMusica();
    progressBar.style.width = '0%';
    playPause.innerHTML = "Play_arrow";
  }
  
  document.getElementById("barra").onclick = function() {
    alert("Apenas na proxima atualização, junto com o tempo de música!")
  }

let btn = document.getElementById("btn")
let aprendizado = document.querySelector(".aprendizado")
let musicPlayer = document.getElementById("musicPlayer")

  btn.addEventListener("click", () => {
    aprendizado.style.display = "none";
    musicPlayer.style.display = "block";
});

const audioVolume = document.getElementById("audio");
audio.volume = 0.08;
