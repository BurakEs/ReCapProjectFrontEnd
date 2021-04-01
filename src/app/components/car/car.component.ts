import { Component, OnInit } from '@angular/core';
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

  constructor(private carDtoService : CarDtoService) { }

  ngOnInit(): void {
    this.getCarsDetails();
  }

  getCarsDetails(){
    this.carDtoService.getCarsDetails().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
    
  }

}
