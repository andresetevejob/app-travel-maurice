import { Component } from '@angular/core';
import { UserInfoResponse } from 'src/app/shared/models/response';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   username!:string
   isLoggedIn:boolean = false;
  constructor(private storageService: StorageService) { 
    const u:  UserInfoResponse | null  = storageService.getUser();
    console.log(u);
    if(u!=null){
       this.username = u.email;
       this.isLoggedIn = true;
    }
   }
}
