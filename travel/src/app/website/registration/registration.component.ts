import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpRequest } from 'src/app/shared/models/user';
import { RegistrationService } from 'src/app/shared/services/registration/registration.service';
import { matchValidator } from 'src/app/shared/utils/form-validation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public registrationForm: FormGroup;
  constructor(private registrationService:RegistrationService) {
    this.registrationForm = new FormGroup({
        username:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
        email:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(2000)]),
        pwd:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),matchValidator('pwdconf', true)]),
        pwdconf:new FormControl('',[Validators.required,matchValidator('pwd')]),
    
    });
  }

  onSubmit(){
    let signupRequest:SignUpRequest = {
      username: this.registrationForm.get("username")!.value,
      email: this.registrationForm.get("email")!.value,
      password: this.registrationForm.get("pwd")!.value,
    };
    this.registrationService.send(signupRequest).subscribe(
      res=>{
         alert(res.message);
         this.cleanFormRegistration();
      },
      error=>{
        console.log(error);
      }
    );
  }
  cleanFormRegistration() {
    this.registrationForm.reset();
  }

  
}
