var j = jQuery.noConflict();

// Variables
var gameSubMenuTop = document.getElementById('#gameSubMenuTop')
var pdwCopyBtn = document.getElementById('pdwCopy');
var numberSlideRange = j("#numberSlide").val();
var techMenuTemp = document.getElementById('techMenuTemp');
var techMenuValue = 0;
var poemBody = document.getElementById('poemBody');
var formRecTextbox = document.getElementById('formRecTextbox');
var checkMarkOnePlace = 'clicked';
var checkMarkTwoPlace = 'clicked';
var checkMarkThreePlace = 'unclicked';
var checkMarkFourPlace = 'unclicked';
var checkMarkFivePlace = 'unclicked';
var checkMarkSixPlace = 'unclicked';
var base64Place = 'encode';
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "";
var special = "";

// Constants
const mainMenu = document.querySelector('#menuTemp');
const checkMarkOne = document.querySelector('#checkMarkOne');
const checkMarkTwo = document.querySelector('#checkMarkTwo');
const checkMarkThree = document.querySelector('#checkMarkThree');
const checkMarkFour = document.querySelector('#checkMarkFour');
const checkMarkFive = document.querySelector('#checkMarkFive');
const checkMarkSix = document.querySelector('#checkMarkSix');
const base64ConvertBtn = document.getElementById('base64ConvertButton');
const base64Title = document.getElementById('base64Title');
const base64Output = document.getElementById("base64EncodeTextBoxEnd");
const base64Input = document.getElementById("base64EncodeTextBoxStart");
const navBarBtn = document.getElementById("navBarBtn");



/*
____________________________________________________________________________________
Functions
____________________________________________________________________________________
*/

j(window).ready( function(){
  var screenWidth = j(window).width();
  if (screenWidth < 719) {
    navBarBtn.setAttribute("data-target", null)
    navBarBtn.setAttribute("onlick", "OpenSideNav()" )
  } else {
    navBarBtn.setAttribute("data-target", "#navbarCollapse")
    navBarBtn.setAttribute("onlick", null )
  }
});

function OpenSideNav() {
 if (screenWidth < 720) {
   document.getElementById("mainSideMenuM").style.width = "100%";
   document.getElementById("mainSideContentM").style.opacity = 1;
 } else {
   document.getElementById("mainSideMenuM").style.width = "40%";
   document.getElementById("mainSideContentM").style.opacity = 1;
 }
}

function menuChangeDown() {
  // Add class
  mainMenu.classList.add('navbar-two');

  // Remove Class
  mainMenu.classList.remove('navbar-one');

}

function menuChangeUp() {
  // Add class
  mainMenu.classList.add('navbar-one');

  // Remove Class
  mainMenu.classList.remove('navbar-two');
}

function clearBox(elementID){
  document.getElementById(elementID).innerHTML = "";
}

function removeCheck(i) {
  i.classList.add('checkMarkEmpty');
  i.classList.remove('checkMarkFull');
}

function addCheck(i) {
  i.classList.add('checkMarkFull');
  i.classList.remove('checkMarkEmpty');
}

function adLCL() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
}

function addSN() {
  var numbers = '0123456789';
}

function addNB() {
  var special = '!@#$%^&*()';
}

function makeid(length) {
  var characterTotal = upperCase + lowerCase + numbers + special;
  console.log(characterTotal)
  if (characterTotal == "") {
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "You must make a selection for this to work.";
  } else {
    var result = '';
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "";
    var charactersLength = characterTotal.length;
    for (var i = 0; i < length; i++) {
      result += characterTotal.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  return result;
}

function slideRange() {
  var numberSlideRange = j("#numberSlide").val();
  document.getElementById("thumb").innerHTML = numberSlideRange;
  document.getElementById("numberSlideTextBox").value = "";
  document.getElementById("numberSlideTextBox").value = makeid(numberSlideRange);
}

function base64Convertion() {
  if (base64Place == 'encode') {
    // Encodes text to base64
    base64Output.value = btoa(base64Input.value);
  } else {
    // Decodes text to base64
    base64Output.value = atob(base64Input.value);
  }
}

function exitPoemsMenu() {
 document.getElementById("mainPoemsMenuM").style.width = "0%";
}


/*
____________________________________________________________________________________
Event Listeners
____________________________________________________________________________________
*/


// https://stackoverflow.com/a/31223774
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   console.log(st);
   if (st >= 50){
     menuChangeDown();
   } else {
     menuChangeUp();
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

checkMarkOne.addEventListener('click', function() {
  if (checkMarkOnePlace == 'unclicked') {
    addCheck(checkMarkOne);
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    checkMarkOnePlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkOne);
    upperCase = "";
    checkMarkOnePlace = 'unclicked';
    console.log('False')
  }
});

checkMarkTwo.addEventListener('click', function() {
  if (checkMarkTwoPlace == 'unclicked') {
    addCheck(checkMarkTwo);
    lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    checkMarkTwoPlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkTwo);
    lowerCase = "";
    checkMarkTwoPlace = 'unclicked';
    console.log('False')
  }
});

checkMarkThree.addEventListener('click', function() {
  if (checkMarkThreePlace == 'unclicked') {
    addCheck(checkMarkThree);
    numbers = '0123456789';
    checkMarkThreePlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkThree);
    numbers = "";
    checkMarkThreePlace = 'unclicked';
    console.log('False')
  }
});

checkMarkFour.addEventListener('click', function() {
  if (checkMarkFourPlace == 'unclicked') {
    addCheck(checkMarkFour);
    special = '!@#$%^&*()';
    checkMarkFourPlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkFour);
    special = "";
    checkMarkFourPlace = 'unclicked';
    console.log('False')
  }
});

// 5 is encode, 6 is decode

checkMarkFive.addEventListener('click', function() {
  checkMarkSix.classList.remove('checkMarkFull');
  checkMarkSix.classList.add('checkMarkEmpty');
  checkMarkFive.classList.add('checkMarkFull');
  checkMarkFive.classList.remove('checkMarkEmpty');
  base64Title.innerHTML = 'Base 64 Encoder';
  base64Place = 'encode';
});

checkMarkSix.addEventListener('click', function() {
  checkMarkSix.classList.add('checkMarkFull');
  checkMarkSix.classList.remove('checkMarkEmpty');
  checkMarkFive.classList.remove('checkMarkFull');
  checkMarkFive.classList.add('checkMarkEmpty');
  base64Title.innerHTML = 'Base 64 Decoder';
  base64Place = 'decode';
});

pdwCopyBtn.addEventListener('click', function() {
  var nubContent = document.getElementById("numberSlideTextBox");
  nubContent.select();
  nubContent.setSelectionRange(0, 256)
  document.execCommand("copy", );
  alert('Text has been coppied!');
});
