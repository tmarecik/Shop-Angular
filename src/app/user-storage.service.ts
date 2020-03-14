import { Injectable } from '@angular/core';
import {User} from "./shop/users/User";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  //serwis do przechowywania uzytkownikow
 // protected users: User[] = [
 //    {id: 1, login: 'User1_angular', email: 'email@com', age: 23, country: 'magna polonia', active: true},
 //    {id: 2, login: 'User2_angular', email: 'email1@com', age: 32, country: 'magna polonia1', active: false},
 //
 //  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  removeUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);   //  p -> wynik iteracji po tablicy user i szuka id z parmetru funkcji
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

  getUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }

}
