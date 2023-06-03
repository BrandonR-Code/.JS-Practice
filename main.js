// var promptButton = document.getElementById('prompt');

// promptButton.onclick = function() {
//     var userResponse = prompt('What is your name');
//     var displayContainer = document.getElementById('promptResponse');

//     displayContainer.innerHTML = 'Hey, ' + userResponse;
// }

// var confirmButton = document.getElementById('confirm');

// confirmButton.onclick = function() {
//     var confirmuserResponse = confirm('Do you wish to continue?')
//     var confirmdisplayContainer = document.getElementById('confirmResponse');
//     var displayMessage = '';

//     if(confirmuserResponse) {
//         displayMessage += "Are you a Phillies Fan?"
//     }
//     else{
//         displayMessage += "Ehh, must be a Yankee's fan."
//     }
//     confirmdisplayContainer.innerText = displayMessage
// }

// var alertButton = document.getElementById('alert');

// alertButton.onclick = function() {
//     alert('The Lakers got swept')
// }



// let x = 10;
// let y = 5;
// console.log(x==y)
// console.log(x===y)
// Push
let myFavoriteSportsTeam = ['Phillies', 'Lakers', 'Nuggets', 'Sixers'];
console.log(myFavoriteSportsTeam);
myFavoriteSportsTeam.push('The Rutgers University')
console.log(myFavoriteSportsTeam);

//Pop
let RU = myFavoriteSportsTeam.pop()
console.log(RU)
console.log(myFavoriteSportsTeam)