import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AntAgendaModule } from '../../projects/ant-agenda/src/lib/ant-agenda.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AntAgendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
