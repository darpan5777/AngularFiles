import { Component, OnInit } from '@angular/core';
import { concatMap, tap } from 'rxjs/operators';
import { MapserviceService } from '../mapservice.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor( public mapserviceService:MapserviceService ) { }

  ngOnInit(): void { this.getData()
  }
  getData(){
    this.mapserviceService.getdata1().pipe(
      tap((data1)=> console.log("data1",data1)),
      concatMap((res)=> this.mapserviceService.getdata2()),
      tap((data2)=> console.log('data2',data2)),
      concatMap((getdata3)=> this.mapserviceService.getdata3())
    ).subscribe((data4)=>{
    
      console.log(data4);
    })
  }
}
