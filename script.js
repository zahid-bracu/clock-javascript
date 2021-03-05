


let timerId = setInterval(() =>{
    var d = new Date();
    var hour=d.getHours();
    var minute=d.getMinutes();
    var seconds=d.getSeconds();

    if (hour >= 12) {
        hour = hour - 12;
        dd = "PM";
      }
      if (hour == 0) {
        hour = 12;
      }

    console.log(hour+":"+minute+":"+seconds)
    document.getElementById('hour').innerText=hour;
    document.getElementById('minute').innerText=minute;
    document.getElementById('second').innerText=seconds;
}, 1000);



// navbar
