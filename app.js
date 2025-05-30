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
const sptSlider = document.getElementById("SPT-int");
const sptPoints = document.getElementById("sptPoints");

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
    {weight: "100", Score: "40"},
    {weight: "90", Score: "30"},
    {weight: "80", Score: "20"},
    {weight: "70", Score: "10"},
    {weight: "60", Score: "0"},
]

const MDLM21 = [
    {weight: "340", Score: "100"},
    {weight: "330", Score: "98"},
    {weight: "320", Score: "96"},
    {weight: "310", Score: "94"},
    {weight: "300", Score: "92"},
    {weight: "290", Score: "89"},
    {weight: "280", Score: "87"},
    {weight: "270", Score: "85"},
    {weight: "260", Score: "83"},
    {weight: "250", Score: "81"},
    {weight: "240", Score: "79"},
    {weight: "230", Score: "77"},
    {weight: "220", Score: "75"},
    {weight: "210", Score: "73"},
    {weight: "200", Score: "70"},
    {weight: "190", Score: "69"},
    {weight: "180", Score: "67"},
    {weight: "170", Score: "65"},
    {weight: "160", Score: "63"},
    {weight: "150", Score: "60"},
    {weight: "130", Score: "50"},
    {weight: "120", Score: "40"},
    {weight: "110", Score: "30"},
    {weight: "100", Score: "20"},
    {weight: "90", Score: "10"},
    {weight: "80", Score: "0"},
]

const SPTF21 = [
    {meters: "8.4", Score: "100"},
    {meters: "8.2", Score: "99"},
    {meters: "7.7", Score: "98"},
    {meters: "7.5", Score: "97"},
    {meters: "7.3", Score: "96"},
    {meters: "7.2", Score: "95"},
    {meters: "7.0", Score: "94"},
    {meters: "6.9", Score: "93"},
    {meters: "6.8", Score: "92"},
    {meters: "6.6", Score: "91"},
    {meters: "6.4", Score: "88"},
    {meters: "6.3", Score: "87"},
    {meters: "6.2", Score: "86"},
    {meters: "6.1", Score: "65"},
    {meters: "6.0", Score: "83"},
    {meters: "5.9", Score: "81"},
    {meters: "5.8", Score: "80"},
    {meters: "5.7", Score: "78"},
    {meters: "5.6", Score: "76"},
    {meters: "5.5", Score: "75"},
    {meters: "5.4", Score: "74"},
    {meters: "5.3", Score: "72"},
    {meters: "5.2", Score: "71"},
    {meters: "5.1", Score: "69"},
    {meters: "5.0", Score: "68"},
    {meters: "4.9", Score: "66"},
    {meters: "4.8", Score: "65"},
    {meters: "4.7", Score: "63"},
    {meters: "4.6", Score: "62"},
    {meters: "4.4", Score: "61"},
    {meters: "3.9", Score: "60"},
    {meters: "3.8", Score: "54"},
    {meters: "3.7", Score: "44"},
    {meters: "3.6", Score: "37"},
    {meters: "3.5", Score: "32"},
    {meters: "3.4", Score: "24"},
    {meters: "3.3", Score: "18"},
    {meters: "3.2", Score: "14"},
    {meters: "3.1", Score: "11"},
    {meters: "3.0", Score: "8"},
    {meters: "2.9", Score: "6"},
    {meters: "2.8", Score: "4"},
    {meters: "2.7", Score: "2"},
    {meters: "2.6", Score: "0"},
]


//set inital values (mdl, spt, hrp, 2mr)
//MDL inital input  



//functions 
function getMDLData(gender, age){
    if (gender === 'female' && age === '21') return MDLF21;
    if (gender === 'male' && age === '21') return MDLM21;
    return [];
}

function updateMDLScoreDisplay(weight){
    mdlWeight.textContent = `${weight} :lbs`;

    const data = getMDLData(selectedGender, selectedAge);
    if(!data || data.length === 0){
        mdlPoints.textContent = `0 :points`;
        return
    }

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

// eventlisteners button click handlers
femaleBtn.addEventListener('click', () => {
    selectedGender = 'female';
    updateMDLScoreDisplay(parseInt(mdlSlider.value));
    console.log(mdlSlider.value, selectedGender);
});

maleBtn.addEventListener('click', () => {
    selectedGender = 'male';
    updateMDLScoreDisplay(parseInt(mdlSlider.value));
    console.log(selectedAge, mdlSlider.value)
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

