let div = document.querySelector(".container");
const form = document.querySelector("form");
let userInput = document.querySelector("#userInput");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userInput.value === '') {
      alert("Please enter a valid username");
      return;
  }
  fetch(`https://api.github.com/users/${userInput.value}`)
  .then((res) => {
      return res.json()
  })
  .then((res) => {
    div.innerHTML += `<div id= "card"class="card text-center p-5">
    <img class="image" src="${res.avatar_url}" alt="Thumbnail">
    <h3 class="mt-2 fw-bold">${res.name}</h3>
    <h2 class="mt-1 fs-3 text-muted fw-normal">${res.login}</h2>
    <h4 class="mt-2">Followers: ${res.followers} Following : ${res.following}</h4>
    <button class="delete-btn mx-5 btn btn-danger mt-3">Delete</button
    </div>`;
      userInput.value = "";
  })
  .catch((err) => {
      container.innerHTML = `User not found (404).`;
  });
});
div.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {

      const card = e.target.closest(".card");
      if (card) {
          card.remove();
      }
  }
})

  

  
