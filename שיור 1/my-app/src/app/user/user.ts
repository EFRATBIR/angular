import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() id!: string; 
  @Output() selectUser = new EventEmitter<string>();

onSelect() {
    this.selectUser.emit(this.id); 
  }

}

