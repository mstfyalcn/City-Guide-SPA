import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private http:HttpClient) { }

path="http://localhost:61061/api/"
cities:City[]=[]

getCities():Observable<City[]>{
return this.http.get<City[]>(this.path+ "cities" );
};

getCityById(cityId:number):Observable<City>{
  return this.http.get<City>(this.path + "cities/detail/?id="+cityId);

}

getPhotosByCity(cityId:number):Observable<Photo[]>{

  return this.http.get<Photo[]>(this.path + "cities/photos/?cityId="+cityId); 
}


add(city:City){
  this.http.post(this.path+"city/add",city).subscribe()}

}
