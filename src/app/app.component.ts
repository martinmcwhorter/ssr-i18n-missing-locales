import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    Date Example:
    <div>
      {{ '2018-03-17' | date }}
    </div>

    <br>
    Number Example:
    <div>
      {{ 123456789 | number }}
    </div>

    <br>
    Currency Example:
    <div>
      {{ 987654.33 | currency : 'EUR' }}
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
