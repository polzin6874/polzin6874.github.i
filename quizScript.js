
function checkAnswers()
{
    var score=0;
    var feedback=[];
    var thanos=[];
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    var Q5Answer = document.quiz.a5.value.toLowerCase();
    if (Q1Answer === 'backstroke')
    {
        score++;
        feedback.push(" Question 1 is Correct");
    }
    else
    {
        feedback.push(" Incorrect! Question 1 was Backstroke");
    }

    if (document.quiz.a2.value === 'Rust')
    {
        score++;
        feedback.push(" Question 2 is Correct");
    }
    else
    {
        feedback.push(" Incorrect! Question 2 was Rust");
    }

    if (document.quiz.a3.value === 'Packers')
    {
        score++;
        feedback.push(" Question 3 is Correct");
    }
    else
    {
        feedback.push(" Incorrect! Question 3 was the Packers! Duh");
    }

    if(document.quiz.a4A.checked === true && document.quiz.a4B.checked === true && document.quiz.a4C.checked === false && document.quiz.a4D.checked === false && document.quiz.a4E.checked === true && document.quiz.a4F.checked === true)
    {
        score++;
        feedback.push(" Question 4 is Correct");
    }
    else
    {
        feedback.push(" Incorrect! Question 4 was Computer Science, Math, German, and World Geography");
    }

    if (Q5Answer === 'jack')
    {
        score++;
        feedback.push(" Question 5 is Correct");
    }
    else
    {
        feedback.push(" Incorrect! Question 5 was Jack");
    }

    if (document.quiz.a6.value === 'Thor')
    {
        score++;
        feedback.push(" Question 6 is Correct");
    }
    else if (document.quiz.a6.value === 'Thanos')
    {
        thanos.push("You should have gone for the head!");
        score = score/2;
        alert(thanos);
        alert("*snaps* (score divided by 2!)");
        feedback.push(" Incorrect! Question 6 is Thor");
    }
    else
    {
        feedback.push(" Incorrect!! Question 6 is Thor");
    }
    return feedback +". Your score was " + score + "!";
}