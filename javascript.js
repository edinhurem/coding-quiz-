const nextButton = document.getElementById('next-btn');

const startButton = document.getElementById('start-btn');

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');

const answerButtonsElement = document.getElementById('answer-buttons')

let counter = 50;

let interval, shuffledQuestions, currentQuestionIndex;

let i = 0;

 

function startGame(){

   

    console.log('starteddd')

    startButton.classList.add('hide')

    questionContainerElement.classList.remove('hide')

    shuffledQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0;

    setNextQuestion()

    const timer = document.querySelector('.timer');

    const countTime = setInterval(function () {

        counter--;

        timer.innerHTML = + counter;

        if (counter <= 0) {

            alert('end of quiz')

            clearInterval(countTime);

        }

    }, 1000)

}

 

function setNextQuestion(){

    resetState()

    showQuestion(shuffledQuestions[currentQuestionIndex])

}

 

function showQuestion(question){

    questionElement.textContent = question.question;

    question.answers.forEach(answer => {

        const button = document.createElement('button')

        button.textContent = answer.text

        button.classList.add('btn')

        if(answer.correct){

            button.dataset.correct = answer.correct

        }

        button.addEventListener('click', selectAnswer)

        answerButtonsElement.appendChild(button)

    })

}

 

function resetState(){

    nextButton.classList.add('hide')

    while(answerButtonsElement.firstChild){

        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }

}

 

function selectAnswer(e){

    const selectedButton = e.target

    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)

    Array.from(answerButtonsElement.children).forEach(button =>{

        setStatusClass(button, button.dataset.correct)

    })

    if(shuffledQuestions.length > currentQuestionIndex + 1){

        nextButton.classList.remove('hide')

    }else{

        counter = 0;

        alert('end of quiz')

        startButton.classList.remove('hide')

    }

   

 

}

 

function setStatusClass(element, correct){

    clearStatusClass(element)

    if(correct){

        element.classList.add('correct')

    }else{



        element.classList.add('wrong')

    }

}

 

function clearStatusClass(element){

    element.classList.remove('correct')

    element.classList.remove('wrong')

}

 

    function startCounter(){

            quiz.style.display = "block"

            interval = setInterval(function() {

            counter.innerHTML= i++;

        }, 1000);

    }

 

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', ()=>{

    currentQuestionIndex++

    setNextQuestion()

})

 

const questions = [

    {

      question: "What is HTML:",

      answers: [

          {text:"Event Listener", correct: false},

          {text:"designed to be a minimalist replacement for Moment.js, using a similar API", correct:false},

          {text:"Is the code that is used to structure a web page and its content", correct: true}

      ]

    },

 

    {

      question: "What is JavaScript:",

      answers: [

          {text:"Local Storage Object", correct: false},

          {text:"Data text", correct:false},

          {text:"is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive", correct: true}

      ]

    },

   

    {

      question: "Href attribute is used with <a> to specify:?",

      answers: [

          {text: "URL", correct: true},
          {text:"Document.querySelectorAll", correct:false},

          {text:"Document.createElement", correct: false}

      ]

    },


  ];

 



 



