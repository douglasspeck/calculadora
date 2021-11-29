function getValues() {

    var grades = new Array();
    var weights = new Array();
    var num_grade = 0;
    var has_error = false;

    for (let i = 0; i < 3; i++) {

        let number = i + 1;
        let name = "grade-" + number;
        let grade = document.getElementById(name).value;
        name = "weight-" + number;
        let weight = document.getElementById(name).value;

        if (grade != "" && weight != "") {

            if (grade >= 0 && grade <= 10) {

                if (weight >= 0 && weight <= 10) {

                    grades.push(grade);
                    weights.push(weight);
                    num_grade++;

                } else {
                    console.log("ERROR: The weight should be a number between 0 and 10.");
                    has_error = true;
                }

            } else {
                console.log("ERROR: The grade should be a number between 0 and 10.");
                has_error = true;
            }

        }

    }

    if (num_grade >= 3) {

        console.log("Grades: " + grades);
        console.log("Weights: " + weights);

        return {grades, weights};

    } else if (has_error == false) { console.log("ERROR: You should write at least three grades.") }

}

function calculate() {

    let values = getValues();
    var grades = values.grades;
    var weights = values.weights;

    let index = 0;
    let a, b = 0;
    
    grades.forEach(function(){

        a = a + parseInt(grades[index]) * parseInt(weights[index]);
        b = b + parseInt(weights[index]);

        index++;

    });

    console.log("a: " + a);
    console.log("b: " + b);

    var average = a/b;
    average.toFixed(2);

    console.log("Success! The calculated average is: " + average + ".");

}