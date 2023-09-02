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