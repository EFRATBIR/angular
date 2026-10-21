import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  imports: [Header, User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = [
    { id: 'u1', name: 'אפרת', avatar: 'shutterstock_133491263_i.jpg' },
    { id: 'u2', name: 'אילת', avatar: 'images.jpg' },
    { id: 'u3', name: 'רבקה', avatar: 'IMG_0312.JPG' }
  ];

  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUserName() {
    return this.users.find(u => u.id === this.selectedUserId)?.name;
  }
}

