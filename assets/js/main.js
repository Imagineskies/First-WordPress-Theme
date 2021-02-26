'use strict';
var j = jQuery.noConflict();
// Variable
var fear = document.getElementById('sectionFear');
var forgoten = document.getElementById('sectionForgoten');
var grief = document.getElementById('sectionGrief');
var alife = document.getElementById('sectionALife');
var school = document.getElementById('sectionSchool');
var work = document.getElementById('sectionWork');
var me = document.getElementById('sectionMe');
var malnourished = document.getElementById('sectionMalnourished');
var imtired = document.getElementById('sectionImTired');
var nudity = document.getElementById('sectionNudity');
var dearfutureself = document.getElementById('sectionDearFutureSelf');
var fearBtn = document.getElementById('buttonFear');
var forgotenBtn = document.getElementById('buttonForgoten');
var griefBtn = document.getElementById('buttonGrief');
var alifeBtn = document.getElementById('buttonALife');
var schoolBtn = document.getElementById('buttonSchool');
var workBtn = document.getElementById('buttonWork');
var meBtn = document.getElementById('buttonMe');
var malnourishedBtn = document.getElementById('buttonMalnourished');
var imtiredBtn = document.getElementById('buttonImTired');
var nudityBtn = document.getElementById('buttonNudity');
var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
var checkMarkSevenPlace = 'unclicked';
var checkMarkEightPlace = 'unclicked';
var checkMarkNinePlace = 'unclicked';
var checkMarkTenPlace = 'unclicked';
var checkMarkElevenPlace = 'unclicked';
var harded = 'unactive';
var base64Place = 'encode';
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "";
var special = "";
var extnd = "";
/* var dataTransferAmount = document.getElementById('dataTransferAmount').value;
var dataTransferSpeed = document.getElementById('dataTransferSpeed').value;
var estimatedTimeDays = document.getElementById('estimatedTimeDays').innerHTML;
var estimatedTimeHours = document.getElementById('estimatedTimeHours').innerHTML;
var estimatedTimeMinutes = document.getElementById('estimatedTimeMinutes').innerHTML;
var estimatedTimeSeconds = document.getElementById('estimatedTimeSeconds').innerHTML;
var dtcStart = document.getElementById('dtcStart');
*/
var dataSize = '';
var dataSpeed = '';
var factorAmount;

// Constants
const checkMarkOne = document.querySelector('#checkMarkOne');
const checkMarkTwo = document.querySelector('#checkMarkTwo');
const checkMarkThree = document.querySelector('#checkMarkThree');
const checkMarkFour = document.querySelector('#checkMarkFour');
const checkMarkFive = document.querySelector('#checkMarkFive');
const checkMarkSix = document.querySelector('#checkMarkSix');
const checkMarkSeven = document.querySelector('#checkMarkSeven');
const checkMarkEight = document.querySelector('#checkMarkEight');
const checkMarkEleven = document.querySelector('#checkMarkEleven');
var gameSubMenuTop = document.getElementById('#gameSubMenuTop')
const base64ConvertBtn = document.getElementById('base64ConvertButton');
const base64Title = document.getElementById('base64Title');
const base64Output = document.getElementById("base64EncodeTextBoxEnd");
const base64Input = document.getElementById("base64EncodeTextBoxStart");
const numberSlider = document.getElementById("numberSlide");
const content = document.getElementById('content');
const mainNav = document.getElementById('menuTemp');
const textOne = document.getElementById('textOne');
const textTwo = document.getElementById('textTwo');

/*
____________________________________________________________________________________
Functions
____________________________________________________________________________________
*/





/* Data Transfer Calculator */


//
function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

function calculateSpeed() {

  var dataTransferAmount = document.getElementById('dataTransferAmount').value;
  var dataAmountType = document.getElementById('dataAmountType').innerHTML;
  var dataTransferSpeed = document.getElementById('dataTransferSpeed').value;
  var dataTransferType = document.getElementById('dataTransferType').innerHTML;

  console.log('starting calculateSpeed')

  // Determin Data Size - Measured in Bytes

  if (dataAmountType == 'B') {
    dataSize = dataTransferAmount;
  } else if (dataAmountType == 'Kb') {
    dataSize = dataTransferAmount * 1024;
  } else if (dataAmountType == 'Mb') {
    dataSize = dataTransferAmount * 1024 * 1024;
  } else if (dataAmountType == 'Gb') {
    dataSize = dataTransferAmount * 1024 * 1024 * 1024;
  } else if (dataAmountType == 'Tb') {
    dataSize = dataTransferAmount * 1024 * 1024 * 1024 * 1024;
  }

  console.log('dataSize is ' + dataSize);

  // Determin Data Speed - Measured in Bits

  if (dataTransferType == 'Bps/s') {
    dataSpeed = dataTransferSpeed;
  } else if (dataTransferType == 'Kbps/s') {
    dataSpeed = dataTransferSpeed * 1024;
  } else if (dataTransferType == 'Mbps/s') {
    dataSpeed = dataTransferSpeed * 1024 * 1024;
  } else if (dataTransferType == 'Gbps/s') {
    dataSpeed = dataTransferSpeed * 1024 * 1024 * 1024;
  }

  console.log('dataSpeed is ' + dataSpeed);

  // Calculate Estimated Time

  estimatedTimeSeconds = dataSize * 8 / dataSpeed;
  estimatedTimeMinutes = estimatedTimeSeconds / 60;
  estimatedTimeHours = estimatedTimeMinutes / 60;
  estimatedTimeDays = estimatedTimeHours / 24;

  // Since I'm counting hours if the day is less than a full
  // 24 hours it will say 0.

  if (estimatedTimeDays < 1) {
    estimatedTimeDays = 0;
  }

  // Here I round up the total to the closest hundredths placec

  estimatedTimeSeconds = Math.round(estimatedTimeSeconds * 100)/100;
  estimatedTimeMinutes = Math.round(estimatedTimeMinutes * 100)/100;
  estimatedTimeHours = Math.round(estimatedTimeHours * 100)/100;
  estimatedTimeDays = Math.round(estimatedTimeDays);

  console.log('estimatedTimeSeconds is ' + estimatedTimeSeconds);
  console.log('estimatedTimeMinutes is ' + estimatedTimeMinutes);
  console.log('estimatedTimeHours is ' + estimatedTimeHours);
  console.log('estimatedTimeDays is ' + estimatedTimeDays);

  // The last things I do it set the page to display all estimatedTime

  document.getElementById('estimatedTimeDays').innerHTML = estimatedTimeDays;
  document.getElementById('estimatedTimeHours').innerHTML = estimatedTimeHours;
  document.getElementById('estimatedTimeMinutes').innerHTML = estimatedTimeMinutes;
  document.getElementById('estimatedTimeSeconds').innerHTML = estimatedTimeSeconds;

}

j(function () {
  j('[data-toggle="tooltip"]').tooltip()
})

j(".sliding-link").click(function(e) {
  e.preventDefault();
  var aid = j(this).attr("href");
  console.log(aid)
  j('html,body').animate({
    scrollTop: j(aid).offset().top - 100
  }, 1500);
});

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
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

function addEA() {
  var extnd = '€‚¢ƒÆµ„ŒÇøŠ•‡†';
}

function makeid(length) {
  var characterTotal = upperCase + lowerCase + numbers + special + extnd;
  if (characterTotal == "") {
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "You must make a selection for this to work.";
  }
  else if (harded == 'active') {
    var characterTotal = characterTotal.shuffle();
    var result = '';
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "";
    var charactersLength = characterTotal.length;
    for (var i = 0; i < length; i++) {
      result += characterTotal.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  else {
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

function OpenPoemsNav() {
  var screenwidth = j(window).width();
  if (screenwidth < 720) {
    document.getElementById("mainPoemsMenuM").style.width = "100%";
    document.getElementById("mainPoemsContentM").style.opacity = 1;
  } else {
    document.getElementById("mainPoemsMenuM").style.width = "40%";
    document.getElementById("mainPoemsContentM").style.opacity = 1;
  }
}

function techMenuTempDisply() {
  if (techMenuValue === 0) {
    techMenuValue = 1;
    techMenuTemp.style.display = "block";
    console.log(techMenuValue)
  } else {
    techMenuValue = 0;
    techMenuTemp.style.display = "none";
    console.log(techMenuValue)
  }
}

function onFear() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  document.getElementById("mainPoemsContentM").style.opacity = 0;
  fear.classList.add('shown');
  fear.classList.remove('hidden');
  fearBtn.classList.add('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onForgoten() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('shown');
  forgoten.classList.remove('hidden');
  forgotenBtn.classList.add('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onGrief() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('shown');
  grief.classList.remove('hidden');
  griefBtn.classList.add('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onALife() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('shown');
  alife.classList.remove('hidden');
  alifeBtn.classList.add('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onSchool() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('shown');
  school.classList.remove('hidden');
  schoolBtn.classList.add('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onWork() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('shown');
  work.classList.remove('hidden');
  workBtn.classList.add('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onMe() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('shown');
  me.classList.remove('hidden');
  meBtn.classList.add('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onMalnourished() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('shown');
  malnourished.classList.remove('hidden');
  malnourishedBtn.classList.add('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onImTired() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('shown');
  imtired.classList.remove('hidden');
  imtiredBtn.classList.add('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onNudity() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('shown');
  nudity.classList.remove('hidden');
  nudityBtn.classList.add('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onDearFutureSelf() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  imtired.classList.add('hidden');
  imtired.classList.remove('shown');
  imtiredBtn.classList.remove('active');
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('shown');
  dearfutureself.classList.remove('hidden');
  dearfutureselfBtn.classList.add('active');
}

/*
____________________________________________________________________________________
Event Listeners
____________________________________________________________________________________
*/

checkMarkOne.addEventListener('click', function() {
  if (checkMarkOnePlace == 'unclicked') {
    addCheck(checkMarkOne);
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    checkMarkOnePlace = 'clicked';
  } else {
    removeCheck(checkMarkOne);
    upperCase = "";
    checkMarkOnePlace = 'unclicked';
  }
});

checkMarkTwo.addEventListener('click', function() {
  if (checkMarkTwoPlace == 'unclicked') {
    addCheck(checkMarkTwo);
    lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    checkMarkTwoPlace = 'clicked';
  } else {
    removeCheck(checkMarkTwo);
    lowerCase = "";
    checkMarkTwoPlace = 'unclicked';
  }
});

checkMarkThree.addEventListener('click', function() {
  if (checkMarkThreePlace == 'unclicked') {
    addCheck(checkMarkThree);
    numbers = '0123456789';
    checkMarkThreePlace = 'clicked';
  } else {
    removeCheck(checkMarkThree);
    numbers = "";
    checkMarkThreePlace = 'unclicked';
  }
});

checkMarkFour.addEventListener('click', function() {
  if (checkMarkFourPlace == 'unclicked') {
    addCheck(checkMarkFour);
    special = '!@#$%^&*()';
    checkMarkFourPlace = 'clicked';
  } else {
    removeCheck(checkMarkFour);
    special = "";
    checkMarkFourPlace = 'unclicked';
  }
});

checkMarkSeven.addEventListener('click', function() {
  if (checkMarkSevenPlace == 'unclicked') {
    addCheck(checkMarkSeven);
    extnd = '€‚¢ƒÆµ„ŒÇøŠ•‡†'
    checkMarkSevenPlace = 'clicked';
  } else {
    removeCheck(checkMarkSeven);
    extnd = "";
    checkMarkSevenPlace = 'unclicked';
  }
});

checkMarkEight.addEventListener('click', function() {
  if (checkMarkEightPlace == 'unclicked') {
    addCheck(checkMarkEight);
    numberSlider.max = 256;
    checkMarkEightPlace = 'clicked';
  } else {
    removeCheck(checkMarkEight);
    numberSlider.max = 64;
    checkMarkEightPlace = 'unclicked';
  }
});

checkMarkNine.addEventListener('click', function() {
  if (checkMarkNinePlace == 'unclicked') {
    addCheck(checkMarkNine);
		harded = 'active';
    checkMarkNinePlace = 'clicked';
  } else {
    removeCheck(checkMarkNine);
		harded = 'unactive';
    checkMarkNinePlace = 'unclicked';
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

// Password Copy Button

pdwCopyBtn.addEventListener('click', function() {
  var nubContent = document.getElementById("numberSlideTextBox");
  nubContent.select();
  nubContent.setSelectionRange(0, 256)
  document.execCommand("copy", );
  alert('Text has been coppied!');
});

// Data Transfer Calculator
/*
dtcStart.addEventListener('click', function() {
  calculateSpeed();
  console.log('click');
});

const inputElement = document.querySelector('input[class="dtc"]');

dataTransferAmount.addEventListener('compositionupdate', function() {
  if (dataTransferAmount == '') {

  }
});
*/
