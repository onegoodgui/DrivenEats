

function SelecionarItem(botao){

    let comidaSelecionada = document.querySelector(".comida.selecionado");
    let bebidaSelecionada = document.querySelector(".bebida.selecionado");
    let sobremesaSelecionada = document.querySelector(".sobremesa.selecionado");
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

        console.log(comidaSelecionada);
        console.log(bebidaSelecionada);
        console.log(sobremesaSelecionada);
        console.log(Pedido);

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



