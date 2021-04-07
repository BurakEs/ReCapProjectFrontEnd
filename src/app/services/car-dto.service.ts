import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  constructor(private httpClient:HttpClient) { }
  apiUrl: string = "https://localhost:44350/api/";


  getCarsDetails():Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsDetailsByCarId(carId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
