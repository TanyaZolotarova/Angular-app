import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent  {
  @Input() item;
  public items = [];
  public title;
  public text;

  // tslint:disable-next-line:typedef
  public addToList() {
    this.items.push(this.title);
    // this.items.push(this.text);
    this.title = '';
    // this.text = '';
  }
  // tslint:disable-next-line:typedef
  public deleteTask(index) {
    this.items.splice(index, 1);
  }
}
