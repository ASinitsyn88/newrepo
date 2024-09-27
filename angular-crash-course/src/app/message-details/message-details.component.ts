import {Component, EventEmitter, Input, Output} from '@angular/core';

// It is a table row representation
@Component({
  selector: 'app-message-details',
  // HTML view representation for this component
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {

  // @Input - Parent -> Child direction. Lets a parent component (MyFirstCompComponent) update data in the child component (MessageDetailsComponent)
  @Input()
  message: any = {};
  @Input()
  index: number = -1;

  // @Output - Child -> Parent direction. Lets the child (MessageDetailsComponent) send data to a parent component (MyFirstCompComponent)
  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  // It defines delete logic
  onDelete() {
    // We want to inform parent component that we want to delete element by index
    this.delete.emit(this.index);
  }
}
