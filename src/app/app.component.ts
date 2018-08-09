import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  height;
  weight;
  sys_bp;
  di_bp;

  constructor(private dataService:DataService){
    this.getDetails();

  }
  
  private getDetails(){
    this.dataService.getBasicDetails().subscribe(
      (res) => {
        this.height = Math.round(res.result.height*100)/100;
        this.weight = Math.round(res.result.weight*100)/100;
        this.sys_bp = res.result.sys_bp;
        this.di_bp = res.result.di_bp;        
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log('Product loading done.');
      }
    );
  }
}
