function Mouse(name){
    this.name = name;
    this.dead = fale;
}
Mouse.prototype.die = function(){
    this.dead = true;
}
module.exports = Mouse;
