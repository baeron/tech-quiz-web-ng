import { Component } from '@angular/core';

@Component({
  selector: 'quiz-root',
  template: ` POC for Tech Quiz Web App
              <quiz-signin></quiz-signin>
              <router-outlet></router-outlet>
            `
})
export class AppComponent {
}
