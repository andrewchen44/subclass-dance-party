var Dancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');

  this.step(timeBetweenSteps);
  this.setPosition(top, left);

};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);
};
  
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};