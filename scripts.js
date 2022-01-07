const myDiv = document.getElementById('checking');
const myH1 = document.createElement('h1');
const myH1Also = document.createElement('h1');
const userNameInput = document.getElementById('user-name');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');
const usersArray = [];


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

const clearInputs = () => {
  nameInput.value = '';
  userNameInput.value = '';
  emailInput.value = '';
}

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

myCrain.forEach(partner => console.log(partner.hasOwnProperty('qualms')))

function Account(userName, name, email){
  this.userName = userName;
  this.name = name;
  this.email = email;
}

const createAccount = (userName, newName, newEmail) => {
  const newUser = new Account(userNameInput.value, nameInput.value, emailInput.value);
  usersArray.push(newUser);
  clearInputs();
};

submitButton.addEventListener('click', createAccount);





