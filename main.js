var Person = function (name){
    this.name = name;
    this.SayHi = function () {
        console.log(`Hola mi nombre es ${this.name}`)
    }
}

Person.prototype.soyGoodbye = function() {
    console.log(`${this.name} dice adiós`)
}

