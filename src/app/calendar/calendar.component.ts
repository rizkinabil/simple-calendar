import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  appointments$ = this.appointmentService.appointments$;

  constructor(private appointmentService: AppointmentService) {}

  drop(event: CdkDragDrop<string[]>) {
    this.appointmentService.moveAppointment(
      event.previousIndex,
      event.currentIndex
    );
  }

  deleteAppointment(appointment: any) {
    this.appointmentService.deleteAppointment(appointment);
  }
}
