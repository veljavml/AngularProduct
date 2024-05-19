import { Injectable } from '@angular/core';
import { Proizvod } from '../model/proizvod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http:HttpClient) { }

  url: string = 'https://63b59b2f58084a7af39a1cf4.mockapi.io/vezbanje';

  getProduct(){
    return this.http.get<Proizvod[]>(this.url);
  }

  getProductById(id: number){
    return this.http.get<Proizvod>(this.url + '/' + id);
  }

  postProizvod(proizvod: Proizvod,){
    return this.http.post(this.url, proizvod).subscribe(response=>{
      console.log(response);
    });
  }

  putProizvod(proizvod: Proizvod, id: number){
    return this.http.put(this.url + '/' + id, proizvod).subscribe(response=>{
      console.log(response);
    });;
  }

  deleteProizvod(id: number){
    return this.http.delete(this.url + '/' + id).subscribe(data=>{console.log('Obrisali ste'+data)});
  }

  addEditProizvod(proizvod:Proizvod){

    if(proizvod.id != null){
       this.putProizvod(proizvod, proizvod.id);
      }

  else{
    this.postProizvod(proizvod);
  }
}
}
