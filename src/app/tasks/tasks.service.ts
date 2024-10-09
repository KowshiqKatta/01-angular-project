import { type NewTaskData } from "./individual/individual.model";
import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})

export class TaskService{
    private Tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        { 
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u2',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];

      constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
          this.Tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string){
        return this.Tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData: NewTaskData, userId: string){
        this.Tasks.unshift({
          id: Math.random().toString(),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date,
        })
        this.saveTasks();
      }

      removeTask(id: string){
        this.Tasks = this.Tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.Tasks));
      }
}