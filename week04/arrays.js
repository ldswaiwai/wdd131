const steps = ['one', 'two', 'three'];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;  
});
document.getElementById("myList").innerHTML = stepsHtml.join();

const grades = ['A', 'B', 'A'];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    }else if (grade ==='B') {
        points = 3;  
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

const gpa = gpaPoints.reduce((total, item) => total + item) /gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const newfruits = fruits.map((fruit) => fruit.length>6);

const values = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = values.indexOf(luckyNUmber);