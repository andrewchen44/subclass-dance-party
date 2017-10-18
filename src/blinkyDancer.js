var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  var styleSettings = {
    top: top,
    left: left
  };
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<image src="Dancer1.gif" class="pump" width="200" >');
  this.$node.css(styleSettings);
  this.time = timeBetweenSteps;
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, this.time);
  this.$node.toggle();
};