export async function details(code) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8a00f3c3bemshbe2e889a8bbf191p19fa3cjsn4b24f0f4af1a",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${code}`,
    options
  );
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    displayDetails(data);
  }
}

export function displayDetails(list) {
  let blackBox = "";
  blackBox += `
<div class="container">
<header class=" pb-5 text-white d-flex justify-content-between align-items-center">
    <div>
        <h3>Details Game</h3>
    </div>
    <div>
        <i id="close" class="fa-solid fa-x"></i>
    </div>
</header>

<div class="row">
    <div class="col-sm-12 col-md-4">
        <div>
            <img src="${list.thumbnail}" class="w-100" alt="">
        </div>
    </div>
    <div class="col-sm-12 col-md-8">
        <div class="details">
            <h4 class="text-white">${list.title}</h4>
            <h5 class="text-white">Category :<span class="ms-3 badge text-bg-primary">${list.genre}</span></h5>
            <h5 class="text-white">Platform :<span class="ms-3 badge text-bg-primary">${list.platform}</span></h5>
            <h5 class="text-white">Status :<span class="ms-3 badge text-bg-primary">${list.status}</span></h5>
        </div>
        <div class="text-white">
            <p>${list.description}</p>
        </div>
        <div>
            <a href="${list.game_url}" target="_blank"  class="btn btn-outline-warning  text-white" src="${list.game_url}">Show Game</a>
        </div>
    </div>
</div>
</div>
`;
  document.getElementById("pageDescription").innerHTML = blackBox;
}
