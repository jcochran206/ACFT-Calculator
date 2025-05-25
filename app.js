/*
actions desired for the application are:  
- create a dynamic navigation in JS 
- calculate scores based on age and gender for each event
- listen to events and display values to users
*/
//event listeners and dom elements  
const femaleBtn = document.getElementById('female');
const maleBtn = document.getElementById('male');

let mdlSlider = document.getElementById("MDL-int");
let mdlValue = document.getElementById("MDLP");

const navElement = document.getElementById("nav");
const ulElement = document.createElement("ul");

//set inital values 
mdlScore(mdlSlider.value);

//listeners 
femaleBtn.addEventListener('click', function (){
    alert('female btn pressed')
});

maleBtn.addEventListener('click', function (){
    alert('male btn pressed')
});

// selectAge.addEventListener("input", function() {
    
// })

mdlSlider.addEventListener('input', function(){
    mdlValue.textContent = this.value;
});

//functions 
function mdlScore(value) {
    mdlValue.textContent = `${value} :points`; 
}

//data for links 
const navLinks = [
    { text: "Home", url: "/" },
    { text: "Events", url: "pages/event" },
    { text: "References", url: "pages/references" },
    { text: "Calculator", url: "/calculator" },
]
// const score data by age and gender
const MDLF21 = [
    {weight: "220", Score: "100"},
    {weight: "210", Score: "98"},
    {weight: "200", Score: "97"},
    {weight: "190", Score: "94"},
    {weight: "180", Score: "91"},
    {weight: "170", Score: "88"},
    {weight: "160", Score: "84"},
    {weight: "150", Score: "80"},
    {weight: "140", Score: "75"},
    {weight: "130", Score: "68"},
    {weight: "120", Score: "60"},
    {weight: "110", Score: "50"},
]


navLinks.forEach(item => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.href = item.url;
    aElement.textContent = item.text;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
});

navElement.appendChild(ulElement);

