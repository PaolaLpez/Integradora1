
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroCitasMedicasComponent } from './registro-citas-medicas/registro-citas-medicas.component';
import { RegistroCitaComponent } from './registro-cita/registro-cita.component';
import { RecordatoriosComponent } from './recordatorios/recordatorios.component';
import { ConfiguracionSistemaComponent } from './configuracion-sistema/configuracion-sistema.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { InformacionPacienteComponent } from './informacion-paciente/informacion-paciente.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IngresoComponent,
    RegistroUsuarioComponent,
    RegistroCitaComponent,
    RegistroCitasMedicasComponent,
    RecordatoriosComponent,
    ConfiguracionSistemaComponent,
    InformacionPacienteComponent,
    HistorialPacienteComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }