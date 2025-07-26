// Tratando o -1 no retorno do método

const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

const treatReturn = tasks.findIndex((task) => task.id === 10);
  if (treatReturn === -1) {
    console.log("A tarefa não foi encontrada. Ela pode ainda não existir, adicione!")
  } else {
    console.log(`A tarefa foi encontrada e está na posição: ${treatReturn}`);
  }

