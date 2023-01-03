import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/shared/models/user';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(private loginService:LoginService,private storageService:StorageService) {
    this.loginForm = new FormGroup({
        username:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
        pwd:new FormControl('',[Validators.required]),
    
    });
  }
  onSubmit(){
    let userLogin:user = {
      username: this.loginForm.get("username")!.value,
      password: this.loginForm.get("pwd")!.value,
    };
    this.loginService.send(userLogin).subscribe(
      res=>{
        console.log(res);
        this.storageService.saveUser(res);
        this.reloadPage();
      },
      error=>{
        console.log(error);
      }
    );
  }
  cleanFormRegistration() {
    this.loginForm.reset();
  }
  reloadPage(): void {
    window.location.reload();
  }
}
