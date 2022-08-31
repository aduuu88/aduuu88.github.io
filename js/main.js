/* 意思相同 但較冗長

var html = document.querySelector('img');
html.onclick=function(){
    alert('GO!絕育手術')
}
*/
document.querySelector('html').onclick = function() {
    alert('GO絕育手術!');   //按下滑鼠的提示框
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/bird.jpg') {
      myImage.setAttribute ('src','image/afterbird.png');
    } else {
      myImage.setAttribute ('src','image/bird.jpg');
    }   //按圖片會更換
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('What animal?');
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = ' 準備好絕育了嗎？, ' + myName;
      }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = '準備好絕育了嗎？, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }