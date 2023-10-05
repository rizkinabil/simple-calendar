import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
})
export class AppointmentFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      date: [new Date(), Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.appointmentService.addAppointment({
        id: Date.now(),
        title: this.form.value.title,
        date: this.form.value.date,
      });
      this.form.reset();
    }
  }
}
