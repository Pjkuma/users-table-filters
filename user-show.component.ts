import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUnitService } from 'src/app/new-unit.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css'],
  providers: [NewUnitService]
})
export class UserShowComponent implements OnInit {

  newUserData:any=[];
  index:any;
 
  user:any='';

  constructor(private Route: ActivatedRoute, private newService:NewUnitService,private router:Router) { }

  get(){
    this.newUserData = this.newService.getUsers();
  }

  ngOnInit(): void {
    this.index = this.Route.snapshot.params['id'];
    this.user = this.newService.getUserById(this.index);
    console.log(this.user)
  }

  onClickEdit(){
    this.router.navigateByUrl('/users/'+this.index+'/edit');
  }
 
}