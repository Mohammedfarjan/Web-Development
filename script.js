// let a=17
// let b=34
// if(a>b){
//     console.log("a is grater than b")
// }else if (a==b){
//     console.log("a is equal to b")
// }else{
//     console.log("a is less than b")
// }
// let grade="B"

// switch(grade){
//     case "A":
//         console.log("Excellent")
//         break;
//     case "B":
//         console.log("very good")
//         break;
//     case "C":
//        console.log("good")
//        break;
//     case "D":
//         console.log("need improvement")
//         break;
//     default:
//        console.log("invalid grade")
// }
// let a=[1,2,3,4,5]
// console.log(a)
// a.pop()
// a.push()
// a.unshift()
// a.shift()
// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")
// button.classList.remove("btn2")

// function show(){
//     alert("You have clicked the button")
// }

// button.addEventListener("click",show)
// //button.removeEventListener("click",show)
// button.addEventListener("Stop",show)
// button.addEventListener("mouseover",function(){
//     button.style.backgroundColor="yellow"
// })
// const button2=document.querySelector("#btn2")
// button2.addEventListener("click",function(){
//     document.body.style.backgroundColor="lightblue"
// })
// BigInt.addEventListener("click",function(){
//     document.body.style.backgroundColor="lightgreen"
// })
// const BigInt=document.querySelector("#BigInt")
// BigInt.addEventListener("click",function(){
//     const num1=BigInt(123456789012345678901234567890n)
//     const num2=BigInt(987654321098765432109876543210n)
//     const sum=num1+num2
//     alert("The sum is: "+sum)
// })

// const studentNmae=document.querySelector('#name')
// const button=document.querySelector('.btn')
// const list=document.querySelector('.list')

// button.addEventListener('click',()=>{
//     //creating the element
//     const li= document.createElement('li')
//     const deleteButton= document.createElement('Button')
//     //providing the text
//     li.innerText=studentNmae.value
//     deleteButton.innerText='Delete'
//     deleteButton.addEventListener('click',()=>{
//          li.remove()
//         // list.removeChild(li)
//     })
//     list.appendChild(deleteButton)
//     list.appendChild(li)
//     studentNmae.value=""
// })


// function print(){ // callback fn
//     console.log("inside print")
// function greet(print){ // higher order fn
//     setTimeout(()=>{
//         console.log("Hello Student")
//         print()
//     },2000)
// }
// greet(print)


// console.log("starting homework...");
// setTimeout(()=>{
//     console.log("Homework done..");
//     console.log("Starting dinner..");
//     setTimeout(()=>{
//         console.log("Dinner done.");
//         console.log("Getting resdy to go out...");
//     setTimeout(()=>{
//         console.log("going to the playground!");
//     },5000);//after dinner
//     },10000);//dinner time
// },12000);//homework time


// function finishHomework(callback){
//     console.log("Starting Homework...");
//     setTimeout(()=>{
//         console.log("Homework Done!");
//         callback();
//     },2000);
// }
// function eatDinner(callback){
//     console.log("Startng dinner...");
//     setTimeout(()=>{
//         console.log("Dinner done!");
//         callback();
//     },5000);
// }
// function goTOplayground(){
//     console.log("Going to playground!");
// }
// finishHomework(()=>{
//     eatDinner(()=>{
//         goTOplayground();
//     })
// })


// const p= new Promise((res,rej)=>{
//     console.log("Going to do the homework!!")
//     setTimeout(()=>{
//         const done=true;
//         if(done){
//             res("success")
//         }else{
//             rej("Failed to fetch data from the server")
//         }
//     },3000);
// })
// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// function orderedfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Ordered")
//         },2000)
//     })
// }

// function foodPrepared(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Prepared")

//         },2000)
//     })
// }

// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Delivered")
//             res()
//         },2000)
//     })
// }
// async function orderedfood(){
//     await foodPrepared()
//     await deliverFood()
//     console.log("Enjoy your food")
// }
// orderedfood()

// SMART EVENT DASHBOARD - JAVASCRIPT

// 1. DOM SELECTION & TRAVERSA
// // Select form elements
// const eventForm = document.getElementById('eventForm');
// const eventTitleInput = document.getElementById('eventTitle');
// const eventDateInput = document.getElementById('eventDate');
// const eventDescriptionInput = document.getElementById('eventDescription');
// const eventTypeSelect = document.getElementById('eventType');
// const submitBtn = document.getElementById('submitBtn');
// const cancelBtn = document.getElementById('cancelBtn');

// // Select event display elements
// const eventsContainer = document.getElementById('eventsContainer');
// const clearBtn = document.getElementById('clearBtn');
// const sampleBtn = document.getElementById('sampleBtn');

// // Select demo elements
// const pressedKeyElement = document.getElementById('pressedKey');

// // 2. DATA STRUCTURE & STATE MANAGEMENT

// let events = [];
// let editingId = null;
// // Sample events data
// const sampleEvents = [
//     {
//         id: 1,
//         title: 'Web Development Conference',
//         date: '2026-02-15',
//         type: 'conference',
//         description: 'Annual conference on modern web technologies.'
//     },
//     {
//         id: 2,
//         title: 'JavaScript Workshop',
//         date: '2026-02-20',
//         type: 'workshop',
//         description: 'Hands-on JavaScript learning session.'
//     }
// ];

// // 3. UTILITY FUNCTIONS
// // Format date for display
// function formatDate(dateStr) {
//     const date = new Date(dateStr + 'T00:00:00');
//     return date.toLocaleDateString('en-US', {
//         weekday: 'short',
//         month: 'short',
//         day: 'numeric',
//         year: 'numeric'
//     });
// }

// // Clear form inputs
// function clearForm() {
//     eventTitleInput.value = '';
//     eventDateInput.value = '';
//     eventDescriptionInput.value = '';
//     eventTypeSelect.value = 'conference';
//     editingId = null;
// }

// // Escape HTML to prevent XSS
// function escapeHtml(text) {
//     const map = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         "'": '&#039;'
//     };
//     return text.replace(/[&<>"']/g, m => map[m]);
// }

// // Get icon for event type
// function getEventIcon(type) {
//     const icons = {
//         conference: '📊',
//         webinar: '💻',
//         workshop: '🛠️',
//         meeting: '📅'
//     };
//     return icons[type] || '📅';
// }

// // 4. RENDER EVENTS - Dynamic Card Creation


// function renderEvents() {
//     // Clear container
//     eventsContainer.innerHTML = '';

//     if (events.length === 0) {
//         // 6. TEXT MANIPULATION - Create empty state
//         eventsContainer.innerHTML = '<div class="empty-state">No events yet. Add your first event!</div>';
//         return;
//     }

//     // 2. DYNAMIC EVENT CARDS - Create card for each event
//     events.forEach(event => {
//         const eventCard = createEventCard(event);
//         eventsContainer.appendChild(eventCard);
//     });
// }

// // Create a single event card element
// function createEventCard(event) {
//     // 2. DYNAMIC EVENT CARDS - Create DOM elements
//     const card = document.createElement('div');
//     card.className = `event-card`;
//     card.id = `event-${event.id}`;

//     const icon = getEventIcon(event.type);

//     // Build card HTML with all event details
//     card.innerHTML = `
//         <div class="event-card-header">
//             <div class="event-title-group">
//                 <h3>${escapeHtml(event.title)}</h3>
//                 <span class="event-badge ${event.type}">
//                     ${event.type.charAt(0).toUpperCase() + event.type.slice(1)}
//                 </span>
//             </div>
//             <div class="event-actions">
//                 <button class="btn-icon btn-delete" data-action="delete" data-id="${event.id}" title="Delete event">
//                     ❌
//                 </button>
//             </div>
//         </div>

//         <div class="event-details">
//             <div class="event-detail">
//                 <span class="event-detail-icon">📅</span>
//                 <span>${formatDate(event.date)}</span>
//             </div>
//         </div>

//         ${event.description ? `<div class="event-description">${escapeHtml(event.description)}</div>` : ''}
//     `;

//     return card;
// }

// // 5. EVENT HANDLING & INTERACTION

// // Form submission handler
// eventForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const title = eventTitleInput.value.trim();
//     const date = eventDateInput.value;
//     const description = eventDescriptionInput.value.trim();
//     const type = eventTypeSelect.value;

//     // Validate inputs
//     if (!title || !date) {
//         alert('Please fill in all required fields');
//         return;
//     }

//     if (editingId) {
//         // Update existing event
//         const eventIndex = events.findIndex(e => e.id === editingId);
//         if (eventIndex !== -1) {
//             events[eventIndex] = {
//                 ...events[eventIndex],
//                 title,
//                 date,
//                 description,
//                 type
//             };
//         }
//         editingId = null;
//         updateFormUI();
//     } else {
//         // Create new event
//         const newEvent = {
//             id: Date.now(),
//             title,
//             date,
//             description,
//             type
//         };
//         events.push(newEvent);
//     }

//     clearForm();
//     renderEvents();
// });

// // 6. EVENT DELEGATION

// // Using event delegation to handle dynamically created elements

// eventsContainer.addEventListener('click', (e) => {
//     // 4. EVENT HANDLING - Event delegation pattern
//     const deleteBtn = e.target.closest('[data-action="delete"]');

//     if (deleteBtn) {
//         const eventId = parseInt(deleteBtn.getAttribute('data-id'));
//         handleDeleteEvent(eventId);
//     }
// });

// // Delete event handler
// function handleDeleteEvent(eventId) {
//     if (confirm('Are you sure you want to delete this event?')) {
//         events = events.filter(e => e.id !== eventId);
//         renderEvents();
//     }
// }

// // Update form UI when editing
// function updateFormUI() {
//     if (editingId) {
//         // 6. TEXT & STYLE MANIPULATION - Update button text
//         submitBtn.textContent = 'Update Event';
//         cancelBtn.classList.remove('hidden');
//     } else {
//         submitBtn.textContent = 'Add Event';
//         cancelBtn.classList.add('hidden');
//     }
// }

// // Cancel edit button
// cancelBtn.addEventListener('click', () => {
//     editingId = null;
//     clearForm();
//     updateFormUI();
// });

// // CLEAR ALL EVENTS BUTTON
// clearBtn.addEventListener('click', () => {
//     if (events.length > 0 && confirm('Clear all events?')) {
//         events = [];
//         renderEvents();
//     }
// });

// // ADD SAMPLE EVENTS BUTTON
// sampleBtn.addEventListener('click', () => {
//     events = [...sampleEvents];
//     renderEvents();
// });

// // DOM MANIPULATION DEMO - Keyboard Events
// document.addEventListener('keydown', (e) => {
//     // 4. EVENT HANDLING - Keyboard event
//     // 6. TEXT MANIPULATION - Update DOM text content
    
//     let keyName = e.key;
    
//     // Map key names for display
//     if (e.key === ' ') {
//         keyName = 'Space';
//     } else if (e.shiftKey) {
//         keyName = 'Shift';
//     } else if (e.ctrlKey) {
//         keyName = 'Ctrl';
//     } else if (e.altKey) {
//         keyName = 'Alt';
//     }
    
//     pressedKeyElement.textContent = keyName;
// });
// // INITIALIZATION
// // Initialize on page load
// renderEvents();


// const eventList = document.getElementById("eventList");

// function addEvent() {
//   const title = document.getElementById("title").value;
//   const date = document.getElementById("date").value;
//   const category = document.getElementById("category").value;
//   const desc = document.getElementById("description").value;

//   if (!title || !date) {
//     alert("Please enter title and date");
//     return;
//   }

//   createEvent(title, date, category, desc);

//   document.getElementById("title").value = "";
//   document.getElementById("date").value = "";
//   document.getElementById("description").value = "";
// }

// function createEvent(title, date, category, desc) {
//   const div = document.createElement("div");
//   div.className = "event";

//   div.innerHTML = `
//     <button class="delete" onclick="this.parentElement.remove()">×</button>
//     <h3>${title}</h3>
//     <p>📅 ${date}</p>
//     <span class="badge">${category}</span>
//     <p>${desc || "lorem ipsum"}</p>
//   `;

//   eventList.appendChild(div);
// }

// function clearEvents() {
//   eventList.innerHTML = "";
// }

// function addSample() {
//   createEvent("Emifest", "2026-01-14", "Social", "lorem ipsum");
// }


// console.log("This is first line")
// try{
//   let age = 19;
//   if(age<18){
//     throw new Error("You are not eligiable")
    
//   }
//   let sample;
//   for(let i=0;i<10;i++){
//     sample=i
//   }
// }
// catch(e){
//   console.log(e)
//   throw new Error("Something went wrong")
// }finally{
//   console.log("finally block")
// }


// async function getDate(){
//   try{
//     const response=await fetch("https://dummyjson.com/products")
//     const data=await response.json()
//     console.log(response.ok)
//     if(!response.ok){
//       throw new Error("Something went wrong")
//     }
//   data.product.forEach((product)=>{
//       console.log(product.title)
//   })
//   }
//   catch(e){
//     console.log(e)
//   }
// }

// let obj={
//   name:"Yash",
//   age:24,
// }
// localStorage.setItem("obj",JSON.stringify(obj))
// localStorage.setItem("name","Yash")
// localStorage.setItem("age",24)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("obj")))
// localStorage.removeItem("age")

// sessionStorage.setItem("name", "Yash")
// sessionStorage.setItem("age",24)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// sessionStorage.removeItem("age")

// document.cookie ="name=Yash;expires=Fri,20 feb 2026 23:59:59 UTC;"
// document.cookie ="age=46;expires=Fri,20 feb 2026 23:59:59 UTC;"

// async function sample(){
//   await fetch("http://127.0.0.1:5500/script.html")
// }
// sample()

// function* generate(){
//    yield 1
//    yield 2
//    yield 3
// }
// const gen=numbergenerate()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   } 
// }

// // const add=a=>b=>c=>a+b+c

// console.log(add(2)(4)(6))

// const first=add(a)
// console.log(first(45))
// const second=add(b)
// console.log(second(67))
// const third=add(c)
// console.log(third(34))


// const APT_KEY="https://api.openweathermap.org/data/2.5/weather?q=gurugram&appid=0133cc5316757ac730cc46ae342334e4"
// const city=document.querySelector('#city')
// const search=document.querySelector('#weatherform')
// const container=document.querySelector(".info")
// const history=document.querySelector(".searchHistory")
// let visitedCities=[]

// search.addEventListener('submit', async(e)=>{
//     e.preventDefault()
//     const data = city.value
//     if(data){
//        try{
//            const response=await fetch('https://api.openweathermap.org/data/2.5/weather?q')
//            const weatherData=await response.json()
//            console.log(weatherData)
//            console.log("City",weatherData.name)
//            console.log("Temp",(weatherData.main.temp-273).toFixed(1),"C")
//            console.log("Wather",weatherData.weather[0].main)
//            console.log("Humidity",weatherData.main.humidity)
//            console.log("Wind",weatherData.wind.speed,"miles/hrs")
        
//         if(weatherData.cod===200){
//         container.innerHTML=`<h3>Weather Info</h3>
//         <p>City: ${weatherData.name}</p>
//         <p>Temp: ${(weatherData.main.temp-273).toFixed(1)}C</p>
//         <p>Weather: ${weatherData.weather[0].main}</p>
//         <p>Humidity: ${weatherData.main.humidity}</p>
//         <p>Wind: ${weatherData.wind.speed}miles/hrs</p>`

//         if(visitedCities.includes(city)){
//           visitedCities.push(city)
//           localStorage.setItem("visitedCities",JSON.stringify(visitedCities))
//         }
             
//         }else{
//             container.innerHTML=`<h3>Weather Info</h3>
//             <p>${weatherData.message}</p>`
//         }
//         } catch(e){
//            console.log(e)
//          }
//     }
        
// })

// function showHistory(){
//   history.innerHTML=""
//   const cities=JSON.parse(localStorage.getItem("visitedCities"))
//   if(cities){
//     cities.forEach(city,()=>{
//       const li=document.createElement("button")
//     li.textContent=city
//     history.appendChild("click",()=>{
//       searchWeather(city)
//     })
    
//     })
//     history.appendChild(li)
//   }
//   }
// showHistory()

// console.log("hellow world")
//  console.log("first commit")

// let a = 10
// let b = 16
// console.log(a+b)

// let name="Farjan"
// let age = 19
// console.log(name,age)

// const form = document.querySelector("#weatherForm");
// form.addEventListener("submit", function(event) {
//     event.preventDefault(); // page reload hone se rokta hai
//     alert("Search button clicked!");
// });

// document.addEventListener("keypress",event => {
//     console.log(event.key)
// });
//  document.removeEventListener("submit", function(){
//     console.log("Hello");

// })

// console.log("This is first line")

// try {
//     let age = 17;

//     if(age < 18){
//         throw new Error("You are not eligible")
//     }

//     console.log("You can vote")

// } catch(error){
//     console.log(error.message)
// }

// let name = "Arsh";
// let greeting = 'Hello';
// let massage = `Welcome, ${name}`;

// console.log(name)
// console.log(greeting)
// console.log(`massage,${name}`)

// let array = [1,2,3];
// console.log(array)
let a = 13;
let b = 14;
let c = 24;
console.log(a*b*c)