$(() => {

  var timeInterval;
  let count = 10;
  let score = 0;
  let a = 0;
  let b = 0;
  let result = 0;

  //This function gets a Random Number between 1 and 101
  var randomNumber = function () {
    return (Math.round(Math.random()*100)+1);
  };

  //This is the Game
  var mainGame = function () {
    $('#valueField').val('');
    a = 0;
    b = 0;
    result = 0;
    count=10;

    //This gets 2 Random Numbers and the Result
    a = randomNumber();
    b = randomNumber();
    result = a + b;
    console.log(a, b, result);

    //This print on screen the Operation to solve
    $('#display').text(a + " + " + b + " = " + " ?")

    //This checks the value on Submit when Clicked
    $('#submit').on('click', () => {
      $('#valueField').focus();
      console.log(result, parseInt($('#valueField').val()) );
      //if Field is correct, add 1 to Score and run Game again
      if ( result === parseInt($('#valueField').val()) ) {
        score++;
        $('#match').show().delay(500).hide();
        console.log("score: " + score);
        $('#score').html(score);
        count=10;
        $('#submit').off('click');
        $('body').unbind('keypress');
        mainGame();
      }
      //if Field is empty, make an alert and nullify submit
      else if ($('#valueField').val() == "") {
        alert("Enter a Number");
        return false;
      }
      //if Value is wrong, subtract 1 to Score and run Game again
      else {
        score--;
        console.log("score: " + score);
        $('#score').html(score);
        count=10;
        $('#submit').off('click');
        $('body').unbind('keypress');
        mainGame();
      };
    });

    //This checks the value of Submit when Enter is pressed
    $('body').bind('keypress', (e) => {
      if (e.which == 13) {
        console.log(result, parseInt($('#valueField').val()) );
        //if Field is correct, add 1 to Score and run Game again
        if ( result === parseInt($('#valueField').val()) ) {
          score++;
          $('#match').show().delay(500).hide();
          console.log("score: " + score);
          $('#score').html(score);
          count=10;
          $('body').unbind('keypress');
          $('#submit').off('click');
          mainGame();
        }
        //if Field is empty, make an alert and nullify submit
        else if ($('#valueField').val() == "") {
          alert("Enter a Number");
          return false;
        }
        //if Value is wrong, subtract 1 to Score and run Game again
        else {
          score--;
          console.log("score: " + score);
          $('#score').html(score);
          count=10;
          $('body').unbind('keypress');
          $('#submit').off('click');
          mainGame();
        };
      }
    });

  };

  //This Event Listener starts the Game and changes Layout
  $("#go").on('click', () => {
    $('#score').html(0);
    $('#submits').show();
    $('body').find('#valueField').focus();
    $('#go').hide();
    //This controls the 10 seconds Timer
    timeInterval = setInterval(() => {
      if (count>=0) {
        $('#timer').text(count);
        count--;
      }
      else {
        $('#display').text("Stop!");
        $('#submits').hide();
        $('#go').css({"color":"white","background-color":"blue"}).show().text("Play again?");
        clearInterval(timeInterval);
      }
    }, 1000);
    mainGame();
  });

});
