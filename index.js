function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ";" + this.answers[i]);
    }
}

//to know the answer
Question.prototype.checkAnswer =
    function (ans) {
        if (ans === this.correct) {
            console.log("Correct answer!");
        } else {
            console.log("Wrong answer.. Try again!")
        }
    }


var q1 = new Question("Are you Riyike?",
    ["yes", "no"], 0);

var q2 = new Question("Do you know how to code?",
    ["yes", "no"], 1);

var q3 = new Question("Do you use VS_Code?",
    ["yes", "no", "maybe"], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt("Please select the correct answer."));
questions[n].checkAnswer(answer);