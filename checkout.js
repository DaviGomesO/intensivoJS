import { apagarDoLocalStorage, desenharProdutoCarrinhoSimples, lerLocalStorage, salvarLocalStorage } from "./src/utilidades";
import {atualizarPrecoCarrinho} from "./src/menuCarrinho";

function desenharProdutosCheckout(){
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
  for(const idProduto in idsProdutoCarrinhoComQuantidade){
    desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
  }
}

function finalizarCompra(evento){
  evento.preventDefault();
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
  if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
    return;
  }
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade
  }
  //passar para o historico de pedidos do usuário
  const historicoDePedidos = lerLocalStorage('historico') ?? [];
  //'...' tira os colchetes
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
  
  salvarLocalStorage('historico', historicoDePedidosAtualizado);
  apagarDoLocalStorage('carrinho');
  window.location.href = window.location.origin + "./pedidos.html";
}

desenharProdutosCheckout();
atualizarPrecoCarrinho();

document.addEventListener('submit', (evt) => finalizarCompra(evt));