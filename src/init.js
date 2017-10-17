$(document).ready(function() {
  window.dancers = [];

  $('.addSquareButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new makeJumpyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });


  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new makeBlinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('.addGrowyButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new makeGrowyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(window.dancers);
    $('body').append(dancer.$node);
  }); 

  $('.lineUp').on('click', function(event) {

    var top = $('body').height() / 2;
    var left = 0; 
    
    console.log(window.dancers);
    
    window.dancers.forEach(function(item) {
      left += 60;
      if (item.jumpy) {
        item.top = top;
      }
      item.lineUp(top, left);
    });
  });
});



