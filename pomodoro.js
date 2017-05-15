$(document).ready(function() {
  var session = 25;
  var seshBreak = 5;
  var min = session;
  var running = false;
  var onbreak = false;

  $('#min').html(session);
  $('#sec').html('00');
  $('#sessionTime p').html(session);
  $('#breakTime p').html(seshBreak);

  $('#sessionTimeLeft').click(function() {
    if (session > 1)
      session--;
    $('#sessionTime p').html(session);
    if (running === false) {
      $('#min').html(session);
      sec = 0;
      min = session;
      $('#sec').html('00');
      $('#min').html(session);
      $('#startStop p').html('Start');
    }
    return session;
  });

  $('#sessionTimeRight').click(function() {
    session++;
    $('#sessionTime p').html(session);
    if (running === false) {
      $('#min').html(session);
      sec = 0;
      min = session;
      $('#sec').html('00');
      $('#min').html(session);
      $('#startStop p').html('Start');
    }
    return session;
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
    sec = 0;
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
      if (onbreak == false) {
        onbreak = true;
        min = seshBreak;
        $('#min').html(min);
        $('#sec').html('00');
      }
      else {
        onbreak = false;
        min = session;
        $('#min').html(min);
        $('#sec').html('00');
      }
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
