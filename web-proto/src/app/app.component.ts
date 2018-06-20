import { Component } from '@angular/core';
import { PROFILES } from './data/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profiles = PROFILES;
}
