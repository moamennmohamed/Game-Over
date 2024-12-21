export let loadingScreen = document.querySelector(".loading");
console.log(loadingScreen);
import { details } from "./details.js";

export async function getGames(game) {
  showLoading();
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8a00f3c3bemshbe2e889a8bbf191p19fa3cjsn4b24f0f4af1a",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`,
    options
  );
  if (response.ok) {
    const data = await response.json();
    displayGames(data);
  }
  hideLoading();
}

export function displayGames(list) {
  let blackBox = "";
  for (let i = 0; i < list.length; i++) {
    blackBox += `
      <div class="col-md-12 col-lg-6 col-xl-4 col-xxl-3">
        <div class="mainPage pro card h-100" id="${list[i].id}">
          <div>
            <img src="${list[i].thumbnail}" class="w-100 p-3" alt="">
          </div>
          <div class="card-body">
            <div class="text-white d-flex justify-content-between align-items-center">
              <div class="gamed-name">
                ${list[i].title}
              </div>
              <div>
                <span class="Monetization badge text-bg-primary">Free</span>
              </div>
            </div>
            <div class="text-center">
              <p class="text-secondary decoration-card">
               ${list[i].short_description}</p>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <div>
              <span class="badge text-bg-secondary">${list[i].genre}</span>
            </div>
            <div>
              <span class="badge text-bg-secondary">${list[i].platform}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  let masterPage = document.getElementById("masterPage");
  masterPage.innerHTML = blackBox;

  let mainPage = document.querySelectorAll(".mainPage");
  let pageDescription = document.querySelector("#pageDescription");
  let btnClose = document.querySelector("#close");

  for (let i = 0; i < mainPage.length; i++) {
    mainPage[i].addEventListener("click", function (e) {
      masterPage.classList.add("d-none");
      pageDescription.classList.remove("d-none");
      details(e.currentTarget.id);
    });
  }

  document.addEventListener("click", function (e) {
    if (e.target.id === btnClose.id) {
      masterPage.classList.remove("d-none");
      pageDescription.classList.add("d-none");
      console.log("Close button clicked");
    }
  });

}
function showLoading() {
  loadingScreen.classList.remove("d-none");
}
function hideLoading() {
  loadingScreen.classList.add("d-none");
}

