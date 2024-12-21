import { getGames } from "./games.js";
getGames("mmorpg");

let lestItems = document.querySelectorAll(".collapse ul li a");
for (let i = 0; i < lestItems.length; i++) {
  lestItems[i].addEventListener("click", function (e) {
    let get = e.target.id;
    getGames(get);
  });
}
