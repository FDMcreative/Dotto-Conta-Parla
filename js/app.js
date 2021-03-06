$(() => {

  var timeInterval;
  let count = 10;
  let punti = 0;
  let a = 0;
  let b = 0;
  let result = 0;
  const audio = document.querySelector('audio');

  //This Event Listener checks which number you press and prints it on screen.
  $("#tastierino").children().on('click', (e) => {
    // $('#valueField').val($('#zero').text());
    var x = $(e.target).text();
    if ( $('#valueField').val() == "" ) {
      var y = "";
    }
    else {
      var y = $('#valueField').val();
    }
    $('#valueField').val(y + x);
    console.log(y + x);
    // $('#valueField').val($('#valueField').val() + x);
    // console.log($('#valueField').val(x) + $(e.target).text());
  });

  //This Event Listener starts the Game
  $("#go").on('click', () => {
    $('#puntiValue').html(0);
    $('body').find('#valueField').focus();
    // $('#go').hide();

    // //This controls the 10 seconds Timer
    // timeInterval = setInterval(() => {
    //   if (count>=0) {
    //     $('#timer').text(count);
    //     count--;
    //   }
    //   else {
    //     $('#operazione').text("Stop!");
    //     $('#go').css({"color":"white","background-color":"transparent"}).show().text("Again?");
    //     clearInterval(timeInterval);
    //   }
    // }, 1000);
    mainGame();
  });

  //This function gets a Random Number between 1 and 101
  function randomNumber() {
    return (Math.round(Math.random()*100)+1);
  };

  //This is the Game
  function mainGame() {
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
    $('#operazione').text(a + " + " + b + " = ")

    //This checks the value on Submit when Clicked
    $('#controllo').on('click', () => {
      $('#valueField').focus();
      console.log(result, parseInt($('#valueField').val()) );
      //if Field is correct, add 1 to punti and run Game again
      if ( result === parseInt($('#valueField').val()) ) {
        audio.src = "./audio/giusto.mp3";
        console.log(audio.src);
        audio.play();
        punti++;
        $('#match').show().delay(500).hide();
        console.log("punti: " + punti);
        $('#puntiValue').html(punti);
        count=10;
        $('#controllo').off('click');
        $('body').unbind('keypress');
        mainGame();
      }
      //if Field is empty, make an alert and nullify submit
      else if ($('#valueField').val() == "") {
        audio.src = "./audio/prova-di-nuovo.mp3";
        console.log(audio.src);
        audio.play();
        // return false;
      }
      //if Value is wrong, subtract 1 to punti and run Game again
      else {
        punti--;
        console.log("punti: " + punti);
        $('#puntiValue').html(punti);
        count=10;
        $('#controllo').off('click');
        $('body').unbind('keypress');
        mainGame();
      };
    });

    //This checks the value of Submit when Enter is pressed
    $('body').bind('keypress', (e) => {
      if (e.which == 13) {
        console.log(result, parseInt($('#valueField').val()) );
        //if Field is correct, add 1 to punti and run Game again
        if ( result === parseInt($('#valueField').val()) ) {
          audio.src = "./audio/giusto.mp3";
          console.log(audio.src);
          audio.play();
          punti++;
          $('#match').show().delay(500).hide();
          console.log("punti: " + punti);
          $('#puntiValue').html(punti);
          count=10;
          $('body').unbind('keypress');
          $('#controllo').off('click');
          mainGame();
        }
        //if Field is empty, make an alert and nullify submit
        else if ($('#valueField').val() == "") {
          audio.src = "./audio/prova-di-nuovo.mp3";
          console.log(audio.src);
          audio.play();
          // return false;
        }
        //if Value is wrong, subtract 1 to punti and run Game again
        else {
          punti--;
          console.log("punti: " + punti);
          $('#puntiValue').html(punti);
          count=10;
          $('body').unbind('keypress');
          $('#controllo').off('click');
          mainGame();
        };
      }
    });

  };

  //RESPONSIVE DIVS
  //Resize Divs on Resizing of Mask
  var divsHeight = $('#mask').height();
    $('.colonne').css('height', divsHeight);
  window.addEventListener('resize', () => {
    var divsHeight = $('#mask').height();
      $('.colonne').css('height', divsHeight);
  })

});
