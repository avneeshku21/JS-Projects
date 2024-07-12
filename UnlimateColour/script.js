const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

//Randomm colour Generate krne k liye

const randomColour = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let colourInterval
const startChnagecolor = function () {
 if(!colourInterval)
 {
     colourInterval=setInterval(changebgcolor, 1000);
 }
  function changebgcolor() {
    document.body.style.backgroundColor = randomColour();
  }
};
const stopChnagecolor = function () {
clearInterval(colourInterval)
colourInterval=null;  

};

startBtn.addEventListener("click", startChnagecolor);
stopBtn.addEventListener("click", stopChnagecolor);
