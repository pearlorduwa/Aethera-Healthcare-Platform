// ===========================
// Aethera Health Dictionary
// ===========================

// ===========================
// Aethera Health Dictionary
// ===========================

const dictionary = {

malaria:"A disease caused by parasites and spread through mosquito bites. It is common in many tropical regions.",

diabetes:"A condition where blood sugar levels become too high because the body cannot properly use insulin.",

anemia:"A condition where the body does not have enough healthy red blood cells, often linked to iron deficiency.",

typhoid:"A bacterial infection commonly spread through contaminated food or water.",

hypertension:"A condition where blood pressure is consistently higher than normal.",

asthma:"A condition that affects the airways and can make breathing difficult.",

dehydration:"A condition that happens when the body loses more water than it takes in.",

protein:"A nutrient needed for growth, muscle repair, and maintaining body tissues.",

iron:"A mineral needed to make healthy red blood cells and prevent iron-deficiency anemia.",

calcium:"A mineral important for strong bones, teeth, and muscle function.",

pregnancy:"The period when a baby develops inside the uterus. Proper nutrition and medical care are important during pregnancy.",

prenatal:"Healthcare received during pregnancy to monitor the health of the mother and baby.",

menstruation:"The monthly process where the uterus releases its lining.",

nutrition:"The process of getting nutrients from food to support health and growth.",

firstaid:"Immediate care given to someone who is injured or suddenly becomes ill before professional medical help arrives."

};


// ===========================
// Dictionary Search
// ===========================

function searchWord(){

    let input = document.getElementById("dictionaryInput");

    let result = document.getElementById("dictionaryResult");


    let word = input.value.trim().toLowerCase();


    if(dictionary[word]){

        result.innerHTML = `
        <strong>${word.toUpperCase()}</strong><br>
        ${dictionary[word]}
        `;

    }

    else{

        result.innerHTML =
        "❌ We could not find Topic. Try Topics Like Malaria, Diabetes, Anemia, or Hypertension.";

    }

}



// ===========================
// Quiz Questions
// ===========================

const quiz=[

{
question:"Which vitamin is mainly produced when your skin is exposed to sunlight?",
answers:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],
correct:2
},

{
question:"How many hours of sleep should most teenagers get each night?",
answers:["4–6","6–7","8–10","11–13"],
correct:2
},

{
question:"Which disease is spread by mosquitoes?",
answers:["Malaria","Diabetes","Asthma","Hypertension"],
correct:0
},

{
question:"Which food is richest in iron?",
answers:["Rice","Spinach","Bread","Sugar"],
correct:1
},

{
question:"How many major food groups are commonly taught?",
answers:["3","5","7","10"],
correct:1
},

{
question:"Which organ pumps blood around the body?",
answers:["Lungs","Brain","Heart","Liver"],
correct:2
},

{
question:"How much water should most people drink daily?",
answers:["1 glass","2 glasses","6–8 glasses","15 glasses"],
correct:2
},

{
question:"Which nutrient helps build muscles?",
answers:["Protein","Sugar","Salt","Vitamin C"],
correct:0
},

{
question:"Which is NOT a symptom of dehydration?",
answers:["Dry mouth","Dizziness","Frequent urination","Headache"],
correct:2
},

{
question:"What is the best way to prevent the spread of germs?",
answers:["Skipping meals","Regular handwashing","Sleeping less","Eating sweets"],
correct:1
}

];


// ===========================
// Quiz Variables
// ===========================

let current=0;

let score=0;


// ===========================
// Load Quiz Question
// ===========================


function loadQuestion(){

let q=quiz[current];


let html=`

<h2>
Question ${current+1} of ${quiz.length}
</h2>

<h3>${q.question}</h3>

`;



q.answers.forEach((answer,index)=>{

html+=`

<button class="answerBtn"
onclick="answer(${index})">

${answer}

</button>

<br><br>

`;

});


html+=`

<div id="feedback"></div>

`;


document.getElementById("quizBox").innerHTML=html;


}



// ===========================
// Answer Checking
// ===========================


function answer(selected){


let buttons=document.querySelectorAll(".answerBtn");


buttons.forEach(btn=>{

btn.disabled=true;

});


let feedback=document.getElementById("feedback");



if(selected===quiz[current].correct){


score++;


feedback.innerHTML=`

<p style="color:green;font-weight:bold">

✅ Correct!

</p>

`;

}

else{


feedback.innerHTML=`

<p style="color:red;font-weight:bold">

❌ Incorrect!<br>

Correct answer:
${quiz[current].answers[quiz[current].correct]}

</p>

`;

}



updateProgress();



feedback.innerHTML+=`

<button onclick="nextQuestion()">

Next Question →

</button>

`;

}


// ===========================
// Progress Bar
// ===========================


function updateProgress(){


let percent=Math.round(
(score/quiz.length)*100
);



let fill=document.getElementById("progressFill");

let text=document.getElementById("progressText");



if(fill){

fill.style.width=percent+"%";

}



if(text){

text.innerHTML=percent+"% Complete";

}


}


// ===========================
// Next Question
// ===========================


function nextQuestion(){


current++;


if(current < quiz.length){

loadQuestion();

}

else{

showCertificate();

}


}



// ===========================
// Certificate
// ===========================


function showCertificate(){


let quizBox=document.getElementById("quizBox");


if(score>=8){


quizBox.innerHTML=`

<div class="certificate">

<h1>🏆 Certificate of Achievement</h1>

<h2>Congratulations!</h2>

<p>You completed the Aethera Health Quiz.</p>

<h2>${score}/10</h2>

<button onclick="restartQuiz()">

Restart

</button>

</div>

`;

}


else{


quizBox.innerHTML=`

<h2>Quiz Complete!</h2>

<h3>Your Score: ${score}/10</h3>

<p>Try again to earn your certificate!</p>


<button onclick="restartQuiz()">

Try Again

</button>

`;

}



}


// ===========================
// Restart Quiz
// ===========================


function restartQuiz(){

current=0;

score=0;

updateProgress();

loadQuestion();

}



// Start Quiz

loadQuestion();

updateProgress();
function topSearch(){

let value=document.getElementById("search").value.toLowerCase();


if(value.includes("women")){

document.getElementById("womens-health").scrollIntoView();

}


else if(value.includes("pregnancy")){

document.getElementById("pregnancy").scrollIntoView();

}


else if(value.includes("nutrition")){

document.getElementById("nutrition").scrollIntoView();

}


else if(value.includes("teen")){

document.getElementById("teen-health").scrollIntoView();

}


else if(value.includes("disease")){

document.getElementById("diseases").scrollIntoView();

}


else if(value.includes("first")){

document.getElementById("first-aid").scrollIntoView();

}

}
function updateSleep(hours){

document.getElementById("sleepHours").innerHTML = hours;

localStorage.setItem("sleep", hours);

}