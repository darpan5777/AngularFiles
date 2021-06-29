import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class MapserviceService {

   url: string = ' http://localhost:3000/' ;


   
  public playersname = new BehaviorSubject('Dhoni');
	public palyersteam= new BehaviorSubject('ChennaiSuperking');

  constructor(private http: HttpClient) { }


  
	public getdata1():Observable<any>{
    return this.http.get(`${this.url}student`)
		
	}
	public getdata2():Observable<any>{
    return this.http.get(`${this.url}posts`)
	}
	public getdata3():Observable<any>{
    return this.http.get(`${this.url}profile`)
	}
}

