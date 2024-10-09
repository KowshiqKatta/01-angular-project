import {Component, Input, inject} from '@angular/core'
import {type Task} from './individual.model'
import { TaskService } from '../tasks.service';
@Component({
    selector: 'app-individual',
    templateUrl: './individual.html',
    styleUrl: './individual.css'
})

export class Individual {
    @Input({required: true}) task!: Task;
    private tasksService = inject(TaskService)

    onCompleteTask(){
        this.tasksService.removeTask(this.task.id)
    }
}