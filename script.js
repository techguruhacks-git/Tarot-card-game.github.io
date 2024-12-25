const cards = [
    "You have Ipad in Luck", "you'r cute", "Someone Loves u", "Married Life ",
    "You have Macbook in Luck", "You will become Succesful", "The Lovers", "You'r Hero",
    "Problem solver", "Programmer", "Wheel of Fortune", "Bright Future",
    "Software Engineer", "Highseas Bleesing", "Doubloon Grabber", "Someone Miss U",
    "You have happy life", "You have Framework in Luck", "you'r Moon", "You'r Sun",
    "You'r star", "The World"
  ];
  
  const shuffleButton = document.getElementById("shuffle-button");
  const fortuneContainer = document.getElementById("fortune-container");
  
  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  
  function shuffleCards() {

    fortuneContainer.innerHTML = '';
  
    shuffleButton.classList.add("shuffle-animation");
  
    setTimeout(() => {
      shuffleButton.classList.remove("shuffle-animation");
  
      const randomIndex = Math.floor(Math.random() * cards.length);
      const isReversed = Math.random() > 0.5;
  
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");
      
      const cardInner = document.createElement("div");
      cardInner.classList.add("card-inner");
      
      const cardFront = document.createElement("div");
      cardFront.classList.add("card-front");
      
      const cardBack = document.createElement("div");
      cardBack.classList.add("card-back");
      cardBack.innerText = `${cards[randomIndex]} ${isReversed ? "(Reversed)" : ""}`;
  
      cardInner.appendChild(cardFront);

      cardInner.appendChild(cardBack);

      cardContainer.appendChild(cardInner);

      fortuneContainer.appendChild(cardContainer);


      const shuffleSound = new Audio('shuffle-sound.mp3');

shuffleSound.play();
  
      setTimeout(() => {

        cardContainer.classList.add("flipped");
        triggerConfetti();
      }, 500);
    }, 1000);
  }
  
  
  shuffleButton.addEventListener("click", shuffleCards);

