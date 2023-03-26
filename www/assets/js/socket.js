const socket = io.connect("https://theservers.glitch.me");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })