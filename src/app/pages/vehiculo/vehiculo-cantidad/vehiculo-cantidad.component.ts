import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Resultado } from './../../../model/resultado';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehiculo-cantidad',
  templateUrl: './vehiculo-cantidad.component.html',
  styleUrls: ['./vehiculo-cantidad.component.css']
})
export class VehiculoCantidadComponent implements OnInit {
  dataSource: MatTableDataSource<Resultado> = new MatTableDataSource();
  displayedColumns: string[] = ['propietario','cantidad'];

  constructor(private pV:VehiculoService) { }

  ngOnInit(): void {
    this.pV.buscarCantidad().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
