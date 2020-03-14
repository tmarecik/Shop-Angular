import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserStorageService} from '../../../user-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../http-client.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editorUser.component.html',
  styleUrls: ['./editorUser.component.css']
})
export class EditorUserComponent implements OnInit {
  user: any;

  // tslint:disable-next-line:max-line-length
  constructor(private userStorage: UserStorageService, private router: Router, private activeRoute: ActivatedRoute, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getUserToEdit();
  }

  user: User = new User();

  saveUser(user: User) {
    this.httpClient.saveUser(user).subscribe(r => {
      this.router.navigate(['/shop/users']);
    });
  }

  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');                                                                //  tak sama nazwa jak w adresie!!
      if (id) {
        // this.httpClient.getUser().subscribe(p => this.user = p);
        this.httpClient.getUser(Number.parseInt(id)).subscribe(p => this.user = p);
        // this.httpClient.getUsers(Number.parseInt(id)).subscribe(value => this.user = value);
      }
    });
  }

}
