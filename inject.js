function onYouTubePlayerReady(player){
  playbackSet = false;
  extPlayer = player;
  extPlayer.addEventListener("onStateChange", function(newState){
    if (newState === 3 && !playbackSet) {
      updateQuality();
    }
    if (newState === -1) {
      playbackSet = false;
    }
  });
  updateQuality();
}

function updateQuality(){
  var aq = extPlayer.getAvailableQualityLevels();
  var q = (aq.indexOf(quality) === -1) ? aq[0] : quality;
  extPlayer.setPlaybackQuality(q);
  playbackSet = true;
}

$(document).ready(function(){
  var quality = "hd1080";
  var size = "1";
  var scriptText = "var quality ='" + quality + "'; " + onYouTubePlayerReady.toString() + "; " + updateQuality.toString();
  if(size == "1"){
    scriptText += "document.cookie = 'wide = 1';";
  }
  addScript({textContent:scriptText});
});
