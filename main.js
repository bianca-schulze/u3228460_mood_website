
var video1 = ""
var video2 = ""
var video3 = ""


var apiKey = "AIzaSyBsSHP_xADDTemOZHM9PsQvj1KxLhl3fcU"

var keyword1 = "Happy";
var keyword2 = "Gym";
var keyword3 = "chill";




var searchText = keyword1 + "%20" + keyword2 + "%20" + keyword3 + "%20" +  "music";

var url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&q=" + searchText + "&maxResults=15&order=rating&regionCode=AU&type=video&videoDuration=long&videoEmbeddable=true&part=snippet";

function simpleTest() {

  console.log(url);
  $(document).ready(function () {
  $.getJSON(url, function (apiData) {

   console.log("apiData = ", apiData);

   var data = apiData.items;

     video1 = data[0].id.videoId;
     console.log("video1 ID = ", video1);


     video2 = data[1].id.videoId;
     console.log("video2 ID = ", video2);


     video3 = data[2].id.videoId;
     console.log("video3 ID = ", video3);

    })
  })
}

var videoID = ""

function setVideo1(){
  loadVideo(video1)
}

function setVideo2(){
  loadVideo(video2)
  }

function setVideo3(){
  loadVideo(video3)
}

function loadVideo(videoID) {
  if(player) { player.loadVideoById(videoID); }
}



   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


   var player;
   function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
       height: '390',
       width: '640',
       videoId: videoID,
       playerVars: {
         'playsinline': 1
       },
       events: {
         'onReady': loadVideo(),
         'onStateChange': onPlayerStateChange
       }
     });
   }

   function onPlayerReady(event) {
     event.target.playVideo();
   }


   var done = false;
   function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
       setTimeout(stopVideo, 6000);
       done = true;
     }
   }
   function stopVideo() {
     player.stopVideo();
   }

