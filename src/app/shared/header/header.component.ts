import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

name: string = '';
 points: string = '';
 constructor(private headerService: HeaderService){}

  ngOnInit(): any {
    this.headerService.getData().subscribe((res: any) => {
      this.name = res.name
      })

      this.headerService.getData().subscribe((res: any) => {
        this.points = res.points
        })
  }


}
