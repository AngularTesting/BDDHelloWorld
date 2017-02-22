import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls:  ['welcome.component.css']
})
export class WelcomeComponent {
  title = 'Hello World';
}