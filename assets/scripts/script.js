/*  https://www.welovequizzes.com/countries-of-the-world-quiz-questions-and-answers/ */

let currentQuestion = 0;
let currentScore = 0;

/**
 * List of questions
 */

let questionList = [{
    questionText: 'What is the smallest country in the world with an area of only 0.49 square kilometres?',
    alternatives: ['Monaco', 'Vatican', 'Andorra'],
    answer: 1
},

{
    questionText: 'What is the second-largest country in the world after Russia?',
    alternatives: ['China', 'USA', 'Canada'],
    answer: 2
},

{
    questionText: 'Which of the following is a landlocked country, meaning it is not bordered by the sea or ocean?',
    alternatives: ['Kazakhstan', 'Madagascar', 'Turkey'],
    answer: 0
},

{
    questionText: 'Which of the following countries is not in Central America?',
    alternatives: ['Cuba', 'Mexic', 'Uruguay'],
    answer: 2
},

{
    questionText: 'Which of the following countries has the largest Muslim population in the world?',
    alternatives: ['Saudi Arabia', 'Indonesia', 'Iran'],
    answer: 1
},

{
    questionText: 'Which European country is divided into administrative divisions called departments?',
    alternatives: ['France', 'Spain', 'Portugal'],
    answer: 0
},

{
    questionText: 'Which of the following countries is shaped like a high heel boot?',
    alternatives: ['Chile', 'Finland', 'Italy'],
    answer: 2
},

{
    questionText: 'Mouth Kilimanjaro, the highest mountain in Africa, is located in which country?',
    alternatives: ['Kenya', 'Tanzania', 'Lesotho'],
    answer: 1
},

{
    questionText: 'In which country can you visit Machu Picchu, which used to be the citadel of the Inca Empire?',
    alternatives: ['Guatemala', 'Peru', 'Bolivia'],
    answer: 1
},

{
    questionText: 'Pho, which contains beef, herbs, rice noodles, and broth, is a traditional dish in which Asian country?',
    alternatives: ['Cambodia', 'Vietnam', 'Malaysia'],
    answer: 1
},

{
    questionText: 'Which of the following countries is often regarded as the oldest republic in the world?',
    alternatives: ['Greece', 'Italy', 'San Marino'],
    answer: 2
},
{
    questionText: 'Which country will host the 2024 Olympics Summer Games?',
    alternatives: ['France', 'Australia', 'Japan'],
    answer: 0
},

{
    questionText: 'Which country has the most islands in the world with more than 221,800?',
    alternatives: ['Canada', 'Norway', 'Sweden'],
    answer: 2
},

{
    questionText: 'Which country is often called Land of Rising Sun?',
    alternatives: ['China', 'Japan', 'South Korea'],
    answer: 1
},

{
    questionText: 'On 15 August 1947, British India was separated into India and which modern-day country?',
    alternatives: ['Pakistan', 'Bangladesh', 'Nepal'],
    answer: 0
},

{
    questionText: 'Which country in eastern Europe used to be known as White Russia?',
    alternatives: ['Ukraina', 'Belarus', 'Bulgaria'],
    answer: 1
},

{
    questionText: 'Kimono is the national dress of which country?',
    alternatives: ['South Korea', 'China', 'Japan'],
    answer: 2
},

{
    questionText: 'Guitar is originated from which country in the 16th century?',
    alternatives: ['Greece', 'France', 'Spain'],
    answer: 2
},

{
    questionText: 'What is the most populous country in the European Union?',
    alternatives: ['Russia', 'Germany', 'France'],
    answer: 1
},

{
    questionText: 'Which two nations share the longest border in the world?',
    alternatives: ['USA and Canada', 'China and Russia', 'Brazil and Argentina'],
    answer: 0
},

{
    questionText: 'Which of the following island countries is located on the Pacific Ocean?',
    alternatives: ['Tuvalu', 'Jamaica', 'Malta'],
    answer: 0
},
{
    questionText: 'Dirham is the official currency of which country?',
    alternatives: ['Iraq', 'Egypt', 'United Arab Emirates'],
    answer: 2
},

{
    questionText: 'The unicorn is the official national animal of which country?',
    alternatives: ['Wales', 'Northern Ireland', 'Scotland'],
    answer: 2
},

{
    questionText: 'Which of the following countries is not a Nordic country?',
    alternatives: ['Iceland', 'Russia', 'Denmark'],
    answer: 1
},

{
    questionText: 'What is the only country in the world that has a national flag that is not rectangular?',
    alternatives: ['Nepal', 'Switzerland', 'Kyrgyzstan'],
    answer: 0
},

{
    questionText: 'What is the first country in the world to grant the vote to women?',
    alternatives: ['Australia', 'New Zealand', 'Canada'],
    answer: 1
},

{
    questionText: 'Which country was called Santiago when Christopher Columbus first discovered it in 1494?',
    alternatives: ['Panama', 'Cuba', 'Jamaica'],
    answer: 2
},

{
    questionText: 'The Nobel Peace Prize is held every year in which country?',
    alternatives: ['Denmark', 'Sweden', 'Norway'],
    answer: 2
},

{
    questionText: 'In which country do people say “Shalom” to greet people?',
    alternatives: ['Israel', 'Egypt', 'Jordan'],
    answer: 0
},

{
    questionText: 'Which country is the current world’s leader in coffee exporting?',
    alternatives: ['Indonesia', 'Colombia', 'Brazil'],
    answer: 2
},

{
    questionText: 'Which modern-day country is considered to be the successor of the Ottoman Empire?',
    alternatives: ['Lebanon', 'Turkey', 'Jordan'],
    answer: 1
},

{
    questionText: '“God Save the Queen” is the national anthem of which country?',
    alternatives: ['Vatican', 'France', 'The United Kingdom'],
    answer: 2
},

{
    questionText: 'Which is the newest member of the United Nations, which declared its independence in 2011?',
    alternatives: ['South Sudan', 'Kosovo', 'East Timor'],
    answer: 0
},

{
    questionText: 'The Chernobyl disaster, which is considered the worst nuclear accident in history in terms of casualties and cost, occurred in 1986 in which country?',
    alternatives: ['Ukraine', 'Russia', 'Moldova'],
    answer: 0
},

{
    questionText: 'In which country can you find the “Door to Hell”, a natural gas pit that has been on fire since 1971?',
    alternatives: ['Georgia', 'Azerbaijan', 'Turkmenistan'],
    answer: 2
},

{
    questionText: 'The Strait of Gibraltar separates Spain and Portugal from which country?',
    alternatives: ['Tunisia', 'Morocco', 'Algeria'],
    answer: 1
},

{
    questionText: 'In which of the following country do people drive their vehicles on the left of the road?',
    alternatives: ['China', 'Estonia', 'Australia'],
    answer: 2
},

{
    questionText: 'In which country was the first national park in the world was established in 1872?',
    alternatives: ['The United States', 'France', 'Germany'],
    answer: 0
}];


/**
 * Start quiz when user hit start
 * Alter HTML to launch question and alternatives
*/


var quizArea = document.getElementById('game-area');
var question = document.getElementById('questionDiv');
var alternative1 = document.getElementById('alt1');
var alternative2 = document.getElementById('alt2');
var alternative3 = document.getElementById('alt3');


function startQuiz() { // event listener for start button
    
    quizArea.innerHTML = `
        <div onload="loaded()"; id="questionDiv">
        ${questionList[0].questionText}
        </div>

        <button onclick="alt1();" id="alt1" class="alt1 alt-button" aria-label="Alternative 1">
        ${questionList[0].alternatives[0]}
        </button>
        
        <button onclick="alt2();" id="alt2" class="alt2 alt-button" aria-label="Alternativ 2">
        ${questionList[0].alternatives[1]}
        </button>

        <button onclick="alt3();" id="alt3" class="alt3 alt-button" aria-label="Alternative 3">
        ${questionList[0].alternatives[2]}
        </button>


        <div class="footer">
            <div class="score-counter">
            </div>
            
            <button onclick="nextQuestion();" class="next-button">Next</button>
            
        </div>         
    `;
}

function nextQuestion() {
    currentQuestion = 1;
    question.innerHTML = questionList[currentQuestion].questionText;

}

/**
* Pull next question from array
*/  
/*
function nextQuestion() { // event listener for the next button
    let question = document.getElementById('questionDiv');
    let arrayLength = questionList.length;

    for (let i = 0; i < arrayLength; i++) {
        arrayLength.questionText;
        
    }
    question.innerText = questionList[0].questionText;

}


/**
* Pull next question from array
*/  

/*
let arrayLength = questionList.length;

function nextQuestion() {
    for (i = 0; i < arrayLength; i++) {
        questionList[i].questionText;

    console.log(arrayLength); // Control output    
    }
}
*/


/**
 * Correct answer validator
 */


/*
let correctAnswer = questionList[0].answer

function answerValidator() {
    if questionList.alternatives[0] === questionList.answer
} else {
    questionList.alternatives[1] === questionList.answer
} else {
    questionList.alternatives[2] === questionList.answer
}
    
*/



/*
function alt1() {
console.log("test 1");
}
function alt2() {
console.log("test 2");
}
function alt3() {
    console.log("test 3");

}
*/


 /**
  * Score board 
  */




