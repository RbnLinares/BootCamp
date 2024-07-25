class TodoList {
    constructor() {
       this.tasks = [];
    }
   
    addTask(task) {
       this.tasks.push({ task, completed: false });
    }
   
    markTaskAsComplete(task) {
       const index = this.tasks.findIndex(t => t.task === task);
       if (index !== -1) {
         this.tasks[index].completed = true;
       }
    }
   
    listTasks() {
       return this.tasks.map(t => `${t.task} - ${t.completed ? 'Completed' : 'Not Completed'}`);
    }
   }
   
   export default TodoList;
   