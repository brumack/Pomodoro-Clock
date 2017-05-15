$(document).ready(function() {
  var session = 25;
  var seshBreak = 5;
  var min = session;
  var running = false;

  $('#min').html(session);
  $('#sessionTime p').html(session);
  $('#breakTime p').html(seshBreak);

  $('#sessionTimeLeft').click(function() {
    if (session > 0)
    session--;
    $('#sessionTime p').html(session);
  });

  $('#sessionTimeRight').click(function() {
    session++;
    $('#sessionTime p').html(session);
  });

  $('#breakTimeLeft').click(function() {
    if (seshBreak > 0)
      seshBreak--;
    $('#breakTime p').html(seshBreak);
  });

  $('#breakTimeRight').click(function() {
    seshBreak++;
    $('#breakTime p').html(seshBreak);
  });

  $('#reset').click(function(){
    sec = 60;
    min = session;
    $('#sec').html('00');
    $('#min').html(session);
    $('#startStop p').html('Start');
    running = false;
  })

  $('#startStop').click(function() {
    if (running) {
      running = false;
      $('#startStop p').html('Start');
    }
    else {
      $('#startStop p').html('Stop');
      running = true;
    }
  })

  var timer = setInterval(increment, 1000);

  function increment () {
    if (min == 0 && sec == 0) {
      running = false;
      $('#startStop p').html('Start');
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
