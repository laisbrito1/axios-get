/*

axios.get é uma biblioteca externa que precisa ser importada em seu projeto. Ela é amplamente suportada em diferentes navegadores e ambientes, incluindo o Node.js.

fetch é uma função nativa do JavaScript e está disponível em navegadores modernos, mas pode não ser suportada em navegadores mais antigos. Para garantir o suporte em navegadores mais antigos, é comum usar um polifil (polyfill) para fetch.

axios.get retorna automaticamente os dados da resposta no formato JSON (se a resposta for JSON) ou em outro formato, dependendo do tipo de conteúdo da resposta.

Com fetch, você precisa usar métodos adicionais, como response.json(), para extrair e analisar os dados da resposta no formato desejado.

*/



async function obterDados(){
  axios.get('https://viacep.com.br/ws/01001000/json/')
  .then(function (response) {
       console.log(response)
  })
  .catch(function (error) {
   console.log(error)
  });

}
