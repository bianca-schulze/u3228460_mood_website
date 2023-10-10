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
	console.log('in load video');
	console.log('video id: ' + videoID)

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: videoID,
      playerVars: {
        playsinline: 1
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

		console.log(query);

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&part=snippet&type=video`;

    $.getJSON(url, function (apiData) {
      var data = apiData.items;

			console.log(data);

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
    // document
		// BEN: slightly rewrite this so we can easily access the current button
      var button = document.getElementById(`genreButton${index}`)
			//now we can use button variable to add the event listener
      button.addEventListener("click", function () {
				//then we can add a class when we click on it
				// just style the active class to be the same as the focus styles
				button.classList.add('active');
        setMusicGenre(index);
      });
  })(i);
}

// Event listeners for energy level buttons
for (var i = 0; i < energyLevels.length; i++) {
  (function (index) {
    document
      var button = document.getElementById(`energyButton${index}`)
      button.addEventListener("click", function () {
				button.classList.add('active');
        setEnergyLevel(index);
      });
  })(i);
}

// Event listener for the "Go" button
document
  .getElementById("goButton")
  .addEventListener("click", playSelectedVideo);
