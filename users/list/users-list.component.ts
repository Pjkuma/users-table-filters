import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NewUnitService } from 'src/app/new-unit.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],

})
export class UsersListComponent implements OnInit {

  userData: any = [];
  userDataPerPage: any = [];


  searchValue: any = {};
  enableEdit = false;
  enableEditIndex = null;
  pageSize: any = '';
  pages: any = [];
  selectedPage = false;

  constructor(public userService: NewUnitService, private router: Router) { }

  ngOnInit(): void {
    this.userData = this.userService.getUsers();
    console.log(this.userData);

    this.getPagination();
  }


  getPagination() {
    this.pages=[];
    this.pageSize = Math.ceil(this.userData.length / 10);
    for (let i = 1; i <= this.pageSize; i++) {
      this.pages.push(i);
    }
    console.log(this.pages);
    this.navigateToPage(1);
  }

  receiveResponse(data: any) {
    this.searchValue = data;
  }

  deleteRow(index: any) {
    let delBtn = confirm("Do you want to delete record ?");
    if (delBtn == true) {
      this.userData.splice(index, 1);
      this.getPagination();
    }
  }

  navigateToPage(currentPage: any) {
    let startIndex: any = (currentPage - 1) * 10;
    let endIndex: any = currentPage * 10;
    
    this.userDataPerPage = this.userData.slice(startIndex, endIndex)
    console.log(this.userDataPerPage);
    this.selectedPage = currentPage;


  }

  navigateToShow(index: any) {
    this.router.navigateByUrl('/users/' + index);
  }
}