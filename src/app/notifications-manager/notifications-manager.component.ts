import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  standalone: true,
  imports: [],
  templateUrl: './notifications-manager.component.html',
  styleUrl: './notifications-manager.component.scss'
})
export class NotificationsManagerComponent {
  @Input()
  count = 0;
  @Output()
  countChange =new EventEmitter<number>();

  public addNotification(){
    this.count++;
    this.countChange.emit(this.count);
  }
  public removeNotification(){
    if(this.count == 0){
      return;
    }
    this.count--;
    this.countChange.emit(this.count);
  }
  public resetCount(){
    this.count = 0;
    this.countChange.emit(this.count);
  }
}
