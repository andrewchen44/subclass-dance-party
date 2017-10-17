var makeJumpyDancer = function(top, left, timeBetweenSteps) {
   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="square"></span>');
  this.time = timeBetweenSteps;
  
  //store top value
  this.top = top;
  //store a boolean value as false
  this.bool = false;
  Dancer.call(this, top, left, timeBetweenSteps);
  

};

makeJumpyDancer.prototype = Object.create(Dancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, this.time);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

  
  //if boolean is false
    //increase the height of the dot using jquery
  //decrease the height

  if (this.bool) {
    this.$node.css({top: this.top + 100});
    this.bool = false;
  } else {
    this.$node.css({top: this.top - 100});
    this.bool = true;
  }


  
};