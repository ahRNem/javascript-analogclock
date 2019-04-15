function updateTime() {
  
  var now = new Date();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hour = (now.getHours() % 12) + min/60;

  var minangle = min * 6;
  var hourangle = hour * 30;
  var secangle = sec * 6;

  var minhand = document.getElementById("minutehand");
  var hourhand = document.getElementById("hourhand");
  var sechand = document.getElementById("secondshand")

  sechand.setAttribute("transform", "rotate(" + secangle + ", 50, 50)");
  minhand.setAttribute("transform", "rotate(" + minangle + ", 50, 50)");
  hourhand.setAttribute("transform", "rotate(" + hourangle + ", 50, 50)");
    
  setTimeout(updateTime, 1000);
}
