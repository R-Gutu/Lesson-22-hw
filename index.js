/* Счетчик
function getCounter (initialValue, incrementValue) {
    function increment() {
       var result = (initialValue + incrementValue);
       console.log('COUNTER INC = ', result);
       initialValue = result;
    }
    function decrement() {
       var result = (initialValue > 1) ? (initialValue - incrementValue) : 0;
       numberResult = (initialValue - incrementValue);
        console.log('COUNTER DECR = ', result );
        initialValue = numberResult;
    }
    return {
         increment: increment,
         decrement: decrement
    }
}
*/

function addUser(e) {
	var username = prompt('Please enter your name:')
    if (username.length > 2) {
        localStorage.setItem('su_userName', username);
    }
    renderResult(username);
}

function renderResult(username) {
    document.getElementById('nameArea').innerHTML = "Hello \t" + username; 
 }

 function renderStorageUserName() {
    var userName = localStorage.getItem('su_userName') || "Guest";
   renderResult(userName);
}

function removeStorageUserName (e){
    localStorage.removeItem('su_userName');
    renderStorageUserName();
}
renderStorageUserName();

document.getElementById('cta1').addEventListener('click', addUser);
document.getElementById('cta2').addEventListener('click', removeStorageUserName);

module.exports = {
    addUser,
    removeStorageUserName
  };