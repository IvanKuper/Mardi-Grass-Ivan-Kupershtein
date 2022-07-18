const questions = [
    {q:"When was the earliest known mardi gras carnival celebration?", a:["1294", "1455", "819", "1870"]}, {q:"What is the signature Mardi Gras dessert?", a:["Blueberry muffin", "King cake", "Brownies", "Belgium waffle"]}, {q:"What is traditionally hidden inside a king cake?", a:["A baked apple", "A box of matches", "Letter with last year sins", "A plastic baby"]}, {q:"Mardi Gras - AKA?", a:["Party Holiday", "Fat Tuesday", "Wet Labrador", "Rain Of Wine"]}, {q:"What does purple signify during Mardi Gras?", a:["Justice", "Freedom", "Love", "Family"]}, {q:"What does green signify during Mardi Gras?", a:["Hope", "Love", "Faith", "Fortune"]}, {q: "What does gold signify during Mardi Gras?", a:["Power", "Bravery", "Adopting", "Lust"]}, {q:"On average, how many people typically visit New Orleans for Mardi Gras every year?", a:["4 million", "12 million", "1.5 million", "900 Thousand"]}, {q:"How many times have Mardi Gras parades been canceled in New Orleans?", a:["Never", "1", "5", "13"]}, {q:"If you get the baby in your slice of king cake at a Mardi Gras party, you traditionally have to what?", a:["Kiss a frog", "Buy next year’s cake or host next year’s party", "Paint the local tavern", "Scream Bingo!"]}
]
const correctAnswers = [
    "1294", "King cake", "A plastic baby", "Fat Tuesday", "Justice", "Faith", "Power", "1.5 million", "13", "Buy next year’s cake or host next year’s party"
]

var questionCount
var strikeIndicator
var time
var startTimer
var correctAnswersIndicator
var shuffledQuestions 

var strikeMonitor = document.getElementById("strikes")
var timeElement = document.getElementById("time")
var triviaSection = document.getElementById("trivia-section")

function startTrivia(){
    clearInterval(startTimer)
    questionCount = 0
    strikeIndicator = 0
    time = 90
    correctAnswersIndicator = 0
    shuffledQuestions = questions.sort((x, y) => 0.5 - Math.random());
    startTimer = setInterval(minusOneSecond, 1000);

    timeElement.innerHTML = `${time} sec`
    timeElement.style.color = "black"
    strikeMonitor.style.color = "black"
    triviaSection.style.visibility = "visible"
    
    document.getElementById("starter-frame").style.visibility = "hidden"
    document.getElementById("time-over").style.visibility = "hidden"
    document.getElementById("mistake-limit-over").style.visibility = "hidden"
    document.getElementById("finish-line").style.visibility = "hidden"
    switchQuestion()
}
function switchQuestion(){
    if(questionCount == correctAnswers.length){
        endGame()
    }
    else{
        let shuffledAnswers = shuffledQuestions[questionCount].a.sort((x, y) => 0.5 - Math.random());

        strikeMonitor.innerHTML = strikeIndicator
        document.getElementById("answers").innerHTML = ""
        document.getElementById("progress").innerHTML = `${questionCount+1}/10`
        document.getElementById("question").innerHTML = shuffledQuestions[questionCount].q
        for (let i = 0; i < 4; i++) {
            document.getElementById("answers").innerHTML += `<div class="col-12 col-md-6"><button class="answer" onclick="answerClicked(event)">${shuffledAnswers[i]}</button></div>`
        }
        questionCount++
    }
}
function minusOneSecond(){
    let bgColor =  time < 12 ? "red" : "black"
    if (time == 0) {
        setTimeout(endGame, 300)
    }
    else{
        timeElement.style.color = bgColor
        time--
        timeElement.innerHTML = `${time}`+' '+'sec'
    }
}
function answerClicked(event){
    let bgColor =  strikeIndicator > 1 ? "red" : "black"
    let theClickContent = event.target.innerHTML
    if (correctAnswers.includes(theClickContent)) {
        event.target.style.backgroundColor = "green"
        setTimeout(switchQuestion, 1000)
        correctAnswersIndicator++
    }
    else{
        strikeIndicator++
        strikeMonitor.innerHTML = strikeIndicator
        strikeMonitor.style.color = bgColor
        event.target.style.backgroundColor = "red"

        if (strikeIndicator == 5) {
            setTimeout(endGame, 500)
        } 
    }
    
}
function endGame(){
    if (questionCount == correctAnswers.length) {
        triviaSection.style.visibility = "hidden"
        document.getElementById("finish-line").style.visibility = "visible"
        document.getElementById("score").innerHTML = `${strikeIndicator}  mistakes`
    }
    else if (strikeIndicator >= 5){
        triviaSection.style.visibility = "hidden"
        document.getElementById("mistake-limit-over").style.visibility = "visible"
        document.getElementById("mistake-amount-after-mistake-limit").innerHTML = `you answered ${correctAnswersIndicator} questions correctly`
    }
    else {
        triviaSection.style.visibility = "hidden"
        document.getElementById("time-over").style.visibility = "visible"
        document.getElementById("mistake-amount-after-time").innerHTML = `you answered ${correctAnswersIndicator} questions correctly`
        timeElement.style.color = bgColor
    }
}
