import { Component } from '@angular/core';
import { cityCode } from 'src/app/shared/services/city-code/city-code';
import { CityCodeService } from 'src/app/shared/services/city-code/city-code.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cityCodes!: cityCode[] | null;
  constructor(private cityCodeService: CityCodeService) { }

  ngOnInit(): void {
    this.cityCodeService.findAll() .subscribe(
      res => {
        console.log(res);
        this.cityCodes = res;
        console.log(this.cityCodes);
      },
      error => {
        console.log(error);
      });
  }
}
