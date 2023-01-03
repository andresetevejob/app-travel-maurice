import { Component, Input } from '@angular/core';
import { UserInfoResponse } from 'src/app/shared/models/response';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input()
  username!:string 
  
}
