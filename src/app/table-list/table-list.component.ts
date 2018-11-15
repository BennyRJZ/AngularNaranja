import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  public array = [];
  public arrayOfusers = [];

  constructor(private userService: UserService) { }

  deleteUser(id) {
    if (confirm('Desea eliminar usuario?')){
      this.userService.deleteUser(id).subscribe(data => {
        this.fetch();
      });
    }
  }

  fetch() {
    this.userService.getUsers()
    .subscribe(res => {
      this.arrayOfusers = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.fetch();
  }

}
