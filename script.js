

function SelecionarItem(botao){

    let comidaSelecionada = document.querySelector(".comida.selecionado");
    let bebidaSelecionada = document.querySelector(".bebida.selecionado");
    let sobremesaSelecionada = document.querySelector(".sobremesa.selecionado");
    let nome = "";
    let endereco = "";
    const itemSelo = document.querySelector(".selo");
    const selo = botao.querySelector("ion-icon");
    const Pedido = document.querySelector("footer button");
    // console.log(itemSelecionado);

    // console.log(comidaSelecionada);
    // console.log(bebidaSelecionada);
    // console.log(sobremesaSelecionada);


    
        if(comidaSelecionada !== null){
            if(botao.classList.contains("comida")){
                comidaSelecionada.classList.remove("selecionado");
                comidaSelecionada.querySelector("ion-icon").classList.remove("selo");
            }
        }
        if(bebidaSelecionada !== null){
             if(botao.classList.contains("bebida")){
                bebidaSelecionada.classList.remove("selecionado");
                bebidaSelecionada.querySelector("ion-icon").classList.remove("selo");
            }
        }
        if(sobremesaSelecionada !== null){
            if(botao.classList.contains("sobremesa")){
               sobremesaSelecionada.classList.remove("selecionado");
               sobremesaSelecionada.querySelector("ion-icon").classList.remove("selo");
           }
        }


        botao.classList.toggle("selecionado");
        selo.classList.toggle("selo");
        
        // console.log(botao);
        // console.log(itemSelecionado);
        
        if (comidaSelecionada === botao | bebidaSelecionada === botao | sobremesaSelecionada === botao){
            botao.classList.toggle("selecionado");
            selo.classList.toggle("selo");
        }

        // console.log(comidaSelecionada);
        // console.log(bebidaSelecionada);
        // console.log(sobremesaSelecionada);
        // console.log(Pedido);

        comidaSelecionada = document.querySelector(".comida.selecionado");
        bebidaSelecionada = document.querySelector(".bebida.selecionado");
        sobremesaSelecionada = document.querySelector(".sobremesa.selecionado");
    
        if(comidaSelecionada !== null & bebidaSelecionada !== null & sobremesaSelecionada !== null){
            if (Pedido.classList.contains("background-verde")){
        
            }
            else{
                Pedido.classList.add(".background-verde");
                Pedido.style.backgroundColor = "#32B72F"
                Pedido.innerHTML = "Fechar Pedido";
            }
        }
        else{
           Pedido.classList.remove(".background-verde");
           Pedido.style.backgroundColor = "#CBCBCB"
           Pedido.innerHTML = "Selecione os 3 itens para fechar o pedido";
        }
}

let mensagem = "Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ ";
 let num = 27.70;
 let n = num.toFixed(2);
 mensagem = mensagem + n;
 console.log(mensagem);
 let res = "";
 console.log(res);

 function confirmarPedido(botao){

    let modal = document.querySelector(".modal");
    console.log(modal);
     console.log(botao);
     if(botao.innerHTML === "Fechar Pedido"){
        nome = prompt("Qual seu nome?");
        endereco = prompt("Qual seu endereço?");
        mensagem = mensagem +"\n Nome: " + nome + "\n Endereço: " + endereco;
        res = encodeURIComponent(mensagem);
        modal.classList.remove("escondido");
     }
     
 }

 function cancelar(){
     let modal = document.querySelector(".modal");
     console.log(modal);
     modal.classList.add("escondido");
 }

 

 function confirmar(){
     location.href = "https://wa.me/?text=" + res;
 }
