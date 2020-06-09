
var C = 0, Cs = 1, D = 2, Ds = 3, E = 4, F = 5, Fs = 6, G = 7, Gs = 8, A = 9, As = 10, B = 11;
var O = 12;


let notas1 = [];
let notas2 = [];
let notas3 = [];
let notas4 = [];
let notas5 = [];
let notas6 = [];
let notas7 = [];
let notas = [[notas1],[notas2],[notas3],[notas4],[notas5], [notas6], [notas7]]
var cor1 = [], cor2 = [], cor3 = [], cor4 = [], cor5 = [], cor6 = [], cor7 = [], cor8 = [], cor9 = [], cor10 = [], cor11 = [], cor12 = [],cor13 =[]
var song;
var button;
let diameter = 300;


var selectedPreset =  message();
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
//var output = audioContext.destination;
var player = new WebAudioFontPlayer();
//var now = 0;
player.adjustPreset(audioContext, selectedPreset);

function preload() {
    // cordas
    cordassong = loadSound("/Sounds/cordas.wav") // Ficheiro áudio
    pitchcordas2 = loadTable("/Pitch/pitchcordas2.txt", "csv") // Pitch
    analisecordas = loadTable("/Analises/analisecordas.txt", "csv") // Análise Tempo / Cores
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  noStroke();
  fullscreen();
  notas1.push(parseInt(pitchcordas2.getString(0,0))+(12*5))
  notas1.push(parseInt(pitchcordas2.getString(0,1))+(12*5))
  notas2.push(parseInt(pitchcordas2.getString(1,0))+(12*5))
  notas2.push(parseInt(pitchcordas2.getString(1,1))+(12*5))
  notas3.push(parseInt(pitchcordas2.getString(2,0))+(12*5))
  notas3.push(parseInt(pitchcordas2.getString(2,1))+(12*5))
  notas4.push(parseInt(pitchcordas2.getString(3,0))+(12*5))
  notas4.push(parseInt(pitchcordas2.getString(3,1))+(12*5))
  notas5.push(parseInt(pitchcordas2.getString(4,0))+(12*5))
  notas5.push(parseInt(pitchcordas2.getString(4,1))+(12*5))
  notas6.push(parseInt(pitchcordas2.getString(5,0))+(12*5))
  notas6.push(parseInt(pitchcordas2.getString(5,1))+(12*5))
  notas7.push(parseInt(pitchcordas2.getString(6,0))+(12*5))
  notas7.push(parseInt(pitchcordas2.getString(6,1))+(12*5))

  for (let c = 1; c < analisecordas.getColumnCount(); c++) {
    cor1.push(analisecordas.getString(0,c)*255)
    cor2.push(analisecordas.getString(1,c)*255)
    cor3.push(analisecordas.getString(2,c)*255)
    cor4.push(analisecordas.getString(3,c)*255)
    cor5.push(analisecordas.getString(4,c)*255)
    cor6.push(analisecordas.getString(5,c)*255)
    cor7.push(analisecordas.getString(6,c)*255)
    cor8.push(analisecordas.getString(7,c)*255)
    cor9.push(analisecordas.getString(8,c)*255)
    cor10.push(analisecordas.getString(9,c)*255)
    cor11.push(analisecordas.getString(10,c)*255)
    cor12.push(analisecordas.getString(11,c)*255)
    cor13.push(analisecordas.getString(12,c)*255)
    

  var update = setInterval(function() {
    var mins = Math.floor(audio.currentTime / 60);
    var secs = Math.floor(audio.currentTime % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }
  }, 10);

  }
}
var buttons = document.getElementsByClassName("fas fa-play");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", message);
}

function message(som) {
  var piano = _tone_0000_SBLive_sf2;
  var guitarra = _tone_0240_SBLive_sf2;
  var violino = _tone_0400_SBLive_sf2
  var trompete = _tone_0560_SBLive_sf2;
  var marimba = _tone_0120_SBLive_sf2
  var name = this.name;
  var som = _tone_0000_SBLive_sf2
  //var cor = [120,155,20]
  if (name == "piano") {
    som = piano
    selectedPreset = som
    //alert("Piano");
  } else if (name == "guitarra") {
    som = guitarra
    selectedPreset = som
  } else if (name == "violino") {
    som = violino
    selectedPreset = som
  } else if (name == "trompete") {
    som = trompete
    selectedPreset = som
  } else if (name == "marimba") {
    som = marimba
    selectedPreset = som
  }
  return som
  
}

// extract peaks from the FFT and then create a HPCP  

function draw() {
  background(125,132,154);
  pieChart(diameter);
}

function TOCA(pitches) {
  var audioBufferSourceNode = player.queueChord(audioContext, audioContext.destination, selectedPreset, audioContext.currentTime + 0, pitches, 0.5, 0.5)
}
function pieChart(diameter) {
  let lastAngle = HALF_PI;
  for (let i = 0; i < 7; i++) {
  fill(cor1[i])
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(0,0)) {
      fill(cor1[i],125,10)
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(1,0) ) {
      fill(cor2[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(2,0)) {
      fill(cor3[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(3,0)) {
      fill(cor4[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(4,0)) {
      fill(cor5[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(5,0)) {
      fill(cor6[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(6,0)) {
      fill(cor7[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(7,0)) {
      fill(cor8[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(8,0)) {
      fill(cor9[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(9,0)) {
      fill(cor10[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(10,0)) { //0 que é 1 
      fill(cor11[i])
    }
    if (Math.floor(audio.currentTime % 60)  >= analisecordas.getString(11,0)) {//1 que é 2
      fill(cor12[i])
    }
    if (Math.floor(audio.currentTime % 60) >= analisecordas.getString(12,0)) { //2 que é 3
      fill(cor13[i])
    }
    arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + TWO_PI / 7);
    lastAngle += TWO_PI / 7;
  }
}


function mousePressed() {
  // Check if mouse is inside the circle!
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < diameter / 2) {
    //startTime = new Date().getSeconds();
    // Compute which slice was clicked!
    let s = int(map(abs(atan2(mouseX - width / 2, mouseY - height / 2) - TWO_PI) % TWO_PI, 0, TWO_PI, 0, 7));
    print(s);
    if (s == 0) {
        TOCA(notas1);
      } else if (s == 1) {
        TOCA(notas2);
      } else if (s == 2) {
        TOCA(notas3);
      } else if (s == 3) {
        TOCA(notas4);
      } else if (s == 4) {
        TOCA(notas5);
      } else if (s == 5) {
        TOCA(notas6);
      } else if (s == 6) {
        TOCA(notas7);
      }
  }
}

function mouseReleased() {
  //endTime = new Date().getSeconds();
  //total = (endTime - (startTime)) * 1000;
  //print("CIMA")
  //let duration = total
  //console.log(total + " Seconds")
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = min(width, height);
}
