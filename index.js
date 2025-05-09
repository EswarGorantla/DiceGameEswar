function Genrand() {
  return Math.floor(Math.random() * 6) + 1;
}

function Dicechange() {
  var number1 = Genrand();
  var number2 = Genrand();

  if (number1 === 1) {
    document.querySelector(".img1").setAttribute("src", "dice1.png");
  } else if (number1 === 2) {
    document.querySelector(".img1").setAttribute("src", "dice2.png");
  } else if (number1 === 3) {
    document.querySelector(".img1").setAttribute("src", "dice3.png");
  } else if (number1 === 4) {
    document.querySelector(".img1").setAttribute("src", "dice4.png");
  } else if (number1 === 5) {
    document.querySelector(".img1").setAttribute("src", "dice5.png");
  } else {
    document.querySelector(".img1").setAttribute("src", "dice6.png");
  }

  if (number2 === 1) {
    document.querySelector(".img2").setAttribute("src", "dice1.png");
  } else if (number2 === 2) {
    document.querySelector(".img2").setAttribute("src", "dice2.png");
  } else if (number2 === 3) {
    document.querySelector(".img2").setAttribute("src", "dice3.png");
  } else if (number2 === 4) {
    document.querySelector(".img2").setAttribute("src", "dice4.png");
  } else if (number2 === 5) {
    document.querySelector(".img2").setAttribute("src", "dice5.png");
  } else {
    document.querySelector(".img2").setAttribute("src", "dice6.png");
  }

  Gettext(number1, number2);
}

function Gettext(number1, number2) {
  let textElement = document.getElementById("Changetext");

  if (number1 > number2) {
    textElement.textContent = "🏆 Player 1 Won!";
  } else if (number1 < number2) {
    textElement.textContent = "🏆 Player 2 Won!";
  } else {
    textElement.textContent = "It's a Tie! 🏆";
  }
}