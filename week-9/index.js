const firstNameDiv = document.getElementById('first-name-invite')
const input = document.getElementById('first-name')

input.addEventListener('keyup', (event) => {
  let whatTheyveTyped = input.value
  console.log(whatTheyveTyped)
  firstNameDiv.innerText = whatTheyveTyped
})

// Grab the HTML element that we want to interact with
const toggleButton = document.getElementById('toggle')
toggleButton.addEventListener('click', (event) => {
  // 1. Find the invite div
  const weddingInviteDiv = document.getElementById('first-name-invite')
  
  // 2. div.classList.add/remove
  weddingInviteDiv.classList.add('formal')
})