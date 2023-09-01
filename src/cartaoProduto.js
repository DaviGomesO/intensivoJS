import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo(){
  for (const produtoCatalogo of catalogo){
    let precoFormatado = produtoCatalogo.preco.toFixed(2);
    precoFormatado = precoFormatado.replace('.',',');
    const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group" id="card-produto-${produtoCatalogo.id}">
    <img src="./assets/img/${produtoCatalogo.imagem}" alt="${produtoCatalogo.nome} - ${produtoCatalogo.marca}" class="group-hover:scale-110 duration-300 my-3 rounded-lg"/>
    <p class="text-sm">${produtoCatalogo.nome}</p>
    <p class='text-xs'>${produtoCatalogo.marca}</p>
    <p class="text-green-700 text-sm">R$ ${precoFormatado}</p>
    <button id='adicionar-${produtoCatalogo.id}' class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;
  
    // Para interagir com a página, utiliza o document
    //acrescenta o cartão do produto no container do produto
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    //innerHTML retorna o conteúdo interior
  }

  for (const produtoCatalogo of catalogo){
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}