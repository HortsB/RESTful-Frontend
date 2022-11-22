import { VehiculoCantidadComponent } from './pages/vehiculo/vehiculo-cantidad/vehiculo-cantidad.component';
import { VehiculoReportefechasComponent } from './pages/vehiculo/vehiculo-reportefechas/vehiculo-reportefechas.component';
import { PropietarioDominioComponent } from './pages/propietario/propietario-dominio/propietario-dominio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioEditarComponent } from './pages/propietario/propietario-editar/propietario-editar.component';
import { PropietarioComponent } from './pages/propietario/propietario.component';
import { VehiculoEditarComponent } from './pages/vehiculo/vehiculo-editar/vehiculo-editar.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';

const routes: Routes = [
    {
        path: 'propietarios', component: PropietarioComponent, children: [
            { path: 'nuevo', component: PropietarioEditarComponent },
            { path: 'edicion/:id', component: PropietarioEditarComponent },
            {path:'dominio',component:PropietarioDominioComponent}
        ]
    },
    {
        path: 'vehiculos', component: VehiculoComponent, children: [
            { path: 'nuevo', component: VehiculoEditarComponent },
            { path: 'edicion/:id', component: VehiculoEditarComponent },
            {path:'fechas',component:VehiculoReportefechasComponent},
            {path:'cantidad',component:VehiculoCantidadComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

