var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;

};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, this.time);
  this.$node.toggle();
};