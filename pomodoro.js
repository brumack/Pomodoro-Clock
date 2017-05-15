$(document).ready(function() {
  var session = 1;
  var seshBreak = 5;
  var min = session;
  var running = false;

  $('#min').html(session);

  $('#reset').click(function(){
    sec = 60;
    min = session;
    $('#sec').html('00');
    $('#min').html(session);
    running = false;
  })

  $('#startStop').click(function() {
    if (running) {
      running = false;
      $('#startStop').html('Start');
    }
    else {
      $('#startStop').html('Stop');
      running = true;
    }
  })

  var timer = setInterval(increment, 1000);

  function increment () {
    if (min == 0 && sec == 0) {
      running = false;
      $('#startStop').html('Start');
    }
    if (running === true) {
      if (sec > 0) {
        sec--;
        if (sec < 10)
          $('#sec').html('0' + sec);
        else
          $('#sec').html(sec);
      }
      else {
        sec = 59;
        $('#sec').html(sec);
        min--;
          if (min < 10)
            $('#min').html('0' + min);
          else
            $('#min').html(min);
        }
      }
    }
});
