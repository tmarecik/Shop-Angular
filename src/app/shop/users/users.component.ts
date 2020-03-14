import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {UserStorageService} from "../../user-storage.service";
import {ProductStorageService} from "../../product-storage.service";
import {HttpClientService} from "../../http-client.service";
import {Product} from "../products/Product";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getUsers();                                    //  tutaj wpisujemy subskrybcje
  }

  // users: User[] = [
  //   {id: 1, login: 'User1', email: 'email@com', age: 23, country: 'magan polonia', active: true},
  //   {id: 1, login: 'User2', email: 'email1@com', age: 23, country: 'magan polonia', active: false},
  //
  // ];

  users: User[] = [];

  removeUser(id: number) {
    // this.userStorage.removeUser(id)
    // this.getUsers();
    this.httpClient.removeUsers(id).subscribe(r => {
      this.getUsers();
    });
  }

  getUsers() {
    // this.userStorage.getUsers().subscribe(users => this.users = users);                  //  implementacja subskrybcji
    this.httpClient.getUsers().subscribe(users => this.users = users);
  }

}
