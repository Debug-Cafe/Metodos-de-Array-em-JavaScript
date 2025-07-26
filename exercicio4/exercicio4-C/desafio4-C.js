const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

const allTasksHighPriorityAndIncomplet = tasks.filter((task) => task.priority === "alta")
.every((task) => task.completed === false);
console.log(`Nenhuma tarefa de prioridade 'alta' foi completa`);