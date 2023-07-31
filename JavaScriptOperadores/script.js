function boasVindas(){
let nome;
let sobrenome;
nome = prompt("Digite o Seu Nome","Digite Aqui");
sobrenome = prompt("Digite o Seu Sobrenome","Digite Aqui");


alert("Olá "+nome +""+sobrenome);
} 

function somarNumeros(){
    let numero1, numero2, soma ;
    numero1 = prompt("Digite um n°")
    numero2 = prompt("Digite outro n°")
    
    soma = parseInt(numero1)+parseInt(numero2);

    alert(numero1+ " + "+numero2+" = "+soma)

 }
 

 function divNumero(){
    let numero1,soma ;
    let numero2=0;
    numero1 = prompt("Digite um n°")
    while(numero2=0){
        alert("digite um n° diferente de zero");
    numero2 = prompt("Digite outro n°")
    }
    if(numero2!=0){
        soma = parseInt(numero1)/parseInt(numero2);
        alert(numero1 + " / "+numero2+ " = " +soma)
    }else{
        alert("não é possível fazer a operação")
    }

 }
 


