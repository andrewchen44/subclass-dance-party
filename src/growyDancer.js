var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  this.time = timeBetweenSteps;
  
  var styleSettings = {
    top: top,
    left: left
  };

  this.bool = false;
  this.size = 0;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"></span>');
  this.$node.css(styleSettings);
  
  

};

makeGrowyDancer.prototype = Object.create(Dancer.prototype);
makeGrowyDancer.prototype.constructor = makeGrowyDancer;

makeGrowyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, this.time);

  if (this.bool) {
    this.$node.css({height: (this.size + 5), width: (this.size + 5)});
    this.size = this.size + 5;
    if (this.size > 10) {
      this.bool = false;
    }
  } else {
    this.$node.css({height: (this.size - 5), width: (this.size - 5)});
    this.size = this.size - 5;
    if (this.size < 10) {
      this.bool = true;
    }
  }
};