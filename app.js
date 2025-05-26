/* actions desired for the application are:  
- create a dynamic navigation in JS 
- calculate scores based on age and gender for each event
- listen to events and display values to users */

// Event listeners and DOM elements
const femaleBtn = document.getElementById('female');
const maleBtn = document.getElementById('male');
const ageSelect = document.getElementById('ages');
const mdlSlider = document.getElementById("MDL-int");
const mdlWeight = document.getElementById("MDLW");
const mdlPoints = document.getElementById("MDLP");

const navElement = document.getElementById("nav");
const ulElement = document.createElement("ul");

let selectedGender = null;
let selectedAge = null;

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
//set inital values (mdl, spt, hrp, 2mr)
//MDL inital input  



//functions 
function getMDLData(gender, age){
    if (gender === 'female' && age === '21') return MDLF21;
    return [];
}

function updateMDLScoreDisplay(weight){
    mdlWeight.textContent = `${weight} :lbs`;

    const data = getMDLData(selectedGender, selectedAge);
    const result = data.find(entry => parseInt(entry.weight) === weight);
    const score = result ? result.Score : "0";

    mdlPoints.textContent = `${score} :points`;
}


//functions for link 
navLinks.forEach(item => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.href = item.url;
    aElement.textContent = item.text;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
});

// Button click handlers
femaleBtn.addEventListener('click', () => {
    selectedGender = 'female';
    updateMDLScoreDisplay(parseInt(mdlSlider.value));
    console.log(mdlSlider.value, selectedGender);
});

maleBtn.addEventListener('click', () => {
    selectedGender = 'male';
    updateMDLScoreDisplay(parseInt(mdlSlider.value));
});

// Age select change handler
ageSelect.addEventListener('change', () => {
    selectedAge = ageSelect.value;
    updateMDLScoreDisplay(parseInt(mdlSlider.value));
    console.log(selectedAge, mdlSlider.value)
});

// MDL slider input handler
mdlSlider.addEventListener('input', function() {
    updateMDLScoreDisplay(parseInt(this.value));
});

//callbacks
navElement.appendChild(ulElement);

