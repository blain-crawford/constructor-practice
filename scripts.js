let myDiv = document.getElementById('checking');
let myH1 = document.createElement('h1');
let myH1Also = document.createElement('h1');


const Gams = function(quality, mind) {
  this.quality = quality;
  this.mind = mind;
  this.compliment = function() {
    this.quality = 'Afro'
    return `The Gams has a nice ${this.quality}, and an incredible ${this.mind}!`;
  }
  this.blamsCompliment = function(){
    return `The Blams has a nice ${this.quality}, and an incredible ${this.mind}!`
  }
};

Gams.prototype.print = function() {
  return this.blamsCompliment();
};

let gams = new Gams('Afro', 'mind');
let blams = new Gams('smile', 'sense of humor')

myH1.textContent = gams.compliment();
myDiv.appendChild(myH1);

myH1Also.textContent = blams.print();
myDiv.appendChild(myH1Also);

let myCrain = [blams, gams];

myCrain.forEach(partner => console.log(partner.print()))



