import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {TaskComponent} from './task'
import {Individual} from './individual/individual'
import {NewTaskComponent} from './new-task/new-task'
import {SharedModule} from '../shared/shared.module'


@NgModule({
    declarations: [TaskComponent, Individual, NewTaskComponent],
    exports: [TaskComponent],
    imports: [CommonModule, FormsModule, SharedModule],
})

export class TasksModule {

}