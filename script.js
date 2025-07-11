// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Define possible images and outcomes in Khmer
const botImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
const outcomes = {
  RR: "ស្មើ",
  RP: "កុំព្យូទ័រ",
  RS: "អ្នក",
  PP: "ស្មើ",
  PR: "អ្នក",
  PS: "កុំព្យូទ័រ",
  SS: "ស្មើ",
  SR: "កុំព្យូទ័រ",
  SP: "អ្នក"
};

// Event handler for image click
function handleOptionClick(event) {
  const clickedImage = event.currentTarget;
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

  // Reset results and display "Wait..." in Khmer
  userResult.src = botResult.src = "images/rock.png";
  result.textContent = "សូមរង់ចាំ...";

  // Activate clicked image and deactivate others
  optionImages.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex);
  });

  gameContainer.classList.add("start");

  setTimeout(() => {
    gameContainer.classList.remove("start");

    // Set user and bot images
    const userImageSrc = clickedImage.querySelector("img").src;
    userResult.src = userImageSrc;

    const randomNumber = Math.floor(Math.random() * botImages.length);
    const botImageSrc = botImages[randomNumber];
    botResult.src = botImageSrc;

    // Determine the result
    const userValue = ["R", "P", "S"][clickedIndex];
    const botValue = ["R", "P", "S"][randomNumber];
    const outcomeKey = userValue + botValue;
    const outcome = outcomes[outcomeKey] || "Unknown";

    // Display the result in Khmer
    result.textContent = userValue === botValue ? "លទ្ធផលស្មើ" : `${outcome} ឈ្នះ!`;
  }, 2500);
}

// Attach event listeners to option images
optionImages.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});