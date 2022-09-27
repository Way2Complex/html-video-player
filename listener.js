var intervalID = window.setInterval(hWnd, 1000);

function hWnd() {
  document.getElementById('video').loop = document.getElementById('isVideoLooping').checked
  document.getElementById('video').muted = document.getElementById('isVideoMuted').checked
  document.getElementById('video').volume = document.getElementById('videoVolume').value
}
