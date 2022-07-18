window.onload = function () {

    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea = document.getElementsByClassName('answers')[0],
        checker = document.getElementsByClassName('checker')[0],
        current = 0,

        allQuestions = {
            'The success of a Mardi Gras parade is measured in what?': ['People', 'Trash', 'Masks', 1],

            'Early Mardi Gras celebrations in Mobile, Alabama, featured what kind of animal?': ['Bull', 'Cat', 'Dog', 0],

            'Ivrea, Italy, marks Mardi Gras celebrations with a battle of which famous fruit? ': ['Oranges', 'Apple', 'Banana', 0],

            'Germany starts their carnival season at what time on what day? ': ['Thursday', 'Monday', 'Saturday', 0],

            'hen did Louisiana declare Fat Tuesday a state holiday?': ['1850', '1875', '1970', 1],

            'How many times have Mardi Gras parades been canceled in New Orleans? ': ['17', '13', '15', 1],

            'Germany traditionally marks which day before post-carnival fasting as “Greasy? ': ['Friday', 'Thursday', 'Sunday', 2],

            'Which NFL quarterback served as King Bacchus in New Orleans Mardi Gras? ': ['Walter Payton', 'Drew Brees', '	Lawrence Taylor', 2],

            'When was Mardi Gras first declared a holiday in general? ': ['1550', '1582', '1970', 1],

            'After Mardi Gras parades were canceled for 2021 in New Orleans, what did krewes decorate instead of floats? ': ['Boats', 'Houses', 'Cars', 1],

        };

    function loadQuestion(curr) {
        var question = Object.keys(allQuestions)[curr];

        questionArea.innerHTML = '';
        questionArea.innerHTML = question;
    }

    function loadAnswers(curr) {


        var answers = allQuestions[Object.keys(allQuestions)[curr]];

        answerArea.innerHTML = '';

        for (var i = 0; i < answers.length - 1; i += 1) {
            var createDiv = document.createElement('div'),
                text = document.createTextNode(answers[i]);

            createDiv.appendChild(text);
            createDiv.addEventListener("click", checkAnswer(i, answers));


            answerArea.appendChild(createDiv);
        }
    }

    function checkAnswer(i, arr) {


        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length - 1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
            } else {
                addChecker(false);
            }

            if (current < Object.keys(allQuestions).length - 1) {
                current += 1;

                loadQuestion(current);
                loadAnswers(current);
            } else {
                questionArea.innerHTML = 'Done';
                answerArea.innerHTML = '';
            }

        };
    }

    function addChecker(bool) {
        var createDiv = document.createElement('div'),
            txt = document.createTextNode(current + 1);

        createDiv.appendChild(txt);

        if (bool) {

            createDiv.className += 'correct';
            checker.appendChild(createDiv);
        } else {
            createDiv.className += 'false';
            checker.appendChild(createDiv);
        }
    }

    loadQuestion(current);
    loadAnswers(current);

};