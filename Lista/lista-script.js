// CRIADOR DE LISTA DE TAREFAS
// Seleções, variáveis
const buttonNewList = document.querySelector('.new-list');
const lists = []

// Captadores de evento
let buttonClick = false;
let listId = 0;
let input, listTitle;
buttonNewList.addEventListener('click', () => {  // clicou no botão de criar nova lista
    if (!buttonClick) { 
        input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('title-input');
        input.placeholder = 'Insira um título...';
        buttonNewList.insertAdjacentElement('afterend', input);

        buttonClick = true;
    }
});
    

// const titleInput = document.querySelector('.title-input');
document.addEventListener('keypress', (e) => {  // cria a lista com enter
    if (e.keyCode === 13) {
        const titleInput = document.querySelector('.title-input');
        if (!titleInput){
            return;}

        createList(listId, titleInput.value);
        listId++;
        input.remove();
        buttonClick = false;
    }
});


document.addEventListener('click', (e) => { 
    const elemento = e.target;
    if (elemento.classList.contains('erase-button')) {  // clique no botão de apagar
        elemento.parentElement.remove();  // elemento --> button; parent element --> li (tarefa)

    } else if (elemento.classList.contains('done-button')) {  // clique no botão de concluir (concluir/desconcluir)
        if (elemento.parentElement.classList.contains('done')) elemento.parentElement.removeAttribute('class', 'done');
        else elemento.parentElement.setAttribute('class', 'done');

    } else if (elemento.classList.contains('edit-button')) {  // editar nome da lista
        const parent = elemento.parentElement;
        const idx = lists.findIndex(list => list.name === parent.innerText);
        lists[idx].editName(parent);
    
    }   else if (elemento.classList.contains('delete-button')) { // deleta a lista (do DOM)
        const parent = elemento.parentElement; 
        parent.parentElement.remove();  // elemento --> botão; pai --> h1 (título); avô --> div (lista)
        const idx = lists.findIndex(list => list.name === parent.innerText);
        lists[idx].deleteList(parent);
    }
});

// FUNÇÃO AUXILIAR
function createList(id, title) {
    const obj = new ToDoList(id, title);  // Replace YourObject with the desired object class or constructor function
    lists.push(obj);
}

// CLASSE DA TO DO LIST
class ToDoList {
    constructor(id, name) {  // método construtor
        this.id = id;
        this.name = name;
        this.#listSettup()  // chamado automaticamente quando criada a classe
    }


    #listSettup() {  // método privado
        // elementos de cada lista
        const div = document.createElement('div');  // serve como container, abaixo são os seus elementos filhos
        const h1 = document.createElement('h1');
        const input = document.createElement('input');
        const addButton = document.createElement('button');
        const ul = document.createElement('ul');  // as tarefas são listas adicionadas diretamente no DOM

        // configuração de seus atributos e designação do elemento pai
        h1.innerText = this.name;
        input.setAttribute('type', 'text');
        input.classList.add('task-input');
        addButton.classList.add('button-add');
        ul.classList.add('tasks');

        div.appendChild(h1)
        this.listControllers(h1)
        div.appendChild(input);
        div.appendChild(addButton);
        div.appendChild(ul);

        const container = document.getElementById('container'); // insere a div (e seus filhos) no DOM
        container.appendChild(div);
        
        // CAPTADORES DE EVENTO
        document.addEventListener('click', (evento) => {
            const e = evento.target;
            if (e.classList.contains('button-add')) {  // adicionar tarefa
                if(!input.value) return;
                this.addTask(input.value, ul);
                this.clearInput(input);
            }
        });

        input.addEventListener('keypress', (e) => {  // adicionar tarefa com enter
            if (e.keyCode === 13) {
                if (!input.value) return;
                this.addTask(input.value, ul);
                this.clearInput(input);

            }
        });
    }

    // MÉTODOS (funcionalidades das tarefas e do nome)
    addTask(textInput, tasks) {  // inserir tarefa //trocar tasks por this.ul (construtor?)
        const li = document.createElement('li');
        li.innerText = textInput;

        tasks.appendChild(li);
        this.taskControllers(li);
    }


    taskControllers(li) {  // insere os botões que permitem a remoção da tarefa ou marcação de conclusão
        const eraseButton = document.createElement('button');
        eraseButton.setAttribute('class', 'erase-button');

        const doneButton = document.createElement('button');
        doneButton.setAttribute('class', 'done-button');

        li.appendChild(eraseButton);
        li.appendChild(doneButton);
    }


    listControllers(h1) {  // insere os botões que permitem a deleção da lista ou edição do nome
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete-button');

        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit-button');

        h1.appendChild(deleteButton);
        h1.appendChild(editButton);
    }


    editName(h1) {  // altera o nome
        const input = document.createElement('input');
        const okButton = document.createElement('button');
        input.value = this.name;
        okButton.innerText = 'Ok';

        h1.innerText = '';
        h1.appendChild(input);
        h1.appendChild(okButton);

        okButton.addEventListener('click', () => {
            if(!input.value) return;
            h1.innerText = input.value;
            this.name = input.value;
            this.listControllers(h1);
        });
    }


    deleteList() {  // deleta a lista (do array "lists")
        const idx = lists.findIndex(list => list.id === this.id);
        lists.splice(idx, 1);
    }


    clearInput(input) {  // limpa o input da tarefa depois dela ser criada
        input.value = '';
        input.focus();  // cursor piscando
    }
}


