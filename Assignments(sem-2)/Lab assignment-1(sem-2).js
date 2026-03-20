const form = document.querySelector("form")
const eventList = document.querySelector("#eventList")

const eventTitle = document.querySelector("#eventTitle")
const eventDate = document.querySelector("#eventDate")
const eventCategory = document.querySelector("#eventCategory")
const eventDescription = document.querySelector("#eventDescription")

const clearAllBtn = document.querySelector("#clearAllBtn")
const addSampleBtn = document.querySelector("#addSampleBtn")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = eventTitle.value.trim()
    const date = eventDate.value
    const category = eventCategory.value
    const description = eventDescription.value.trim()

    

    addEventCard(title, date, category, description)
    form.reset()
})

function addEventCard(title, date, category, description) {
    const card = document.createElement("div")
    card.classList.add("event-card")

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
        <span class="delete">❌</span>
    `

    card.querySelector(".delete").addEventListener("click", () => {
        card.remove()
    })

    eventList.appendChild(card)
}

clearAllBtn.addEventListener("click", () => {
    eventList.innerHTML = ""
})

addSampleBtn.addEventListener("click", () => {
    addEventCard("Tech Conference", "2026-03-10", "conference", "Latest tech trends.")
    addEventCard("Friends Meetup", "2026-02-20", "social", "Chill evening with friends.")
})

document.addEventListener("keydown",event =>{
    console.log(event.key)
})
