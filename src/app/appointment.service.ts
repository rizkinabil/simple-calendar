import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from './appointment.model';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  appointments$ = this.appointmentsSubject.asObservable();

  addAppointment(appointment: Appointment) {
    const appointments = this.appointmentsSubject.value;
    appointments.push(appointment);
    this.appointmentsSubject.next(appointments);
  }

  deleteAppointment(appointment: Appointment) {
    const appointments = this.appointmentsSubject.value;
    const index = appointments.findIndex((a) => a.id === appointment.id);
    if (index !== -1) {
      appointments.splice(index, 1);
      this.appointmentsSubject.next(appointments);
    }
  }

  moveAppointment(previousIndex: number, currentIndex: number) {
    const appointments = this.appointmentsSubject.value;
    moveItemInArray(appointments, previousIndex, currentIndex);
    this.appointmentsSubject.next(appointments);
  }
}
