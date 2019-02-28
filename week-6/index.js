const paragraphOne = document.createElement('p')
// // <p></p> => paragraphOne
// paragraphOne.innerText = 'Hi ima paragraph'
// // <p>Hi ima paragraph</p> => paragraphOne

// /* To put something in our HTML:
// 1. Find the place to put it 
// 2. Append child to that place 
// */
// const ourDiv = document.querySelector('#container')
// // <div id="container"></div>

// ourDiv.appendChild(paragraphOne)
// <div id="container"> <p> ... </p> </div>


function addParagraphToHTML(message) {
  if (message !== undefined) {
    const paragraphOne = document.createElement('p')
    paragraphOne.innerText = message
    const ourDiv = document.querySelector('#container')
    ourDiv.appendChild(paragraphOne)
  } else {
    console.log('You must give a message')
  }
}

addParagraphToHTML('Hi ima paragraph')
addParagraphToHTML('Second paragraph')
addParagraphToHTML('Third')
addParagraphToHTML('Fourth')
addParagraphToHTML('Fifth')

addParagraphToHTML()

//Arrays & Objects 

//Arrays are like lists - cares about order

const MyFirstArray = []

const students = ['Jesse', 'Yana', 'Julie']  // saying that these are related

//to access second item in array - arrays start at 0 not 1
console.log(students[1]) //give me the location of 'one' in the list (item 2)

// ADDING STUFF TO ARRAY 

//push: adds to the end of the array mutative / modifies the original and does not preserve the original - adds to end 
students.push('Grace') // = Jesse, Yana, Julie, Grace) 

//unshift: puts stuff at the beginning of the array - mutative 

students.unshift('Melissa') // = Melissa, Yana, Julie, Grace 

//how to avoid mutating 

//slice: change array without changing the original - makes a copy of the original (rename it to copy) 

const StudentCopy = students.slice (); 

studentCoper.push('Bob')


//querySelectorall = every ('p') on the page vs querySelector = the first ('p')

//REMOVING FROM THE ARRAY 

const state = ['NY', 'NJ','CT', 'CA']

//pop: always takes out the thing from the end, dont have to specify what - mutative

states.pop // = [ NY, NJ, CT ]

//non mutative 

const statesCopy = states.slice()
statesCopy.pop() //= [NY, NJ, CT]

//  shift :remove from the beginning 
statesCopy = states.slice 
statesCopy.shift // = [NJ, CT, CA ]

const foods = ['apple', 'banana', 'orange', 'pear',['lolipop'] ]

// how to get lolipop - (foods[4][0])


//OBJECTS 
//(curly brace rather than [])
// better for things that are things in real life, have traits and charactaristics


const person = { 
  name: 'Nathan', 
  location: 'New York, NY',
  occupation: 'Cool person'
}

person['name'] //= 'nathan'
person['occupation'] //='cool person' <-- gives back the 'key'

or (same thing)

// person.name = nathan 
// person.occupation = cool person 
  
  
  // add info to person 
  
  person.email = 'test@test.com'
  
  const person = { 
  name: 'Nathan', 
  location: 'New York, NY',
  occupation: 'Cool person'
  email: 'test@email.com' //added email key to person object 
  
  //copies of objects with object.assign - needs starting point {} and what you are copying 
  
  const personCopy = Object.assign({}, person )
  
}

//remove from object 

delete person.email  // mutative 

const personCopy = object.assign({}, person)

delete personCopy.email //non mutative 

//new way to copy 

const personCopy = {...person} 

delete personCopy.email // deletes email with ... person rather than object({}, person)


//ITERATION = doing something a set number of times in JavaScript 
// for loop
for (let i = 0; i < 10; i +=1) {
  //this is what will happen ten times 
  console.log('hi')
}
 
 const numberOfTimes = 10 
 for (let i=0; i <numberOfTimes; i+=1) {
  startingNumber = startingNumber + i 
 }
 
 
 //for loop in array
 
 const messages = ['Hey', 'How are u', 'Goodbye']
 
 for (let i = 0; i<3; i +=1) { 
   
   
   // to get each thing in array 
   
   for (let messages of messages) { 
     console.log(message + !)
     
     // loop in objects 
     
     const person = { 
  name: 'Nathan', 
  location: 'New York, NY',
  occupation: 'Cool person'
  
  for (let details in person) { 
    console.log(person[details]) // - to get the value of the k
  }
  // in for objects, of for arrays 
     
     
     
     // for loops (iteration)
     
     //print hi 10 times 
     for (let i = 0; i <10; i+= 1)
     
     //array 
     
     const locations = ['NY', 'CA', 'TX', 'NC', 'NJ', 'SD', 'ND']
     
     for (let location of locations) {
       console.log(location)
       
     }
     // for objects
     const flightDetails = { 
       startingDestination: 'JFK', 
       endingDestination: 'LHR', 
       time: '4:00pm', 
       carrier: 'American Airlines'
       
     }
     
     for (let flightDetail in flightDetails) { 
       console.log(flightDetail[flightDetail])
       