const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple' ]


//color is a parameter 
function createColorfulDiv(color) {
  //make your div and put it in HTML
 const newDiv = document.createElement('div')
 
 newDiv.innerText = color
 
 newDiv.style.backgroundColor = color
 
 // Part 2 find the div to put 
 const containerDiv = document.querySelector('#container')
 containerDiv.appendChild(newDiv)
  
  

}

for (let color of colors) {
  console.log(color)
  createColorfulDiv(color)
}