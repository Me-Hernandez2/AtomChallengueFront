import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {TaskService} from 'src/services/tasks/task.service';
import {DefaultResponse, TaskItem} from '../interfaces/task.interface';
import Swal from 'sweetalert2'
import {ToastService} from 'src/services/toast/toast.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TaskItemComponent implements OnInit {

  @Input() taskLs: TaskItem[] = [];
  @Output() updateTaskList: EventEmitter<DefaultResponse> = new EventEmitter();

  constructor(private taskService$: TaskService,
              private toastService$: ToastService) {
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<TaskItem[]>) {
    moveItemInArray(this.taskLs, event.previousIndex, event.currentIndex);
  }


  async launchFormEdit(task: TaskItem) {
    const {value: formValues} = await Swal.fire({
      title: 'Editar Tarea',
      html:
        '<label>Título:</label>' +
        `<input id="swal-input1" value="${task.title}" class="swal2-input">` +
        '<label style="margin-top=5px">Descripción:</label>' +
        `<input maxlength="70" value="${task.description}" id="swal-input2" class="swal2-input">`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: '#FF8D3B',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        return {
          title: (document.getElementById('swal-input1') as HTMLInputElement).value,
          description: (document.getElementById('swal-input2') as HTMLInputElement).value,
          id: task.id
        }

      }
    })

    if (formValues) {
      const isEmptyField = Object.values(formValues).some(value => value === "" || value === null || value === undefined);
      if (!isEmptyField) {
        this.updateTask(formValues as TaskItem)
      } else {
        this.toastService$.showToast('error', 'Todos los campos son obligatorios.')
      }
    }
  }

  changueStatus(status: any, task: TaskItem) {
    task.status = status;
    this.updateTask(task);
  }

  updateTask(task: TaskItem) {
    this.taskService$.updateTask(task).subscribe((res: DefaultResponse) => {
      if (res.status === 'success')
        this.updateTaskList.emit(res);
    })
  }

  deleteTask(task: TaskItem) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas eliminar esta tarea? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, sedeo borrarla',
      cancelButtonText: 'No, mejor no'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService$.deleteTask(task).subscribe((res: DefaultResponse) => {
          if (res.status === 'success')
            this.updateTaskList.emit(res);
        })
      }
    })
  }
}
