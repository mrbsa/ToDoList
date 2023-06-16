# LISTA(S) DE TAREFAS - MOCKUP
# Classes e métodos
class Tarefa:  # Tarefa
    def __init__(self, nome):  # método construtor
        self.nome = nome
        self.concluida = False
        
    
    def concluir(self):
        self.concluida = True

    
    def desconcluir(self):
        self.concluida = False


class ToDoList:  # Lista
    def __init__(self, titulo):  # método construtor
        self.titulo = titulo
        self.tarefas = []


    def adicionarTarefa(self, nome):
        novaTarefa = Tarefa(nome)
        self.tarefas.append(novaTarefa)


    def removerTarefa(self, nomeTarefa):
        idx = self._iteracao(nomeTarefa)
        self.tarefas.remove(self.tarefas[idx])


    def alterarStatus(self, nomeTarefa):
        idx = self._iteracao(nomeTarefa)
        if self.tarefas[idx].concluida:
            self.tarefas[idx].desconcluir()
        else:
            self.tarefas[idx].concluir()


    def consultarLista(self):
        dictTarefas = []
        for t in self.tarefas:
            if t.concluida:
                status = 'Concluída'
            else:
                status = 'Não concluída'
            dictTarefas.append({"Nome": t.nome, "Status": status})

        print({"TÍTULO": self.titulo, "TAREFAS": dictTarefas})


    def consultarTarefa(self, nomeTarefa):
        idx = self._iteracao(nomeTarefa)
        if self.tarefas[idx].concluida:
            status = 'Concluída'
        else:
            status = 'Não concluída'

        print(f'TAREFA: {self.tarefas[idx].nome}; STATUS: {status}.')
        

    def _iteracao(self, nomeTarefa):  # privado
        for t in self.tarefas:
            if t.nome == nomeTarefa:
                return self.tarefas.index(t)

# Teste
t1 = ToDoList('Lista de compras')
t2 = ToDoList('Mala de viagem')

t1.adicionarTarefa('tomate')
t1.adicionarTarefa('amendoim')
t1.adicionarTarefa('sorvete')
t1.consultarLista()

t1.removerTarefa('tomate')
t1.alterarStatus('amendoim')
t1.consultarTarefa('amendoim')

t2.adicionarTarefa('casaco')
t2.adicionarTarefa('mala')
t2.adicionarTarefa('dólar')
t2.adicionarTarefa('biquine')

t2.alterarStatus('mala')
t2.removerTarefa('dólar')
t2.removerTarefa('biquine')
t2.consultarLista()

t2.alterarStatus('mala')
t2.removerTarefa('casaco')
t2.consultarLista()

t2.removerTarefa('mala')

t1.consultarLista()
t2.consultarLista()
