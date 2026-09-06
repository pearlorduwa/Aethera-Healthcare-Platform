// ======================================
// FAQ ACCORDION
// ======================================

const questions = document.querySelectorAll(".faqQuestion");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            document.querySelectorAll(".faqAnswer").forEach(item=>{
                item.style.display="none";
            });

            answer.style.display="block";

        }

    });

});

// ======================================
// WOMEN'S HEALTH QUIZ
// ======================================

const quiz = [

{
question:"What is the average length of a menstrual cycle?",
answers:["7–10 days","21–35 days","40–50 days","60 days"],
correct:1
},

{
question:"Which nutrient helps reduce the risk of iron-deficiency anemia?",
answers:["Protein","Iron","Sugar","Sodium"],
correct:1
},

{
question:"PCOS mainly affects which system?",
answers:["Respiratory","Hormonal","Digestive","Nervous"],
correct:1
},

{
question:"Which habit may help reduce menstrual cramps for many people?",
answers:["Drinking less water","Light exercise","Skipping meals","Sleeping only 4 hours"],
correct:1
},

{
question:"When should someone seek medical advice about their period?",
answers:[
"If bleeding is extremely heavy or pain is severe",
"Only once every year",
"Never",
"Only if they have a cold"
],
correct:0
}

];

let currentQuestion = 0;
let score = 0;
let answered = false;

loadQuestion();

function loadQuestion(){

answered = false;

const q = quiz[currentQuestion];

document.getElementById("quizProgress").innerHTML =
`Question ${currentQuestion+1} of ${quiz.length}`;

let html = `<h3>${q.question}</h3>`;

q.answers.forEach((answer,index)=>{

html +=

`<button class="answerBtn"
onclick="checkAnswer(${index},this)">
${answer}
</button>`;

});

html += `<div id="feedback" style="margin-top:20px;font-weight:bold;"></div>`;

document.getElementById("quizBox").innerHTML = html;

}

function checkAnswer(choice,button){

if(answered) return;

answered = true;

const buttons = document.querySelectorAll(".answerBtn");

buttons.forEach(btn=>btn.disabled=true);

const feedback = document.getElementById("feedback");

if(choice===quiz[currentQuestion].correct){

score++;

button.style.background="#2ecc71";
button.style.color="white";

feedback.innerHTML="✅ Correct! Great job.";

}else{

button.style.background="#e74c3c";
button.style.color="white";

buttons[quiz[currentQuestion].correct].style.background="#2ecc71";
buttons[quiz[currentQuestion].correct].style.color="white";

feedback.innerHTML="❌ Not quite. The correct answer is highlighted in green.";

}

}

document.getElementById("nextBtn").addEventListener("click",()=>{

if(!answered){

alert("Please choose an answer before moving on.");

return;

}

currentQuestion++;

if(currentQuestion>=quiz.length){

showCertificate();

}else{

loadQuestion();

}

});

// ======================================
// CERTIFICATE
// ======================================

function showCertificate(){

let percent = Math.round(score/quiz.length*100);

localStorage.setItem("womenQuiz",percent);

let html="";

if(score>=4){

html=`

<div class="certificate">

<h1>🏆 Certificate of Achievement</h1>

<h2>Congratulations!</h2>

<p>

You successfully completed the
Aethera Women's Health Quiz.

</p>

<h3>Score: ${score}/${quiz.length}</h3>

<p>

You have demonstrated a strong understanding of women's health basics.

</p>

<button onclick="location.reload()">

Take Quiz Again

</button>

</div>

`;

}else{

html=`

<h2>Quiz Complete</h2>

<h3>Your Score: ${score}/${quiz.length}</h3>

<p>

Keep learning and try again to earn your certificate!

</p>

<button onclick="location.reload()">

Try Again

</button>

`;

}

document.getElementById("quizBox").innerHTML=html;

document.getElementById("quizProgress").innerHTML="Completed";

document.getElementById("nextBtn").style.display="none";

}

// ======================================
// PERIOD SYMPTOM CHECKER
// ======================================

document.getElementById("tipsButton").addEventListener("click",()=>{

const checked = document.querySelectorAll(
".checks input:checked"
);

const symptoms = [];

checked.forEach(item=>{

symptoms.push(item.value);

});

let tips = "<h3>Your Health Tips</h3><ul>";

if(symptoms.includes("cramps")){

tips += "<li>💜 Try a warm compress and gentle stretching.</li>";

}

if(symptoms.includes("fatigue")){

tips += "<li>😴 Rest well and eat iron-rich foods.</li>";

}

if(symptoms.includes("headache")){

tips += "<li>💧 Stay hydrated and avoid skipping meals.</li>";

}

if(symptoms.includes("bloating")){

tips += "<li>🥗 Reduce salty foods and drink plenty of water.</li>";

}

if(symptoms.includes("mood")){

tips += "<li>🧘 Practice relaxation, deep breathing, or light exercise.</li>";

}

if(symptoms.length===0){

tips += "<li>Select one or more symptoms to receive tips.</li>";

}

tips += "</ul>";

tips += `

<p style="margin-top:20px;">

<strong>Reminder:</strong>
If symptoms are severe, unusual, or persistent,
please consult a qualified healthcare professional.

</p>

`;

document.getElementById("tipsResult").innerHTML = tips;

});

// ======================================
// SCROLL ANIMATION
// ======================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="1s";

observer.observe(section);

});