import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Vehiculo } from './../../../model/vehiculo';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-vehiculo-reportefechas',
  templateUrl: './vehiculo-reportefechas.component.html',
  styleUrls: ['./vehiculo-reportefechas.component.css']
})
export class VehiculoReportefechasComponent implements OnInit {
  dataSource: MatTableDataSource<Vehiculo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'licencia', 'fecha', 'propietario'];

  constructor(private pV:VehiculoService) { }

  ngOnInit(): void {
    this.pV.buscarfecha().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
