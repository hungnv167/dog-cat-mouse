function Cat(){
    this.height = 20;
    this.stomach = [];
}
Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}
module.exports = Cat;