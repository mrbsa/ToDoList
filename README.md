# ToDoList
Create multiple task lists.
<br>
<br>
## -> Sobre
O código original foi escrito ano passado e é um projeto bem simples em Html, Css e Javascript, encontrado na pasta Lista. O código utiliza classes e captura de eventos pra solidificar as funcionalidades da lista, manipulando diretamente o DOM. O código novo está dentro da pasta todolist-react e, como indica o nome, utiliza React. A ideia era traduzir o código original, de maneira que ambos possuam as mesmas funcionalidades, apesar do estilo do novo ser similar ao site da V360. O App.js é o componente principal que controla a esturtura e as listas, além de rendezrizar os demais componenentes. A ToDoList.js lida com as funcionalidades de cada lista individualmente, as tarefas.
<br>
## -> Como rodar
Para rodar ambos os projetos localmente, primeiro clone o repositório. Em seguida, é necessário obter o npm. Para rodar o projeto original, é preciso instalar a extensão Live Server do VSCode, pois F5 não gera o Css corretamente. Apenas entre no arquivo Html e clique no botão da extensão. Para rodar o projeto em react, navegue até a pasta onde se encontra o package.json e execute os comando npm i e, após, npm start. <br>
A versão em react possui um deploy simples através do Vercel e pode ser encontrada no seguinte link: [ToDo List](https://to-do-list-v1-62lsl2b8t-marianas-projects-fcff59dd.vercel.app/) (acesso em 31/10/2024 - pleno funcionamento)<br>
## -> Funcionalidades
- Criar diversas listas (responsivo também pelo teclado)
- Criar diversas tarefas por lista (responsivo também pelo teclado)
- Editar nome da lista
- Apagar listas e tarefas
- Marcar tarefas como concluídas
## -> Próximos passos
Como dito durante a apresentação, a aplicação é simples. Uma maneira de deixá-la mais sofisticada é com a adição de algum método que permita o salvamento de listas, e num momento posterior, até a criação de usuários para o salvamento das listas. Mas a priori, acredito que o salvamento das informações em cachê ou localStorage do navegador seria suficiente, e caso queira algo mais robusto, implementar uma API que se comuinique a um banco de dados simples, usando fetch, por exemplo. Outra melhoria seria o uso da biblioteca bootstrap, para melhorar o front-end da aplicação e deixá-la adaptável a outras telas (maiores, ou menores, como smartphones, que a minha).
## -> Links
O cabeçalho possui links para o site da V360 e o rodapé possui links para os ícones gratuitos utilizados.
