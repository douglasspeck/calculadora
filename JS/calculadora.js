/*
file:           calculadora.js
developed by:   Douglas Speck
original in:    github.com/douglasspeck/calculadora
*/

// Coleta os valores dos campos input e retorna dois arrays: grades[] e weights[]

var rows = 3;

function getValues() {

    var grades = new Array();
    var weights = new Array();
    var num_grade = 0;
    var has_error = false; // Essa variável indica que algum erro ocorreu, interrompendo a função

    for (let i = 0; i < rows; i++) {

        let number = i + 1;
        let name = "grade-" + number; // Seleciona os inputs na forma grade-n
        let grade = document.getElementById(name).value;
        name = "weight-" + number; // Seleciona os inputs na forma weight-n
        let weight = document.getElementById(name).value;

        if (weight != "") { // Detecta se há notas sem peso

            if (grade >= 0 && grade <= 10) { // Detecta se o valor da nota está entre 0 e 10

                if (weight >= 0 && weight <= 10) { // Detecta se o valor do peso está entre 0 e 10

                    grades.push(grade);
                    weights.push(weight);
                    num_grade++; // Conta o número de linhas não-vazias

                } else {
                    console.log("ERROR: The weight should be a number between 0 and 10.");
                    alert("ERRO: O peso deve ser um valor entre 0 e 10.");
                    has_error = true;
                    break;
                }

            } else {
                console.log("ERROR: The grade should be a number between 0 and 10.");
                alert("ERRO: A nota deve ser um valor entre 0 e 10.");
                has_error = true;
                break;
            }

        } else if (grade != "") {
            console.log("ERROR: You should provide a weight for every grade.");
            alert("ERRO: Você deve inserir um peso para cada nota.");
            has_error = true;
            break;
        }

    }

    if (num_grade > 0) { // A função somente retorna a média se houver ao menos uma linha preenchida

        console.log("Grades: " + grades);
        console.log("Weights: " + weights);

    } else if (has_error == false) {
        console.log("ERROR: You should write at least one grade.");
        alert("ERRO: Você deve inserir ao menos uma nota.");
        has_error = true;
    }

    return {grades, weights, has_error};

}

/* Arredonda um número decimal para um determinado número de casas decimais:

    * decimal       -> Número a ser arredondado
    * num_houses    -> Número de casas após a vírgula

*/
function reduce(decimal, num_houses) {

    let pow = Math.pow(10,num_houses); // Eleva 10 à potência escolhida

    let reduced = Math.round(decimal * pow) / pow; // Multiplica, arredonda e divide

    return reduced; // Retorna o valor desejado

}

// Seja lá quem estiver lendo, me desculpa por essa função.
function braNum(num) {

    let brazilian = num.toString().replace(".",",");

    return brazilian;

}

function calculate() {

    let values = getValues(); // Puxa os valores dos inputs
    var grades = values.grades;
    var weights = values.weights;

    if (values.has_error == false) { // Somente executa a função se não há erros

        let index = 0;
        let a = 0;
        let b = 0;
        
        grades.forEach(function(){ // Repete recursivamente de acordo com o número de linhas

            a += parseInt(grades[index]) * parseInt(weights[index]); // Dividendo: soma das (notas * pesos)
            b += parseInt(weights[index]); // Divisor: soma dos pesos

            index++;

        });

        var average = a/b;
        average = reduce(average, 2); // Arredonda para duas casas decimais
        average = braNum(average); // Troca o ponto por uma vírgula

        console.log("Success! The calculated average is: " + average + ".");
        alert("Sucesso! Sua média é: " + average);

    }

}

function moreGrades() {

    var rowNumber = rows + 1;
    const inputTypes = [["grade", "weight"],["Avaliação","Peso"]];

    let index = 0;

    inputTypes.forEach(function(){

        var newRow = document.createElement("div");
        document.getElementById("grades-container").appendChild(newRow);
        newRow.className = "grade";
        
        var label = document.createElement("label");
        label.htmlFor = inputTypes[0][index] + "-" + rowNumber;
        label.innerHTML = inputTypes[1][index] + " " + rowNumber + ":";
        newRow.appendChild(label);
    
        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.id = inputTypes[0][index] + "-" + rowNumber;
        input.setAttribute("name", inputTypes[0][index] + "-" + rowNumber);
        input.setAttribute("min", "0");
        input.setAttribute("max", "10");
        input.setAttribute("placeholder", "Insira um valor entre 0 e 10.");
        newRow.appendChild(input);

        index++;

    });

    rows++;

}

function lessGrades() {

    for (let i = 0; i < 2; i++) {
        var container = document.getElementById("grades-container");
        container.removeChild(container.lastElementChild);
    }

    rows--;

}