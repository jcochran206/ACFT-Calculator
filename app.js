/*
actions desired for the application are:  
- create a dynamic navigation in JS
- calculate scores based on age and gender for each event
*/
//data for links 
const navLinks = [
    { text: "Home", url: "/" },
    { text: "events", url: "pages/event" },
    { text: "References", url: "pages/references" },
    { text: "Calculator", url: "/calculator" },
]

const navElement = document.getElementById("nav");
const ulElement = document.createElement("ul");

navLinks.forEach(item => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.href = item.url;
    aElement.textContent = item.text;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
})


