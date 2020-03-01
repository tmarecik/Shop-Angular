import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {UserStorageService} from "../../user-storage.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService) { }

  ngOnInit(): void {
    this.getUsers();                                    //tutaj wpisujemy subskrybcje
  }

  users: User[] = [
    {id: 1, login: 'User1', email: 'email@com', age: 23, country: 'magan polonia', active: true},
    {id: 1, login: 'User2', email: 'email1@com', age: 23, country: 'magan polonia', active: false},

  ];


  getUsers() {
    this.userStorage.getUsers().subscribe(users => this.users = users)                  //implementacja subskrybcji
  }

  removeUser(id: number){
    this.userStorage.removeUser(id)
    this.getUsers();
  }

}
