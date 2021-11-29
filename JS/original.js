var concluido = true;
var calcAgain = true;
var restart = true;
var valorIlegal = false;

do{
    do {

        alert("Olá, essa calculadora aceita de 1 a 5 notas para calcular sua média. Ao final, você poderá colocar o valor das suas 3 médias e saber se está ou não aprovado, caso você tenha apenas duas médias por hora, o sistema lhe dirá quanto você precisará na última média.");

        do{
            var notas = prompt("Quantas notas serão utilizadas para calcular sua média?");

        if(notas < 1 || notas > 5){

                alert("O valor inserido não é válido. Esta calculadora aceita entre 1 e 5 notas.");

        
        } else if(notas == 1){

            do{
                var n1 = prompt("Qual o valor da nota?");
            }while(n1 < 0 || n1 > 10);
            do{
                var p1 = prompt("Qual o peso da nota?");
            }while(p1 <= 0 || p1 > 10);
            
                var media = function (n1, p1){
                    return (n1 * p1) / p1;
                }
            
                var mediaCalc = media;
                var mediaFinal = mediaCalc(n1, p1);
        
        } else if(notas == 2){

            do{
                var n1 = prompt("Qual o valor da primeira nota?");
            }while(n1 < 0 || n1 > 10);
            do{
                var p1 = prompt("Qual o peso da primeira nota?");
            }while(p1 <= 0 || p1 > 10);
            
            do{
                var n2 = prompt("Qual o valor da segunda nota?");
            }while(n2 < 0 || n2 > 10)
            do{
                var p2 = prompt("Qual o peso da segunda nota?");
            }while(p2 <= 0 || p2 > 10);
            
                var media = function (n1, n2, p1, p2){
                    return (n1 * p1 + n2 * p2) / (p1 * 1 + p2 * 1);
                }
            
                var mediaCalc = media;
                var mediaFinal = mediaCalc(n1, n2, p1, p2);
        
        } else if(notas == 3){

            do{
                var n1 = prompt("Qual o valor da primeira nota?");
            }while(n1 < 0 || n1 > 10);
            do{
                var p1 = prompt("Qual o peso da primeira nota?");
            }while(p1 <= 0 || p1 > 10);
            
            do{
                var n2 = prompt("Qual o valor da segunda nota?");
            }while(n2 < 0 || n2 > 10)
            do{
                var p2 = prompt("Qual o peso da segunda nota?");
            }while(p2 <= 0 || p2 > 10);
            
            do{
                var n3 = prompt("Qual o valor da terceira nota?");
            }while(n3 < 0 || n3 > 10);
            do{
                var p3 = prompt("Qual o peso da terceira nota?");
            }while(p3 <= 0 || p3 > 10);
            
                var media = function (n1, n2, n3, p1, p2, p3){
                    return (n1 * p1 + n2 * p2 + n3 * p3) / (p1 * 1 + p2 * 1 + p3 * 1);
                }
            
                var mediaCalc = media;
                var mediaFinal = mediaCalc(n1, n2, n3, p1, p2, p3);

        } else if(notas == 4){

            do{
                var n1 = prompt("Qual o valor da primeira nota?");
            }while(n1 < 0 || n1 > 10);
            do{
                var p1 = prompt("Qual o peso da primeira nota?");
            }while(p1 <= 0 || p1 > 10);
            
            do{
                var n2 = prompt("Qual o valor da segunda nota?");
            }while(n2 < 0 || n2 > 10)
            do{
                var p2 = prompt("Qual o peso da segunda nota?");
            }while(p2 <= 0 || p2 > 10);
            
            do{
                var n3 = prompt("Qual o valor da terceira nota?");
            }while(n3 < 0 || n3 > 10);
            do{
                var p3 = prompt("Qual o peso da terceira nota?");
            }while(p3 <= 0 || p3 > 10);

            do{
                var n4 = prompt("Qual o valor da quarta nota?");
            }while(n4 < 0 || n4 > 10);
            do{
                var p4 = prompt("Qual o peso da quarta nota?");
            }while(p4 <= 0 || p4 > 10);
            
                var media = function (n1, n2, n3, n4, p1, p2, p3, p4){
                    return (n1 * p1 + n2 * p2 + n3 * p3 + n4 * p4) / (p1 * 1 + p2 * 1 + p3 * 1 + p4 * 1);
                }
            
                var mediaCalc = media;
                var mediaFinal = mediaCalc(n1, n2, n3, n4, p1, p2, p3, p4);

        } else if(notas == 5){

            do{
                var n1 = prompt("Qual o valor da primeira nota?");
            }while(n1 < 0 || n1 > 10);
            do{
                var p1 = prompt("Qual o peso da primeira nota?");
            }while(p1 <= 0 || p1 > 10);
            
            do{
                var n2 = prompt("Qual o valor da segunda nota?");
            }while(n2 < 0 || n2 > 10)
            do{
                var p2 = prompt("Qual o peso da segunda nota?");
            }while(p2 <= 0 || p2 > 10);
            
            do{
                var n3 = prompt("Qual o valor da terceira nota?");
            }while(n3 < 0 || n3 > 10);
            do{
                var p3 = prompt("Qual o peso da terceira nota?");
            }while(p3 <= 0 || p3 > 10);

            do{
                var n4 = prompt("Qual o valor da quarta nota?");
            }while(n4 < 0 || n4 > 10);
            do{
                var p4 = prompt("Qual o peso da quarta nota?");
            }while(p4 <= 0 || p4 > 10);

            do {
                var n5 = prompt("Qual o valor da quarta nota?");
            }while(n5 < 0 || n5 > 10);
            do {
                var p5 = prompt("Qual o peso da quarta nota?");
            }while(p5 <= 0 || p5 > 10);
            
                var media = function (n1, n2, n3, n4, n5, p1, p2, p3, p4, p5){
                    return (n1 * p1 + n2 * p2 + n3 * p3 + n4 * p4 + n5 * p5) / (p1 * 1 + p2 * 1 + p3 * 1 + p4 * 1 + p5 * 1);
                }
            
                var mediaCalc = media;
                var mediaFinal = mediaCalc(n1, n2, n3, n4, n5, p1, p2, p3, p4, p5);
        }

    }while(notas < 1 || notas > 5);

        alert("Sua média final é: " + mediaFinal );

        do {
            var remake = prompt("Deseja inserir novas notas?");

            if(remake == 'S' || remake == 'Sim' || remake == 'SIM' || remake == 's' || remake == 'sim'){

                concluido = true;

            } else if(remake == 'N' || remake == 'Não' || remake == 'Nao' || remake == 'n' || remake == 'não' || remake == 'nao' || remake == 'nn' || remake == 'NN') {

                concluido = false;

            } else if(remake != 'N' || remake != 'Não' || remake != 'Nao' || remake != 'n' || remake != 'não' || remake != 'nao' || remake != 'nn' || remake != 'NN' || remake != 'S' || remake != 'Sim' || remake != 's' || remake != 'sim' || remake != 'ss' || remake != 'SS') {

                valorIlegal = true;

            }
        }while(valorIlegal === true);
    } while(concluido === true);
    

    do{
        var calcularMediasFinais = prompt("Deseja calcular suas médias finais afim de saber se passou ou quanto precisa para passar?");

        if(calcularMediasFinais == 'S' || calcularMediasFinais == 'Sim' || calcularMediasFinais == 'SIM' || calcularMediasFinais == 's' || calcularMediasFinais == 'sim'){

            do{

                var quantidadeMedias = prompt("Quantas medias você possui?");

                if(quantidadeMedias < 1 || quantidadeMedias > 3){
                    alert("O valor inserido não é válido. Essa calculadora aceita entre 1 e 3 médias.")
                }
                if(quantidadeMedias == 1){

                    do{
                    var valorMedia = prompt("Qual o valor da sua única média?");
                    }while(valorMedia < 0 || valorMedia > 10);

                    var calculoDeQuantoFalta = function (valorMedia){
                        return (18 - valorMedia) / 2;
                    }

                    var valorFinal = calculoDeQuantoFalta(valorMedia);

                    alert("Você precisa tirar " + valorFinal + " nas duas últimas médias para passar de ano");

                } else if(quantidadeMedias == 2) {

                    do {
                        var valorMedia1 = prompt("Qual o valor da sua primeira média?");
                    }while(valorMedia1 < 0 || valorMedia1 > 10);

                    do {
                        var valorMedia2 = prompt("Qual o valor da sua segunda média?");
                    }while(valorMedia2 < 0 || valorMedia2 > 10);

                    var calculoDeQuantoFalta = function (valorMedia1, valorMedia2){
                        return valorMedia1*1 + valorMedia2*1;
                    }

                    var valorFinal = calculoDeQuantoFalta(valorMedia1, valorMedia2);

                    if(valorFinal >= 18){

                        alert("Você já atingiu os pontos mínimos para passar de ano, parabéns!");

                    } else {

                        var ultimaMediaNecessaria = 18 - valorFinal;

                        alert("Você precisa tirar " + ultimaMediaNecessaria + " na última média para passar de ano");

                    }

                } else {
                    do {
                        var valorMedia1 = prompt("Qual o valor da sua primeira média?");
                    }while(valorMedia1 < 0 || valorMedia1 > 10);

                    do {
                        var valorMedia2 = prompt("Qual o valor da sua segunda média?");
                    }while(valorMedia2 < 0 || valorMedia2 > 10);
                    
                    do{
                        var valorMedia3 = prompt("Qual o valor da sua terceira média?");
                    }while(valorMedia3 < 0 || valorMedia3 > 10);

                    var calculoDeQuantoFalta = function (valorMedia1, valorMedia2, valorMedia3){
                        return valorMedia1*1 + valorMedia2*1 + valorMedia3*1;
                    }

                    var valorFinal = calculoDeQuantoFalta(valorMedia1, valorMedia2);

                    if(valorFinal >= 18){

                        alert("Você atingiu os pontos mínimos necessários para passar de ano, parabéns!");

                    } else {

                        alert("Infelizmente você não atingiu os pontos mínimos necessários para passar de ano.");

                    }

                }

                do {
                    var remake = prompt("Deseja calcular novamente suas médias finais afim de saber quanto precisa ou se já passou?");
        
                    if(remake == 'S' || remake == 'Sim' || remake == 'SIM' || remake == 's' || remake == 'sim'){
                        concluido = true;
                    } else if(remake != 'N' || remake != 'Não' || remake != 'Nao' || remake != 'n' || remake != 'não' || remake != 'nao' || remake != 'nn' || remake != 'NN' || remake != 'S' || remake != 'Sim' || remake != 's' || remake != 'sim' || remake != 'ss' || remake != 'SS') {
                        valorIlegal = true;
                    } else {
                        calcAgain = false;
                        alert("Obrigado por utilizar essa calculadora, você será redirecionado ao início.");
                    } 
                }while(valorIlegal === true);

            } while(calcAgain === true);

        } else {
            alert("Obrigado por utilizar essa calculadora, você será redirecionado ao início.");
            break;
        }
    }while(calcularMediasFinais != 'N' || calcularMediasFinais != 'Não' || calcularMediasFinais != 'Nao' || calcularMediasFinais != 'n' || calcularMediasFinais != 'não' || calcularMediasFinais != 'nao' || calcularMediasFinais != 'nn' || calcularMediasFinais != 'NN' || calcularMediasFinais != 'S' || calcularMediasFinais != 'Sim' || calcularMediasFinais != 's' || calcularMediasFinais != 'sim' || calcularMediasFinais != 'ss' || calcularMediasFinais != 'SS')
}while(restart === true);