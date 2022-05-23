function updateTimer() {
  future  = Date.parse("August 11, 2022 0:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("dayss")
    .innerHTML =
      '<div>' + d + '</div>'
  document.getElementById("hours")
    .innerHTML =
      '<div>' + h + '</div>'
  document.getElementById("minutes")
    .innerHTML =
      '<div>' + m + '</div>'
  document.getElementById("seconds")
    .innerHTML =
      '<div>' + s + '</div>'
}
setInterval('updateTimer()', 1000 );

