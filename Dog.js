function Dog(){
    this.stomach = [];
}


Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}
Dog.prototype.sayHi = function(){
    console.log('Hello !');
}