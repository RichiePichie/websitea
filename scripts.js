const outputDiv = document.getElementById('textik');

const text1 = `Hello, my name is Richard.`;
const text2 = `I am `;
const phrases = ["programmer", "gym enthusiast", "anatomy abuser"];

let sleepTime = 100;
let currentPhraseIndex = 0;

const writeLoop = async () => {
  await writeText1();
  await writeText2();
  await writeCombinedText();
};

const writeText1 = async () => {
  let i = 0;
  while (i < text1.length) {
    outputDiv.innerHTML = text1.substring(0, i + 1);
    await sleep(sleepTime);
    i++;
  }
};

const writeText2 = async () => {
  let i = 0;
  while (i < text2.length) {
    outputDiv.innerHTML = text1 + "<br>" + text2.substring(0, i + 1);
    await sleep(sleepTime);
    i++;
  }
};

const writeCombinedText = async () => {
  let i = 0;
  while (true) {
    let curWord = phrases[currentPhraseIndex];
    for (let j = 0; j < curWord.length; j++) {
      outputDiv.innerHTML = text1 + "<br>" + text2 + curWord.substring(0, j + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime);

    for (let j = curWord.length; j > 0; j--) {
      outputDiv.innerHTML = text1 + "<br>" + text2 + curWord.substring(0, j - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 2);
    if (currentPhraseIndex === phrases.length - 1) {
      currentPhraseIndex = 0;
    } else currentPhraseIndex++;
  }
};

writeLoop();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



// removing words end 


var tabLinks = document.getElementsByClassName("tab-links");
var taContents = document.getElementsByClassName("tab-contains");
function openTab(tabName) { 
  for(tabLink of tabLinks){
    tabLink.classList.remove("active-link");
  }
  for(tabContent of taContents){
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add("active-tab");
 }
 document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var menu = document.querySelector('.menu');
    var links = document.querySelectorAll('ul li a');
  
    links.forEach(function(link) {x
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        checkbox.checked = false;
        menu.classList.remove('open');
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var menu = document.querySelector('.menu');
    var links = document.querySelectorAll('ul li a');

    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        checkbox.checked = false;
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  
  document.getElementById('login').addEventListener('click', function(){
    window.open('login.html');
  });

  function showToast(message) {
    var toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 3000); 
  }
  setTimeout(function() {
    showToast('Wow, that is interesting you are still looking');
  }, 20000);