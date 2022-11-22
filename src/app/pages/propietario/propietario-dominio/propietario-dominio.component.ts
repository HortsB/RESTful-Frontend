import { PropietarioService } from 'src/app/service/propietario.service';
import { Propietario } from './../../../model/propietario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-propietario-dominio',
  templateUrl: './propietario-dominio.component.html',
  styleUrls: ['./propietario-dominio.component.css']
})
export class PropietarioDominioComponent implements OnInit {
  dataSource: MatTableDataSource<Propietario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'email'];
  constructor(private pS:PropietarioService) { }

  ngOnInit(): void {
    this.pS.dominio().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
