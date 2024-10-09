import { Component, Output, EventEmitter, signal, inject,Input } from '@angular/core'
import { TaskService } from '../tasks.service';

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.html',
    styleUrl: './new-task.css'
})

export class NewTaskComponent{
    @Input({required: true}) userId!: string;
    @Output() close = new EventEmitter<void>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDueDate = '';

    private tasksService = inject(TaskService);
    onCancel(){
        this.close.emit();
    }
    onSubmit(){
        this.tasksService.addTask({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDueDate
        }, this.userId);
        this.close.emit();
    }
}