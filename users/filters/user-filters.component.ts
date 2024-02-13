import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUnitService } from 'src/app/new-unit.service';


@Component({
  selector: 'app-user-filters',
  templateUrl: './user-filters.component.html',
  styleUrls: ['./user-filters.component.css'],
  providers: [NewUnitService]
})
export class UserFiltersComponent implements OnInit {
  serviceForm!: FormGroup;
  public userData!: any[];
  @Output() searchValue = new EventEmitter<string>();

  filter:any={};

  constructor(private router: Router,private userdata: NewUnitService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.serviceForm = this.searchForm();
  }

  searchForm(): FormGroup{  
    return this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      phone: this.fb.control('')
    })
  }

  updateFilters(){
    let fields = this.serviceForm.value;
   Object.keys(fields).forEach(key => (fields[key] === '' || fields[key] === null) ? delete fields[key] : key);
   this.filter = Object.assign({}, fields);

   this.searchValue.emit(this.filter)
   console.log(this.filter)
  }

  onClickGo(){

  }

  onReset(){

  }

  onSubmit(){
    console.log('submitted');
  }

  test(type:any){

    // let value= this.serviceForm.value;
    // if(value == this.serviceForm.get('name')?.value){
    //   return this.userData.manipulation(type,value)
    // } else if (value == this.serviceForm.get('email')?.value){
    //   return this.userData.manipulation(type,value)
    // }else 
    // return this.userData.manipulation(type,value)
   
  }

}
