function addTodo (event) {
  event.preventDefault()
  const input= document.queryselector('new-todo')
  const newToDo = input.value
  const div = document.queryselector("#ToDos")
  const listItem = document.createElement('li')
  
}

console.log("i am working")
const button = document.queryselector('submit-button')
button.addEventListener('submit', addToDo)