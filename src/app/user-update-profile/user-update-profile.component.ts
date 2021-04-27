import {Component, OnInit} from '@angular/core';
import {UserUpdateProfileService} from './user-update-profile.service';
import {ActivatedRoute} from '@angular/router';
import {UserUpdateDTO} from './user-update-DTO';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-update-profile.component.html',
  styleUrls: ['./user-update-profile.component.css']
})
export class UserUpdateProfileComponent implements OnInit {

  userUpdateDTO?: UserUpdateDTO;

  profileForm = this.fb.group({
    userName: ['', [Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    firstName: [''],
    lastName: [''],
    phoneNumber: ['', [Validators.pattern('[- +()0-9]+')]],
    description: [''],
    street: [''],
    flatNumber: [''],
    zipCode: ['', [Validators.pattern('[-0-9]+')]],
    city: [''],
    experienceDescription: ['']
  });

  constructor(private userProfileService: UserUpdateProfileService,
              private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);  // how to make it not 'possible null'?
    this.getUserById(id);
  }

  getUserById(id: number): void{
    this.userProfileService.getUserById(id)
      .subscribe(userDTO => this.processUserDTO(userDTO));
  }

  processUserDTO(userDTO: UserUpdateDTO): void {
    this.userUpdateDTO = userDTO;
    this.profileForm.patchValue(userDTO);
  }

  onInput(value: string): string{
    return value.slice(0, 1).toUpperCase() + value.slice(1);
  }

  onSubmit(): void{
    console.log(this.profileForm.value);

    if (this.userUpdateDTO && this.userUpdateDTO.id != null){
        const zipCode = this.profileForm.controls.zipCode.value;
        this.profileForm.controls.zipCode.setValue(zipCode.replace(/(\s|[-])/g, ''));
        this.userProfileService.updateUserById(this.userUpdateDTO.id, this.profileForm.value );
    }
  }

  get userName(): AbstractControl | null {
    return this.profileForm.get('userName');
  }

  get email(): AbstractControl | null {
    return this.profileForm.get('email');
  }

  get firstName(): AbstractControl | null {
    return this.profileForm.get('firstName');
  }

  get lastNAme(): AbstractControl | null {
    return this.profileForm.get('lastName');
  }

  get phoneNumber(): AbstractControl | null {
    return this.profileForm.get('phoneNumber');
  }

  get description(): AbstractControl | null {
    return this.profileForm.get('description');
  }

  get street(): AbstractControl | null {
    return this.profileForm.get('street');
  }

  get experienceDescription(): AbstractControl | null {
    return this.profileForm.get('experienceDescription');
  }
}
