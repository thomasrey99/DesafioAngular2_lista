import { Component } from '@angular/core';

@Component({
  selector: 'main-content',
  template: `
    <main class="main">
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

}
