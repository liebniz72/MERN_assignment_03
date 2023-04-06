function updateClock() {
    const clock = document.getElementById("clock");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 == 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const time = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;
    clock.innerHTML = time;
  }
  
  // Call the function once to initialize the clock
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
p