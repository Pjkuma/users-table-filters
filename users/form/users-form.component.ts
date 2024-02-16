import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUnitService } from 'src/app/new-unit.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  userForm!: FormGroup;
  username!: FormControl;

  editMode = false;
  newAddr:any;

  constructor(private fb: FormBuilder, public userService: NewUnitService, private Route: ActivatedRoute, private router: Router) { }

  index:any;

  ngOnInit(): void {
    this.createUserForm();

    let id = this.Route.snapshot.params['id'];
    this.index=id;

    if (id) {
      this.editMode = true;
      let editInfo = this.userService.getUserById(id);
      console.log(editInfo);

      this.userForm.patchValue({
        name: editInfo.name,
        email: editInfo.email,
        phone: editInfo.phone,
        password: editInfo.password,
        confirm_password: editInfo.confirm_password,
      })

      if(editInfo.addresses.length >= 1){
        let adrs = this.userForm.get('addresses') as FormArray;

        for(let item of editInfo.addresses){
          const formgrp = this.createAddress();
          formgrp.patchValue(item);
          adrs.push(formgrp)
        }
      }

    } else {
      this.editMode = false;
    }
    console.log(this.userService.usersData)
  }

  createUserForm() {
    this.username = new FormControl(null, Validators.required),
      this.userForm = new FormGroup({
        name: new FormControl("", [Validators.required]),
        email: new FormControl(""),
        phone: new FormControl(""),
        password: new FormControl("", [Validators.required]),
        confirm_password: new FormControl("", [Validators.required]),
        addresses: new FormArray([])
      },
        { validators: [this.emailPhone.bind(this), this.addressValidation.bind(this), this.passwordMatch.bind(this)] },
      );
  }

  createAddress(): FormGroup {
    return this.fb.group({
      address1: new FormControl('', [Validators.required]),
      address2: this.fb.control(''),
      city: this.fb.control('', [Validators.required]),
      state: this.fb.control('', [Validators.required]),
      zip: this.fb.control('', [Validators.required])
    });
  }

  onAddAddress() {
    const addresses = (this.userForm.get('addresses') as FormArray)
    addresses.push(this.createAddress());
  }

  get getAddress() {
    return (this.userForm.get('addresses') as FormArray).controls;
  }

  onRemoveAddress(index: number) {
    const addresses = (this.userForm.get('addresses') as FormArray);
    addresses.removeAt(index);
  }

  onAddUser() {

  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.insertUser(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
    console.log(this.userForm.value);
    alert('Form Submitted Successfully');
  }

  emailPhone(formGroup: AbstractControl) {
    if (!formGroup.get('email')?.value && !formGroup.get('phone')?.value) {
      return { email_phone: true };
    } else {
      return null;
    }
  }

  addressValidation(formGroup: AbstractControl) {
    if ((formGroup.get('addresses') as FormArray).controls.length == 0) {
      return { address_validation: true };
    } else {
      return null;
    }
  }

  passwordMatch(formGroup: AbstractControl) {
    if (formGroup.get('password')?.value == formGroup.get('confirm_password')?.value) {
      return null;
    } else {
      return { passwordMisMatch: true };
    }
  }

  onUpdate() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.updateUser(this.index,this.userForm.value);
      alert('Form updated Successfully');
      this.router.navigateByUrl('/users');
    } else {
      this.userForm.markAllAsTouched();
    }
    console.log(this.userForm.value);
  }
}
