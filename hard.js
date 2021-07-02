var name_array = [
'aardvark',
'anteater',
'armadillo',
'baboon',
'bass',
'beetle',
'bison',
'bluejay',
'bullfrog',
'canary',
'caracal',
'catfish',
'chinchilla',
'clownfish',
'cockatiel',
'cod',
'dragonfly',
'emu',
'ferret',
'finch',
'flounder',
'gerbil',
'halibut',
'herring',
'hyena',
'ibises',
'iguana',
'hummingbird',
'jackal',
'llama',
'lemur',
'macaw',
'marlin',
'marmot',
'millipede',
'mink',
'minnow',
'mole',
'moth',
'orangutan',
'palmcockatoo',
'partridge',
'perch',
'pike',
'prayingmantis',
'quail',
'rainbowtrout',
'hedgehog',
'hermitcrab',
'ram',
'reindeer',
'seaslug',
'snapper',
'sparrow',
'springhare',
'stinkbug',
'sugarglider',
'toucan',
'tragopan',
'vulture',
'watusi',
'wildabeast',
'yak',
]


totalQuestions = 0;
totalRight = 0;
var image_array = []
for (var name of name_array) {
  image_array.push('https://raw.githubusercontent.com/bleonar5/RemTag/753cd8c3ae23d4f45a6630d8742a048d431c9c7a/stimuli/animals/' + name + '.jpg')
}

var count = Math.floor(Math.random()*image_array.length);
var score = 0;
function makeimg() {
  document.getElementById("rand_image").src = image_array[count];
}
function changeimg() {
  totalQuestions++;
  document.getElementById("guess_ans").value = '';
  count = Math.floor(Math.random()*image_array.length);
  document.getElementById("rand_image").src = image_array[count];
  next.style.display = "none";
  checkMark.style.display = "none";
  document.getElementById("response").innerText = "";
  button.style.display = "block";
}

var input =  document.getElementById("guess_ans").value;
document.getElementById("guess_ans")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});

function stopIt() {
  document.getElementById("response").innerText = "";
  document.getElementById("checkMark").style.display = "none";
}

function checker() {
  console.log(count);
  var guess = document.getElementById("guess_ans").value;
  console.log(guess);
  if (guess.toLowerCase() != name_array[count]) {
    document.getElementById("response").innerText = "wrong, try again ";
    document.getElementById("checkMark").src = "images/x_mark.png";
    document.getElementById("checkMark").style.display = "flex";
    document.getElementById("sol").style.display = "flex"
    setTimeout(stopIt, 2000);
  }
  else {
    button.style.display = "none";
    sol.style.display = "none";
    sol_text.style.display = "none";
    totalQuestions++;
    if (no_points == 0) {
      document.getElementById("response").innerText = "Correct";
      document.getElementById("checkMark").src = "images/Vector.png";
      document.getElementById("checkMark").style.display = "flex";
      document.getElementById("next").style.display = "flex"
      score += 100;
      totalRight ++;
    }
    else {
      document.getElementById("next").style.display = "flex";
      no_points = 0;
    }
    document.getElementById("score").innerText = "Score: "+score+" points";
  }
}

var showing = 1;
no_points = 0;
function show() {
  if (showing % 2 == 1) {
    no_points = 1;
    document.getElementById("sol_text").innerText = name_array[count];
    document.getElementById("sol_text").style.display = "flex";
    showing ++;
  }
  else {
    sol_text.style.display = "none";
    showing ++;
  }
}


var timer = 60 /* Change it to whatever you want */
var timerText = document.getElementById("time");
var countdown = setInterval(function() {
  if (timer == 0) {
    clearInterval(); 
    timerText.innerHTML = "You're out of time!";
    button.style.display="none";
    next.style.display="none"
    document.getElementById("score").innerText = "Your Final Score: "+ score+" points";
    document.getElementById("fraction").innerText = "You got " + totalRight + " / " + totalQuestions + " questions right";
  } else {
    timer -= 1 
    timerText.innerHTML = timer+" seconds";
  };
}, 1000);