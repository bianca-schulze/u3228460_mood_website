var video1 = "";
var video2 = "";
var video3 = "";
var video4 = "";
var video5 = "";
var video6 = "";
var selectedVideo = ""; 

function startup() {
  var apiKey = "AIzaSyCEAcHSbtmdiFrFVck042l83I83utd8CTw"; 
  var keywords = ["Accoustic", "Jazz", "Classical", "Pop", "RNB", "Metal"];

  keywords.forEach(function (keyword, index) {
    const query = keyword + ' music';
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&part=snippet&type=video`;

    $.getJSON(url, function (apiData) {
      var data = apiData.items;
      

      if (data && data.length > 0) {
        window['video' + (index + 1)] = data[0].id.videoId;
        console.log("video" + (index + 1) + " ID = ", window['video' + (index + 1)]);
      }
    });
  });
}

function loadVideo(videoID) {
  if (player) {
    player.loadVideoById(videoID);
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
        'onReady': onPlayerReady,
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
}

// Function to set the selected video
function setVideo(videoID) {
  selectedVideo = videoID;
}

// Function to play the selected video
function playSelectedVideo() {
  if (selectedVideo) {
    loadVideo(selectedVideo);
    document.getElementById('videoContainer').style.display = 'block'; // Show the video player
  } else {
    console.error("No video selected.");
  }
}


// Event listener for the "Go" button
document.getElementById('goButton').addEventListener('click', playSelectedVideo);


// Add functions for all six videos
function setVideo1() {
  setVideo(video1);
}

function setVideo2() {
  setVideo(video2);
}

function setVideo3() {
  setVideo(video3);
}

function setVideo4() {
  setVideo(video4);
}

function setVideo5() {
  setVideo(video5);
}

function setVideo6() {
  setVideo(video6);
}

// Call the startup function to load initial video data
startup();
