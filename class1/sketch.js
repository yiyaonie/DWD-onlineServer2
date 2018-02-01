var text1;
var text2;
var text3;
var text4;
var text5;
var text6;
var text7;
var text8;
var text9;
var text10;
var text11;
var text12;
var text13;
var text14;
var text15;
var opacity2;

function setup() {
  text1 = document.getElementById('a1');
  text2 = document.getElementsByTagName('a2');
  text3 = document.getElementsByTagName('a3');
  text4 = document.getElementsByTagName('a4');
  text5 = document.getElementsByTagName('a5');
  text6 = document.getElementsByTagName('a6');
  text7 = document.getElementsByTagName('a7');
  text8 = document.getElementsByTagName('a8');
  text9 = document.getElementsByTagName('a9');
  text10 = document.getElementsByTagName('a10');
  text11 = document.getElementsByTagName('a11');
  text12 = document.getElementsByTagName('a12');
  text13 = document.getElementsByTagName('a13');
  text14 = document.getElementsByTagName('a14');
  text15 = document.getElementsByTagName('a15');
    console.log(text1.style.opacity);
}

function draw() {
  opacity2=opacity2+0.001;
  text1.style.opacity="%opacity2";
  if(opacity2>1){
    opacity2=0;
  }

}
