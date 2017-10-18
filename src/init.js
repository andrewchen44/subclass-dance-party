$(document).ready(function() {
  window.dancers = [];

  $('.addJumpyButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var top = $('body').height() * Math.random();
    if (top < 45) {
      top += 45;
    }
    var dancer = new makeJumpyDancer( top, $('body').width() * Math.random(), Math.random() * 1000);
    $('body').append(dancer.$node);
    dancer.$node.mouseleave(function(event) {
      dancer.$node.animate({ width: 200});
    });
    dancer.$node.mouseover(function(event) {
      dancer.$node.animate({ width: 300});
    });
    window.dancers.push(dancer);
  });


  $('.addBlinkyButton').on('click', function(event) {
    var dancer = new makeBlinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    dancer.$node.mouseleave(function(event) {
      dancer.$node.animate({ width: 200});
    });
    dancer.$node.mouseover(function(event) {
      dancer.$node.animate({ width: 300});
    });
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
    dancer.$node.mouseleave(function(event) {
      dancer.$node.animate({ height: 200, width: 200});
      dancer.time = 100;
      dancer.step(100);
    });
    dancer.$node.mouseover(function(event) {
      dancer.time = 100000000000000;
      dancer.$node.animate({ height: 300, width: 300});
    });
  }); 

  $('.lineUp').on('click', function(event) {

    var top = $('body').height() * 2 / 3;
    var left = 0; 
    
    console.log(window.dancers);
    
    window.dancers.forEach(function(item) {
      left += 100;
      if (item.jumpy) {
        item.top = top;
      }     
      item.lineUp(top, left);
    });
  });
  
  $('.lineUp1').on('click', function(event) {

    var top = 40;
    var top1 = 40;
    var left1 = ($('body').width() / 2) - 60;
    var left = ($('body').width() / 2) + 60;
    
    console.log(window.dancers);
    
    window.dancers.forEach(function(item, index) {
      if (index % 2 === 0) {
        if (item.jumpy) {
          item.top = top1;
        } 
        item.lineUp(top1, left1);
        top1 += 90;
      } else {
        if (item.jumpy) {
          item.top = top;
        } 
        item.lineUp(top, left);
        top += 90;
      }   
    });
  });
  
  $('.lineUp2').on('click', function(event) {

    
    
    console.log(window.dancers);
    
    window.dancers.forEach(function(item) {
      var top = $('body').height() * Math.random();
      var left = $('body').width() * Math.random();
      if (top < 45) {
        top += 45;
      }
      if (item.jumpy) {
        item.top = top;
      }     
      item.lineUp(top, left);
    });
  });
  
  
});





