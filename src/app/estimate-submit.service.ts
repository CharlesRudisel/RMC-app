import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstimateSubmitService {

  private _url: string = "http://localhost:8080/data/data";

  constructor(private http: HttpClient) { }


  public submitData(data: String):Observable<any>{
    
    console.log(data)
    console.log("this was in fact reached")
    return this.http.post(this._url, data)
 

 }

 postTransaction(data:String) {
  this.http.post(this._url, data).subscribe(data => {
    console.log(data);
  })
};
}
