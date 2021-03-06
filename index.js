/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")
// render one player to the DOM
function renderPlayer(player) {
  console.log(player)
  // create an element for the outer div
  const playerDiv = document.createElement("div")
  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number
  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `
  // append the element to the container
  playerContainer.append(playerDiv)
}
// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const listen = document.getElementById("header")
listen.addEventListener("click", () => {
  toggleColor(document.querySelector("h1#header"))});


  function toggleColor(element) {
    if (element.style.color === "red") {
      element.style.color = "black"
    } else {
      element.style.color = "red"
    }
  }

/***** Deliverable 2 *****/

const form = document.querySelector("form")
form.addEventListener("submit", function(e){
  e.preventDefault()
  number = document.querySelector("#new-player-form").number.value
  name = document.querySelector("#new-player-form").name.value
  nickname = document.querySelector("#new-player-form").nickname.value
  photo = document.querySelector("#new-player-form").photo.value

  console.log(number, name, nickname, photo)


  let player = new Array();
  player["number"] = number
  player["name"] = name
  player["nickname"] = nickname
  player["photo"] = photo
  player["likes"] = 0
  console.log(player)
  renderPlayer(player)
});


/***** Deliverable 3 *****/

playerContainer.addEventListener("click", function(e) {
  if (e.target.matches("button.like-button")) {
    let likes = playerContainer.querySelector("p.likes").innerText
    let likeNum = likes.replace("likes", "")
    console.log(likeNum)
    likeNum = parseInt(likeNum, 10)
    likes = likeNum + 1 + " likes"
    playerContainer.querySelector("p.likes").innerText = likes
  }
})