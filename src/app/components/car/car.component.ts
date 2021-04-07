import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car-dto.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDto[] = [];
  dataLoaded=false;
  ApiUr= "https://localhost:44350/";

  constructor(private carDtoService : CarDtoService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        
        this.getCarsDetailsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsDetailsByColorId(params["colorId"])
      }
      else{
        this.getCarsDetails();
      }
    })
  }

  getCarsDetails(){
    this.carDtoService.getCarsDetails().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsDetailsByBrandId(brandId:number){
    this.carDtoService.getCarsDetailsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }
  getCarsDetailsByColorId(colorId:number){
    this.carDtoService.getCarsDetailsByColorId(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }



}
