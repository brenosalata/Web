
function mensagem(){
    var nome = prompt("Digite seu nome: ");
    alert("Bem vinda(o), "+ nome +"!"+ "\nEsse quiz tem o objetivo de testar seu conhecimento em tecnologia!" +
    "\n100% = Excelente \n80% = Ótimo \n60% = Bom\n- 50% = Tente melhorar! " 
    +"\n \n-- Boa Sorte! --");
    document.getElementById('bot').style.visibility = 'hidden';
    document.getElementById('b1').style.visibility = 'hidden';
    document.getElementById('b2').style.visibility = 'hidden';
    document.getElementById('bot2').disabled = false;
}

function validaQuestoes(){
    var cont = 0;
    var array = []
  if(document.getElementsByName("Q1")[2].checked == true){
    cont += 10;
    array.push("1) resposta correta");
  }else{
    cont += 0;
    array.push("1) resposta errada");
  }
  
  if(document.getElementsByName("Q2")[0].checked == true){
    cont += 10;
    array.push("\n2) resposta correta");
  }else{
    cont += 0;
    array.push("\n2) resposta errada");
  }

  if(document.getElementsByName("Q3")[2].checked == true){
    cont+=10;
    array.push("\n3) resposta correta");
  }else{
    cont += 0;
    array.push("\n3) resposta errada");
  }

  if(document.getElementsByName("Q4")[2].checked == true){
    cont+=10;
    array.push("\n4) resposta correta");
  }else{
    cont += 0;
    array.push("\n4) resposta errada");
  }

  if(document.getElementsByName("Q5")[0].checked == true){
    cont+=10;
    array.push("\n5) resposta correta");
  }else{
    cont += 0;
    array.push("\n5) resposta errada");
  }

  if(document.getElementsByName("Q6")[0].checked == true){
    cont+=10;
    array.push("\n6) resposta correta");
  }else{
    cont += 0;
    array.push("\n6) resposta errada");
  }

  if(document.getElementsByName("Q7")[0].checked == true){
    cont+=10;
    array.push("\n7) resposta correta");
  }else{
    cont += 0;
    array.push("\n7) resposta errada");
  }

  if(document.getElementsByName("Q8")[2].checked == true){
    cont+=10;
    array.push("\n8) resposta correta");
  }else{
    cont += 0;
    array.push("\n8) resposta errada");
  }

  if(document.getElementsByName("Q9")[0].checked == true){
    cont+=10;
    array.push("\n9) resposta correta");
  }else{
    cont += 0;
    array.push("\n9) resposta errada");
  }

  if(document.getElementsByName("Q10")[0].checked == true){
    cont+=10;
    array.push("\n10) resposta correta.");
  }else{
    cont += 0;
    array.push("\n10) resposta errada.");
  }
 
      alert("Sua pontuação foi: "+ cont +"%");
    if(cont == 100 || cont > 80){
        alert("Sua pontuação foi: "+ cont +"% \nExcelente");
    }else if(cont <= 80 && cont > 60){
        alert("Sua pontuação foi: "+ cont +"% \nBom");
    }else if(cont <= 60 && cont > 50){
        alert("Sua pontuação foi: "+ cont +"% \nÓtimo");
    }else{
        alert("Sua pontuação foi: "+ cont +"% \nTente Melhorar");
    }
    
    alert(array);
    document.getElementById('bot').style.visibility = 'visible';
    document.getElementById('b1').style.visibility = 'visible';
    document.getElementById('b2').style.visibility = 'visible';
    document.getElementById('bot2').disabled = true;
  }


function showQuestoes(){
  alert("1 - c) 123456 \n2 - a) World wide web \n3 - c) Estou preparando meu twitter. \n4 - c) 18 segundos \n5 - a) 450 milhôes \n6 - a) Classmate \n7 - a) 1994 \n8 - c) WannaCry \n9 - a) 1920 x 1080 \n10 - a) 8 bits")
  document.getElementById("certo").innerHTML= " (x) ";
  document.getElementById("certo2").innerHTML= " (x) ";
  document.getElementById("certo3").innerHTML= " (x) ";
  document.getElementById("certo4").innerHTML= " (x) ";
  document.getElementById("certo5").innerHTML= " (x) ";
  document.getElementById("certo6").innerHTML= " (x) ";
  document.getElementById("certo7").innerHTML= " (x) ";
  document.getElementById("certo8").innerHTML= " (x) ";
  document.getElementById("certo9").innerHTML= " (x) ";
  document.getElementById("certo10").innerHTML= " (x) ";
}

function removeMarkets(){
  document.getElementById("certo").innerHTML= "";
  document.getElementById("certo2").innerHTML= "";
  document.getElementById("certo3").innerHTML= "";
  document.getElementById("certo4").innerHTML= "";
  document.getElementById("certo5").innerHTML= "";
  document.getElementById("certo6").innerHTML= "";
  document.getElementById("certo7").innerHTML= "";
  document.getElementById("certo8").innerHTML= "";
  document.getElementById("certo9").innerHTML= "";
  document.getElementById("certo10").innerHTML= "";
}
function messageDev(){
  alert("Desenvolvedor: Breno Salata (31917641)");
}