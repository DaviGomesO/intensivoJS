const  catalogoProdutos = document.getElementById("container-produto");

function exibirTodos(){
  const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

  for(const produto of produtosEscondidos){
    produto.classList.remove("hidden");
  }
}

function esconderSuplementos(){
  exibirTodos();
  //classe pode ter vários elementos, diferente dos ids que são únicos
  const produtosSuplementos = Array.from(catalogoProdutos.getElementsByClassName('suplemento'));

  for(const produto of produtosSuplementos){
    produto.classList.add('hidden')
  }
}

function esconderOutros(){
  exibirTodos();
  //classe pode ter vários elementos, diferente dos ids que são únicos
  const produtosOutros = Array.from(catalogoProdutos.getElementsByClassName('outros'));

  for(const produto of produtosOutros){
    produto.classList.add('hidden')
  }
}

export function inicializarFiltros(){
  document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
  document.getElementById('exibir-outros').addEventListener('click', esconderSuplementos);
  document.getElementById('exibir-suplementos').addEventListener('click', esconderOutros);
}