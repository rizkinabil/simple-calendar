import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentService } from './appointment.service';

@NgModule({
  declarations: [AppComponent, CalendarComponent, AppointmentFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DragDropModule,
    AppRoutingModule,
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
