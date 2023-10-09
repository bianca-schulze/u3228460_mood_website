var apiKey = "AIzaSyCEAcHSbtmdiFrFVck042l83I83utd8CTw";
var musicGenres = ["Acoustic", "Jazz", "Classical", "Pop", "RNB", "Metal"];
var energyLevels = ["Low Energy", "High Energy"];
var selectedMusicGenre = "";
var selectedEnergyLevel = "";

function setMusicGenre(genreIndex) {
  selectedMusicGenre = musicGenres[genreIndex];
}

function setEnergyLevel(levelIndex) {
  selectedEnergyLevel = energyLevels[levelIndex];
}

function loadVideo(videoID) {
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: videoID,
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
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

  onYouTubeIframeAPIReady();
}

function playSelectedVideo() {
  if (selectedMusicGenre && selectedEnergyLevel) {
    const query = selectedMusicGenre + " " + selectedEnergyLevel + " music";
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&part=snippet&type=video`;

    $.getJSON(url, function (apiData) {
      var data = apiData.items;

      if (data && data.length > 0) {
        var videoId = data[0].id.videoId;
        loadVideo(videoId);
        document.getElementById("videoContainer").style.display = "block"; // Show the video player
      } else {
        console.error(
          "No video found for the selected genre and energy level."
        );
      }
    });
  } else {
    console.error("Please select both a music genre and an energy level.");
  }
}

// Event listeners for music genre buttons
for (var i = 0; i < musicGenres.length; i++) {
  (function (index) {
    document
      .getElementById(`genreButton${index}`)
      .addEventListener("click", function () {
        setMusicGenre(index);
      });
  })(i);
}

// Event listeners for energy level buttons
for (var i = 0; i < energyLevels.length; i++) {
  (function (index) {
    document
      .getElementById(`energyButton${index}`)
      .addEventListener("click", function () {
        setEnergyLevel(index);
      });
  })(i);
}

// Event listener for the "Go" button
document
  .getElementById("goButton")
  .addEventListener("click", playSelectedVideo);
