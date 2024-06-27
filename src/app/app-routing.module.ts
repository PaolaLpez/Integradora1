
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroCitasMedicasComponent } from './registro-citas-medicas/registro-citas-medicas.component';
import { RegistroCitaComponent } from './registro-cita/registro-cita.component';
import { RecordatoriosComponent } from './recordatorios/recordatorios.component';
import { ConfiguracionSistemaComponent } from './configuracion-sistema/configuracion-sistema.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { InformacionPacienteComponent } from './informacion-paciente/informacion-paciente.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';

const routes: Routes = [
    {
        path : '',
        redirectTo : '/inicio' ,
        pathMatch : 'full'
      },
      {
        path : 'ingreso',
        component : IngresoComponent
      },
      {
        path : 'registo-usuario',
        component :  RegistroUsuarioComponent
      },
      {
        path : 'registo-cita',
        component : RegistroCitaComponent
      },
      {
        path : 'registo-cita-medica',
        component : RegistroCitasMedicasComponent
      },
       {
        path : 'recordatorios',
        component : RecordatoriosComponent
       },
       {
        path : 'configuracion-sistema',
        component : ConfiguracionSistemaComponent
       },
       {
        path : 'informacion-paciente',
        component : InformacionPacienteComponent
       },
       {
        path : 'historial-paciente',
        component : HistorialPacienteComponent
       }


    ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }