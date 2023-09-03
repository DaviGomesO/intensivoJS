//lista de objetos
export const catalogo = [
  { id: "1", marca: 'Pro Healthy', nome: 'Cafeina', preco: 24.9, imagem: 'cafeina_prohealthy.jpg', tamanho: '60 Comprimidos', suplemento: true}, 
  { id: "2", marca: 'Masterway', nome: 'Creatina', preco: 78.8, imagem: 'creatina_masterway.jpg', tamanho: '300 gramas', suplemento: true}, 
  { id: "3", marca: 'Max Titanium', nome: 'Creatina', preco: 82.15, imagem: 'creatina_max.jpg', tamanho: '300 gramas', suplemento: true}, 
  { id: "4", marca: 'Probiotica', nome: 'Creatina', preco: 89.9, imagem: 'creatina_probiotica.jpg', tamanho: '300 gramas', suplemento: true}, 
  { id: "5", marca: 'Growth', nome: 'Termogênico', preco: 55.1, imagem: 'termogenico_growth.jpg', tamanho: '60 Comprimidos', suplemento: true}, 
  { id: "6", marca: 'Masterway', nome: 'Whey 100%', preco: 91.2, imagem: 'whey100masterway.jpg', tamanho: '900 gramas', suplemento: true}
];

export function salvarLocalStorage(chave, informacao){
  localStorage.setItem(chave, JSON.stringify(informacao)); //guarda o objeto em um localstorage
  //JSON pega o elemento do JavaScript e transforma em texto com o stringfy
}

export function lerLocalStorage(chave){
  return JSON.parse(localStorage.getItem(chave)); // recupera o item no localstorage
  //JSON pega o elemento e converte a string em objeto
}

export function apagarDoLocalStorage(chave){
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHTML, quantidadeProduto){
  //achar um produto p tal que o id desse produto p seja igual ao produto passado na função
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHTML);
  
  const elementoArticle = document.createElement('article');
  const articleClasses = ['flex', 'bg-stone-200', 'rounded-lg', 'p-1', 'relative', 'mb-2']
  for (const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
  }

  let precoFormatado = produto.preco.toFixed(2);
  precoFormatado = precoFormatado.replace('.',',');

  const cartaoProdutoCarrinho = `
  <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome} - ${produto.marca}" class="h-24 rounded-lg"/>
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">${produto.nome}</p>
    <p class="text-slate-400 text-xs">Tamanho: ${produto.tamanho}</p>
    <p class="text-green-700 text-lg">R$${precoFormatado}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <p id='quantidade-${produto.id}' class="ml-2">${quantidadeProduto}</p>
  </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}