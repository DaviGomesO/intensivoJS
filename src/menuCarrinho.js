import { catalogo } from "./utilidades";
// Aqui eu vou concentrar a inteligência do Carrinho de compras
// "Código sob demanda"
function abrirCarrinho(){
  //remove a classe que faz o carrinho desaparecer e inicia do eixo 0
  document.getElementById("carrinho").classList.add('right-[0px]');
  document.getElementById("carrinho").classList.remove('right-[-360px]');
}

function fecharCarrinho(){
  //remove a classe que faz o carrinho aparecer e adicionar a class para ele ficar fora da página
  document.getElementById("carrinho").classList.remove('right-[0px]');
  document.getElementById("carrinho").classList.add('right-[-360px]');
}

// encarrega de dá vida aos botões
export function inicializarCarrinho(){
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho   = document.getElementById("abrir-carrinho");

  // Dá a capacidade do botão escutar um evento
  botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto){
  //achar um produto p tal que o id desse produto p seja igual ao produto passado na função
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
  <button id="fechar-carrinho" class=" absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
  <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome} - ${produto.marca}" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">${produto.nome}</p>
    <p class="text-slate-400 text-xs">Tamanho: ${produto.tamanho}</p>
    <p class="text-green-700 text-lg">R$${produto.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <button>-</button>
    <p class="ml-2">2</p>
    <button class="ml-2">+</button>
  </div>
</article>`;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}