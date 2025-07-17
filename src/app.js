function displayRecommendations(response) {
  new Typewriter("#book-recommendations", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: null,
  });
}

function generateBook(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "o328b4b5c85378c045400at05641afca";
  let context =
    "You are an experienced bookseller who is an expert on modern books and book genres. Your mission is to generate three book recommendations to the user based on the genre the user inputs. You should follow this structure: <h1> Book Title </h1> <p> Author <p> </p> short description of the book </p>.";
  let prompt = `User Instructions: Generate 3 book recommendations that fit ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let bookRecommendationsElement = document.querySelector(
    "#book-recommendations"
  );
  bookRecommendationsElement.classList.remove("hidden");
  bookRecommendationsElement.innerHTML = `<div class= "generating">⏳ Generating ${instructionsInput.value} book recommendations </div>`;

  axios.get(apiUrl).then(displayRecommendations);
}

let userFormElement = document.querySelector("#user-form");
userFormElement.addEventListener("submit", generateBook);
