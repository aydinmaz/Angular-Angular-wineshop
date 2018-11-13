import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wine } from './wine';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class WineService {
  
  
  
  constructor(private http:HttpClient) { }

  getWines() {
    let obs=this.http.get('api/wines')
     return obs;
   
  }

  public addWines(wine:Wine){
   // console.log(wine);
     this.http.post<Wine>('api/winesAdd',wine)
     .subscribe();
    
  }
  public editWine(wine:Wine){
    //console.log(wine);
    this.http.put('api/winesEdit/'+wine.id,wine).subscribe();
  }

  public deleteWines(id:string){
   // console.log(id);
    this.http.delete('api/winesDelete/'+id).subscribe();
  }

}
