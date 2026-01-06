function audio() {
  document.getElementById("audio").play();
}

function dice1(event) {
  event.preventDefault();

  const diceElement = document.querySelector("#dice-1");
  diceElement.classList.add("rolling");

  audio();

  let number = Math.random() * 6;
  number = Number.parseInt(number);

  setTimeout(() => {
    if (number === 0) {
      diceElement.innerHTML = '<i class="bi bi-dice-1 icon"></i>';
    } else if (number === 1) {
      diceElement.innerHTML = '<i class="bi bi-dice-2 icon"></i>';
    } else if (number === 2) {
      diceElement.innerHTML = '<i class="bi bi-dice-3 icon"></i>';
    } else if (number === 3) {
      diceElement.innerHTML = '<i class="bi bi-dice-4 icon"></i>';
    } else if (number === 4) {
      diceElement.innerHTML = '<i class="bi bi-dice-5 icon"></i>';
    } else {
      diceElement.innerHTML = '<i class="bi bi-dice-6 icon"></i>';
    }

    diceElement.classList.remove("rolling");
  }, 600);
}

function dice2(event) {
  event.preventDefault();

  const diceElement = document.querySelector("#dice-2");
  diceElement.classList.add("rolling");

  audio();

  let number = Math.random() * 6;
  number = Number.parseInt(number);

  setTimeout(() => {
    if (number === 0) {
      diceElement.innerHTML = '<i class="bi bi-dice-1-fill icon"></i>';
    } else if (number === 1) {
      diceElement.innerHTML = '<i class="bi bi-dice-2-fill icon"></i>';
    } else if (number === 2) {
      diceElement.innerHTML = '<i class="bi bi-dice-3-fill icon"></i>';
    } else if (number === 3) {
      diceElement.innerHTML = '<i class="bi bi-dice-4-fill icon"></i>';
    } else if (number === 4) {
      diceElement.innerHTML = '<i class="bi bi-dice-5-fill icon"></i>';
    } else {
      diceElement.innerHTML = '<i class="bi bi-dice-6-fill icon"></i>';
    }

    diceElement.classList.remove("rolling");
  }, 600);
}
