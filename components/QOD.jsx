// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function(){
    const surveyJson = {
        title: "Lifeguard Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lifeguard Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question1",
                title: "What is the most common cause of lifeguard injuries?",
                choices: [
                    "Slip and fall accidents", "Pool chemicals", "Sunburns", "Sharks"
                ],
                correctAnswer: "Slip and fall accidents"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question2",
                title: "What is the recommended amount of sunscreen to apply before starting a lifeguard shift?",
                choicesOrder: "random",
                choices: [
                    "1 teaspoon", "1 tablespoon", "1 cup", "1 gallon"
                ],
                correctAnswer: "1 tablespoon"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question3",
                title: "What is the minimum number of lifeguards required on duty during peak hours?",
                choicesOrder: "random",
                choices: [
                    "1", "2", "5", "10"
                ],
                correctAnswer: "2"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question4",
                title: "What is the recommended frequency for pool chemical testing?",
                choicesOrder: "random",
                choices: [
                    "Daily",
                    "Weekly",
                    "Monthly",
                    "Never"
                ],
                correctAnswer: "Daily"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question5",
                title: "What is the recommended way for lifeguards to stay hydrated during their shift?",
                choicesOrder: "random",
                choices: [
                    "Drink soda",
                    "Drink coffee",
                    "Drink water",
                    "Drink alcohol"
                ],
                correctAnswer: "Drink water"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question6",
                title: "How long should it take a lifeguard to scan their designated area of surveillance?",
                choicesOrder: "random",
                choices: [
                    "10-30 seconds",
                    "10-30 minutes",
                    "45-60 seconds",
                    "2-3 minutes"
                ],
                correctAnswer: "10-30 seconds"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question7",
                title: "What is the recommended procedure for entering the water during a water rescue?",
                choicesOrder: "random",
                choices: [
                    "Run and jump in the water",
                    "Dive headfirst into the water",
                    "Walk slowly into the water",
                    "Feet first in a compact, streamlined position"
                ],
                correctAnswer: "Feet first in a compact, streamlined position"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question8",
                title: "What is the recommended ratio of lifeguards to swimmers in a swimming pool?",
                choicesOrder: "random",
                choices: [
                    "1:5",
                    "1:10",
                    "1:25",
                    "1:100"
                ],
                correctAnswer: "1:25"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question9",
                title: "What is the recommended level of CPR certification for lifeguards?",
                choicesOrder: "random",
                choices: [
                    "Basic first aid",
                    "Emergency first aid with CPR-B",
                    "Standard first aid with CPR-C",
                    "Airway management"
                ],
                correctAnswer: "Standard first aid with CPR-C"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question10",
                title: "What is the recommended water temperature for most public swimming pools?",
                choicesOrder: "random",
                choices: [
                    "10-15 degrees Celsius",
                    "20-25 degrees Celsius",
                    "30-35 degrees Celsius",
                    "Frozen"
                ],
                correctAnswer: "20-25 degrees Celsius"
            }]
        }],
        
        completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
        completedHtmlOnCondition: [{
            expression: "{correctAnswers} == 0",
            html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
        }, {
            expression: "{correctAnswers} == {questionCount}",
            html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
        }]
    };
    
    const survey = new Model(surveyJson);

    survey.onComplete.add(function(sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}