import { Component } from '@angular/core';

@Component({
  selector: 'quiz-root',
  template: ` POC for Tech Quiz Web App
              <quiz-sign-in></quiz-sign-in>
              <quiz-sign-up></quiz-sign-up>
              <quiz-signin></quiz-signin>
              <router-outlet></router-outlet>
            `
})
export class AppComponent {
}
