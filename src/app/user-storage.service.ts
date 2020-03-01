import { Injectable } from '@angular/core';
import {User} from "./shop/users/User";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  //serwis do przechowywania produktów
  users: User[] = [
    {id: 1, login: 'User1', email: 'email@com', age: 23, country: 'magan polonia', active: true},
    {id: 1, login: 'User2', email: 'email1@com', age: 23, country: 'magan polonia', active: false},

  ];

  getUsers(): Observable<User[]> {
    return of(this.users)
  }

  removeUser(id: number){
    const userIndex = this.users.findIndex(p => p.id === id);   //p -> wynik iteracji po tablicy user i szuka id z parmetru funkcji
    this.users.splice(userIndex, 1);
  }

  private idCount: number = 3;

  saveUser(user: User){

    if (user.id){
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }


  }

  getUser(id:  number){
    const userIndex = this.users.findIndex(p => p.id === id);
     return {...this.users[userIndex]};
  }

}
