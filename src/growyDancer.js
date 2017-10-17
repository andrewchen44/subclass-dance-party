var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  this.time = timeBetweenSteps;
  
  var styleSettings = {
    top: top,
    left: left
  };

  this.bool = true;
  this.size = 10;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"></span>');
  this.$node.css(styleSettings);
  
  

};

makeGrowyDancer.prototype = Object.create(Dancer.prototype);
makeGrowyDancer.prototype.constructor = makeGrowyDancer;

makeGrowyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, this.time);

  if (this.bool) {
    this.$node.css({height: (this.size + 10), width: (this.size + 10)});
    this.size = this.size + 10;
    if (this.size > 50) {
      this.bool = false;
    }
  } else {
    this.$node.css({height: (this.size - 10), width: (this.size - 10)});
    this.size = this.size - 10;
    if (this.size < 10) {
      this.bool = true;
    }
  }
};