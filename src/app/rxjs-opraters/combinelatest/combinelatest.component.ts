import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { MapserviceService } from '../mapservice.service';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent implements OnInit {

  constructor( public mapserviceservice:MapserviceService) { }

	public name = ['Devdutt Padikkal','Virat Kohli','Rajat Patidar','Kyle Jamieson','James Neesham','Rohit Sharma','Chris Lynn','Suresh Raina ']
	public team = ["Royal Challengers Bangalore Squad (RCB)",
    "Mumbai Indians Squad (MI)",
   " Chennai Super Kings Squad (CSK)",
   " Delhi Capitals Squad (DC)",
    "Punjab Lions Squad (PBKS)",
    "Kolkata Knight Riders (KKR)"]


  public selectedTeam:any[] =[];
  ngOnInit(): void {
    combineLatest(this.mapserviceservice.playersname,this.mapserviceservice.palyersteam).subscribe(([res1,res2])=>{
      debugger
      this.selectedTeam.push({name:res1,team:res2})
      
    })
  }

	onChangeName(event:any){
		debugger
		this.mapserviceservice.playersname.next(event.target.value);
	}

	onChangeColor(event:any){
		debugger
		this.mapserviceservice.palyersteam.next(event.target.value);

	}
}
