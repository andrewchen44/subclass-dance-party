var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  this.time = 200;
  var styleSettings = {
    top: top,
    left: left
  };
  this.jumpy = true;
  this.top = top;
  this.bool = false;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<image src="Carlton Dancer.gif" class="pump" width="200" >');
  this.$node.css(styleSettings);
  
  

};

makeJumpyDancer.prototype = Object.create(Dancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, this.time);
  if (this.bool) {
    this.$node.css({top: this.top + 10});
    this.bool = false;
  } else {
    this.$node.css({top: this.top - 10});
    this.bool = true;
  }
};
