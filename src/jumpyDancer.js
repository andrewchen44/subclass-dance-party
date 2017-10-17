var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  this.time = timeBetweenSteps;
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.bool = false;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"></span>');
  this.$node.css(styleSettings);
  
  

};

makeJumpyDancer.prototype = Object.create(Dancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, this.time);
  if (this.bool) {
    this.$node.css({top: this.top + 100});
    this.bool = false;
  } else {
    this.$node.css({top: this.top - 100});
    this.bool = true;
  }
};