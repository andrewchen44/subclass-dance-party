var makeGrowyDancer = function(top, left, timeBetweenSteps) {
  this.time = 100;
  
  var styleSettings = {
    top: top,
    left: left
  };

  this.bool = false;
  this.size = 200;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<image src="pumpgirl Dancer.gif" class="pump" width="50" >');
  this.$node.css(styleSettings);
  
  

};

makeGrowyDancer.prototype = Object.create(Dancer.prototype);
makeGrowyDancer.prototype.constructor = makeGrowyDancer;

makeGrowyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, this.time);

  if (this.bool) {
    this.$node.css({height: (this.size + 5), width: (this.size + 5)});
    this.size = this.size + 5;
    if (this.size > 300) {
      this.bool = false;
    }
  } else {
    this.$node.css({height: (this.size - 5), width: (this.size - 5)});
    this.size = this.size - 5;
    if (this.size < 200) {
      this.bool = true;
    }
  }
};