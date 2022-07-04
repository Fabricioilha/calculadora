const botoes = document.querySelectorAll(".botao");
const Visor_operador = document.querySelector(".operador");
let num1 = '';
let num2 = '';
let visor
let op = '';
let resultado = 0;
let controle = 0;

botoes.forEach(botao => {
  botao.addEventListener('click', ()=>{
    calculadora(botao.textContent.trim()); 
  })
});

function calculadora(text_botao){
  op == ''? visor = document.querySelector(".num1") : visor = document.querySelector(".num2");
    controle == 0? limparCampos() : 0;
    if(Number(text_botao) || text_botao == '0'){
      visor.innerHTML += text_botao;
      op == ''? num1 += text_botao : num2 += text_botao;
    }else{
      if(text_botao != '='){
        if(text_botao == 'c'){
          limparCampos();
          return;
        }
        op = text_botao;
        Visor_operador.innerHTML = visor.textContent + " " + text_botao;
        visor.innerHTML = ''
      }else{
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        op.trim() == '+'? resultado = n1 + n2 : 0;
        op.trim() == '-'? resultado = n1 - n2 : 0;
        op.trim() == 'x'? resultado = n1 * n2 : 0;
        op.trim() == '/'? resultado = n1 / n2 : 0;
        Visor_operador.innerHTML = `${n1} ${op} ${n2} = `;
        visor.innerHTML = `${resultado}`;
        controle = 0;
        op = '';
      }
    }
}

function limparCampos(){
  op = '';
  document.querySelector(".num1").innerHTML = '';
  document.querySelector(".num2").innerHTML = '';
  num1 = '';
  num2 = '';
  resultado = 0;
  Visor_operador.innerHTML='';
  controle = 1;
}
