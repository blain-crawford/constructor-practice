const myDiv = document.getElementById('checking');
myDiv.style.cssText = 'display: flex; flex-wrap: wrap; gap: 20px;'
const myH1 = document.createElement('h1');
const myH1Also = document.createElement('h1');
const userNameInput = document.getElementById('user-name');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');
const deleteAccountButton = document.getElementById('delete-account');
let usersArray = [];

console.log(myDiv)
// const Gams = function(quality, mind) {
//   this.quality = quality;
//   this.mind = mind;
//   this.compliment = function() {
//     this.quality = 'Afro'
//     return `The Gams has a nice ${this.quality}, and an incredible ${this.mind}!`;
//   }
//   this.blamsCompliment = function(){
//     return `The Blams has a nice ${this.quality}, and an incredible ${this.mind}!`
//   }
// };

// const clearInputs = () => {
//   nameInput.value = '';
//   userNameInput.value = '';
//   emailInput.value = '';
// }

// Gams.prototype.print = function() {
//   return this.blamsCompliment();
// };

// let gams = new Gams('Afro', 'mind');
// let blams = new Gams('smile', 'sense of humor')

// myH1.textContent = gams.compliment();
// myDiv.appendChild(myH1);

// myH1Also.textContent = blams.print();
// myDiv.appendChild(myH1Also);

// let myCrain = [blams, gams];

// myCrain.forEach(partner => console.log(partner.hasOwnProperty('qualms')))

function Account(userName, name, email){
  this.userName = userName;
  this.name = name;
  this.email = email;
  displayUsers();
}

const createAccount = (userName, newName, newEmail) => {
  const newUser = new Account(userNameInput.value, nameInput.value, emailInput.value);
  
  if(myDiv.hasChildNodes()) {
    while(myDiv.firstChild) {
      myDiv.removeChild(myDiv.lastChild);
    }
  };
  usersArray.push(newUser);
  displayUsers();
  
};

submitButton.addEventListener('click', createAccount);

const displayUsers = () => {
  for(let i = 0; i < usersArray.length; i++){
    const newUserName = usersArray[i].userName;
    const newName = usersArray[i].name;
    const newEmail = usersArray[i].email;
    const inputDiv = document.createElement('div');
    const divName = document.createElement('div');
    const divEmail = document.createElement('div');
    const divUsername = document.createElement('div');
    divUsername.innerText = `UserName: ${newUserName}`;
    divName.innerText = `Name: ${newName}`;
    divEmail.innerText = `Email: ${newEmail}`;
    inputDiv.appendChild(divUsername);
    inputDiv.appendChild(divName);
    inputDiv.appendChild(divEmail);
    myDiv.appendChild(inputDiv);
  }
};

const deleteAccount = () => {
  usersArray.pop();
  if(myDiv.hasChildNodes()) {
    while(myDiv.firstChild) {
      myDiv.removeChild(myDiv.lastChild);
    }
  };
  displayUsers();
  console.log(usersArray);
};

deleteAccountButton.addEventListener('click', deleteAccount);

