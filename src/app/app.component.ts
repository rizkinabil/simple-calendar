// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Angular Calendar App</h1>
      <nav>
        <a routerLink="/calendar" routerLinkActive="active">Calendar</a>
        <a routerLink="/add-appointment" routerLinkActive="active"
          >Add Appointment</a
        >
      </nav>
    </header>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      header {
        background-color: #4caf50;
        padding: 1em;
        text-align: center;
      }

      nav {
        display: flex;
        justify-content: space-around;
        margin-top: 1em;
      }

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        padding: 0.5em 1em;
        border-radius: 5px;
      }

      a.active {
        background-color: #333;
      }
    `,
  ],
})
export class AppComponent {}
